(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(3),i=n.n(s),a=(n(13),n(4)),o=n(5),h=n(7),l=n(6),b=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?100x100")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(r.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(r.jsx)("div",{children:n})},u=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"tc",children:Object(r.jsx)("input",{className:"pa3 ba b--free bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"80vh"},children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onClick=function(t){e.setState({visible:!0})},e.handleOk=function(){e.setState({isModalVisible:!1})},e.handleCancel=function(){e.setState({isModalVisible:!1})},e.state={robots:[],searchfield:"",visible:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(r.jsx)("h1",{children:"LOADING ...."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"tc",children:"RoboFriends"}),Object(r.jsx)(u,{searchChange:this.onSearchChange}),Object(r.jsx)(j,{children:Object(r.jsx)(d,{robots:c})})]})}}]),n}(c.Component),g=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))});i.a.render(Object(r.jsx)(f,{}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.41f9fda6.chunk.js.map