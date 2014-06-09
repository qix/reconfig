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
