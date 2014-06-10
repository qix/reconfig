/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label for="repo-path">{ this.props.caption }</label>
        <input id="repo-path" className="form-control" type="text" />
      </div>
    );
  }
});
