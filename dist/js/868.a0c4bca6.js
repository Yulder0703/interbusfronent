"use strict";(self["webpackChunkproyecto2"]=self["webpackChunkproyecto2"]||[]).push([[868],{9868:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"about"},[e("HeaderComponent"),e("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"}}),e("link",{attrs:{rel:"stylesheet",href:"https://unpkg.com/boxicons@latest/css/boxicons.min.css"}}),e("header",{staticClass:"vh-100"},[e("div",{staticClass:"container mt-4"},[e("div",{staticClass:"card border-secondary"},[e("div",{staticClass:"card-header"},[t._v("Nuevo Registro")]),e("div",{staticClass:"card-body"},[e("form",{attrs:{action:"/buses",method:"POST"}},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"id"}},[t._v("id")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],staticClass:"form-control",attrs:{type:"text",id:"id",name:"id",value:"0",tabindex:"1"},domProps:{value:t.form.id},on:{input:function(s){s.target.composing||t.$set(t.form,"id",s.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"num_bus"}},[t._v("num_bus")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.num_bus,expression:"form.num_bus"}],staticClass:"form-control",attrs:{type:"text",id:"num_bus",name:"num_bus",tabindex:"1"},domProps:{value:t.form.num_bus},on:{input:function(s){s.target.composing||t.$set(t.form,"num_bus",s.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"placa"}},[t._v("placa")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.placa,expression:"form.placa"}],staticClass:"form-control",attrs:{type:"text",id:"placa",name:"placa",tabindex:"1"},domProps:{value:t.form.placa},on:{input:function(s){s.target.composing||t.$set(t.form,"placa",s.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"tipo_bus"}},[t._v("tipo_bus")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tipo_bus,expression:"form.tipo_bus"}],staticClass:"form-control",attrs:{type:"text",id:"tipo_bus",name:"tipo_bus",tabindex:"1"},domProps:{value:t.form.tipo_bus},on:{input:function(s){s.target.composing||t.$set(t.form,"tipo_bus",s.target.value)}}})]),e("b-button",{staticClass:"text-white w-25",attrs:{"router-link":"",to:"/BusesView",variant:"success",type:"button"},on:{click:function(s){return t.AgregaerBuses()}}},[t._v("Agregar")]),e("router-link",{staticClass:"btn btn-outline-secondary mt-4 w-25 container nav-link active fs-6",attrs:{"aria-current":"page",href:"#",to:"/BusesView"}},[t._v("cancelar")])],1)])])])])],1)},o=[],r=e(9669),i=e.n(r),n=e(5909),l={name:"NuevoBusView",components:{HeaderComponent:n.Z},data(){return{form:{id:"",num_bus:"",placa:"",tipo_bus:""}}},mounted(){this.AgregaerBuses},methods:{AgregaerBuses(){i().post("http://localhost:3000/buses",this.form).then((t=>{console.log(t)})),this.verBuses()},refre(){this.verBuses()}}},u=l,c=e(1001),m=(0,c.Z)(u,a,o,!1,null,"727cfab6",null),d=m.exports}}]);
//# sourceMappingURL=868.a0c4bca6.js.map