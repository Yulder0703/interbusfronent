"use strict";(self["webpackChunkproyecto2"]=self["webpackChunkproyecto2"]||[]).push([[443],{8021:function(t,e,o){o.r(e),o.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("HeaderComponent"),o("h1",[t._v("This is an about page")])],1)},r=[],s=o(2092),l={name:"AboutView",components:{HeaderComponent:s.Z}},n=l,i=o(1001),c=(0,i.Z)(n,a,r,!1,null,null,null),u=c.exports},9166:function(t,e,o){o.r(e),o.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HeaderComponent"),o("br"),o("br"),o("b-button",{attrs:{variant:"outline-primary"}},[o("router-link",{attrs:{to:"/DespachadorView"}},[t._v("DIA")])],1),o("b-button",{attrs:{variant:"outline-primary"}},[o("router-link",{attrs:{to:"/FormularioEncoView"}},[t._v("MES")])],1),o("b-button",{attrs:{variant:"outline-primary"}},[o("router-link",{attrs:{to:"/DespachadorView"}},[t._v("AÑO")])],1),o("DespachadorComponent"),o("br"),o("FooterComponent")],1)},r=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[o("b-form-group",{staticClass:"mb-0",attrs:{label:"VER","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[o("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),o("b-table",{attrs:{items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[t._v(" "+t._s(e.value.first)+" "+t._s(e.value.last)+" ")]}},{key:"cell(actions)",fn:function(e){return[o("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(o){return t.info(e.item,e.index,o.target)}}},[t._v(" DESPACHAR ")])]}},{key:"row-details",fn:function(e){return[o("b-card",[o("ul",t._l(e.item,(function(e,a){return o("li",{key:a},[t._v(t._s(a)+": "+t._s(e))])})),0)])]}}])}),o("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"IMPRIMIR-only":""},on:{hide:t.resetInfoModal}},[o("pre",[t._v(t._s(t.infoModal.content))])])],1)},l=[],n={name:"DespachadorComponent",data(){return{items:[{Hora:"10:00",PlacaBus:4443,NombConductor:"Andres Salsedo"},{Hora:"11:00",PlacaBus:2551,NombConductor:"Larsen Mosquera"},{Hora:"12:00",PlacaBus:9444,NombConductor:"Mini Navarro"},{Hora:"12:30",PlacaBus:8934,NombConductor:"Genevan Lopez"},{Hora:"12:20",PlacaBus:3668,NombConductor:"JamiCarney"},{Hora:"01:00",PlacaBus:2667,NombConductor:"Essie Dunlap"},{Hora:"08:00",PlacaBus:4990,NombConductor:"Gerardo Guerrero"},{Hora:"03:00",PlacaBus:2556,NombConductor:"Sebastian Dunlap"},{Hora:"04:50",PlacaBus:2332,NombConductor:"Lucia Arjona"},{Hora:"03:30",PlacaBus:3866,NombConductor:"Ferney Calderon"},{Hora:"02:20",PlacaBus:2779,NombConductor:"Marcos Caicedo"}],fields:[{key:"NombConductor",label:"NombConductor"},{key:"Hora",label:"Hora"},{key:"PlacaBus",label:"Placa Bus"},{key:"NombConductor",label:""},{key:"actions",label:"Actions"}],perPage:5,pageOptions:[1,2,3,4,5,6,7,{value:100}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info_modal",title:"",content:""}}},computed:{sortOptions(){return this.fields.filter((t=>t.sortable)).map((t=>({text:t.label,value:t.key})))}},mounted(){this.totalRows=this.items.length},methods:{info(t,e,o){this.infoModal.title=`TIQUETE: ${e}`,this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,o)},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},onFiltered(t){this.totalRows=t.length,this.currentPage=1}}},i=n,c=o(1001),u=(0,c.Z)(i,s,l,!1,null,null,null),m=u.exports,d=o(2092),p=o(7097),f={name:"DespachadorView",components:{DespachadorComponent:m,HeaderComponent:d.Z,FooterComponent:p.Z}},b=f,C=(0,c.Z)(b,a,r,!1,null,"5c29b422",null),v=C.exports},7452:function(t,e,o){o.r(e),o.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HeaderComponent"),o("br"),o("br"),o("FormularioEncoComponent"),o("br"),o("FooterComponent")],1)},r=[],s=o(2092),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("section",{staticClass:" registro container  col-30 col-sm-20 col-lg-8 col-xxl-20 shadow "},[o("form",[t._m(0),t._m(1),t._m(2),o("br"),t._m(3),o("div",{staticClass:"text-center form-text",attrs:{id:"Identificacion"}},[t._v("No compartas tu información con nadie.")]),o("hr"),o("div",{staticClass:"d-grid gap-2 col-6 mx-auto"},[o("button",{staticClass:" btn btn-secondary",attrs:{type:"submit"}},[o("router-link",{attrs:{to:"/InicioSesionPView"}},[t._v("Confirma la Reserva de Envio")])],1)])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Nombre"}})]),a("div",{staticClass:"col"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Apellido"}})])])]),a("br"),a("form",[a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"col-auto my-1"},[a("select",{staticClass:"custom-select mr-sm-5",attrs:{id:"inlineFormCustomSelect"}},[a("option",{attrs:{selected:""}},[t._v("Tipo de Identificacion...")]),a("option",{attrs:{value:"1"}},[t._v("Cedula de Ciudadania")]),a("option",{attrs:{value:"2"}},[t._v("Tarjeta de Identidad")]),a("option",{attrs:{value:"3"}},[t._v("Cedula Extrajera")])])])]),a("br"),a("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Numero de Identificacion")]),a("input",{staticClass:"form-control",attrs:{type:"tel",id:"tel","aria-describedby":"tel"}})]),a("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Numero de Contacto")]),a("div",{staticClass:"caja"},[a("input",{staticClass:" margencelular form-control",attrs:{type:"tel",id:"tel","aria-describedby":"tel"}}),a("img",{staticClass:"celular",attrs:{src:o(4110),alt:"logo"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[o("div",[o("select",{staticClass:"custom-select mr-sm-5",attrs:{id:"inlineFormCustomSelect"}},[o("option",{attrs:{selected:""}},[t._v("Peso Envio...")]),o("option",{attrs:{value:"1"}},[t._v("1 a 5 lbr")]),o("option",{attrs:{value:"2"}},[t._v("10 a 100 lbr")]),o("option",{attrs:{value:"3"}},[t._v("1000 a 10000 lbr")]),o("option",{attrs:{value:"3"}},[t._v("100000 a 1000000 lbr")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[o("div",[o("br"),o("form",[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"staticEmail"}},[t._v("Email")]),o("div",{staticClass:"col-sm-10"},[o("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"email@example.com"}})])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-3 form-check"},[o("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),o("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Recordar mis datos")])])}],i={name:"FormularioEncoComponent"},c=i,u=o(1001),m=(0,u.Z)(c,l,n,!1,null,"32cf9476",null),d=m.exports,p=o(7097),f={name:"FormularioEncoView",components:{FormularioEncoComponent:d,FooterComponent:p.Z,HeaderComponent:s.Z}},b=f,C=(0,u.Z)(b,a,r,!1,null,"2ae8844a",null),v=C.exports},4110:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFcSURBVFiF7dcxSxxRFIbhZ9WsrhBFG0G2CoJNQmJaiSDYiL1VqvwECwliCnuDRSpt0qZXSBMQRDAiJoVYi4WgRQyBqGR1wWI2MAw7d3YmpBDmhWnO/eacl1vdU5HNBKbQ10E2TgO7OAiFujOaLGAN53iEWo5vGMsYxE7agEpg+AiO8AwXsfoAFtGTyDfxHpex2hCOMYmTdkOSTeI8x/fEcLjFD1QT9bvWWZyf2MPLIgK9GMd6IJNkNSG6gj+tXm0JCcAvHOYQiNPEVVYoS+AUGwUFOqLrfzYvBUqBUqAUKAVKgVKgFHgQAllPsr98RL3gjKfY+leBD6JFI0lNdIuhx+dSqHGnAt/a1F7gi2i5mcPXlH/fFBVoiNaxNGbwGb8xGxCotnrlZlS0FQ2lnNexL7qdJymZxzjDWNqQ0G4I7/Aan3CdkU3Sh3ls4m1RAXiFafTnFLgRbcXbodA9C6M2caP8rNAAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=about.c5ca4b74.js.map