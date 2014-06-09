/** @jsx React.DOM */

var Editor = require('./editor');

json = {
  "websites": [
    {
      "domain": "j.yud.co.za",
      "source": "git",
      "git": {
        "repo": "git@github.com:qix/j.yud.co.za.git"
      },
      "static": "html/"
    },
    {
      "domain": "local.reconfig.org",
      "source": "folder",
      "root": "/vagrant/html"
    },
    {
      "domain": "torrent.submarin.es",
      "auth": {
        "user": "transmission",
        "password": "catalog"
      },
      "source": "folder",
      "root": "/"
    }
  ],
  "services": [
    {
      "type": "transmission",
      "transmission": {
        "port": 9091,
        "downloads": "/home/josh/torrent-downloads"
      }
    }
  ],
  "users": [
    {
      "username": "yud"
    }
  ]
}
React.renderComponent(
  <Editor config={json} />,
  document.getElementById('editor')
);
