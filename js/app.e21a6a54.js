(function(e){function a(a){for(var i,o,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"f2f540b2","chunk-0206bfa0":"25be952e","chunk-110f1f0b":"04c83d0f","chunk-13a6037e":"f9eea0e7","chunk-179248a2":"d1bafdbb","chunk-18f95272":"d2bcdc8f","chunk-2a9fce91":"ae8c4b7d","chunk-2c06842c":"24f312a4","chunk-2d0c5615":"5c689737","chunk-2d0e96ec":"57f79e27","chunk-2d208d90":"3e1ee65a","chunk-2d21d0e2":"dfdc5b8d","chunk-2d22c123":"f70756c2","chunk-2e80bb9a":"3c74777a","chunk-319206de":"976aa6eb","chunk-36769079":"bca1cb75","chunk-4cdd78c0":"be27b0eb","chunk-515a8379":"e0082551","chunk-53ccb27e":"98cc1194","chunk-55d286b8":"78df0c7a","chunk-59974754":"4bbf6e55","chunk-5d1ce150":"725727bc","chunk-60cbc06b":"018fac78","chunk-623f2040":"c2e2f9b3","chunk-659152b8":"d60cdca6","chunk-6a43ec24":"143a4eb2","chunk-6e1e538a":"f0f84fb3","chunk-6e613899":"ffe7de9f","chunk-766a929b":"f7369554","chunk-7794bb60":"e0ae4b9d","chunk-c796899c":"bb9ea0e0","chunk-e8a7823a":"e4fcf27b","chunk-fde47172":"48721805",comple:"ff82db72",creditos:"97d16499",glosario:"cf0f968d",intro:"a4dda8ef",referencias:"8982f61d",sintesis:"bbfa4e4d",tema1:"82be8998",tema2:"05b6d726",tema3:"cee975f4",tema4:"45744d6c"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"8f9cd922","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"734e39b9","chunk-5d1ce150":"52141945","chunk-60cbc06b":"d3a83979","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"5eb299c6","chunk-6e613899":"52141945","chunk-766a929b":"83f7e217","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"e766caee",creditos:"9ca98631",glosario:"a8263125",intro:"31d6cfe0",referencias:"47f89f89",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+i,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===i||l===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===i||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete o[e],m.parentNode.removeChild(m),n(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,n){i=r[e]=[a,n]}));a.push(i[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),d=Object(s["a"])(c,o,r,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=g,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Conceptos generales y normatividad magistrales",descripcionCurso:"En este componente formativo abarca temas relacionados con las generalidades de las preparaciones magistrales, sus formas farmacéuticas, las buenas prácticas de elaboración, requisitos del Sistema de Gestión de Calidad (SGC) documentos involucrados y los controles que se deben realizar al proceso.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Generalidades de las preparaciones magistrales no estériles",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Formas farmacéuticas de los preparados magistrales tópicos no estériles",hash:"t_1_1"},{numero:"1.2",titulo:"Unidades básicas de medidas",hash:"t_1_2"},{numero:"1.3",titulo:"Prescripción médica: concepto, interpretación",hash:"t_1_3"},{numero:"1.4",titulo:"Concentraciones",hash:"t_1_4"}]},{nombreRuta:"tema2",numero:"2",titulo:"Buenas prácticas",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Sistema de garantía de calidad",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Requisitos del sistema de garantía de calidad",hash:"t_3_1"},{numero:"3.2",titulo:"Etiquetado preparaciones magistrales",hash:"t_3_2"},{numero:"3.3",titulo:"Fechas de vencimiento",hash:"t_3_3"},{numero:"3.4",titulo:"Control de calidad de las preparaciones magistrales",hash:"t_3_4"},{numero:"3.5",titulo:"Entes reguladores",hash:"t_3_5"}]},{nombreRuta:"tema4",numero:"4",titulo:"Farmacopeas y referencias bibliográficas",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/331502_CF19_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Buenas prácticas",referencia:"Decreto 0780 de 2016. (2016). <i>Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social</i>.",tipo:"Decreto",descarga:"/downloads/Anexo_4_CF019_decreto_0780_de_2016.pdf"},{tema:"Buenas prácticas",referencia:"Red de autoridades de medicamentos de Iberoamérica. (2016). <i>Guía de buenas prácticas de elaboración y control de calidad de preparaciones magistrales y oficinales.</i>",tipo:"Documento",descarga:"/downloads/Anexo_6_CF019_guia_de_buenas_practicas.pdf"},{tema:"Buenas prácticas",referencia:"Amaya, A. (2020). <i>Guía de gestión de la calidad en el proceso de elaboración de magistrales estériles con base en la estructura de alto nivel.</i>",tipo:"Documento",descarga:"/downloads/Anexo_3_CF019_guia_preparaciones_magistrales_esteriles.pdf"}],glosario:[{termino:"Buenas prácticas de elaboración magistral (B.P.E.M.)",significado:"Conjunto de normas, procesos y procedimientos de carácter técnico que aseguran la correcta elaboración y el control de calidad de los Medicamentos Magistrales y los Preparados Oficinales."},{termino:"Buenas prácticas de manufactura (B.P.M.)",significado:"Son las normas, procesos y procedimientos de carácter técnico que aseguran la calidad de los medicamentos, los cosméticos y las preparaciones farmacéuticas a base de recursos naturales."},{termino:"Droga (O.M.S)",significado:"El nombre de droga resulta aplicable a toda sustancia terapéutica o no, que introducida al cuerpo por medio de los mecanismos clásicos (Inhalación, ingestión, fricción, administración parenteral, endovenosa) de administración, es capaz de actuar sobre el sistema nervioso central del individuo hasta generar en él una alteración física e intelectual, la experimentación de nuevas sensaciones o la modificación de su estado psíquico."},{termino:"Droga blanca",significado:"Es la materia prima para preparar las fórmulas magistrales, tales como: Aceite de almendras, aceite de manzanilla, Azufre, Glicerina pura, ácido Bórico, Bórax, Bicarbonato de sodio, entre otros. Este tipo de productos no requiere registro INVIMA para su comercialización."},{termino:"Excipiente",significado:"Producto más o menos inerte que determina la consistencia, forma o volumen de las preparaciones farmacéuticas."},{termino:"Fórmula magistral tipificada",significado:"Aquella fórmula magistral definida en un formulario."},{termino:"Garantía de la calidad",significado:"Es un concepto amplio que cubre todos los aspectos que individual o colectivamente influyen en la calidad de un producto. Comprende la totalidad de las gestiones llevadas a cabo con el objeto de asegurar que los productos elaborados en la oficina de farmacia o servicio de farmacia hospitalario son de la calidad requerida para su uso."},{termino:"INVIMA",significado:" Instituto Nacional de Vigilancia de Medicamentos y Alimentos."},{termino:"Monografía de preparado farmacéutico",significado:"Documento que describe detalladamente el método de elaboración, especificaciones, propiedades farmacológicas, control de calidad, condiciones de almacenamiento y requerimientos en el etiquetado del preparado farmacéutico."},{termino:"POS",significado:" Procedimiento Operativo Standard."},{termino:"PQRS",significado:" Peticiones, Quejas, Reclamos y Sugerencias."},{termino:"Preparación magistral",significado:"Es la atención farmacéutica que se hace por parte del Químico Farmacéutico una o un grupo de personas en especial, teniendo en cuenta su perfil fármaco terapéutico y son de distribución inmediata."},{termino:"Preparación magistral no estéril",significado:"Es una preparación farmacéutica que se puede formular y elaborar en condiciones ambientales controladas, pero no estériles."},{termino:"Preparación o preparado oficinal",significado:"Es el medicamento destinado a su dispensación directa a los pacientes atendidos por las oficinas de farmacia o servicios de farmacia hospitalarios, preparado por un farmacéutico o químico farmacéutico o bajo su dirección, descrito en un formulario oficial, preparado según las buenas prácticas de elaboración y control de calidad establecidas al efecto y con la debida información al paciente."},{termino:"Preparado magistral",significado:"Es el preparado o producto farmacéutico para atender una prescripción médica, de un paciente individual, que requiere de algún tipo de intervención técnica de variada complejidad."},{termino:"Principio activo",significado:"Es todo compuesto biológicamente activo que se extrae de la droga de un ser vivo utilizado por sus propiedades terapéuticas y que se comercializa sin alterar su estructura química."},{termino:"SGC",significado:" Sistema de Gestión de Calidad."},{termino:"SI",significado:" Sistema Internacional de Unidades."}],referencias:[{referencia:"Decreto 0780 de 2016. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. 6 de mayo de 2016.",link:""},{referencia:"FARMACOPEA ARGENTINA (Séptima edición). Buenos Aires, 12 de junio de 2003.",link:""},{referencia:"Manual de Laboratorio de Farmacia Magistral. Universidad de Antioquia. Facultad de Química Farmacéutica. Tecnología en Regencia de Farmacia. Gómez Betancurt, Sergio; 2004.",link:""},{referencia:"Pharmaceutical Compounding - Nonsterile Preparations; USP42-NF37",link:""},{referencia:"REMINGTON FARMACIA (T. II) (20ª ED.) de Gennaro, Alfonso R., EDITORIAL Médica Panamericana.",link:""},{referencia:"Resolución 1403 de 2007. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras Disposiciones.",link:""},{referencia:"Resolución 444 del 2008 “por la cual se adopta el instrumento de verificación de cumplimiento de Buenas Prácticas de Elaboración de preparaciones magistrales y se dictan otras disposiciones”. Febrero de 2008",link:""},{referencia:"Rosales, Z. JM y Muñoz, B. JC. Formulación magistral en atención primaria. En Medicina de Familia (And) Vol. 2, N.º 1, marzo 2001, p. 53.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizábal Gutiérrez",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de línea de producción",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Edwing Amir Moreno Moreno",cargo:"Experto temático",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Gustavo Santis Mancipe",cargo:"Diseñador instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora metodológica y pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable equipo desarrollo curricular",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Corrector de estilo",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Nelly Parra Guarín",cargo:"Adecuación instruccional - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Metodología para la formación virtual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Yuly Andrea Rey Quiñonez",cargo:"Diseño web",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Manuel Felipe Echavarria Orozco",cargo:"Desarrollo fullstack",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lady Adriana Ariza Luque",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Ernesto Navarro Jaimes",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluación de contenidos inclusivos y accesibles",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Validación de recursos educativos digitales y vinculación al LMS",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Leyson Fabian Castaño Pérez",cargo:"Validación de recursos educativos digitales",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=v;var k=n("9224");i["a"].prototype.$package=k,new i["a"]({router:b,store:h["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.65f5d500.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.588d8e83.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.9b34968b.svg"},9128:function(e,a,n){e.exports=n.p+"img/banner-princiapal.d28203fc.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.136048a9.png"}});
//# sourceMappingURL=app.e21a6a54.js.map