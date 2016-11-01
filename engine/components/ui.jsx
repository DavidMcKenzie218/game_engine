const React = require('react');


const Ui = React.createClass({

  componentDidMount: function(){
    this.props.game.run();
  },


  render: function(){
    return (
      <div id="canvas-container">
      </div>
      )
  }

})

module.exports = Ui;