(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/fda.b3fb53a6.png"},function(e,a,t){e.exports=t.p+"static/media/rtbg.2e21dd3e.png"},function(e,a,t){e.exports=t.p+"static/media/cc.e697440f.png"},,,function(e,a,t){e.exports=t(44)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),i=(t(27),t(28),function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("div",{className:"item"},c.a.createElement("i",{className:"fas fa-envelope"}),"mgoralczyk.pl@gmail.com"),c.a.createElement("div",{className:"item"},c.a.createElement("i",{className:"fas fa-phone-square-alt"}),"731 157 393"))}),s=(t(29),function(){return c.a.createElement("div",{className:"references"},c.a.createElement("div",{className:"item"},c.a.createElement("i",{className:"fab fa-linkedin-in"}),c.a.createElement("a",{href:"https://www.linkedin.com/in/marcin-g\xf3ralczyk-39a164192/"},"Linkedin")),c.a.createElement("div",{className:"item"},c.a.createElement("i",{className:"fab fa-github"}),c.a.createElement("a",{href:"https://github.com/emerengg"},"Github")))}),o=(t(30),function(){return c.a.createElement("section",{className:"about"},c.a.createElement("h1",null,"O mnie"),c.a.createElement("p",null,"Jestem full-stack developerem zajmuj\u0105cym si\u0119 tworzeniem aplikacji webowych w technologiach ",c.a.createElement("span",null,"Python")," oraz ",c.a.createElement("span",null,"Javascript"),". W swoich projektach wykorzystuj\u0119 g\u0142\xf3wnie frameworki ",c.a.createElement("span",null,"Django"),", ",c.a.createElement("span",null,"Django REST Framework")," oraz ",c.a.createElement("span",null,"ReactJs"),"."),c.a.createElement(i,null),c.a.createElement(s,null))}),m=t(14),u=t(15),p=t(20),d=t(16),f=t(21),g=(t(31),function(e){var a=e.name,t=e.content,n=e.image,r=e.frontend,l=e.backend,i=e.demo,s=e.github;return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"img-refs"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:n,alt:"name"})),c.a.createElement("div",{className:"references"},c.a.createElement("a",{href:i,className:"refs"},"demo"),c.a.createElement("a",{href:s,className:"refs"},"github"))),c.a.createElement("div",{className:"desc"},c.a.createElement("h3",null,a),c.a.createElement("p",{className:"content"},t),r.length>0&&c.a.createElement("div",{className:"frontend"},c.a.createElement("h4",null,"Frontend"),c.a.createElement("p",null,r.map(function(e,a){return c.a.createElement("small",{key:a},e)}))),l.length>0&&c.a.createElement("div",{className:"backend"},c.a.createElement("h4",null,"Backend"),c.a.createElement("p",null,l.map(function(e,a){return c.a.createElement("small",{key:a},e)})))))}),E=(t(32),t(17)),h=t.n(E),w=t(18),b=t.n(w),k=t(19),y=t.n(k),j={app1:{name:"Face detection app",content:"Aplikacja, kt\xf3rej zadaniem jest wykrywanie twarzy ze zdj\u0119\u0107. Utworzony interfejs umo\u017cliwia u\u017cytkownikowi przesy\u0142anie zdj\u0119\u0107, wy\u015bwietlanie oraz blurowanie wykrytych twarzy.",image:h.a,frontend:["reactjs","redux","testing library","html","css"],backend:["django","django REST framework","openCV"],demo:"https://emerengg.github.io/face-detection-app/",github:"https://github.com/emerengg/face-detection-app",isSelected:!0},app2:{name:"Reaction time based game",content:"Gra oparta na czasie reakcji, polegaj\u0105ca na zdobyciu jak najwi\u0119kszej ilo\u015bci punkt\xf3w, mieszcz\u0105c si\u0119 w wyznaczonym limicie czasu. Dodatkowo, udost\u0119pnia funkcjonalno\u015bci pozwalaj\u0105ce na zapis uzyskanego wyniku oraz wy\u015bwietlanie drabinki z najlepszymi wynikami uzyskanymi przez innych graczy.",image:b.a,frontend:["reactjs","testing library","html","css"],backend:["django","django REST framework"],demo:"https://emerengg.github.io/reaction-time-based-game/",github:"https://github.com/emerengg/reaction-time-based-game",isSelected:!1},app3:{name:"Currency calculator",content:"Aplikacja pozwalaj\u0105ca na przeliczenie warto\u015bci walut wed\u0142ug kurs\xf3w pobieranych z exchangeratesapi.io, ponadto udost\u0119pniaj\u0105ca mo\u017cliwo\u015b\u0107 prze\u015bledzenia historii kurs\xf3w wybranych walut za pomoc\u0105 wykres\xf3w Chart.js.",image:y.a,frontend:["reactjs","chartjs","testing library","html","css"],backend:[],demo:"https://emerengg.github.io/currency-calculator/",github:"https://github.com/emerengg/currency-calculator",isSelected:!1}},v=function(e){function a(e){var t;Object(m.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).liClick=function(e){var a=t.state.apps,n=Object.values(a).find(function(a){return a.name===e}),c=Object.values(a).map(function(e){return e.name===n.name?e.isSelected=!0:e.isSelected=!1,e}),r=t.refs.app;r.classList.add("fadeOut"),setTimeout(function(){t.setState({apps:c,selectedApp:n}),r.classList.remove("fadeOut"),r.classList.add("fadeIn")},250),r.classList.remove("fadeIn")};var n=j.app1;return t.state={apps:j,selectedApp:n},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state.apps;return c.a.createElement("section",{className:"portfolio"},c.a.createElement("h1",null,"Portfolio"),c.a.createElement("div",{className:"projects"},Object.values(e).map(function(e,a){return c.a.createElement(g,{key:a,name:e.name,content:e.content,image:e.image,frontend:e.frontend,backend:e.backend,demo:e.demo,github:e.github})})))}}]),a}(n.Component),z=t(9),N=(t(43),function(){var e=Object(n.useRef)(null);return Object(n.useEffect)(function(){!function(){var a=1,t=.0035;setInterval(function(){a>=1?t=-t:a<=0&&(t=-t),a+=t,e.current.style.opacity=a},requestAnimationFrame)}()}),c.a.createElement("div",{className:"arrow"},c.a.createElement(z.Link,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:0,duration:500},"portfolio"),c.a.createElement(z.Link,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:0,duration:500},c.a.createElement("i",{className:"fas fa-chevron-down",ref:e})))});var O=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"brnd"},c.a.createElement("h3",null,"mgoralczyk.pl")),c.a.createElement(o,null),c.a.createElement(N,null)),c.a.createElement("main",null,c.a.createElement(v,null)),c.a.createElement("footer",null,c.a.createElement("div",{className:"fc"},c.a.createElement(i,null),c.a.createElement(s,null))))};l.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.53f17004.chunk.js.map