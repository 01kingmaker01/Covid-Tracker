(this.webpackJsonpadvice_app=this.webpackJsonpadvice_app||[]).push([[0],{12:function(e,a,t){e.exports={container:"Cards_container__3FwxG",card:"Cards_card__jmFxy",green:"Cards_green__V-3nz",blue:"Cards_blue__Czzz0",red:"Cards_red__2fz54",infected:"Cards_infected__3WIfi",recovered:"Cards_recovered__3Az4I",deaths:"Cards_deaths__ERTeB",Chart:"Cards_Chart__IkJjB"}},18:function(e,a,t){e.exports={container:"Chart_container__2JzrA",card:"Chart_card__1NtaD",chartWrapper:"Chart_chartWrapper__VDJSC",blue:"Chart_blue__354FY",red:"Chart_red__1GwLW",chartAreaWrapper:"Chart_chartAreaWrapper__3mBti"}},237:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(74),o=t.n(c),l=t(8),s=t.n(l),u=t(13),i=t(75),d=t(76),m=t(86),p=t(85),f=t(255),h=t(259),_=t(256),v=t(257),E=t(12),b=t.n(E),C=t(35),g=t.n(C),y=t(36),x=t.n(y),N=function(e){var a=e.data,t=a.last_update,r=a.total_cases,c=a.total_deaths,o=a.total_recovered;return n.a.createElement("div",{className:b.a.container},n.a.createElement(f.a,{container:!0,spacing:4,justify:"center"},n.a.createElement(f.a,{elevation:5,item:!0,component:h.a,xs:12,md:3,className:x()(b.a.card,b.a.infected)},n.a.createElement(_.a,null,n.a.createElement(v.a,{className:b.a.blue,gutterBottom:!0},"Infected"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(g.a,{start:0,end:r,duration:1.5,separator:","})),n.a.createElement(v.a,{color:"textSecondary"},new Date(t).toDateString()),n.a.createElement(v.a,{variant:"body2"},"Number of Active Cases of COVID-19"))),n.a.createElement(f.a,{elevation:5,item:!0,component:h.a,xs:12,md:3,className:x()(b.a.card,b.a.recovered)},n.a.createElement(_.a,null,n.a.createElement(v.a,{className:b.a.green,gutterBottom:!0},"Recovered"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(g.a,{start:0,end:o,duration:1.5,separator:","})),n.a.createElement(v.a,{color:"textSecondary"},new Date(t).toDateString()),n.a.createElement(v.a,{variant:"body2"},"Number of Recoveries from COVID-19"))),n.a.createElement(f.a,{elevation:5,item:!0,component:h.a,xs:12,md:3,className:x()(b.a.card,b.a.deaths)},n.a.createElement(_.a,null,n.a.createElement(v.a,{className:b.a.red,gutterBottom:!0},"Deaths"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(g.a,{start:0,end:c,duration:1.5,separator:","})),n.a.createElement(v.a,{color:"textSecondary"},new Date(t).toDateString()),n.a.createElement(v.a,{variant:"body2"},"Number of Deaths caused by COVID-19")))))},k=t(34),w=t(37),j=t.n(w),D="https://covid19-api.org/api",O=function(){var e=Object(u.a)(s.a.mark((function e(a){var t,r,n,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a||""===a){e.next=10;break}return e.next=4,j.a.get("".concat(D,"/timeline/").concat(a));case 4:return t=e.sent,r=t.data,n=r.map((function(e){var a=e.last_update;return{total_cases:e.cases,total_deaths:e.deaths,total_recovered:e.recovered,last_update:a}})),e.abrupt("return",n);case 10:return e.next=12,j.a.get("".concat(D,"/timeline/"));case 12:return c=e.sent,o=c.data,e.abrupt("return",o);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(D,"/countries"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.map((function(e){return{name:e.name,alpha2:e.alpha2}})));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=t(81),z=t(18),W=t.n(z),I=function(e){var a=e.country,t=(e.data,Object(r.useState)([])),c=Object(k.a)(t,2),o=c[0],l=c[1];if(Object(r.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,O(a);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l,a]),o.length){var i=Math.round(o[0].total_deaths/o[0].total_cases*100),d=o.filter((function(e){return e.last_update.match("01T")}));d.unshift(o[0]),d.push(o[o.length-1])}var m=o.length?n.a.createElement(S.Line,{data:{labels:d.map((function(e){var a=e.last_update;return new Date(a).toDateString()})),datasets:[{data:d.map((function(e){return e.total_recovered})),label:"Recovered",borderColor:"green",backgroundColor:" rgba(0, 255, 0, 0.3)",fill:!0},{data:d.map((function(e){return e.total_deaths})),label:"Deaths",borderColor:"red",backgroundColor:" rgb(255, 0, 0)",fill:!0},{data:d.map((function(e){return e.total_cases})),label:"Infected",borderColor:"#3333ff",fill:!0}]}}):null;return n.a.createElement("div",{className:W.a.container},n.a.createElement("div",{className:W.a.chartWrapper},n.a.createElement("div",{className:W.a.chartAreaWrapper},m," "),n.a.createElement("i",null,n.a.createElement("h6",null,n.a.createElement("u",null," Data Collected From 22-Jan-2020")))),n.a.createElement("div",{className:W.a.card},n.a.createElement("h4",null,"For every ",n.a.createElement("span",{className:W.a.blue},"100")," people in the community who had gotten infected, approximately",n.a.createElement("span",{className:W.a.red}," ",i," ")," ended up dying."),n.a.createElement("h3",null,"Made With ",n.a.createElement("span",null,"\u2764")," by",n.a.createElement("u",null,n.a.createElement("i",null," ",n.a.createElement("a",{href:"https://github.com/01kingmaker01/Covid-Tracker"}," ","Ketan Chavan"))))))},B=t(260),F=t(258),J=t(24),L=t.n(J),R=function(e){var a=e.handleCountry,t=Object(r.useState)([]),c=Object(k.a)(t,2),o=c[0],l=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),n.a.createElement(B.a,{variant:"filled",className:L.a.formControl},n.a.createElement(F.a,{className:L.a.select,defaultValue:"",onChange:function(e){return a(e.target.value)}},n.a.createElement("option",{value:"",className:L.a.option},"Global"),o.map((function(e,a){return n.a.createElement("option",{className:L.a.option,key:a,value:e.alpha2},e.name)}))))},V=t(25),G=t.n(V),K=t(82),M=t(84),P=t.n(M),T=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={data:{},isLoading:!0,country:""},e.handleCountry=function(){var a=Object(u.a)(s.a.mark((function a(t){var r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O(t);case 2:r=a.sent,e.setState({data:r[0],country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:a=e.sent,this.setState({data:a[0],isLoading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isLoading?n.a.createElement("div",{className:G.a.App},n.a.createElement(K.DotLoader,{loading:!0}),"Fetching Data"):n.a.createElement("div",null,n.a.createElement("div",{className:G.a.container},n.a.createElement("img",{src:P.a,className:G.a.image,alt:"covid"}),n.a.createElement(N,{data:this.state.data}),n.a.createElement(R,{handleCountry:this.handleCountry})),n.a.createElement("div",{className:G.a.graphContainer},n.a.createElement(I,{data:this.state.data,country:this.state.country})))}}]),t}(r.Component);o.a.render(n.a.createElement(T,null),document.querySelector("#root"))},24:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__2Kb3K",select:"CountryPicker_select__1X8NR",option:"CountryPicker_option__25BfR"}},25:function(e,a,t){e.exports={container:"App_container__1z2Z7",graphContainer:"App_graphContainer__3oOhz",image:"App_image__3yXUA",App:"App_App__qzjZr"}},84:function(e,a,t){e.exports=t.p+"static/media/image.d7265326.png"},89:function(e,a,t){e.exports=t(237)}},[[89,1,2]]]);
//# sourceMappingURL=main.4c78591e.chunk.js.map