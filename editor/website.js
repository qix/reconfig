/** @jsx React.DOM */

var React = require('react');
var Bootstrap = require('react-bootstrap');
var PanelGroup = Bootstrap.PanelGroup,
    Panel = Bootstrap.Panel,
    Well = Bootstrap.Well,
    Glyphicon = Bootstrap.Glyphicon,
    Button = Bootstrap.Button;

var Website = React.createClass({
  getInitialState: function() {
    return this.props.config;
  },

  render: function() {
    var title = <h3>
      {this.state['domain']}
      <Glyphicon glyph="remove" style={{"float": "right"}}
        onClick={ this.props.remove }
       />
    </h3>;
    return <div>
      <Panel header={title}>
        { /* <input type="text" name="website" /> */ }
      </Panel>
    </div>;
  }
});

module.exports = Website;
