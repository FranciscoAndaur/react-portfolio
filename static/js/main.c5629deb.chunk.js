(this["webpackJsonpreact-portolio"]=this["webpackJsonpreact-portolio"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(0),a=n.n(c),r=n(22),s=n.n(r),l=(n(47),n(8)),o=n(13),d=n(11),j=n(10),b=n(24),u=n(6),h=n(15),m=n(25),x=n(41),p=(n(48),n(21)),f=n(26),O=function(){return Object(i.jsx)("footer",{className:"mt-5",children:Object(i.jsx)(h.a,{fluid:!0,children:Object(i.jsxs)(p.a,{className:"border-top justify-content-between p-3",children:[Object(i.jsx)(f.a,{className:"p-0",md:3,sm:12,children:"@hcaktehplaent"}),Object(i.jsx)(f.a,{className:"p-0 d-flex justify-content-end",md:3,children:"Made with \u2665 by Francisco Andaur."})]})})})},g=n(37),k=function(e){return Object(i.jsx)(g.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(i.jsx)(h.a,{fluid:!0,children:Object(i.jsx)(p.a,{className:"justify-content-center py-5",children:Object(i.jsxs)(f.a,{md:8,sm:12,children:[e.title&&Object(i.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.title&&Object(i.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.title&&Object(i.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})},v=n(19),y=n.p+"static/media/DevDream.0281847c.png",w=n.p+"static/media/EventGenerator.c8cc63af.png",N=n.p+"static/media/Linkedin.585f9258.png",C=n.p+"static/media/Komorebi.e59b7b78.png",T=n(35),I=function(e){var t=Object(T.b)({opacity:1,from:{opacity:0}});return Object(i.jsxs)(T.a.div,{className:"f-card-info",style:t,children:[Object(i.jsx)("p",{className:"f-card-title",children:e.title}),Object(i.jsx)("p",{className:"f-card-sub-title",children:e.subTitle}),Object(i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})},S=function(e){return Object(i.jsxs)("div",{className:"d-inline-block f-card",onClick:function(t){return e.click(e.item)},children:[Object(i.jsx)("img",{className:"f-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(i.jsx)(I,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},F=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var n=Object(v.a)(c.state.items);n[e].selected=!n[e].selected,n.forEach((function(t){t.id!==e&&(t.selected=!1)})),c.setState({items:n})},c.makeItems=function(e){return e.map((function(e){return Object(i.jsx)(S,{item:e,click:function(t){return c.handleCardClick(e.id,t)}},e.id)}))},c.state={items:[{id:0,title:"Komorebi",subTitle:"Plant Catalogue and Care app.",imgSrc:C,link:"https://github.com/FranciscoAndaur/new-leaf",selected:!1},{id:1,title:"Linked in",subTitle:"Hit me up, on Linked-in.",imgSrc:N,link:"https://www.linkedin.com/in/franciscoandaur/",selected:!1},{id:2,title:"DevDream",subTitle:"Instagram for dreams.",imgSrc:y,link:"https://vimeo.com/manage/470795692/general",selected:!1},{id:3,title:"Event Generator",subTitle:"Event Generator",imgSrc:w,link:"https://github.com/FranciscoAndaur/kfc-front-end",selected:!1}]},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsx)(h.a,{fluid:!0,children:Object(i.jsx)(p.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),n}(a.a.Component),A=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(k,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(i.jsx)(F,{})]})},R=function(e){return Object(i.jsx)(h.a,{fluid:!0,children:Object(i.jsx)(p.a,{className:"justify-content-center",children:Object(i.jsx)(f.a,{md:8,children:e.children})})})},D=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(k,{title:e.title}),Object(i.jsxs)(R,{children:[Object(i.jsxs)("p",{children:["Hello, my name is Francisco.  I'm a full-stack software engineer with experience in ",Object(i.jsx)("strong",{children:"Ruby, Ruby on Rails, Javascript, and React"}),". My dream is to live in a cabin in the mountains, but for now, I reside in the Bronx."]}),Object(i.jsxs)("p",{children:["After completing a six-month intensive code camp at Flatiron School I've realized that I am passionate about making human connections through technology. Currently learning and gaining more experience with ",Object(i.jsx)("strong",{children:"React Native, Python, Javascript, CSS, and SQL"}),"."]}),Object(i.jsxs)("p",{children:["My latest project, Dev Dream, is a dream log for people. You can check it out ",Object(i.jsx)("a",{href:"https://github.com/FranciscoAndaur/DevDream",target:"_blank",rel:"noopener noreferrer",children:"here"})," , or on the homepage. It is built with ",Object(i.jsx)("strong",{children:"React, Redux, and Grommet.io"}),".  However, I will be rebuilding it as a mobile app using Redux in the following months."]}),Object(i.jsx)("p",{children:"When I'm not learning something new, I'm probably running or cycling around this wonderful city."})]})]})},L=function(e){return Object(i.jsx)("p",{children:"Contact works!"})},B=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={title:"Francisco Andaur",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Be Relentless",subTitle:"Projects",text:"Check out my projects below."},about:{title:"About me"},contact:{title:"Be Relentless"}},i}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)(b.a,{children:Object(i.jsxs)(h.a,{className:"p-0",fluid:!0,children:[Object(i.jsxs)(m.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(i.jsx)(m.a.Brand,{children:"Francisco Andaur"}),Object(i.jsx)(m.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(i.jsx)(m.a.Collapse,{id:"navbar-toggle",children:Object(i.jsxs)(x.a,{className:"ml-auto",children:[Object(i.jsx)(b.b,{className:"nav-link",to:"/",children:"Home"}),Object(i.jsx)(b.b,{className:"nav-link",to:"/about",children:"About"}),Object(i.jsx)(b.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(i.jsx)(u.a,{path:"/",exact:!0,render:function(){return Object(i.jsx)(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(i.jsx)(u.a,{path:"/about",render:function(){return Object(i.jsx)(D,{title:e.state.about.title})}}),Object(i.jsx)(u.a,{path:"/contact",render:function(){return Object(i.jsx)(L,{title:e.state.contact.title})}}),Object(i.jsx)(O,{})]})})}}]),n}(a.a.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};n(57);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root")),E()}},[[58,1,2]]]);
//# sourceMappingURL=main.c5629deb.chunk.js.map