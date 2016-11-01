const React = require('react');
const ReactDOM = require('react-dom');
const Ui = require('./components/ui.jsx');
const GameRules = require('./test.js');

window.onload = function(){
  const game = new GameRules();
  var container = document.querySelector("#canvas-test");
  ReactDOM.render(<Ui game={game}/>, container);
}