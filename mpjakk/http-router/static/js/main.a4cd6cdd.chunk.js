(this.webpackJsonpmpjakk=this.webpackJsonpmpjakk||[]).push([[0],{32:function(e,t,n){e.exports=n(62)},37:function(e,t,n){},38:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(29),o=n.n(l),i=(n(37),n(5)),c=n(6),u=n(8),m=n(7),s=n(9),h=n(12),f=n(11),p=(n(38),n(15)),d=(a.Component,function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={modalOpen:!1},n.toggleModalComponent=n.toggleModalComponent.bind(Object(p.a)(n)),n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"toggleModalComponent",value:function(){this.setState({modalOpen:!this.state.modalOpen})}},{key:"render",value:function(){return r.a.createElement("div",{className:"CatRow"},r.a.createElement("td",null,r.a.createElement("img",{src:this.props.content.thumbnails?"http://media.mw.metropolia.fi/wbma/uploads/"+this.props.content.thumbnails.w160:"",alt:this.props.content.title})),r.a.createElement("td",null,r.a.createElement("h3",null,this.props.content.title),r.a.createElement("p",null,this.props.content.description)),r.a.createElement("td",null,r.a.createElement(h.b,{to:{pathname:"/single",file_id:this.props.content.file_id}},"View")))}}]),t}(a.Component)),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CatTable"},r.a.createElement(d,{content:this.props.content}))}}]),t}(a.Component),E=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/profile"},"Profile"))))},j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Home"),e.data.map((function(e){return r.a.createElement(b,{key:e.file_id,content:e})})))},O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Profile"))},g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={file:{filename:"b39f699f211eaf63c435aa241d2384f2.jpg",title:"Test"},mediaUrl:"http://media.mw.metropolia.fi/wbma/uploads/"},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.location.file_id,fetch("http://media.mw.metropolia.fi/wbma/media/"+e).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(e){return t.setState({file:e})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,this.state.file.title),r.a.createElement("img",{src:this.state.mediaUrl+this.state.file.filename,alt:this.state.file.title}))}}]),t}(a.Component),v=(n(44),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={data:[],url:"http://media.mw.metropolia.fi/wbma/media"},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var e="http://media.mw.metropolia.fi/wbma/media";return fetch(e).then((function(e){return e.json()})).then((function(t){return Promise.all(t.map((function(t){return fetch(e+"/"+t.file_id).then((function(e){return e.json()}))}))).then((function(e){return console.log(e),e}))})).catch((function(e){return console.log(e)}))})().then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{basename:"/~lottalau/mpjakk/http-router"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,null),r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(j,Object.assign({},t,{data:e.state.data}))}}),r.a.createElement(f.a,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(O,Object.assign({},t,{data:e.state.data}))}}),r.a.createElement(f.a,{exact:!0,path:"/single",render:function(t){return r.a.createElement(g,Object.assign({},t,{data:e.state.data}))}}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.a4cd6cdd.chunk.js.map