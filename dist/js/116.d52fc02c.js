"use strict";(self["webpackChunkproyecto2"]=self["webpackChunkproyecto2"]||[]).push([[116],{4116:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"about"},[e("HeaderComponent"),e("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"}}),e("link",{attrs:{rel:"stylesheet",href:"https://unpkg.com/boxicons@latest/css/boxicons.min.css"}}),e("div",{staticClass:"container vh-100"},[e("router-link",{staticClass:"btn btn-outline-primary mt-4",attrs:{"aria-current":"page",href:"#",to:"/NuevoBusView"}},[e("i",{staticClass:"bx bxs-plus-circle bx-md"})]),e("table",{staticClass:"table table-bordered table-striped text-center mt-4"},[t._m(0),e("tbody",t._l(t.buses,(function(s){return e("tr",{key:s.id},[e("td",[t._v(t._s(s.id))]),e("td",[t._v(t._s(s.num_bus))]),e("td",[t._v(t._s(s.placa))]),e("td",[t._v(t._s(s.tipo_bus))]),t._m(1,!0)])})),0)])],1),e("FooterComponent")],1)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",{staticClass:"bg-primary text-white"},[e("th",{staticClass:"col-1"},[t._v("id")]),e("th",{staticClass:"col-2"},[t._v("num_bus")]),e("th",{staticClass:"col-2"},[t._v("placa")]),e("th",{staticClass:"col-2"},[t._v("tipo_bus")]),e("th",{staticClass:"col-4"},[t._v("Opciones")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("a",{staticClass:"btn btn-outline-info",attrs:{href:""}},[t._v("Editar")]),e("a",{staticClass:"btn btn-outline-danger",attrs:{href:""}},[t._v("Eliminar")])])}],r=e(9669),o=e.n(r),i=e(5909),l=e(9671),c={name:"BusesView",components:{HeaderComponent:i.Z,FooterComponent:l.Z},data(){return{buses:"",form:{id:"",num_bus:"",placa:"",tipo_bus:""}}},mounted(){this.verBuses(),this.AgregaerBuses,this.Eliminar()},methods:{verBuses(){o().get("http://localhost:3000/buses").then((t=>{this.buses=t.data,console.log(this.buses)}))},AgregaerBuses(){o().post("http://localhost:3000/buses",this.form).then((t=>{console.log(t)})),this.verBuses()},Eliminar(t){o()["delete"]("http://localhost:3000/buses"+t).then((t=>{console.log(t)})),this.verBuses()},refre(){this.verBuses()}}},u=c,h=e(1001),b=(0,h.Z)(u,a,n,!1,null,"07db344c",null),d=b.exports}}]);
//# sourceMappingURL=116.d52fc02c.js.map