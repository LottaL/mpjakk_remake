(this.webpackJsonpmpjakk=this.webpackJsonpmpjakk||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),l=(n(14),n(1)),i=n(2),s=n(5),u=n(3),m=n(4),p=(n(15),n(16),n(6)),h=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"Modal"},o.a.createElement("button",{onClick:this.props.toggleModal},"x"),o.a.createElement("img",{src:this.props.content.filename,alt:this.props.content.title}))}}]),e}(a.Component),d=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={modalOpen:!1},n.toggleModalComponent=n.toggleModalComponent.bind(Object(p.a)(n)),n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"toggleModalComponent",value:function(){this.setState({modalOpen:!this.state.modalOpen})}},{key:"render",value:function(){return o.a.createElement("div",{className:"CatRow"},o.a.createElement("td",null,o.a.createElement("img",{src:this.props.content.thumbnails.w160,alt:this.props.content.title})),o.a.createElement("td",null,o.a.createElement("h3",null,this.props.content.title),o.a.createElement("p",null,this.props.content.description)),o.a.createElement("td",null,o.a.createElement("a",{onClick:this.toggleModalComponent},"View"),this.state.modalOpen&&o.a.createElement(h,{content:this.props.content,toggleModal:this.toggleModalComponent})))}}]),e}(a.Component),b=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"CatTable"},o.a.createElement(d,{content:this.props.content}))}}]),e}(a.Component),f=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={data:[]},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("test.json").then((function(t){return t.json()})).then((function(e){t.setState({data:e}),console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},this.state.data.map((function(t){return o.a.createElement(b,{content:t})}))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a861bc03.chunk.js.map