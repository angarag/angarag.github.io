(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){},35:function(e,a,t){e.exports=t.p+"static/media/mars.fcc7e8e4.png"},41:function(e,a,t){e.exports=t.p+"static/media/about.28c05e53.jpg"},45:function(e,a,t){e.exports=t.p+"static/media/car.ca577a7a.jpg"},46:function(e,a,t){e.exports=t.p+"static/media/tech.4e4d9fda.jpg"},47:function(e,a,t){e.exports=t.p+"static/media/hr.5306f256.jpg"},55:function(e,a,t){e.exports=t(72)},65:function(e,a,t){},66:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),c=t.n(r),s=t(53),i=t(27);var m=function(e,a){if(void 0===e)return{count:0};var t=e.count;switch(a.type){case"inc":return{count:t+1};case"dec":return{count:t-1};default:return e}},o=t(51),u=t(20),d=t(10),E=t(6),p=t(13),v=t(11),h=t(2),f=t(12),g=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(v.a)(a).call(this,e))).state={time:(new Date).toLocaleString()},console.log(t.state.time),t.tick=t.tick.bind(Object(h.a)(t)),setInterval(function(){t.tick()},1e3),t}return Object(f.a)(a,e),Object(E.a)(a,[{key:"tick",value:function(){this.setState({time:(new Date).toLocaleString()})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"Time is ",this.state.time))}}]),a}(n.Component),N=(t(33),function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(v.a)(a).call(this,e))).state={clicked:!1},t.click=t.click.bind(Object(h.a)(t)),t}return Object(f.a)(a,e),Object(E.a)(a,[{key:"click",value:function(){this.setState({clicked:!0}),this.props.onClick(this.props.index)}},{key:"shouldComponentUpdate",value:function(e,a){return this.props.is_reset!==e.is_reset?(this.setState({clicked:!1}),!0):this.state.clicked!==a.clicked||this.props.has_winner!==e.has_winner}},{key:"render",value:function(){return console.log("Rendering: Cell",this.props.index),l.a.createElement("button",{onClick:this.click,className:!0===this.state.clicked||!0===this.props.has_winner?"clicked":""},this.props.children)}}]),a}(n.Component)),b=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(v.a)(a).call(this,e))).state={currentPlayer:"X",cells:t.props.cells?t.props.cells:new Array(9),winner_combinations:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],is_reset:!1},t.buttonClick=t.buttonClick.bind(Object(h.a)(t)),t.hasWinner=t.hasWinner.bind(Object(h.a)(t)),t.reset=t.reset.bind(Object(h.a)(t)),t}return Object(f.a)(a,e),Object(E.a)(a,[{key:"reset",value:function(){this.setState({currentPlayer:"X",cells:new Array(9),is_reset:!this.state.is_reset})}},{key:"buttonClick",value:function(e){var a=this.state.cells;a[e]=this.state.currentPlayer,console.log(a),this.hasWinner()?this.setState({currentPlayer:this.state.currentPlayer+" wins"}):a.includes(void 0)?this.setState({currentPlayer:"X"===this.state.currentPlayer?"O":"X",cells:a}):this.setState({currentPlayer:"Noone wins"})}},{key:"hasWinner",value:function(){var e=this.state.cells.filter(function(e){return"X"===e}),a=this.state.cells.filter(function(e){return"O"===e}),t={X:[],O:[]};if(e.length>2||a.length>2){for(var n in this.state.cells)void 0!==this.state.cells[n]&&t[this.state.cells[n]].push(parseInt(n));console.log("Winner detection is running",e,a,t);var l=!0,r=!1,c=void 0;try{for(var s,i=this.state.winner_combinations[Symbol.iterator]();!(l=(s=i.next()).done);l=!0){var m=s.value,o=0,u=!0,d=!1,E=void 0;try{for(var p,v=t.X[Symbol.iterator]();!(u=(p=v.next()).done);u=!0){var h=p.value;m.includes(h)&&o++}}catch(x){d=!0,E=x}finally{try{u||null==v.return||v.return()}finally{if(d)throw E}}if(3===o)return console.log("X wins"),!0;o=0;var f=!0,g=!1,N=void 0;try{for(var b,y=t.O[Symbol.iterator]();!(f=(b=y.next()).done);f=!0){var w=b.value;m.includes(w)&&o++}}catch(x){g=!0,N=x}finally{try{f||null==y.return||y.return()}finally{if(g)throw N}}if(3===o)return console.log("O wins"),!0}}catch(x){r=!0,c=x}finally{try{l||null==i.return||i.return()}finally{if(r)throw c}}console.log(t)}return!1}},{key:"render",value:function(){console.log("Rendering: Tictactoe");for(var e=[],a=0;a<9;a++)e.push(l.a.createElement("div",{className:"grid-item"},l.a.createElement(N,{onClick:this.buttonClick,index:a,key:a,has_winner:-1!==this.state.currentPlayer.indexOf("wins"),is_reset:this.state.is_reset},this.state.cells[a])));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("div",null,"Player: ",this.state.currentPlayer),l.a.createElement("button",{onClick:this.reset},"Reset")),l.a.createElement("div",{className:"grid"},e),this.props.aCell)}}]),a}(n.Component),y=function(e){function a(){return Object(d.a)(this,a),Object(p.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=new Array(9);e[Math.floor(8*Math.random())]="X",console.log("Main: render");var a=l.a.createElement(N,null,"haha");return l.a.createElement("div",null,l.a.createElement(b,{cells:e,aCell:a}))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(v.a)(a).call(this,e))).createTasks=t.createTasks.bind(Object(h.a)(t)),t.delete=t.delete.bind(Object(h.a)(t)),t}return Object(f.a)(a,e),Object(E.a)(a,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var a=this;return l.a.createElement("li",{className:"todo_item_li",onClick:function(){return a.delete(e.key)},key:e.key}," ",e.text," ")}},{key:"render",value:function(){var e=this.props.entries;return e=e.map(this.createTasks),l.a.createElement("ul",null,e)}}]),a}(n.Component),x=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(v.a)(a).call(this,e))).state={items:[]},t.addItem=t.addItem.bind(Object(h.a)(t)),t.deleteItem=t.deleteItem.bind(Object(h.a)(t)),t}return Object(f.a)(a,e),Object(E.a)(a,[{key:"addItem",value:function(e){if(console.log(this.mars),""!==this.mars.value){var a=this.state.items;a.unshift({text:this.mars.value,key:Date.now()}),this.setState({items:a}),console.log(a)}e.preventDefault()}},{key:"deleteItem",value:function(e){var a=this.state.items.filter(function(a){return a.key!==e});this.setState({items:a})}},{key:"componentDidMount",value:function(e){console.log("TodoList: component did mount"),console.log(e)}},{key:"componentDidUpdate",value:function(){console.log("TodoList: component did update")}},{key:"render",value:function(){var e=this;console.log("TodoList: render");var a=[];return a.push(l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.addItem},l.a.createElement("input",{type:"text",ref:function(a){e._inputElement=a,e.mars=a},placeholder:"enter task"}),l.a.createElement("button",{type:"submit"},"add"))),l.a.createElement(w,{entries:this.state.items,delete:this.deleteItem}))),l.a.createElement("div",null,a)}}]),a}(n.Component),j=t(35),k=t.n(j),O=t(37),S=t.n(O),C=t(38),I=t.n(C),_=t(86),P=t(28),T=t.n(P),M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item contact"},l.a.createElement(_.a,{href:"https://leetcode.com/angarag/",className:"nav-link",target:"_blank",rel:"noopener",style:{margin:0}},l.a.createElement("span",null,l.a.createElement(T.a,{fontSize:"small"})))),l.a.createElement("li",{className:"nav-item contact"},l.a.createElement(_.a,{href:"https://github.com/angarag",className:"nav-link",target:"_blank",rel:"noopener",style:{margin:0}},l.a.createElement("span",null,l.a.createElement(S.a,{fontSize:"small"})))),l.a.createElement("li",{className:"nav-item contact"},l.a.createElement(_.a,{className:"nav-link",href:"https://www.linkedin.com/in/angarag-batjargal/",target:"_blank",rel:"noopener",style:{margin:0}},l.a.createElement("span",null,l.a.createElement(I.a,{fontSize:"small"})))))},B=t(39),A=t.n(B),D=function(e){e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target",id:"ftco-navbar"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:k.a,alt:"marsLogo",style:{height:64}})),l.a.createElement("div",{className:"mobile"},l.a.createElement(M,null)),l.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},l.a.createElement("ul",{className:"navbar-nav nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#home",className:"nav-link"},l.a.createElement("span",null,l.a.createElement(A.a,null)))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#about",className:"nav-link"},l.a.createElement("span",null,"About"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#education",className:"nav-link"},l.a.createElement("span",null,"Experience"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#projects",className:"nav-link"},l.a.createElement("span",null,"Projects"))),l.a.createElement(M,null))))))},F=(t(65),t(66),t(40)),L=t.n(F),R=function(e){var a=e.path,t=void 0===a?"about":a;return l.a.createElement("div",{className:"mouse"},l.a.createElement("a",{href:"#"+t,className:"mouse-icon"},l.a.createElement("div",{className:"mouse-wheel customSvg"},l.a.createElement(L.a,{fontSize:"large"}))))},z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"home",className:"hero-wrap js-fullheight"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"container",id:"homeContainer"},l.a.createElement("div",{className:"row no-gutters slider-text js-fullheight justify-content-center align-items-center",style:{height:503}},l.a.createElement("div",{className:"col-lg-8 col-md-6 ftco-animate d-flex align-items-center fadeInUp ftco-animated"},l.a.createElement("div",{className:"text text-center"},l.a.createElement("span",{className:"subheading"},"Hey! I am"),l.a.createElement("h1",null,"Angarag Batjargal"),l.a.createElement("h2",null,"I'm a ",l.a.createElement("span",{className:"txt-rotate","data-period":"2000","data-rotate":'[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'},l.a.createElement("span",{className:"wrap"},"Software Engineer."))))))),l.a.createElement(R,null)))},X=t(41),W=t.n(X),U=t(43),J=t.n(U),H=t(42),V=t.n(H),Q=t(44),Y=t.n(Q),q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"about",className:"ftco-about img ftco-section ftco-no-pt ftco-no-pb"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row d-flex no-gutters"},l.a.createElement("div",{className:"col-md-6 col-lg-6 d-flex"},l.a.createElement("div",{className:"img-about img d-flex align-items-stretch"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"img d-flex align-self-stretch align-items-center",style:{backgroundImage:W.a}}))),l.a.createElement("div",{className:"col-md-6 col-lg-6 pl-md-5 py-5 aboutMars"},l.a.createElement("div",{className:"row justify-content-start pb-3"},l.a.createElement("div",{className:"col-md-12 heading-section ftco-animate fadeInUp ftco-animated"},l.a.createElement("h1",{className:"big"},"About"),l.a.createElement("h2",{className:"mb-4"},"About Me"),l.a.createElement("p",null,"Versatile Software Engineer with 9+ years of experience in IT."),l.a.createElement("p",null,"Specialized in Web Development technologies such as JavaScript, React.js/Redux, Angular, Node.js and Express.js."),l.a.createElement("ul",{className:"about-info mt-4 px-md-0 px-2 iconColor"},l.a.createElement("li",null,l.a.createElement(V.a,null),l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:angarag.batjargal@gmail.com"},"angarag.batjargal@gmail.com"))),l.a.createElement("li",null,l.a.createElement(J.a,null),l.a.createElement("span",null,l.a.createElement("a",{href:"tel:707-508-9432"},"+1-707-508-9432")))))),l.a.createElement("div",{className:"counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated"},l.a.createElement("div",{className:"text"},l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",href:"https://www.dropbox.com/s/3jzzbz4nx4neong/angarag-resume-20200420.pdf?dl=0",className:"btn btn-primary py-3 px-3",style:{fontSize:24}},l.a.createElement(Y.a,null)," resume"))))))),l.a.createElement(R,{path:"education"})))},G=t(45),K=t.n(G),Z=t(46),$=t.n(Z),ee=t(47),ae=t.n(ee),te=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"projects",className:"ftco-section ftco-project"},l.a.createElement("div",{className:"container-fluid px-md-0"},l.a.createElement("div",{className:"row no-gutters justify-content-center pb-5"},l.a.createElement("div",{className:"col-md-12 heading-section text-center ftco-animate"},l.a.createElement("h1",{className:"big big-2"},"Projects"),l.a.createElement("h2",{className:"mb-4"},"Professional Projects"),l.a.createElement("h6",null,"Here are some of the projects I have implemented in my professional career."))),l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"project img ftco-animate d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(K.a,")")}},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"text text-center p-4"},l.a.createElement("h3",null,l.a.createElement("a",{target:"_blank",href:"https://cardoctor.mn"},"Car Doctor")),l.a.createElement("span",null,"Online shopping")))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"project img ftco-animate d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat($.a,")")}},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"text text-center p-4"},l.a.createElement("h3",null,l.a.createElement("a",{target:"_blank",href:"https://www.bsb.mn"},"eBSB")),l.a.createElement("span",null,"Online shopping for BSB company")))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"project img ftco-animate d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(ae.a,")")}},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"text text-center p-4"},l.a.createElement("h3",null,l.a.createElement("a",{href:"#"},"Talent Blueprint")),l.a.createElement("span",null,"Calibration tool for store hiring managers"))))))))},ne=t(48),le=t.n(ne),re=t(49),ce=t.n(re),se=t(50),ie=t.n(se),me=function(){return l.a.createElement("section",{className:"ftco-section ftco-no-pb goto-here marginTop",id:"education"},l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("nav",{id:"navi"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#page-1"},l.a.createElement(le.a,null)," Education")),l.a.createElement("li",null,l.a.createElement("a",{href:"#page-2"},l.a.createElement(ce.a,null)," Experience")),l.a.createElement("li",null,l.a.createElement("a",{href:"#page-3"},l.a.createElement(T.a,null)," Skills")),l.a.createElement("li",null,l.a.createElement("a",{href:"#page-4"},l.a.createElement(ie.a,null)," Awards"))))),l.a.createElement("div",{className:"col-md-9 "},l.a.createElement("div",{id:"page-1",class:"page one"},l.a.createElement("h2",{className:"heading"},"Education"),l.a.createElement("div",{className:"resume-wrap d-flex ftco-animate"},l.a.createElement("div",{className:"icon d-flex align-items-center justify-content-center"},l.a.createElement("span",{className:"flaticon-ideas"})),l.a.createElement("div",{className:"text pl-3"},l.a.createElement("span",{className:"date"},"2018-2020"),l.a.createElement("h2",null,"Master degree in Computer Software"),l.a.createElement("span",{className:"position"},"Maharishi International University")))),l.a.createElement("div",{className:"resume-wrap d-flex ftco-animate"},l.a.createElement("div",{className:"icon d-flex align-items-center justify-content-center"},l.a.createElement("span",{className:"flaticon-ideas"})),l.a.createElement("div",{className:"text pl-3"},l.a.createElement("span",{className:"date"},"2006-2011"),l.a.createElement("h2",null,"Bachelor degree in Computer Science"),l.a.createElement("span",{className:"position"},"Istanbul Technical University"))),l.a.createElement("div",{id:"page-2",class:"page two"},l.a.createElement("h2",{className:"heading"},"Experience"),l.a.createElement("div",{className:"resume-wrap d-flex ftco-animate"},l.a.createElement("div",{className:"icon d-flex align-items-center justify-content-center"},l.a.createElement("span",{className:"flaticon-ideas"})),l.a.createElement("div",{className:"text pl-3"},l.a.createElement("span",{className:"date"},"Jul, 2019 - Present"),l.a.createElement("h2",null,"Software Engineer"),l.a.createElement("span",{className:"position"},"Walmart"),l.a.createElement("p",null,"Front End Lead in the Talent Blueprint project which is a calibration tool for store hiring manager to make a data-driven decision on selection events by using Comparison, Reviewing and Ranking features."))),l.a.createElement("div",{className:"resume-wrap d-flex ftco-animate"},l.a.createElement("div",{className:"icon d-flex align-items-center justify-content-center"},l.a.createElement("span",{className:"flaticon-ideas"})),l.a.createElement("div",{className:"text pl-3"},l.a.createElement("span",{className:"date"},"2013-2018"),l.a.createElement("h2",null,"Technical Planning Engineer"),l.a.createElement("span",{className:"position"},"Mobicom Corporation"),l.a.createElement("p",null,"In charge of planning in-house and vendor products acc' to short and medium-term business plans."))),l.a.createElement("div",{className:"resume-wrap d-flex ftco-animate"},l.a.createElement("div",{className:"icon d-flex align-items-center justify-content-center"},l.a.createElement("span",{className:"flaticon-ideas"})),l.a.createElement("div",{className:"text pl-3"},l.a.createElement("span",{className:"date"},"2011-2013"),l.a.createElement("h2",null,"Full Stack Developer"),l.a.createElement("span",{className:"position"},"Singleton LLC"),l.a.createElement("p",null,"Team Lead in the outsourcing project.")))),l.a.createElement("div",{id:"page-3",class:"page three"},l.a.createElement("h2",{className:"heading"},"Skills"),l.a.createElement("div",{className:"row borderBottom"},l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"Vanilla JavaScript"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-1",role:"progressbar","aria-valuenow":"97","aria-valuemin":"0","aria-valuemax":"100",style:{width:"97%"}},l.a.createElement("span",null,"97%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"React.js, Redux"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-2",role:"progressbar","aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100",style:{width:"95%"}},l.a.createElement("span",null,"95%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"CSS3"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-4",role:"progressbar","aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100",style:{width:"95%"}},l.a.createElement("span",null,"95%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"HTML5"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-5",role:"progressbar","aria-valuenow":"95","aria-valuemin":"0","aria-valuemax":"100",style:{width:"95%"}},l.a.createElement("span",null,"95%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"Angular v2+"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-3",role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:{width:"90%"}},l.a.createElement("span",null,"90%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"Node.js"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-3",role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:{width:"90%"}},l.a.createElement("span",null,"90%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"Express.js"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-3",role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:{width:"90%"}},l.a.createElement("span",null,"90%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"HAPI.js"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-3",role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:{width:"90%"}},l.a.createElement("span",null,"90%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"jQuery"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-3",role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:{width:"90%"}},l.a.createElement("span",null,"90%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"Java/Spring boot"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-6",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}},l.a.createElement("span",null,"80%"))))),l.a.createElement("div",{className:"col-md-6 animate-box"},l.a.createElement("div",{className:"progress-wrap ftco-animate"},l.a.createElement("h3",null,"PHP/Symphony"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-6",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}},l.a.createElement("span",null,"80%"))))))),l.a.createElement("div",{id:"page-4",class:"page four"},l.a.createElement("h2",{className:"heading",style:{marginTop:12}},"Awards"),l.a.createElement("div",{className:"resume-wrap d-flex ftco-animate"},l.a.createElement("div",{className:"icon d-flex align-items-center justify-content-center"},l.a.createElement("span",{className:"flaticon-ideas"})),l.a.createElement("div",{className:"text pl-3"},l.a.createElement("span",{className:"date"},"2013-2014"),l.a.createElement("h2",null,"The Best Project of the Year"),l.a.createElement("span",{className:"position"},"Mobicom Corporation"),l.a.createElement("p",null,"The inhouse developed Ring Back Tone project got awarded the best project."))),l.a.createElement("div",{className:"resume-wrap d-flex ftco-animate"},l.a.createElement("div",{className:"icon d-flex align-items-center justify-content-center"},l.a.createElement("span",{className:"flaticon-ideas"})),l.a.createElement("div",{className:"text pl-3"},l.a.createElement("span",{className:"date"},"2002, 2003"),l.a.createElement("h2",null,"Bronze, Silver Medal"),l.a.createElement("span",{className:"position"},"Mathematical Olympiad"),l.a.createElement("p",null,"Ranked #3 and #2 in South Mongolia region - Math olympiad."))))))))},oe=function(){return l.a.useEffect(function(){},[]),console.log("Main: render"),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{path:"/clock",component:g}),l.a.createElement(u.a,{path:"/tictactoe",component:y}),l.a.createElement(u.a,{path:"/todolist",component:x})),l.a.createElement(D,null),l.a.createElement(z,null),l.a.createElement(q,null),l.a.createElement(me,null),l.a.createElement(te,null))},ue=Object(i.b)(m);c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{store:ue},l.a.createElement(oe,null))),document.getElementById("container"))}},[[55,1,2]]]);
//# sourceMappingURL=main.16f3ce9f.chunk.js.map