(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{21:function(e,a,t){e.exports=t(38)},26:function(e,a,t){},27:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(19),c=t.n(r),l=(t(26),t(27),function(e){return o.a.createElement("header",null,o.a.createElement("h1",null,"Pok\xe9dex React"),o.a.createElement("nav",null,e.children))}),s=t(4),m=t.n(s),i=t(9),u=t(6),p=t(7),h=t(8),E=t(10),g=t(11),k=(t(29),function(e){return o.a.createElement("div",{className:"centralizar buscaContainer"},o.a.createElement("input",{type:"text",className:"col-4",value:e.valor,onChange:e.eventoChange,onKeyPress:e.eventoPrincipal,placeholder:"#025"}),o.a.createElement("button",{type:"button",className:"col-2",onClick:e.eventoPrincipal},"Buscar"))}),d=function(e){return e.condicao?e.children:""},f=(t(30),function(e){Object(g.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).fetchPokemon=Object(u.a)(m.a.mark((function e(){var a,t,o,r,c,l,s,u,p;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,localStorage.getItem("pokemons")){e.next=22;break}a=1;case 3:if(!(a<=151)){e.next=17;break}return e.next=6,fetch("https://pokeapi.co/api/v2/pokemon/".concat(a));case 6:return t=e.sent,e.next=9,t.json();case 9:o=e.sent,r={nome:o.name,id:o.id,numero:"#".concat(o.id.toString().padStart(3,"0")),tipos:o.types.map((function(e){return e.type.name}))},(c=Object(i.a)(n.state.pokemons)).push(r),n.setState({pokemons:c});case 14:a++,e.next=3;break;case 17:l=n.state.pokemons.map((function(e){return JSON.stringify(e)})),s=l.join("."),localStorage.setItem("pokemons",s),e.next=25;break;case 22:u=localStorage.getItem("pokemons").split("."),p=u.map((function(e){return JSON.parse(e)})),n.setState({pokemons:p});case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(0),alert(e.t0);case 30:case"end":return e.stop()}}),e,null,[[0,27]])}))),n.renderizarPokemon=function(e){n.setState({titulo:e.nome.replace("-"," "),caminho:"img/".concat(e.nome,".png"),altImg:e.nome,numero:e.numero,legenda:n.gerarTipos(e.tipos)})},n.componentDidMount=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.isHome){e.next=6;break}return e.next=3,n.fetchPokemon();case 3:localStorage.ultimaBusca?(a=localStorage.ultimaBusca,n.buscarPokemon(a)):n.setState({titulo:"Buscar Pok\xe9mons",caminho:"img/nao-encontrado.png",altImg:"Pok\xe9mon n\xe3o encontrado"}),t=n.state.classes.replace("carregando-home",""),n.setState({classes:t});case 6:case"end":return e.stop()}}),e)}))),n.atualizarValor=function(e){var a=e.target.value,t=Number(a.replace("#",""));(isNaN(t)||t>=0&&t<152)&&n.setState({valor:a})},n.buscarPokemon=function(e){var a=n.state.classes.replace("erro","");n.setState({classes:a,legenda:"Busque pelos primeiros #151 Pok\xe9mons!"});var t=n.state.pokemons.find((function(a){return a.id===Number(e)||a.nome.replace("-"," ").toLowerCase()===e.toLowerCase()}));if(t)n.renderizarPokemon(t),localStorage.ultimaBusca=t.nome;else{var o="".concat(n.state.classes," erro");n.setState({titulo:"Buscar Pok\xe9mons",caminho:"img/nao-encontrado.png",altImg:"Pok\xe9mon n\xe3o encontrado",legenda:"Valor digitado n\xe3o \xe9 v\xe1lido!",numero:"???",classes:o})}},n.eventoBusca=function(e){var a=n.state.valor.replace("#","").trim();"Enter"!==e.key&&"click"!==e.type||n.buscarPokemon(a)},n.state={classes:n.props.classes,isHome:n.props.isHome,valor:"",pokemons:[],titulo:n.props.titulo||"Carregando dados...",caminho:n.props.caminho||"img/pokebola.png",altImg:n.props.altImg||"Carregando",numero:n.props.numero||"???",legenda:n.props.legenda||"Busque pelos primeiros #151 Pok\xe9mons!"},n}return Object(h.a)(t,[{key:"gerarTipos",value:function(e){return 1===e.length?o.a.createElement("span",{className:"tipos"},o.a.createElement("span",{className:e[0]},e[0])):o.a.createElement("span",{className:"tipos"},o.a.createElement("span",{className:e[0]},"".concat(e[0]," ")),"|",o.a.createElement("span",{className:e[1]}," ".concat(e[1])))}},{key:"render",value:function(){return o.a.createElement("div",{className:"".concat(this.state.classes," Card")},o.a.createElement(d,{condicao:this.state.isHome},o.a.createElement("h1",null,this.state.titulo)),o.a.createElement(d,{condicao:!this.state.isHome},o.a.createElement("h2",null,this.state.titulo)),o.a.createElement("div",{className:"container-img centralizar"},o.a.createElement("img",{src:this.state.caminho,alt:this.state.altImg})),o.a.createElement("p",{className:"numero"},o.a.createElement("span",null,this.state.numero)),o.a.createElement("p",{className:"legenda"},this.state.legenda),o.a.createElement(d,{condicao:this.state.isHome},o.a.createElement(k,{valor:this.state.valor,eventoChange:this.atualizarValor,eventoPrincipal:this.eventoBusca})))}}]),t}(n.Component)),v=function(){return o.a.createElement("main",{className:"container centralizar"},o.a.createElement(f,{isHome:!0,classes:"carregando-home col-6"}))},b=(t(31),function(){return o.a.createElement("footer",null,o.a.createElement("h1",null,"Workshop React - SENAI Su\xed\xe7o-Brasileira"),o.a.createElement("ul",{className:"container"},o.a.createElement("li",{className:"col-4"},o.a.createElement("span",null,"Paulo Henrique")," ",o.a.createElement("a",{href:"https://github.com/henrique1204"},o.a.createElement("span",null,"Henrique1204"))),o.a.createElement("li",{className:"col-4"},o.a.createElement("span",null,"Rebecca Ramos")," ",o.a.createElement("a",{href:"https://github.com/ramos-r"},o.a.createElement("span",null,"ramos-r"))),o.a.createElement("li",{className:"col-4"},o.a.createElement("span",null,"Jos\xe9 Carlos")," ",o.a.createElement("a",{href:"https://github.com/JoseCarlos69"},o.a.createElement("span",null,"JoseCarlos69"))),o.a.createElement("li",{className:"col-4"},o.a.createElement("span",null,"Felipe Braga")," ",o.a.createElement("a",{href:"https://github.com/obragaa"},o.a.createElement("span",null,"obragaa"))),o.a.createElement("li",{className:"col-4"},o.a.createElement("span",null,"Geovanna Caserta")," ",o.a.createElement("a",{href:"https://github.com/gkslima"},o.a.createElement("span",null,"gkslima"))),o.a.createElement("li",{className:"col-4"},o.a.createElement("span",null,"Geovanne Sousa")," ",o.a.createElement("a",{href:"https://github.com/Neutro17"},o.a.createElement("span",null,"Neutro17")))))}),N=(t(32),function(e){Object(g.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).estrutura=o.a.createElement("li",null,o.a.createElement(f,{isHome:!1,classes:"carregando",titulo:"???",caminho:"img/pokebola.png",altImg:"Pokebola",numero:"#???",legenda:"???"})),e.state={pokemons:Array(151).fill(e.estrutura)},e.componentDidMount=Object(u.a)(m.a.mark((function a(){var t,n,r,c,l,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=0;case 1:if(!(t<e.state.pokemons.length)){a.next=17;break}return a.next=4,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t+1));case 4:return n=a.sent,a.next=7,n.json();case 7:r=a.sent,c=r.types.map((function(e){return e.type.name})),l=void 0,l=1===c.length?o.a.createElement("span",{className:"tipos"},o.a.createElement("span",{className:c[0]},c[0])):o.a.createElement("span",{className:"tipos"},o.a.createElement("span",{className:c[0]},"".concat(c[0]," ")),"|",o.a.createElement("span",{className:c[1]}," ".concat(c[1]))),(s=Object(i.a)(e.state.pokemons))[t]=o.a.createElement("li",{key:r.id},o.a.createElement(f,{isHome:!1,titulo:r.name,caminho:"img/".concat(r.name,".png"),altImg:r.name,numero:"#".concat(r.id.toString().padStart(3,"0")),legenda:l})),e.setState({pokemons:s});case 14:t++,a.next=1;break;case 17:case"end":return a.stop()}}),a)}))),e}return Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("main",{className:"Pokedex"},o.a.createElement("h1",null,"Pokedex 1\xba Gera\xe7\xe3o"),o.a.createElement("ul",{className:"centralizar lista"},this.state.pokemons.map((function(e){return e}))))}}]),t}(n.Component)),x=t(12),S=t(1),P=function(){return o.a.createElement(x.a,null,o.a.createElement(n.Fragment,null,o.a.createElement(l,null,o.a.createElement("ul",{className:"centralizar"},o.a.createElement("li",null,o.a.createElement(x.b,{to:"/workshop-react-pokedex/"},o.a.createElement("span",null,"Home"))),o.a.createElement("li",null,o.a.createElement(x.b,{to:"/workshop-react-pokedex/pokedex"},o.a.createElement("span",null,"Pokedex"))))),o.a.createElement(S.c,null,o.a.createElement(S.a,{path:"/workshop-react-pokedex/",exact:!0,component:v}),o.a.createElement(S.a,{path:"/workshop-react-pokedex/pokedex",component:N})),o.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.adfa4cb6.chunk.js.map