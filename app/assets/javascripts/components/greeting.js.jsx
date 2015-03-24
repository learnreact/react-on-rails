var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <h1>Hi {this.props.name}!</h1>;
  }
});
