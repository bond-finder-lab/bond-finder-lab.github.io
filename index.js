!function(){"use strict";var e={691:function(e,t,n){t.__esModule=!0;var r=n(270),o=n(966);r.default.component("bond-row",{props:["row"],template:"#bond-row-template",computed:{moexUrl:function(){return"https://www.moex.com/ru/issue.aspx?code="+this.row.isin},sectorBadgeClass:function(){switch(this.row.sector){case 1:case 2:return"badge badge-pill badge-success";case 3:return"badge badge-pill badge-warning"}},sectorName:function(){switch(this.row.sector){case 1:return"ОФЗ";case 2:return"Муни";case 3:return"Корп"}},listLevelBadgeClass:function(){var e=this.row;switch(e.listLevel){case 1:return"badge badge-pill badge-success";case 2:return"badge badge-pill badge-warning";case 3:return e.isHighRisk?"badge badge-pill badge-dark bond-finder-ir-badge":"badge badge-pill badge-danger"}},listLevelName:function(){var e=this.row;switch(e.listLevel){case 1:return"I";case 2:return"II";case 3:return e.isHighRisk?" ":"III"}},showCouponStar:function(){return o.isVarCoupon(this.row)||o.hasOffer(this.row)},rowClass:function(){return this.row.infoUrl?"bond-finder-separator":null}}})},607:function(e,t,n){var r=n(270);n(691);var o=n(871),i=n(829),a=n(966),s=n(310),u=n(403),l=Date.now(),c="vue-root",d="cordova"in window,f={nightMode:i.default.getMode(),collapseForm:window.matchMedia&&window.matchMedia("(max-width: 992px)").matches};function h(){s.save(f.settings);for(var e=f.settings,t=[g(e.min_year),e.min_month,"01"].join("-"),n=[g(e.year),e.month,"01"].join("-"),r=Number(e.maxListLevel),o=Number(e.maxPerYear),i=Number(e.requiredCouponMonth),u=Number(e.maxAmort),l=Number(e.minTotalTradesPerc),c=Number(e.couponType),d=c>0,h=c>1,m=0,p=!1,v=!1,w=!1,b=!1,y=!1,_=!1,M=!1,k=!1,x=0,O=f.reportRows;x<O.length;x++){var N=O[x];if(S(N)?(m++,N.fits=!0,N.top=m<=20,y=y||a.isVarCoupon(N),_=_||a.hasOffer(N),p=p||N.inABI,v=v||N.inCBHY,w=w||N.isHighRisk,b=b||N.isQualOnly,N.infoUrl=null,N.closeYield||(!M&&a.isOFZ(N,"ПК")?(M=!0,N.infoUrl="https://bcs-express.ru/novosti-i-analitika/ofz-pk-s-priviazkoi-k-ruonia-kak-zashchitit-sredstva-ot-infliatsii"):!k&&a.isOFZ(N,"ИН")&&(k=!0,N.infoUrl="https://bcs-express.ru/novosti-i-analitika/ofz-in-ili-kak-garantirovano-zashchitit-sebia-ot-infliatsii"))):N.fits=N.top=!1,m>=1e3)break}function S(s){if(s.isHighRisk&&!e.highRisk)return!1;if(t.length<10||n.length<10)return!1;if(s.maturityDate<t||s.maturityDate>=n)return!1;if(e.sector1||e.sector2||e.sector3){if(1===s.sector&&!e.sector1)return!1;if(2===s.sector&&!e.sector2)return!1;if(3===s.sector&&!e.sector3)return!1}if(s.listLevel>r)return!1;if(o>-1){if(-12===s.couponMonths[0])return!1;if(s.couponMonths.length>o)return!1}if(i>0&&s.couponMonths.indexOf(i)<0)return!1;if(!d&&a.isVarCoupon(s))return!1;if(!h&&a.hasOffer(s))return!1;if(s.minDaysBetweenAmort>0){if(-1===u)return!1;if(s.minDaysBetweenAmort<u)return!1}return!(s.totalTradesPerc<l)}f.totalFits=m,f.showAll=m/20<1.5,f.hasABI=p,f.hasCBHY=v,f.hasHighRisk=w,f.hasQualOnly=b,f.showVarCouponNotice=y,f.showOfferNotice=_}function m(){Date.now()-l>1234e3&&location.reload()}function g(e){return(e=String(e)).length<4?"2000":e.length>4?"3000":e}i.default.updateMarkup(),d&&(document.addEventListener("deviceready",(function(){document.addEventListener("resume",m,!1)}),!1),document.addEventListener("deviceconfigchange",(function(){i.default.updateMarkup()}),!1),document.addEventListener("click",(function(e){var t=e.target;"A"!==t.tagName||function(e){if(!e)return!0;var t=e.indexOf("moex.com/")>-1?"moex":"other",n="confirm-external-link-"+t;if(!u.default.load(n)){if(!confirm("Пожалуйста, подтвердите переход на "+("moex"===t?"сайт Московской Биржи":"внешний сайт")))return!1;u.default.save(n,"1")}return!0}(t.href)||(e.preventDefault(),e.stopPropagation())}),!1)),o.default((function(e){f.settings=s.load(),f.reportDate=e.date,f.reportRows=e.rows;var t,n=e.error;f.reportError=n,h(),new r.default({el:"#vue-root",data:f,watch:{nightMode:{handler:function(e){return i.default.setMode(e)}},settings:{deep:!0,handler:function(){return h()}}},methods:{alertClose:function(){return u.default.save("alert-v1",!0)}}}),document.getElementById(c).style.display="",document.getElementById("bond-finder-loading").style.display="none",d||((t=document.documentElement).style.fontSize="medium",t.style.fontSize=1600/parseFloat(getComputedStyle(t).fontSize)+"%")}))},871:function(e,t,n){t.__esModule=!0;var r=n(403),o="https://bond-finder-lab.github.io/backend/report-v1.json?_="+Date.now(),i="report-cache-v1";t.default=function(e){var t=new XMLHttpRequest;function n(t){try{e(function(e){for(var t=e.cols,n=e.rows,r={},o=0,i=t;o<i.length;o++){var a=i[o];r[a]=t.indexOf(a)}return{date:String(e.date),rows:n.map((function(e){return{isin:String(e[r.isin]),name:String(e[r.name]),sector:Number(e[r.sector]),listLevel:Number(e[r.list_level]),totalTradesPerc:Number(e[r.total_trades_perc]),maturityDate:String(e[r.maturity_date]),minDaysBetweenAmort:Number(e[r.min_days_between_amort]),couponMonths:e[r.coupon_months],couponValues:e[r.coupon_values],closeYield:Number(e[r.close_yield]),inABI:Boolean(e[r.in_abi]),inCBHY:Boolean(e[r.in_cbhy]),isHighRisk:Boolean(e[r.high_risk]),isQualOnly:Boolean(e[r.qual]),fits:!1,top:!1,infoUrl:null}}))}}(JSON.parse(t)))}catch(t){e({error:!0,date:null,rows:[]})}}t.open("GET",o,!0),t.timeout=1e4,t.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var e=this.responseText;r.default.save(i,e),n(e)}else n(r.default.load(i))},t.send()}},829:function(e,t,n){t.__esModule=!0;var r,o,i=n(403),a="night",s=!1;function u(){return r<0?function(){try{return window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches}catch(e){return!1}}():r>0}function l(e,t,n){var r=e.classList;n?r.add(t):r.remove(t)}function c(){l(document.documentElement,"night",u())}o=i.default.load(a),r=null==o?-1:Number(o),document.addEventListener("scroll",(function(){var e=window.pageYOffset>0;s!==e&&(l(document.documentElement,"scrolled",e),s=e)}),!1),t.default={getMode:function(){return r},setMode:function(e){r=e,i.default.save(a,e),c()},updateMarkup:c}},966:function(e,t){function n(e){return r(e,"ПК")}function r(e,t){return 1===e.sector&&e.name.substr(0,7)==="ОФЗ-"+t+" "}t.__esModule=!0,t.isOFZ=r,t.isVarCoupon=function(e){return e.couponValues.length>1||n(e)},t.hasOffer=function(e){var t=e.couponValues;return null===t[t.length-1]&&!n(e)}},310:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.__esModule=!0;var o=n(403),i="settings-v1",a=new Date,s=new Date(a.getFullYear()+1,a.getMonth(),1),u=new Date(a.getFullYear()+4,a.getMonth(),1);function l(e){var t=1+e.getMonth();return t>9?String(t):"0"+t}var c={min_month:l(s),month:l(u),min_year:String(s.getFullYear()),year:String(u.getFullYear()),sector1:!0,sector2:!0,sector3:!0,highRisk:!0,maxListLevel:"2",maxPerYear:"4",requiredCouponMonth:"0",couponType:"0",maxAmort:"90",minTotalTradesPerc:"50"};t.load=function(){var e=r({},c),t=o.default.load(i,!0);if(t&&"object"==typeof t)for(var n=0,a=Object.keys(c);n<a.length;n++){var s=a[n];s in t&&(e[s]=t[s])}return e},t.save=function(e){o.default.save(i,e,!0)}},403:function(e,t){function n(e){return"bond-finder-"+e}t.__esModule=!0,t.default={load:function(e,t){void 0===t&&(t=!1);try{var r=localStorage.getItem(n(e));return t?JSON.parse(r):r}catch(e){return null}},save:function(e,t,r){void 0===r&&(r=!1);try{localStorage.setItem(n(e),(r?JSON.stringify:String)(t))}catch(e){}}}},270:function(e){e.exports={default:Vue}}},t={};!function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(607)}();
//# sourceMappingURL=index.js.map