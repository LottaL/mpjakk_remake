(this.webpackJsonpmpjakk=this.webpackJsonpmpjakk||[]).push([[0],{18:function(t,e,n){t.exports=n(44)},23:function(t,e,n){},24:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},25:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(17),r=n.n(c),i=(n(23),n(2)),l=n(3),s=n(6),u=n(4),m=n(5),p=(n(24),n(25),n(7)),h=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"Modal"},o.a.createElement("button",{onClick:this.props.toggleModal},"x"),o.a.createElement("img",{src:this.props.content.filename,alt:this.props.content.title}))}}]),e}(a.Component),d=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={modalOpen:!1},n.toggleModalComponent=n.toggleModalComponent.bind(Object(p.a)(n)),n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"toggleModalComponent",value:function(){this.setState({modalOpen:!this.state.modalOpen})}},{key:"render",value:function(){return o.a.createElement("div",{className:"CatRow"},o.a.createElement("td",null,o.a.createElement("img",{src:this.props.content.thumbnails.w160,alt:this.props.content.title})),o.a.createElement("td",null,o.a.createElement("h3",null,this.props.content.title),o.a.createElement("p",null,this.props.content.description)),o.a.createElement("td",null,o.a.createElement("a",{onClick:this.toggleModalComponent},"View"),this.state.modalOpen&&o.a.createElement(h,{content:this.props.content,toggleModal:this.toggleModalComponent})))}}]),e}(a.Component),f=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"CatTable"},o.a.createElement(d,{content:this.props.content}))}}]),e}(a.Component),b=(n(26),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={data:[],url:"http://media.mw.metropolia.fi/wbma/media"},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch(this.state.url).then((function(t){return t.json()})).then((function(e){console.log(e),Promise.all(e.map((function(e){return fetch(t.state.url+"/"+e.file_id).then((function(t){return t.json()}))}))).then((function(e){console.log(e),t.setState({data:e})}))})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},this.state.data.map((function(t){return o.a.createElement(f,{key:t.file_id,content:t})}))))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.729ced33.chunk.js.map