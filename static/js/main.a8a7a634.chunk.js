(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),s=(a(14),a(6)),u=a(2),i=a(3),d=a(1),h=a(5),o=a(4),v=(a(15),a(16),function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={value:""},n.valueChange=n.valueChange.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"valueChange",value:function(e){this.setState({value:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),""!==this.state.value?(this.props.addTask(this.state.value),this.setState({value:""})):alert("\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u0432\u0435\u043b\u0438")}},{key:"render",value:function(){return r.a.createElement("form",{className:"form",onSubmit:this.onSubmit},r.a.createElement("input",{className:"form__input",type:"text",value:this.state.value,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443...",onChange:this.valueChange}),r.a.createElement("button",{className:"form__btn"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),a}(n.Component)),m=(a(17),a(18),function(e){var t="task";return e.deleted&&(t+=" deleted"),r.a.createElement("li",{className:t},r.a.createElement("div",{className:"task__text"},e.text),r.a.createElement("button",{className:"task__del-btn",onClick:e.deleteTask},"X"))}),f=function(e){var t=e.tasks.map((function(t){return r.a.createElement(m,{key:t.id,text:t.text,deleted:t.deleted,deleteTask:e.deleteTask.bind(void 0,t.id,t.deleted)})}));return r.a.createElement("ul",{className:"list"},t)},b=(a(19),function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"\u041c\u043e\u0438 \u0434\u0435\u043b\u0430"),r.a.createElement("div",{className:"header__number-task"},"\u0412\u0441\u0435\u0433\u043e: ",r.a.createElement("span",null,e.state.data.length)))}),k=(a(20),function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={valueSearch:""},n.valueSearchChange=n.valueSearchChange.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"valueSearchChange",value:function(e){this.setState({valueSearch:e.target.value}),this.props.valueSearchChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0437\u0430\u0434\u0430\u0447\u0438...",className:"search-panel",value:this.state.valueSearch,onChange:this.valueSearchChange})}}]),a}(n.Component)),S=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={data:[],valueSearch:""},n.deleteTask=n.deleteTask.bind(Object(d.a)(n)),n.addTask=n.addTask.bind(Object(d.a)(n)),n.valueSearchChange=n.valueSearchChange.bind(Object(d.a)(n)),n.maxId=n.state.data.length,n}return Object(i.a)(a,[{key:"deleteTask",value:function(e,t){var a=this;t||(this.setState((function(t){var a=t.data.findIndex((function(t){return t.id===e})),n=Object(s.a)(t.data);return n[a].deleted=!0,{data:n}})),setTimeout((function(){return a.setState((function(t){var a=t.data.findIndex((function(t){return t.id===e}));return{data:[].concat(Object(s.a)(t.data.slice(0,a)),Object(s.a)(t.data.slice(a+1)))}}))}),700))}},{key:"addTask",value:function(e){var t={id:++this.maxId,text:e,deleted:!1};this.setState((function(e){return{data:[].concat(Object(s.a)(e.data),[t])}}))}},{key:"searchTask",value:function(e,t){return""===t?e:e.filter((function(e){return e.text.indexOf(t)>-1}))}},{key:"valueSearchChange",value:function(e){this.setState({valueSearch:e})}},{key:"render",value:function(){var e=this.searchTask(this.state.data,this.state.valueSearch);return r.a.createElement("div",{className:"todo"},r.a.createElement("div",{className:"todo__inner"},r.a.createElement(b,{state:this.state}),r.a.createElement(v,{addTask:this.addTask}),r.a.createElement(k,{valueSearchChange:this.valueSearchChange}),r.a.createElement(f,{tasks:e,deleteTask:this.deleteTask})))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a8a7a634.chunk.js.map