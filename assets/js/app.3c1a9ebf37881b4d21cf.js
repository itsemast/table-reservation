webpackJsonp([1],{0:function(e,t){},GqtT:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return 4!==e.view?a("div",{ref:"tremReservation",staticClass:"trem-reservation",style:[e.canvasLoaded?{height:e.envelopeHeight}:{}],attrs:{id:"reservation"}},[a("transition",{attrs:{name:"fade",mode:"in-out"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===e.view&&!0===e.canvasLoaded,expression:"(view === 0) && (canvasLoaded === true)"}],ref:"reservationOne",staticClass:"reservation1"},[a("div",{staticClass:"envelope",style:[e.canvasLoaded?{height:e.envelopeHeight}:""]},[a("h3",[e._v(e._s(e.calendarTimeInitData.translation.header))]),e._v(" "),a("div",{staticClass:"people-form"},[a("div",{staticClass:"form-element"},[a("flat-pickr",{attrs:{config:e.dateConfig,placeholder:e.date,"input-class":"input"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),a("span",{staticClass:"trem-icon tremtr-icon-uniF10A",attrs:{"aria-hidden":"true"}})],1),e._v(" "),a("carousel",{attrs:{navigationEnabled:!0,paginationEnabled:!1,perPage:4,navigationNextLabel:e.caruselNavNext,navigationPrevLabel:e.caruselNavPrev}},e._l(e.arrayOfWorkingTimes,function(t,n){return a("slide",{key:t},[a("div",{attrs:{index:n},on:{click:function(t){e.test(t)}}},[e._v(e._s(t))])])})),e._v(" "),a("canvas",{staticClass:"context-menu-one",attrs:{id:"cc",width:"1000px",height:"1000px"}}),e._v(" "),a("a",{staticClass:"c0ffee-button",on:{click:e.book}},[e._v(e._s(e.calendarTimeInitData.translation.bookTableButton))])],1)])])]),e._v(" "),a("transition",{attrs:{name:"fade",mode:"in-out"}},[1===e.view?a("div",{ref:"reservationTwo",staticClass:"reservation2"},[a("div",{ref:"reservation2envelope",staticClass:"envelope"},[a("h3",[e._v(e._s(e.calendarTimeInitData.translation.header))]),e._v(" "),a("div",{staticClass:"info-form"},[a("div",{staticClass:"form-element table"},[a("h4",[e._v(e._s(e.calendarTimeInitData.translation.table))]),e._v(" "),a("h4",[e._v("№ "+e._s(e.table)+" ")])]),e._v(" "),a("div",{staticClass:"form-element guests"},[a("h4",[e._v(e._s(e.calendarTimeInitData.translation.for))]),e._v(" "),a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.persons,expression:"persons"}],attrs:{type:"number",max:e.maxPersons,min:"1"},domProps:{value:e.persons},on:{input:function(t){t.target.composing||(e.persons=t.target.value)}}}),e._v(" "),a("h4",[e._v(e._s(e.calendarTimeInitData.translation.people))])])]),e._v(" "),a("div",{staticClass:"form-element date"},[a("h4",[e._v(e._s(e.calendarTimeInitData.translation.on))]),e._v(" "),a("h4",[e._v(e._s(e.date))])]),e._v(" "),a("div",{staticClass:"form-element from"},[a("h4",[e._v(e._s(e.calendarTimeInitData.translation.from))]),e._v(" "),a("h4",[e._v(e._s(e.timeStart))])]),e._v(" "),a("div",{staticClass:"form-element cafe"},[a("h4",[e._v(e._s(e.calendarTimeInitData.translation.in))]),e._v(" "),a("h4",[e._v(e._s(e.calendarTimeInitData.translation.cafe))])]),e._v(" "),a("a",{staticClass:"c0ffee-button",attrs:{id:"change"},on:{click:e.change}},[e._v(e._s(e.calendarTimeInitData.translation.changeButton))])]),e._v(" "),a("div",{staticClass:"input-form"},[a("div",{staticClass:"input-element name"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"name",attrs:{placeholder:e.calendarTimeInitData.translation.name,type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""===this.name,expression:"(this.name === '')"}],staticClass:"trem-icon tremtr-icon-uniF101"}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=this.name,expression:"(this.name != '')"}],staticClass:"trem-icon tremtr-icon-uniF101",staticStyle:{color:"green"}})]),e._v(" "),a("div",{staticClass:"input-element email"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{input:!0,"is-danger":e.errors.has("email")},attrs:{name:"email",type:"email",placeholder:e.calendarTimeInitData.translation.email},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"trem-icon tremtr-icon-uniF10B",staticStyle:{color:"red"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.errors.has("email")&&""!=this.email,expression:"!errors.has('email') && (this.email != '')"}],staticClass:"trem-icon tremtr-icon-uniF10B",staticStyle:{color:"green"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.errors.has("email")&&""===this.email,expression:"!errors.has('email') && (this.email === '')"}],staticClass:"trem-icon tremtr-icon-uniF10B"})]),e._v(" "),a("div",{staticClass:"input-element phone"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:{rules:{regex:/^[0-9 ()+-]+$/}},expression:"{ rules: { regex: /^[0-9 ()+-]+$/} }"}],class:{input:!0,"is-danger":e.errors.has("phone")},attrs:{name:"phone",type:"text",placeholder:e.calendarTimeInitData.translation.phone},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"trem-icon tremtr-icon-uniF105",staticStyle:{color:"red"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.errors.has("phone")&&""!=this.phone,expression:"!errors.has('phone') && (this.phone != '')"}],staticClass:"trem-icon tremtr-icon-uniF105",staticStyle:{color:"green"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.errors.has("phone")&&""===this.phone,expression:"!errors.has('phone') && (this.phone === '')"}],staticClass:"trem-icon tremtr-icon-uniF105"})]),e._v(" "),a("div",{staticClass:"input-element message"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"message",attrs:{rows:"5",placeholder:e.calendarTimeInitData.translation.message,type:"text",wrap:"hard"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!==this.message,expression:"this.message !== ''"}],staticClass:"trem-icon tremtr-icon-uniF109",staticStyle:{color:"green"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""===this.message,expression:"this.message === ''"}],staticClass:"trem-icon tremtr-icon-uniF109"})]),e._v(" "),a("a",{staticClass:"c0ffee-button",attrs:{id:"confirm"},on:{click:e.confirm}},[e._v(e._s(e.calendarTimeInitData.translation.confirmButton))])])])]):e._e()]),e._v(" "),a("transition",{attrs:{name:"fade",mode:"in-out"}},[2===e.view?a("div",{staticClass:"reservation3"},[a("div",{staticClass:"confirmation"},[a("h3",[e._v(e._s(e.firstName))]),e._v(" "),a("hr")])]):e._e()])],1):e._e()},i=[],s={render:n,staticRenderFns:i};t.a=s},K4gw:function(e,t){},M93x:function(e,t,a){"use strict";function n(e){a("c0Dc"),a("gYG1")}var i=a("xJD8"),s=a("GqtT"),r=a("VU/8"),o=n,m=r(i.a,s.a,!1,o,"data-v-34da06fe",null);t.a=m.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i=a("M93x"),s=a("8+8L"),r=a("IZMb"),o=a.n(r),m=a("sUu7");n.a.use(m.a),n.a.use(o.a),n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#reservation",template:"<App/>",components:{App:i.a}})},ZjmE:function(e,t){},c0Dc:function(e,t){},gYG1:function(e,t){},uslO:function(e,t,a){function n(e){return a(i(e))}function i(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id="uslO"},xJD8:function(e,t,a){"use strict";var n=a("fZjL"),i=a.n(n),s=a("BO1k"),r=a.n(s),o=a("PJh5"),m=a.n(o),l=a("B+20"),c=a.n(l),d=a("K4gw"),h=(a.n(d),a("ZjmE")),v=(a.n(h),a("bA43")),u=a.n(v),f=a("/kJX");a.n(f);t.a={name:"reservation",components:{flatPickr:c.a,moment:m.a,Carousel:f.Carousel,Slide:f.Slide},props:{getView:{default:0}},data:function(){return{date:"",dateConfig:"",persons:"",maxPersons:"",timeStart:"",timeEnd:"",openHoursStart:"",openHoursEnd:"",table:"",name:"",message:"",email:"",phone:"",userSurname:"",view:0,canvas:"",width:0,canvasInitData:"",reservations:"",disabledTables:[""],toast:"",calendarTimeInitData:tremtr_data,weekDays1:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],weekDays0:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],trueTimeFormat:"",trueDateFormat:"",dbDateFormatForMoment:"YYYY/MM/DD",dbTimeFormatForMoment:"HH:mm",canvasLoaded:!1,windowWidth:0,windowHeight:0,peopleFormHeight:367,reservationOne:[],reservationTwo:[],arrayOfWorkingTimes:[" "],caruselNavNext:"👉",caruselNavPrev:"👈",clickedTimes:[],zoomStartScale:0,panning:!1,draglastX:0,draglastY:0,dragCurrentX:0,dragCurrentY:0,canvasMinZoom:0,canvasMaxZoom:0,canvasZoomedWidth:0,canvasZoomedHeight:0,canvasImageWidth:0,canvasImageHeight:0,canvasAllowedXPan:0,canvasAllowedYPan:0,canvasLastPinchScale:0,pausePanning:!1}},beforeMount:function(){this.width=window.innerWidth,this.trueTimeFormat=this.pickadateToFlatPickrFormat(this.calendarTimeInitData.time_format),this.trueDateFormat=this.pickadateToFlatPickrFormat(this.calendarTimeInitData.date_format),this.makeDateConfig()},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.getWindowWidth),window.addEventListener("resize",this.getWindowHeight)}),this.getWindowWidth(),this.getWindowHeight(),this.initCanvas(),document.getElementById("reservation").style.setProperty("--button-color",this.calendarTimeInitData.mainColor)},computed:{fillActive:function(){return"rgba("+this.calendarTimeInitData.fillActive+",0.4)"},activeStroke:function(){return"rgba("+this.calendarTimeInitData.fillActive+"0)"},fillHover:function(){return"rgba("+this.calendarTimeInitData.fillActive+",0.9)"},fillBooked:function(){return"rgba("+this.calendarTimeInitData.fillBooked+",0.4)"},bookedFrame:function(){return"rgba("+this.calendarTimeInitData.fillBooked+",1)"},envelopeHeight:function(){if(null!==this.canvas)return(this.canvas.height+this.peopleFormHeight).toString()+"px"},momentTimeFormat:function(){if(this.trueTimeFormat)return this.flatPickrToMomentTimeFormat(this.trueTimeFormat)},momentDateFormat:function(){if(this.trueDateFormat)return this.flatPickrToMomentDateFormat(this.trueDateFormat)},viewC:function(){return this.getView},isDissableDate:function(){return""===this.date},isDissableStartTime:function(){return""===this.timeStart||""===this.date},dayOfWeek:function(){return m.a.locale(this.calendarTimeInitData.translation.calendar),m()(this.date,this.momentDateFormat).locale("en").format("dddd").toLowerCase()},selectable:function(){""!==this.canvas&&""!==this.date&&""!==this.timeEnd&&""!==this.timeStart&&this.makeTablesSelectable()},firstName:function(){if(""!==this.name)return this.name.indexOf(" ")>=0?this.name.substr(0,this.name.indexOf(" "))+", "+this.calendarTimeInitData.translation.thanksAtTheEnd:this.name+", "+this.calendarTimeInitData.translation.thanksAtTheEnd}},watch:{date:function(e){if(this.arrayOfWorkingTimes=[],this.clickedTimes.map(function(e){return e.className-=" carusel-active-item"}),this.clickedTimes=[],this.persons="",this.isDissableDate)this.timeStart="",this.openHoursStart="",this.openHoursEnd="",this.arrayOfWorkingTimes=[],this.makeTablesSelectable();else{this.timeStart="",this.timeEnd="";var t="",a="",n=!0,s=!1,o=void 0;try{for(var l,c=r()(this.calendarTimeInitData.schedule_open);!(n=(l=c.next()).done);n=!0){var d=l.value,h=i()(d.weekdays),v=!0,u=!1,f=void 0;try{for(var g,p=r()(h);!(v=(g=p.next()).done);v=!0){g.value===this.dayOfWeek&&(t=d.time.end,a=d.time.start)}}catch(e){u=!0,f=e}finally{try{!v&&p.return&&p.return()}finally{if(u)throw f}}}}catch(e){s=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(s)throw o}}var b=!0,w=!1,y=void 0;try{for(var T,_=r()(this.calendarTimeInitData.schedule_closed);!(b=(T=_.next()).done);b=!0){var j=T.value;m.a.locale(this.calendarTimeInitData.translation.calendar),j.date===m()(this.date,this.momentDateFormat).locale("en").format(this.dbDateFormatForMoment)&&(a=j.time.start,t=j.time.end)}}catch(e){w=!0,y=e}finally{try{!b&&_.return&&_.return()}finally{if(w)throw y}}if(Number(t.substr(0,t.indexOf(":")))<Number(a.substr(0,a.indexOf(":")))&&this.$toasted.show("closing time should not be after 24:00 hours!🤷‍♂️",{theme:"primary",position:"top-center",duration:3e4,className:"toast",containerClass:"toast-container"}),this.openHoursStart=a,this.openHoursEnd=t,m.a.locale(this.calendarTimeInitData.translation.calendar),m()().date()===m()(this.date,this.momentDateFormat).locale("en").date()){var D=m()(a,this.dbTimeFormatForMoment);if(Number(D.hours())<=Number(m()().hours())){D=m()();var F=Number(this.calendarTimeInitData.late_reservations);D.add(F,"m");var k=Number(D.minutes())%Number(this.calendarTimeInitData.time_interval);D.add(Number(this.calendarTimeInitData.time_interval)-k,"m"),Number(m()(t,this.dbTimeFormatForMoment).diff(D))<0&&(this.date=""),this.openHoursStart=D.format(this.momentTimeFormat)}}if(this.makeTablesSelectable(),this.openHoursStart&&this.openHoursEnd){var x=m()(this.openHoursStart,this.dbTimeFormatForMoment),I=m()(this.openHoursEnd,this.dbTimeFormatForMoment).add(Number(-this.calendarTimeInitData.reservation_duration),"m");for(this.arrayOfWorkingTimes=[];x.diff(I)<=0;)this.arrayOfWorkingTimes.push(x.format(this.dbTimeFormatForMoment)),x.add(Number(this.calendarTimeInitData.time_interval),"m")}}},timeStart:function(e){this.makeTablesSelectable(),""!==e?(this.timeEnd=m()(e,this.momentTimeFormat).add(Number(this.calendarTimeInitData.reservation_duration),"m").format(this.momentTimeFormat),this.renewDisabledTables(),this.disableTable()):this.timeEnd=""},timeEnd:function(e){this.makeTablesSelectable()}},methods:{test:function(e){this.clickedTimes.map(function(e){return e.className-=" carusel-active-item"}),this.clickedTimes=[],this.clickedTimes.push(e.target),this.timeStart=e.target.innerHTML,e.target.className+=" carusel-active-item"},makeDateConfig:function(){var e=this,t=[],a=[],n=[],s=!0,o=!1,l=void 0;try{for(var c,d=r()(this.calendarTimeInitData.schedule_closed);!(s=(c=d.next()).done);s=!0){var h=c.value;void 0===h.time&&t.push(m()(h.date,this.dbDateFormatForMoment))}}catch(e){o=!0,l=e}finally{try{!s&&d.return&&d.return()}finally{if(o)throw l}}var v=!0,f=!1,g=void 0;try{for(var p,b=r()(t);!(v=(p=b.next()).done);v=!0){var w=p.value;a.push(w.format(this.momentDateFormat))}}catch(e){f=!0,g=e}finally{try{!v&&b.return&&b.return()}finally{if(f)throw g}}var y="";"en"!==this.calendarTimeInitData.translation.calendar?(y=u.a[this.calendarTimeInitData.translation.calendar],y.firstDayOfWeek=this.calendarTimeInitData.week_start):y={firstDayOfWeek:this.calendarTimeInitData.week_start};var T=!0,_=!1,j=void 0;try{for(var D,F=r()(this.calendarTimeInitData.schedule_open);!(T=(D=F.next()).done);T=!0){var k=D.value,x=i()(k.weekdays);if("0"===this.calendarTimeInitData.week_start){var I=!0,C=!1,M=void 0;try{for(var N,P=r()(this.weekDays0);!(I=(N=P.next()).done);I=!0){var H=N.value;x.includes(H)&&n.push(this.weekDays0.indexOf(H))}}catch(e){C=!0,M=e}finally{try{!I&&P.return&&P.return()}finally{if(C)throw M}}}if("1"===this.calendarTimeInitData.week_start){var S=!0,O=!1,W=void 0;try{for(var E,z=r()(this.weekDays1);!(S=(E=z.next()).done);S=!0){var A=E.value;x.includes(A)&&n.push(this.weekDays0.indexOf(A))}}catch(e){O=!0,W=e}finally{try{!S&&z.return&&z.return()}finally{if(O)throw W}}}}}catch(e){_=!0,j=e}finally{try{!T&&F.return&&F.return()}finally{if(_)throw j}}this.dateConfig={defaultDate:null,disableMobile:!0,dateFormat:this.trueDateFormat,locale:y,minDate:"today",maxDate:(new Date).fp_incr(Number(this.calendarTimeInitData.early_reservations)),disable:[function(t){return(!n.includes(t.getDay())||a.includes(m()(t).format(e.momentDateFormat)))&&!Boolean(e.calendarTimeInitData.schedule_closed.filter(function(a){return m()(t).format(e.dbDateFormatForMoment)===a.date}).length)}]}},computeWokingtimes:function(){this.windowWidth=document.getElementById("reservation").parentNode.parentElement.clientWidth},getWindowWidth:function(e){this.windowWidth=document.getElementById("reservation").parentNode.parentElement.clientWidth},getWindowHeight:function(e){this.windowHeight=document.documentElement.clientHeight},flatPickrToMomentTimeFormat:function(e){var t=e;return t=t.replace("K","A"),t=t.replace("H","HH"),t=t.replace("i","mm")},flatPickrToMomentDateFormat:function(e){var t=e;return null!==t.match(/d/g)?t=t.replace("d","DD"):null!==t.match(/D/g)?t=t.replace("D","ddd"):null!==t.match(/l/g)?t=t.replace("l","dddd"):null!==t.match(/j/g)&&(t=t.replace("j","D")),null!==t.match(/m/g)?t=t.replace("m","MM"):null!==t.match(/n/g)?t=t.replace("n","M"):null!==t.match(/M/g)?t=t.replace("M","MMM"):null!==t.match(/F/g)&&(t=t.replace("F","MMMM")),t=t.replace("Y","YYYY")},pickadateToFlatPickrFormat:function(e){var t=e;return null!==t.match(/dddd/g)?t=t.replace("dddd","l"):null!==t.match(/ddd/g)?t=t.replace("ddd","D"):null!==t.match(/dd/g)?t=t.replace("dd","d"):null!==t.match(/d/g)&&(t=t.replace("d","j")),null!==t.match(/mmmm/g)?t=t.replace("mmmm","F"):null!==t.match(/mmm/g)?t=t.replace("mmm","M"):null!==t.match(/mm/g)?t=t.replace("mm","m"):null!==t.match(/m/g)&&(t=t.replace("m","n")),t=t.replace("yyyy","Y"),t=t.replace("HH","H"),t=t.replace("A","K")},flatPickrToPickadateFormat:function(e){var t=e;return null!==t.match(/l/g)?t=t.replace("l","dddd"):null!==t.match(/D/g)?t=t.replace("D","ddd"):null!==t.match(/d/g)?t=t.replace("d","dd"):null!==t.match(/j/g)&&(t=t.replace("j","d")),null!==t.match(/F/g)?t=t.replace("F","mmmm"):null!==t.match(/M/g)?t=t.replace("M","mmm"):null!==t.match(/m/g)?t=t.replace("m","mm"):null!==t.match(/n/g)&&(t=t.replace("n","m")),t=t.replace("Y","yyyy"),t=t.replace("H","HH"),t=t.replace("K","A")},book:function(){if(""!=this.date&&""!=this.timeStart&&""!=this.timeFinish&&""!=this.table){var e=document.getElementById("reservation"),t=e.offsetHeight;this.$refs.reservationOne.style.display="none",this.view=1,setTimeout(function(){this.$refs.tremReservation.style.height=(this.$refs.reservation2envelope.clientHeight+30).toString()+"px"}.bind(this),500),1.5*this.windowHeight<t&&window.scrollTo(0,e.offsetTop)}else this.$toasted.show(this.calendarTimeInitData.translation.bookTableButtonWarning,{theme:"primary",position:"top-center",duration:3e3,className:"toast",containerClass:"toast-container"})},confirm:function(){var e=this;""===this.name||""===this.mail||""===this.phone||this.errors.has("email")||this.errors.has("phone")?this.$toasted.show(this.calendarTimeInitData.translation.confirmButtonWarning,{theme:"primary",position:"top-center",duration:3e3,className:"toast",containerClass:"toast-container"}):(m.a.locale(this.calendarTimeInitData.translation.calendar),this.$http.post(this.calendarTimeInitData.url,{action:"tremtr_reservation",nonce:this.calendarTimeInitData.nonce,tremtr_reservation_date:m()(this.date,this.momentDateFormat).format(this.dbDateFormatForMoment),tremtr_reservation_time_begin:m()(this.timeStart,this.momentTimeFormat).format(this.dbTimeFormatForMoment),tremtr_reservation_time_end:m()(this.timeEnd,this.momentTimeFormat).format(this.dbTimeFormatForMoment),tremtr_reservation_table:this.table,tremtr_reservation_name:this.name,tremtr_reservation_persons:this.persons,tremtr_reservation_email:this.email,tremtr_reservation_phone:this.phone,tremtr_reservation_message:this.message},{emulateJSON:!0}).then(function(t){!0===JSON.parse(t.bodyText).success?(e.view=2,setTimeout(function(){this.$refs.tremReservation.style.height="300px"}.bind(e),500),setTimeout(function(){this.hideReservation()}.bind(e),3e3)):(e.$toasted.show(e.calendarTimeInitData.translation.rejected,{theme:"primary",position:"top-center",duration:7e3,className:"toast",containerClass:"toast-container"}),e.$http.get(e.calendarTimeInitData.endpoint_reservation).then(function(t){e.reservations=t.body;var a=!0,n=!1,i=void 0;try{for(var s,o=r()(e.reservations);!(a=(s=o.next()).done);a=!0){var l=s.value;l.tremtr_reservation_date=m()(l.tremtr_reservation_date,e.dbDateFormatForMoment).format(e.momentDateFormat),l.tremtr_reservation_time_begin=m()(l.tremtr_reservation_time_begin,e.dbTimeFormatForMoment).format(e.momentTimeFormat),l.tremtr_reservation_time_end=m()(l.tremtr_reservation_time_end,e.dbTimeFormatForMoment).format(e.momentTimeFormat)}}catch(e){n=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}},function(e){}))},function(e){}))},change:function(){this.$refs.reservationTwo.style.display="none",this.view=0,setTimeout(function(){this.$refs.tremReservation.style.height=this.envelopeHeight}.bind(this),500)},changeDate:function(){this.date=""},hideReservation:function(){this.view=4},switchReservation:function(){this.view<4?(this.view=4,this.activeButton.active=!1):(this.view=0,this.activeButton.active=!0)},initCanvasObject:function(e){e.lockMovementX=!0,e.lockMovementY=!0,e.lockScalingX=!0,e.lockScalingY=!0,e.lockUniScaling=!0,e.lockRotation=!0,e.hasControls=!1,e.hoverCursor="pointer",e.hasBorders=!1,e.opacity=0,e.selectable=!1,e.evented=!1},initCanvas:function(){var e=this,t=this.fillActive,a=this.fillHover;this.fillBooked;this.$http.get(this.calendarTimeInitData.endpoint_cafe).then(function(n){e.canvasInitData=n.body[0].tremtr_content,e.canvas=new fabric.Canvas("cc",{selection:!1,controlsAboveOverlay:!0,centeredScaling:!0,allowTouchScrolling:!0}),e.canvas.loadFromJSON(e.canvasInitData,function(){var n=JSON.parse(e.canvasInitData);if(null==n.backgroundImage)e.canvas.setHeight(300),e.canvas.setWidth(200),e.$toasted.show("ADD IMAGE!",{theme:"bubble",position:"top-center",duration:3e4,className:"toast",containerClass:"toast-container"}),e.canvas.renderAll();else{var i=e.windowWidth;i>n.backgroundImage.width&&(i=n.backgroundImage.width);var s=.9*i/(n.backgroundImage.width*n.backgroundImage.scaleX);e.canvas.setZoom(s),e.canvas.renderAll();var r=n.backgroundImage.height*n.backgroundImage.scaleY*s,o=n.backgroundImage.width*n.backgroundImage.scaleX*s;e.canvas.setHeight(r),e.canvas.setWidth(o),e.canvas.renderAll(),r<350&&(e.canvas.zoomToPoint({x:o/2,y:r/2},2.5*s),e.canvas.setHeight(2.5*r)),e.canvasImageWidth=o/s,e.canvasImageHeight=r/s,e.canvasAllowedXPan=o/s,e.canvasAllowedYPan=r/s,e.canvasMinZoom=e.canvas.getZoom(),e.canvasMaxZoom=2*e.canvas.getZoom(),e.canvasZoomedWidth=e.canvasImageWidth,e.canvasZoomedHeight=e.canvasImageHeight}for(var m=0;m<e.canvas.getObjects().length;m+=3){e.canvas.item(m).id=e.canvas.item(m+1).text,e.canvas.item(m+1).id=e.canvas.item(m+1).text,e.canvas.item(m+2).id=e.canvas.item(m+1).text,e.initCanvasObject(e.canvas.item(m)),e.initCanvasObject(e.canvas.item(m+1)),e.initCanvasObject(e.canvas.item(m+2));var l=[e.canvas.item(m+1).text,e.canvas.item(m+2).text];e.canvas.item(m).name=l,e.canvas.item(m).set({fill:t,strokeWidth:0,opacity:1}),e.canvas.item(m+1).set({opacity:1,left:e.canvas.item(m).left+10,top:e.canvas.item(m).top+10,fontSize:20,fontWeight:"bold"}),e.canvas.item(m+2).set({text:""}),e.canvas.renderAll()}var c=e,d=!1;e.canvas.on("mouse:over",function(e){null!=e.target&&(e.target.fill===t&&"rect"===e.target.type&&e.target.set({fill:a}),e.target.canvas.renderAll())}),e.canvas.on("mouse:out",function(e){null!=e.target&&(e.target.fill===a&&"rect"===e.target.type&&1!=c.canvas.item(c.canvas.getObjects().indexOf(e.target)+2).opacity&&e.target.set({fill:t}),e.target.canvas.renderAll())}),c.canvas.observe("mouse:down",function(e){if(""!==c.date&&""!==c.timeEnd&&""!==c.timeStart||d||(c.$toasted.show(c.calendarTimeInitData.translation.canvasClickWarning,{theme:"primary",position:"top-center",duration:2e3,className:"toast",containerClass:"toast-container"}),d=!d,setTimeout(function(){d=!d},5e3)),null!=e.target){for(var n=0;n<c.canvas.getObjects().length;n++)c.canvas.item(n).fill===a&&(c.canvas.item(n).set({fill:t}),c.canvas.item(n+2).set({opacity:0}));if("rect"===e.target.type){c.canvas.getObjects().indexOf(e.target);e.target.set({fill:a}),c.canvas.item(c.canvas.getObjects().indexOf(e.target)+2).set({opacity:1}),c.table=e.target.name[0],c.persons=e.target.name[1],c.maxPersons=e.target.name[1]}if("text"===e.target.type){var i=c.canvas.getObjects().indexOf(e.target);c.canvas.item(i-1).set({fill:a}),c.table=c.canvas.item(i-1).name[0],c.persons=c.canvas.item(i-1).name[1],c.maxPersons=c.canvas.item(i-1).name[1]}c.canvas.renderAll()}}),e.canvas.on({"touch:gesture":function(t){if(t.e.touches&&2==t.e.touches.length){e.pausePanning=!0;var a=new fabric.Point(e.canvas.getCenter().left,e.canvas.getCenter().top);"start"==t.self.state&&(e.zoomStartScale=e.canvas.getZoom());var n=e.zoomStartScale*t.self.scale;if(n<e.canvasMaxZoom&&n>e.canvasMinZoom&&(e.canvas.zoomToPoint(a,n),e.canvasZoomedWidth=e.canvas.getZoom()*e.canvasImageWidth/e.canvasMinZoom,e.canvasZoomedHeight=e.canvas.getZoom()*e.canvasImageHeight/e.canvasMinZoom,e.canvasAllowedXPan=e.canvasZoomedWidth-e.canvas.getWidth(),e.canvasAllowedYPan=e.canvasZoomedHeight-e.canvas.getHeight()),e.pausePanning=!1,"function"==typeof t.e.stopPropagation)return t.e.stopPropagation(),t.e.preventDefault(),!1}},"object:selected":function(t){e.pausePanning=!0},"selection:cleared":function(t){e.pausePanning=!1},"touch:drag":function(t){if(0==e.pausePanning&&null!=t.e.touches){e.dragCurrentX=t.e.touches[0].pageX,e.dragCurrentY=t.e.touches[0].pageY;var a=e.dragCurrentX-e.draglastX,n=e.dragCurrentY-e.draglastY;Math.abs(e.dragCurrentX-e.draglastX)<=40&&Math.abs(e.dragCurrentY-e.draglastY)<=40&&(Math.abs(e.canvas.viewportTransform[4])<=e.canvasAllowedXPan&&Math.abs(e.canvas.viewportTransform[5])<=e.canvasAllowedYPan?e.canvas.relativePan({x:a,y:n}):Math.abs(e.canvas.viewportTransform[4])>e.canvasAllowedXPan?e.canvas.viewportTransform[4]>0?e.canvas.viewportTransform[4]=e.canvasAllowedXPan:e.canvas.viewportTransform[4]=-e.canvasAllowedXPan:e.canvas.viewportTransform[5]>0?e.canvas.viewportTransform[5]=e.canvasAllowedYPan:e.canvas.viewportTransform[5]=-e.canvasAllowedYPan),e.draglastX=e.dragCurrentX,e.draglastY=e.dragCurrentY}if("function"==typeof t.e.stopPropagation)return t.e.stopPropagation(),t.e.preventDefault(),!1}}),""!==e.table&&e.selectTable(),e.canvasLoaded=!0})},function(e){}),this.$http.get(this.calendarTimeInitData.endpoint_reservation).then(function(t){e.reservations=t.body;var a=!0,n=!1,i=void 0;try{for(var s,o=r()(e.reservations);!(a=(s=o.next()).done);a=!0){var l=s.value;l.tremtr_reservation_date=m()(l.tremtr_reservation_date,e.dbDateFormatForMoment).format(e.momentDateFormat),l.tremtr_reservation_time_begin=m()(l.tremtr_reservation_time_begin,e.dbTimeFormatForMoment).format(e.momentTimeFormat),l.tremtr_reservation_time_end=m()(l.tremtr_reservation_time_end,e.dbTimeFormatForMoment).format(e.momentTimeFormat)}}catch(e){n=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}},function(e){})},renewDisabledTables:function(){var e=this;if(this.disabledTables=[],""!=this.timeStart){var t=this.reservations.filter(function(t){return t.tremtr_reservation_date.toLowerCase()===e.date.toLowerCase()}),a=m()(this.timeStart,this.momentTimeFormat),n=!0,i=!1,s=void 0;try{for(var o,l=r()(t);!(n=(o=l.next()).done);n=!0){var c=o.value,d=m()(c.tremtr_reservation_time_begin,this.momentTimeFormat),h=m()(c.tremtr_reservation_time_end,this.momentTimeFormat);a.diff(d)>=0&&a.diff(h)<=0&&this.disabledTables.push(c.tremtr_reservation_table)}}catch(e){i=!0,s=e}finally{try{!n&&l.return&&l.return()}finally{if(i)throw s}}if(""!=this.timeEnd){var v=m()(this.timeEnd,this.momentTimeFormat),u=!0,f=!1,g=void 0;try{for(var p,b=r()(t);!(u=(p=b.next()).done);u=!0){var w=p.value,d=m()(w.tremtr_reservation_time_begin,this.momentTimeFormat),h=m()(w.tremtr_reservation_time_end,this.momentTimeFormat);(v.diff(d)>=0&&v.diff(h)<=0||a.diff(d)<=0&&v.diff(h)>=0)&&this.disabledTables.push(w.tremtr_reservation_table)}}catch(e){f=!0,g=e}finally{try{!u&&b.return&&b.return()}finally{if(f)throw g}}}}},disableTable:function(){for(var e=0;e<this.canvas.getObjects().length;e+=3)this.disabledTables.includes(this.canvas.item(e).name[0])&&(this.canvas.item(e).set({fill:this.fillBooked,evented:!1}),this.canvas.item(e).name[0]===this.table&&(this.canvas.item(e).set({fill:this.fillBooked,evented:!1}),this.canvas.item(e+2).set({opacity:0}),this.table="")),this.disabledTables.includes(this.canvas.item(e).name[0])||this.canvas.item(e).fill===this.fillBooked&&this.canvas.item(e).set({fill:this.fillActive,evented:!0});this.canvas.renderAll()},selectTable:function(){for(var e=0;e<this.canvas.getObjects().length;e+=3)this.canvas.item(e).name[0]===this.table&&(this.canvas.item(e).set({fill:this.fillHover}),this.canvas.item(e+2).set({opacity:1}));this.canvas.renderAll()},makeTablesSelectable:function(){if(""!==this.canvas)if(""!==this.date&&""!==this.timeEnd&&""!==this.timeStart){for(var e=0;e<this.canvas.getObjects().length;e+=3)this.disabledTables.includes(this.canvas.item(e).name[0])||this.canvas.item(e).set({evented:!0});this.canvas.renderAll()}else{for(var t=0;t<this.canvas.getObjects().length;t+=3)this.canvas.item(t).set({evented:!1,fill:this.fillActive}),this.canvas.item(t+2).set({opacity:0}),this.table="";this.canvas.renderAll()}}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth),window.removeEventListener("resize",this.getWindowHeight)}}}},["NHnr"]);
//# sourceMappingURL=app.3c1a9ebf37881b4d21cf.js.map