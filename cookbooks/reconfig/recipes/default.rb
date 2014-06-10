include_recipe "users"

package "curl"
package "vim"

ssh_known_hosts_entry "github.com"

directory "/var/www" do
  action :create
end

for website in node[:websites]
  config = {
    :domain => website[:domain],
  }

  if website[:source] == 'git'
    config[:root] = "/var/www/#{config[:domain]}"
    git config[:root] do
      repository website[:git][:repo]
      action :sync
    end
  else
    config[:root] = website[:root]
  end

  template "#{node['nginx']['dir']}/sites-available/#{website[:domain]}" do
    action :create
    source "nginx-site.erb"
    variables config
  end

  nginx_site config[:domain] do
    action :enable
  end
end

for service in node[:services]
  if service[:type] == 'transmission'
    package "transmission-daemon"
    service "transmission-daemon" do
      action :stop
    end
    config = {
      :port => 9091,
    }

    config_dir = "/etc/transmission/#{service[:name]}"
    directory config_dir do
      recursive true
    end

    template "#{config_dir}/settings.json" do
      source "transmission.json.erb"
      variables config
    end

    runit_service service[:name] do
      run_template_name "transmission"
      log_template_name "transmission"
      options ({
        :name => service[:name],
      })
    end
  end
end

