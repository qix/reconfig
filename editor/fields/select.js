/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label for="repo-path">{ this.props.caption }</label>
        <select id="repo-path" className="form-control">
          { this.props.children }
        </select>
      </div>
    );
  }
});
