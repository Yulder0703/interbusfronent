"use strict";(self["webpackChunkproyecto2"]=self["webpackChunkproyecto2"]||[]).push([[443],{9030:function(t,o,e){e.r(o),e.d(o,{default:function(){return i}});var n=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],a=e(1001),s={},l=(0,a.Z)(s,n,r,!1,null,null,null),i=l.exports},6379:function(t,o,e){e.r(o),e.d(o,{default:function(){return C}});var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("HeaderComponent"),e("br"),e("br"),e("b-button",{attrs:{variant:"outline-primary"}},[e("router-link",{attrs:{to:"/DespachadorView"}},[t._v("DIA")])],1),e("b-button",{attrs:{variant:"outline-primary"}},[e("router-link",{attrs:{to:"/FormularioEncoView"}},[t._v("MES")])],1),e("b-button",{attrs:{variant:"outline-primary"}},[e("router-link",{attrs:{to:"/DespachadorView"}},[t._v("AÑO")])],1),e("DespachadorComponent"),e("br"),e("FooterComponent")],1)},r=[],a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"VER","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[e("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(o){t.perPage=o},expression:"perPage"}})],1)],1),e("b-table",{attrs:{items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(o){t.sortBy=o},"update:sort-by":function(o){t.sortBy=o},"update:sortDesc":function(o){t.sortDesc=o},"update:sort-desc":function(o){t.sortDesc=o},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(name)",fn:function(o){return[t._v(" "+t._s(o.value.first)+" "+t._s(o.value.last)+" ")]}},{key:"cell(actions)",fn:function(o){return[e("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(e){return t.info(o.item,o.index,e.target)}}},[t._v(" DESPACHAR ")])]}},{key:"row-details",fn:function(o){return[e("b-card",[e("ul",t._l(o.item,(function(o,n){return e("li",{key:n},[t._v(t._s(n)+": "+t._s(o))])})),0)])]}}])}),e("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"IMPRIMIR-only":""},on:{hide:t.resetInfoModal}},[e("pre",[t._v(t._s(t.infoModal.content))])])],1)},s=[],l=(e(1249),e(7327),e(1539),e(8862),{name:"DespachadorComponent",data:function(){return{items:[{Hora:"10:00",PlacaBus:4443,NombConductor:"Andres Salsedo"},{Hora:"11:00",PlacaBus:2551,NombConductor:"Larsen Mosquera"},{Hora:"12:00",PlacaBus:9444,NombConductor:"Mini Navarro"},{Hora:"12:30",PlacaBus:8934,NombConductor:"Genevan Lopez"},{Hora:"12:20",PlacaBus:3668,NombConductor:"JamiCarney"},{Hora:"01:00",PlacaBus:2667,NombConductor:"Essie Dunlap"},{Hora:"08:00",PlacaBus:4990,NombConductor:"Gerardo Guerrero"},{Hora:"03:00",PlacaBus:2556,NombConductor:"Sebastian Dunlap"},{Hora:"04:50",PlacaBus:2332,NombConductor:"Lucia Arjona"},{Hora:"03:30",PlacaBus:3866,NombConductor:"Ferney Calderon"},{Hora:"02:20",PlacaBus:2779,NombConductor:"Marcos Caicedo"}],fields:[{key:"NombConductor",label:"NombConductor"},{key:"Hora",label:"Hora"},{key:"PlacaBus",label:"Placa Bus"},{key:"NombConductor",label:""},{key:"actions",label:"Actions"}],perPage:5,pageOptions:[1,2,3,4,5,6,7,{value:100}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info_modal",title:"",content:""}}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.totalRows=this.items.length},methods:{info:function(t,o,e){this.infoModal.title="TIQUETE: ".concat(o),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,e)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}}),i=l,c=e(1001),u=(0,c.Z)(i,a,s,!1,null,null,null),d=u.exports,f=e(5909),m=e(9671),p={name:"DespachadorView",components:{DespachadorComponent:d,HeaderComponent:f.Z,FooterComponent:m.Z}},b=p,h=(0,c.Z)(b,n,r,!1,null,"5c29b422",null),C=h.exports}}]);
//# sourceMappingURL=about-legacy.8aeec33a.js.map