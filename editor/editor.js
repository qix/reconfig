/** @jsx React.DOM */

// http://react-bootstrap.github.io/components.html

var Bootstrap = require('react-bootstrap');
var PanelGroup = Bootstrap.PanelGroup,
    Panel = Bootstrap.Panel,
    Well = Bootstrap.Well,
    Button = Bootstrap.Button;

var Website = require('./website')

var Editor = React.createClass({
  getInitialState: function() {
    var state = this.props.config;
    state.websites = state.websites.map(function(website) {
      website.key = Math.random();
      return website;
    });
    return state;
  },

  addWebsite: function() {
    this.setState({
      'websites': this.state.websites.concat([{
        'key': Math.random(),
        'domain': 'example.com',
      }])
    });
  },

  removeWebsite: function(key) {
    this.setState({
      'websites': this.state.websites.filter(function(v, k) {
        return (k != key);
      })
    });
  },

  render: function() {
    var websites = this.state.websites.map(function(website, key) {
        return <Website
          key={ website.key }
          config={ website }
          remove={ this.removeWebsite.bind(this, key) }
         />
    }.bind(this));

    return (
      <div>
        { React.DOM.button({"onClick":function(){}}, "This shoudn't be required.") }
        { websites }
        <Button bsStyle="success" onClick={ this.addWebsite } >Add website</Button>
      </div>
    );
  }
});

module.exports = Editor;
