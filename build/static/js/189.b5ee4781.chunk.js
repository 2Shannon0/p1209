"use strict";(self.webpackChunkp1209=self.webpackChunkp1209||[]).push([[189],{4110:function(n,e,t){var i=t(3144),r=t(5671),c=(0,i.Z)((function n(){(0,r.Z)(this,n)}));new c;e.Z=c},6703:function(n,e,t){t.d(e,{i:function(){return p},S:function(){return h}});t(2791);var i=t(1680),r=t(9773),c=t(4390),l=t(9963),s=t(9827),a=t(807),u=t(286),o=t(4565),d=t(184),p=function(n){var e=n.children,t=n.title,p=n.COLUMNS;return(0,d.jsxs)(d.Fragment,{children:[t&&(0,d.jsx)(o.Z,{variant:"h6",sx:{fontWeight:"Bold"},children:t}),(0,d.jsx)(l.Z,{component:u.Z,children:(0,d.jsxs)(i.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[p&&(0,d.jsx)(s.Z,{children:(0,d.jsx)(a.Z,{children:p.map((function(n,e){return(0,d.jsx)(c.Z,{sx:{fontWeight:"Bold"},children:(0,d.jsx)(o.Z,{variant:"body2",sx:{color:"#606060",fontSize:15},children:n.title})},e)}))})}),(0,d.jsx)(r.Z,{children:e})]})})]})},h=function(n){var e=n.children,t=n.onClick;return(0,d.jsx)(a.Z,{hover:!!t,onClick:t,children:e})}},5766:function(n,e,t){t.d(e,{Y:function(){return c}});var i=t(885),r=t(2791),c=function(n,e){var t=(0,r.useState)(!1),c=(0,i.Z)(t,2),l=c[0],s=c[1],a=(0,r.useState)(!1),u=(0,i.Z)(a,2),o=u[0],d=u[1],p=(0,r.useState)(),h=(0,i.Z)(p,2),m=h[0],f=h[1],x=(0,r.useState)(!0),Z=(0,i.Z)(x,2),j=Z[0],b=Z[1];if(j&&!l){b(!1);try{s(!0),d(!1),f(void 0),n(e).then((function(n){f(n)})).catch((function(n){return d(!0)})).finally((function(){return s(!1)}))}catch(v){s(!1),d(!0)}}return[m,l,o,(0,r.useCallback)((function(){return b(!0)}),[])]}},7189:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var i=t(885),r=t(2791),c=t(7689),l=t(9470),s=t(6015),a=t(7020),u=t(4390),o=t(5671),d=t(3144),p=t(136),h=t(7277),m=function(n){(0,p.Z)(i,n);var e=(0,h.Z)(i);function i(){return(0,o.Z)(this,i),e.apply(this,arguments)}return(0,d.Z)(i,null,[{key:"getUniversityCommonInfo",value:function(n){return new Promise((function(n){return n(t(8289))}))}}]),i}(t(4110).Z),f=(new m,m),x=t(6703),Z=t(5766),j=t(760),b=t(184),v=[{title:"\u0412\u0423\u0417"},{title:"\u041a\u0426\u041f"},{title:"\u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0439"},{title:"\u0410\u0431\u0438\u0442\u0443\u0440\u0438\u0435\u043d\u0442\u043e\u0432"},{title:"\u0411\u044e\u0434\u0436\u0435\u0442"},{title:"\u041a\u043e\u043c\u043c."},{title:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0439"},{title:"\u041e\u041f"},{title:"\u0426\u0435\u043b\u0435\u0432\u043e\u0435"},{title:"\u0411\u0412\u0418"},{title:"\u041e\u041a"}],_=function(){var n=(0,c.UO)(),e=(0,Z.Y)((function(){return f.getUniversityCommonInfo(n)})),t=(0,i.Z)(e,2),o=t[0],d=t[1],p=null===o||void 0===o?void 0:o.data,h=(0,c.s0)(),m=(0,r.useCallback)((function(n){return function(){h((0,l.Gn)("edu-program-info/:id",{id:n}))}}),[]);return(0,b.jsx)(r.Fragment,{children:(0,b.jsx)(a.Z,{maxWidth:"xl",children:(0,b.jsx)(s.Z,{sx:{height:"70vh"},mt:5,children:d?(0,b.jsx)(j.D,{}):p&&p.length>0?(0,b.jsx)(x.i,{COLUMNS:v,title:o.university_name,children:p.map((function(n){return(0,b.jsxs)(x.S,{onClick:m("PMI"),children:[(0,b.jsx)(u.Z,{children:n.name}),(0,b.jsx)(u.Z,{children:n.kcp}),(0,b.jsx)(u.Z,{children:n.applications}),(0,b.jsx)(u.Z,{children:n.abiturients_number}),(0,b.jsx)(u.Z,{children:n.budget_places}),(0,b.jsx)(u.Z,{children:n.commercial_places}),(0,b.jsx)(u.Z,{children:n.consents_number}),(0,b.jsx)(u.Z,{children:n.op}),(0,b.jsx)(u.Z,{children:n.target_places}),(0,b.jsx)(u.Z,{children:n.bvi}),(0,b.jsx)(u.Z,{children:n.ok})]},n.program_id)}))}):(0,b.jsx)("p",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})})})}},8289:function(n){n.exports=JSON.parse('{"university_name":"\u0412\u0428\u042d","data":[{"program_id":"pmi","name":"\u041f\u041c\u0418","applications":4500,"abiturients_number":1500,"budget_places":3500,"commercial_places":2400,"consents_number":250,"op":0,"target_places":50,"bvi":50,"ok":4400,"kcp":2500},{"program_id":"pm","name":"\u041f\u041c","applications":4500,"abiturients_number":1500,"budget_places":3500,"commercial_places":2400,"consents_number":250,"op":0,"target_places":50,"bvi":50,"ok":4400,"kcp":2500},{"program_id":"ivt","name":"\u0418\u0412\u0422","applications":4500,"abiturients_number":1500,"budget_places":3500,"commercial_places":2400,"consents_number":250,"op":0,"target_places":50,"bvi":50,"ok":4400,"kcp":2500}]}')}}]);
//# sourceMappingURL=189.b5ee4781.chunk.js.map