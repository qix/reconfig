/** @jsx React.DOM */

var React = require('react');
var Bootstrap = require('react-bootstrap'),
    PanelGroup = Bootstrap.PanelGroup,
    Panel = Bootstrap.Panel,
    Well = Bootstrap.Well,
    Glyphicon = Bootstrap.Glyphicon,
    Button = Bootstrap.Button,
    Input = require('./fields/input'),
    Select = require('./fields/select');

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
          <Input caption="Domain" />
          <Select caption="Source">
            <option value="git">Git repository</option>
          </Select>
          <fieldset>
            <legend>Git options</legend>
            <Input caption="Repository Path" />
          </fieldset>
      </Panel>
    </div>;
  }
});

module.exports = Website;
