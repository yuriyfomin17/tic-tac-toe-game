(this["webpackJsonptic-tac-toe-game"]=this["webpackJsonptic-tac-toe-game"]||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(1),s=a(2),c=a(4),u=a(3),i=a(0),l=a.n(i),o=a(6),m=a.n(o);a(14);function d(e){return l.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)}var h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},r}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();f(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(d,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=f(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),l.a.createElement("div",null,l.a.createElement("div",{className:"status"},e),l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(l.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(h,null)),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null),l.a.createElement("ol",null)))}}]),a}(l.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],c=n[1],u=n[2];if(e[s]&&e[s]===e[c]&&e[s]===e[u])return e[s]}return null}m.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.1cf9ca73.chunk.js.map