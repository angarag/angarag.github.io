(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(4),a=n.n(s),c=n(18),l=n(5);var o=function(e,t){if(void 0===e)return{count:0};var n=e.count;switch(t.type){case"inc":return{count:n+1};case"dec":return{count:n-1};default:return e}},u=n(6),h=n(7),d=n(9),f=n(8),b=n(1),k=n(10),p=(n(16),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={clicked:!1},n.click=n.click.bind(Object(b.a)(n)),n}return Object(k.a)(t,e),Object(h.a)(t,[{key:"click",value:function(){this.setState({clicked:!0}),this.props.onClick(this.props.index)}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.is_reset!==e.is_reset?(this.setState({clicked:!1}),!0):this.state.clicked!==t.clicked||this.props.has_winner!==e.has_winner}},{key:"render",value:function(){return console.log("Rendering: Cell",this.props.index),i.a.createElement("button",{onClick:this.click,className:!0===this.state.clicked||!0===this.props.has_winner?"clicked":""},this.props.entry)}}]),t}(r.Component)),v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={currentPlayer:"X",cells:new Array(9),winner_combinations:["012","345","678","036","147","258","048","246"],is_reset:!1},n.buttonClick=n.buttonClick.bind(Object(b.a)(n)),n.hasWinner=n.hasWinner.bind(Object(b.a)(n)),n.reset=n.reset.bind(Object(b.a)(n)),n}return Object(k.a)(t,e),Object(h.a)(t,[{key:"reset",value:function(){this.setState({currentPlayer:"X",cells:new Array(9),is_reset:!this.state.is_reset})}},{key:"buttonClick",value:function(e){var t=this.state.cells;t[e]=this.state.currentPlayer,console.log(t),this.hasWinner()?this.setState({currentPlayer:this.state.currentPlayer+" won, click to reset"}):t.includes(void 0)?this.setState({currentPlayer:"X"===this.state.currentPlayer?"O":"X",cells:t}):this.setState({currentPlayer:"Noone won, click to reset"})}},{key:"hasWinner",value:function(){var e=this.state.cells.filter(function(e){return"X"===e}),t=this.state.cells.filter(function(e){return"O"===e}),n=!1;if(e.length>2||t.length>2){var r=function(e,t){var n=0,r=!0,i=!1,s=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var l=a.value;-1!=e.indexOf(l)&&n++}}catch(o){i=!0,s=o}finally{try{r||null==c.return||c.return()}finally{if(i)throw s}}return n===t.length};console.log("winner detection running");for(var i={X:[],O:[],undefined:[]},s=0;s<this.state.cells.length;s++){i[this.state.cells[s]].push(s)}var a=i.X.toString().split(",").join(""),c=i.O.toString().split(",").join("");console.log(a,c);for(var l=null,o=0;o<this.state.winner_combinations.length;o++){var u=this.state.winner_combinations[o];if(r(a,u)){l="X";break}if(r(c,u)){l="Y";break}}console.log("winner",l),null!=l&&(n=!0)}return n}},{key:"render",value:function(){console.log("Rendering: Tictactoe");for(var e=[],t=0;t<9;t++)e.push(i.a.createElement("div",{className:"cell"},i.a.createElement(p,{onClick:this.buttonClick,entry:this.state.cells[t],index:t,key:t,has_winner:-1!==this.state.currentPlayer.indexOf("won"),is_reset:this.state.is_reset}))),(t+1)%3===0&&e.push(i.a.createElement("div",{className:"clearfix"}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header"},i.a.createElement("span",{onClick:this.reset},"Player: ",this.state.currentPlayer)),i.a.createElement("div",{className:"row"},e))}}]),t}(r.Component),y=Object(l.b)(o);a.a.render(i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{store:y},i.a.createElement(v,null))),document.getElementById("container"))}},[[19,1,2]]]);
//# sourceMappingURL=main.52f53de6.chunk.js.map