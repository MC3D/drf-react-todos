(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{19:function(t,e,n){t.exports=n(43)},24:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(13),i=n.n(c),l=(n(24),n(14)),r=n(15),s=n(17),d=n(16),u=n(3),m=n(18),h=n(2),f=n.n(h);n(42);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var p=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(d.a)(e).call(this,t))).state={todos:[]},n.addTodo=n.addTodo.bind(Object(u.a)(n)),n}return Object(m.a)(e,t),Object(r.a)(e,[{key:"addTodo",value:function(t){var e=this;t.preventDefault(),f.a.post("".concat("http://localhost:8000","/api/v1/todos/new/"),{text:"Make dentist appointment",due_date:"2020-11-15"}).then((function(t){console.log(t),e.setState({todos:t.data})})).catch((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){var t=this;f.a.get("".concat("http://localhost:8000","/api/v1/todos/")).then((function(e){console.log(e),t.setState({todos:e.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this.state.todos.map((function(t){return a.a.createElement("li",{key:t.id},a.a.createElement("p",null,t.text),a.a.createElement("time",null,t.due_date))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:this.addTodo},a.a.createElement("input",{type:"text"}),a.a.createElement("button",null,"Add todo")),a.a.createElement("ul",null,t))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6917e3c8.chunk.js.map