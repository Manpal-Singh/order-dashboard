(this["webpackJsonporder-dashboard"]=this["webpackJsonporder-dashboard"]||[]).push([[0],{245:function(e,t,a){e.exports=a(573)},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){},254:function(e,t,a){},573:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(237),l=a.n(o),c=(a(250),a(238)),u=a(239),m=a(243),i=a(242);a(251);var s=function(){return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("div",{className:"logo"},"Order Dashboard"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Home"),n.a.createElement("li",null,"About"),n.a.createElement("li",null,"Service")))))};a(252),a(253);var d=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"box"},n.a.createElement("p",null,e.Text1," ",e.TodayOrderCount),n.a.createElement("p",null,e.Text2," ",e.WeekOrderCount)))};a(254);var E=function(){return n.a.createElement("div",null,n.a.createElement("footer",null,n.a.createElement("div",{className:"inner"},n.a.createElement("p",null,"@copyright 2020"))))},h=a(587),v=a(590),O=a(591),p=a(585),g=a(588),T=a(589),f=a(586);var D=function(e){var t=e.orderTableData;return n.a.createElement("div",null,n.a.createElement(p.a,{className:"order-table",component:f.a},n.a.createElement(h.a,{"aria-label":"simple table"},n.a.createElement(g.a,null,n.a.createElement(T.a,null,n.a.createElement(O.a,null,"ORDER NO"),n.a.createElement(O.a,{align:"center"},"TOTAL AMOUNT"),n.a.createElement(O.a,{align:"center"},"TOTAL QUANTITY"),n.a.createElement(O.a,{align:"center"},"USER NAME"))),n.a.createElement(v.a,null,t.map((function(e){return n.a.createElement(T.a,{key:e.orderNum},n.a.createElement(O.a,{component:"th",scope:"row"},e.orderNum),n.a.createElement(O.a,{align:"center"},e.amount),n.a.createElement(O.a,{align:"center"},e.quantity),n.a.createElement(O.a,{align:"center",style:{textTransform:"capitalize"}},e.userName))}))))))};var b=function(e){var t=e.userTableData;return n.a.createElement("div",null,n.a.createElement(p.a,{className:"order-table",component:f.a},n.a.createElement(h.a,{"aria-label":"simple table"},n.a.createElement(g.a,null,n.a.createElement(T.a,null,n.a.createElement(O.a,null,"USER NAME"),n.a.createElement(O.a,{align:"center"},"TOTAL AMOUNT"),n.a.createElement(O.a,{align:"center"},"TOTAL QUANTITY"),n.a.createElement(O.a,{align:"center"},"CITY"))),n.a.createElement(v.a,null,t.map((function(e){return n.a.createElement(T.a,{key:e.orderNum},n.a.createElement(O.a,{component:"th",scope:"row",style:{textTransform:"capitalize"}},e.userName),n.a.createElement(O.a,{align:"center"},e.amount),n.a.createElement(O.a,{align:"center"},e.quantity),n.a.createElement(O.a,{align:"center"},e.region))}))))))};var y=function(e){var t=e.detailTableData;return n.a.createElement("div",null,n.a.createElement(p.a,{className:"order-table",component:f.a},n.a.createElement(h.a,{"aria-label":"simple table"},n.a.createElement(g.a,null,n.a.createElement(T.a,null,n.a.createElement(O.a,null,"USER NAME"),n.a.createElement(O.a,{align:"center"},"ORDER NO"),n.a.createElement(O.a,{align:"center"},"ORDER DATE"),n.a.createElement(O.a,{align:"center"},"STATUS"),n.a.createElement(O.a,{align:"center"},"QUANTITY"),n.a.createElement(O.a,{align:"center"},"TOTAL AMOUNT"),n.a.createElement(O.a,{align:"center"},"CITY"))),n.a.createElement(v.a,null,t.map((function(e){return n.a.createElement(T.a,{key:e.orderNum},n.a.createElement(O.a,{component:"th",scope:"row",style:{textTransform:"capitalize"}},e.userName),n.a.createElement(O.a,{align:"center"},e.orderNum),n.a.createElement(O.a,{align:"center"},e.createdDate),n.a.createElement(O.a,{align:"center",style:{textTransform:"capitalize"}},e.status),n.a.createElement(O.a,{align:"center"},e.quantity),n.a.createElement(O.a,{align:"center"},e.amount),n.a.createElement(O.a,{align:"center",style:{textTransform:"capitalize"}},e.region))}))))))},N=a(241),A=a.n(N);var C=function(e){var t=e.dateData,a=e.amountData;return n.a.createElement("div",null,n.a.createElement(A.a,{option:{xAxis:{type:"category",data:t},yAxis:{type:"value"},series:[{data:a,type:"line"}]}}))},k=a(140),M=a.n(k);M.a.initializeApp({apiKey:"AIzaSyCMdKZ0dv7AVqBHmQqpKkAZ3NU5DCPgzLk",authDomain:"order-dashboard-7a2cd.firebaseapp.com",databaseURL:"https://order-dashboard-7a2cd.firebaseio.com",projectId:"order-dashboard-7a2cd",storageBucket:"order-dashboard-7a2cd.appspot.com",messagingSenderId:"89638021951",appId:"1:89638021951:web:34298ad97f3f93a83c818a",measurementId:"G-YJ7490ZPC3"});var x=M.a,w=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={totalOrders:[],topFiveOrder:[],bottomFiveOrder:[],topFiveUsers:[],bottomFiveUsers:[],dateData:[],amountData:[],currentDayOrderCount:0,currentDayOrderAmount:0,currentWeekOrderAmount:0,currentWeekOrderCount:0,currentMonthOrderAmount:0,curentMonthOrderCount:0,lastMonthOrderAmount:0,lastMonthOrderCount:0},r}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.database().ref("orders").on("value",(function(t){for(var a=t.val(),r=[],n=0;n<a.length;n++)r.push({orderNum:a[n].orderNum,userName:a[n].userName,createdDate:a[n].createdDate,status:a[n].status,amount:a[n].amount,quantity:a[n].quantity,region:a[n].region});var o=[].concat(r);o=o.sort((function(e,t){return t.orderNum-e.orderNum}));var l=[].concat(r);l=l.sort((function(e,t){return e.orderNum-t.orderNum}));var c=[].concat(r);c=c.sort((function(e,t){return t.amount-e.amount}));var u=[].concat(r);u=u.sort((function(e,t){return e.amount-t.amount}));var m=[].concat(r);m=m.map((function(e){return e.createdDate}));var i=[].concat(r);i=i.map((function(e){return e.amount}));var s=new Date;s=s.toISOString().slice(0,10);for(var d=0,E=0,h=0;h<r.length;h++)s===r[h].createdDate&&(d+=r[h].quantity,E+=r[h].amount);for(var v=[].concat(r),O=0,p=0,g=new Date,T=g.getDay(),f=0;T>=0;T--,f++)for(var D=new Date(g.getFullYear(),g.getMonth(),g.getDate()-f+1).toISOString().slice(0,10),b=0;b<r.length;b++)D===r[b].createdDate&&(O+=r[b].amount,p+=r[b].quantity);for(var y=0,N=0,A=g.getDate(),C=0;A>=1;A--,C++)for(var k=new Date(g.getFullYear(),g.getMonth(),g.getDate()-C+1).toISOString().slice(0,10),M=0;M<v.length;M++)k===v[M].createdDate&&(y+=v[M].amount,N+=v[M].quantity);for(var x=0,w=0,U=1;U<=31;U++)for(var S=new Date,F=new Date(S.getFullYear(),S.getMonth()-1,1+U).toISOString().slice(0,10),I=0;I<v.length;I++)F===v[I].createdDate&&(x+=v[I].amount,w+=v[I].quantity);e.setState({totalOrders:r,topFiveOrder:o.slice(0,5),bottomFiveOrder:l.slice(0,5),topFiveUsers:c.slice(0,5),bottomFiveUsers:u.slice(0,5),dateData:m,amountData:i,currentDayOrderCount:d,currentDayOrderAmount:E,currentWeekOrderCount:p,currentWeekOrderAmount:O,currentMonthOrderAmount:y,currentMonthOrderCount:N,lastMonthOrderAmount:x,lastMonthOrderCount:w})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"conatiner"},n.a.createElement(s,null),n.a.createElement("div",{className:"box-outer"},n.a.createElement(d,{Text1:"Today\u2019s total  number of Orders - ",Text2:"Current week total order\u2019s count - ",TodayOrderCount:this.state.currentDayOrderCount,WeekOrderCount:this.state.currentWeekOrderCount}),n.a.createElement(d,{Text1:"Today\u2019s total  Order\u2019s amount - ",Text2:"Current week total order\u2019s amount - ",TodayOrderCount:this.state.currentDayOrderAmount,WeekOrderCount:this.state.currentWeekOrderAmount}),n.a.createElement(d,{Text1:"Current month total order\u2019s count - ",Text2:"Last month total order\u2019s count - ",TodayOrderCount:this.state.currentMonthOrderCount,WeekOrderCount:this.state.lastMonthOrderCount}),n.a.createElement(d,{Text1:"Current month total order\u2019s amount -",Text2:"Last month total order\u2019s amount-",TodayOrderCount:this.state.currentMonthOrderAmount,WeekOrderCount:this.state.lastMonthOrderAmount})),n.a.createElement(C,{dateData:this.state.dateData,amountData:this.state.amountData}),n.a.createElement("h2",null,"Top five Order "),n.a.createElement(D,{orderTableData:this.state.topFiveOrder}),n.a.createElement("h2",null,"Bottom five Order "),n.a.createElement(D,{orderTableData:this.state.bottomFiveOrder}),n.a.createElement("h2",null,"Top five Users "),n.a.createElement(b,{userTableData:this.state.topFiveUsers}),n.a.createElement("h2",null,"Bottom five Users "),n.a.createElement(b,{userTableData:this.state.bottomFiveUsers}),n.a.createElement("h2",null,"Detail Order Report "),n.a.createElement(y,{detailTableData:this.state.totalOrders}),n.a.createElement(E,null))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[245,1,2]]]);
//# sourceMappingURL=main.1b178ab9.chunk.js.map