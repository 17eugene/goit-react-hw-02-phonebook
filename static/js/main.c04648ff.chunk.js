(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filter_label:"Filter_filter_label__9Spwf",filter_wrapper:"Filter_filter_wrapper__24bYM",filter_input:"Filter_filter_input__31_SE"}},2:function(t,e,n){t.exports={form:"AddForm_form__2LR6e",add_btn:"AddForm_add_btn__3xGFn",label:"AddForm_label__MtIaY",input:"AddForm_input__2nS9L"}},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),s=n(15),l=n(13),o=n(5),u=n(6),d=n(8),b=n(7),m=n(14),f=n.n(m),j=n(4),h=n(2),_=n.n(h),p=n(0),O=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).handleChange=function(e){t.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.submitHandler(t.state),t.setState({name:"",number:""})},t.state={name:"",number:""},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:_.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:_.a.label,children:["Name",Object(p.jsx)("input",{className:_.a.input,type:"text",onChange:this.handleChange,name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:_.a.form,children:["Number",Object(p.jsx)("input",{className:_.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{type:"submit",className:_.a.add_btn,children:"Add contact"})]})})}}]),n}(r.a.Component),C=n(9),x=n.n(C);function v(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:x.a.contact_list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(p.jsxs)("li",{className:x.a.contact,children:[Object(p.jsxs)("p",{children:[a,": ",Object(p.jsx)("span",{children:r})]}),Object(p.jsx)("button",{type:"button",className:x.a.delete_btn,onClick:function(){n(e)},children:"Delete"})]},e)}))})}var g=n(10),S=n.n(g);function N(t){var e=t.value,n=t.onChange;return Object(p.jsx)("div",{className:S.a.filter_wrapper,children:Object(p.jsxs)("label",{className:S.a.filter_label,children:["Find contact by name",Object(p.jsx)("input",{type:"text",name:"filter",className:S.a.filter_input,value:e,onChange:n})]})})}n(29);var w=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).formSubmitHandler=function(e){var n=Object(l.a)({id:f.a.generate()},e);t.state.contacts.find((function(t){return t.number===e.number||t.name.toLowerCase()===e.name.toLowerCase()}))?alert("Contact already exist!"):t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterChange=function(e){t.setState({filter:e.currentTarget.value})},t.getFiltredContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getFiltredContacts();return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{submitHandler:this.formSubmitHandler}),Object(p.jsx)(N,{value:this.state.filter,onChange:this.filterChange}),Object(p.jsx)(v,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(r.a.Component);i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__fTWUr",contact:"ContactList_contact__2ODrP",delete_btn:"ContactList_delete_btn__1uUsH"}}},[[30,1,2]]]);
//# sourceMappingURL=main.c04648ff.chunk.js.map