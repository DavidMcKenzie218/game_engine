const React = require('react');


const Ui = React.createClass({

  componentDidMount: function(){
    this.props.game.run();
  },


  render: function(){
    return (
      <div>
        <canvas id="player-canvas" height={700} width={700} />
        <canvas id="enemy-canvas" height={700} width={700} />
      </div>
      )
  }

})

module.exports = Ui;