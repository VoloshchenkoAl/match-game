(this["webpackJsonppicture-matching-game"]=this["webpackJsonppicture-matching-game"]||[]).push([[0],{44:function(e,t,a){e.exports=a(63)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(33),o=a(41),i=a.n(o),u=a(21),s=a(7),l=a(20),d=a(16),m=a.n(d),p=a(19),h=a(13),f=a(32),g=a(3),E=/\w./;var v=Object(f.b)({id:"initGameMachine",initial:"editing",context:{value:"",error:""},states:{editing:{initial:"idle",states:{idle:{},invalid:{}},on:{CHANGE:{actions:["clearErrorCode","setValue"],target:".idle"},SUBMIT:"validating"}},validating:{invoke:{id:"validating",src:function(e){return t=e.value,new Promise((function(e,a){0===t.length?a("EMPTY"):E.test(t)?e():a("INVALID_CHARACTERS")}));var t},onDone:"validated",onError:{target:"editing.invalid",actions:"setError"}}},validated:{entry:["clearErrorCode"],invoke:{id:"submitForm",src:"submit",onDone:"editing",onError:{target:"editing.invalid",actions:"setError"}}}}},{actions:{clearErrorCode:Object(g.b)((function(e){return Object(h.a)(Object(h.a)({},e),{},{errorCode:void 0})})),setValue:Object(g.b)({value:function(e,t){return t.value}}),setError:Object(g.b)({error:function(e,t){return t.data.toString()}})}}),b=(a(50),function(e){var t=e.onChange,a=e.value,n=e.label,c=e.type,o=e.error;return r.a.createElement("div",null,r.a.createElement("label",null,n?r.a.createElement("span",null,n):null,r.a.createElement("input",{className:"input",type:c,value:a,onChange:function(e){var a=e.target.value;t(a)}}),o?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("span",{style:{color:"tomato"}},o)):null))});b.displayName="Input",b.defaultProps={type:"text"};a(51);var C=function(e){var t=e.children,a=e.onClick,n=e.type;return r.a.createElement("button",{type:n,className:"button",onClick:a},t)};C.defaultProps={type:"button"};a(52);var y=function(e){var t=e.handleInputChange,a=e.handleSearchImages,n=e.value,c=e.searchValidationError;return r.a.createElement("div",{className:"start-game__container"},r.a.createElement("h1",null,"Write any word to start to play the game"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a()},className:"start-game__form"},r.a.createElement(b,{value:n,onChange:t,error:c}),r.a.createElement(C,{type:"submit"},"start game!")))},O=a(34),j=a.n(O);function M(e,t){if(!t)return e;var a=null;a="string"===typeof t?j.a.parse(t):t;var n=j.a.stringify(a);return"".concat(e,"?").concat(n)}function k(e,t,a){var n={method:e,headers:{}};return"object"===typeof a&&(n.headers=a),"object"===typeof t&&(n.body=JSON.stringify(t),n.headers["Content-Type"]="application/json"),n}function A(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(m.a.mark((function e(t){var a,n,r,c,o,i,u,s,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.method,r=t.query,c=t.data,o=t.headers,i=M(a,r),u=k(n,c,o),e.next=5,fetch(i,u);case 5:if((s=e.sent).ok){e.next=8;break}throw new Error("".concat(s.statusText," ").concat(s.status," for url ").concat(a));case 8:return e.next=10,s.json();case 10:return l=e.sent,e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){var t=e.results,a=[];return t.forEach((function(e){var t={id:e.id,uniqKey:e.id,author:{name:e.user.name,link:e.user.links.self},description:e.description,image:{link:e.urls.regular}};a.push(t)})),a},T=function(e){return Object(p.a)(m.a.mark((function t(){var a,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.unsplash.com/search/photos","GET",a={Authorization:"Client-ID ".concat("OsYnyEfemwLLpoZ0pApQL38x1KYwg2MR4ZgkUPICnGs")},n={query:e,orientation:"landscape"},t.next=6,A({url:"https://api.unsplash.com/search/photos",method:"GET",headers:a,query:n});case 6:return r=t.sent,t.abrupt("return",w(r));case 8:case"end":return t.stop()}}),t)})))()},x=function(e){var t,a=e.handleLoadCars,n=Object(l.useMachine)(v,{services:{submit:function(e){return Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e.value);case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})))()}}}),c=Object(u.a)(n,2),o=c[0],i=c[1],s="EMPTY"===(t=o.context.error)?"Field is empty":"INVALID_CHARACTERS"===t?"Try to change your characters":"NO_RESULT"===t?"Can not find any photos":t;return r.a.createElement(y,{searchValidationError:s,handleInputChange:function(e){i({type:"CHANGE",value:e})},value:o.context.value,handleSearchImages:function(){i({type:"SUBMIT"})}})},N=a(17),S=Object(f.a)({id:"cardMachine",initial:"unguessed",states:{revealed:{on:{DETAIL:{target:"detailed"}}},unguessed:{on:{REVEAL:{target:"revealed"}}},detailed:{on:{REVEAL_DETAILED:{target:"revealed"}}}},on:{UNGUESSED:{target:"unguessed"}}}),L=(a(56),function(e){var t=Object(l.useMachine)(S),a=Object(u.a)(t,2),c=a[0],o=a[1],i=e.isRevealed,s=e.image,d=e.description,m=e.author,p=e.id,h=e.onClick,f=e.uniqKey;Object(n.useEffect)((function(){o({type:i?"REVEAL":"UNGUESSED"})}),[i,o]);return r.a.createElement("div",{className:"game-card",onClick:function(){return h({id:p,uniqKey:f})},onMouseEnter:function(){o({type:"DETAIL"})},onMouseLeave:function(){o({type:"REVEAL_DETAILED"})}},c.matches("unguessed")?r.a.createElement("div",{className:"game-card__hide"}):r.a.createElement("div",{className:"game-card-info"},r.a.createElement("img",{src:s.link,alt:d}),c.matches("detailed")?r.a.createElement("div",{className:"game-card-detailed"},r.a.createElement("span",null,m.name," on ",r.a.createElement("a",{href:m.link},"Unsplash"))):null))}),R=(a(57),function(e){var t=e.cards,a=e.openedCards,n=e.handleClick,c=e.forceOpenedCards,o=e.attempts;return r.a.createElement("section",{className:"game_section"},r.a.createElement("h2",null,"You have ",3-o," attempts"),r.a.createElement("section",{className:"game_play"},t.map((function(e){return r.a.createElement(L,Object.assign({isRevealed:c||a.some((function(t){return t.uniqKey===e.uniqKey})),key:e.uniqKey,onClick:n},e))}))))}),_=function(e){var t=e.state,a=e.dispatcher,n=t.context,c=n.cards,o=n.roundMatch,i=n.openCards,u=n.forceOpenedCards,s=n.attempts,l=Array.from(new Set([].concat(Object(N.a)(o),Object(N.a)(i))));return r.a.createElement(R,{cards:c,openedCards:l,handleClick:function(e){a({type:"MATCH",cardImprint:e})},forceOpenedCards:u,attempts:s})},D=a(30),G=Object(f.a)({id:"gameMachine",initial:"start",context:{sourceCard:[],cards:[],attempts:0,roundMatch:[],openCards:[],forceOpenedCards:!0},states:{start:{on:{SET_CARDS:{target:"prepare",actions:"setCards"}}},prepare:{after:{5e3:{target:"playing",actions:"hideForceOpenedCards"}}},playing:{initial:"idle",states:{idle:{on:{MATCH:{actions:"setRoundMatch",target:"roundMatch"}}},roundMatch:{after:Object(D.a)({},500,[{target:"gameMatch",cond:"checkRound"},{target:"idle"}])},gameMatch:{entry:"updateCardsInfo",on:{"":[{target:"#gameMachine.gameOver",cond:"gameOverCheck"},{target:"#gameMachine.win",cond:"winCheck"},{target:"idle"}]}}}},gameOver:{entry:"gameOver"},win:{entry:"gameWin"},exit:{type:"final"}},on:{EXIT_GAME:{target:"exit"},PLAY_AGAIN:{target:"playing",actions:"resetGame"}}},{actions:{hideForceOpenedCards:Object(g.b)({forceOpenedCards:function(e,t){return!1}}),setCards:Object(g.b)({cards:function(e,t){for(var a=[],n=t.cards,r=0;r<2;r++)a=[].concat(Object(N.a)(a),Object(N.a)(n));return(a=a.map((function(e,t){return Object(h.a)(Object(h.a)({},e),{},{uniqKey:e.uniqKey+t})}))).sort((function(){return Math.random()-.5}))},sourceCard:function(e,t){return t.cards}}),setRoundMatch:Object(g.b)({roundMatch:function(e,t){return e.roundMatch.concat(t.cardImprint)}}),updateCardsInfo:Object(g.b)((function(e){var t=e.openCards,a=e.attempts,n=e.roundMatch;return n.every((function(e){return e.id===n[0].id}))?Object(h.a)(Object(h.a)({},e),{},{roundMatch:[],openCards:[].concat(Object(N.a)(t),Object(N.a)(n))}):Object(h.a)(Object(h.a)({},e),{},{roundMatch:[],attempts:a+1})})),resetGame:Object(g.b)((function(e){return Object(h.a)(Object(h.a)({},e),{},{attempts:0,openCards:[],roundMatch:[]})}))},guards:{checkRound:function(e){return 2===e.roundMatch.length},gameOverCheck:function(e){return e.attempts>=3},winCheck:function(e){return e.openCards.length===e.cards.length}}}),q=function(){var e=Object(s.g)(),t=Object(l.useMachine)(G,{actions:{gameOver:function(){return e.push("/game-over")},gameWin:function(){return e.push("/win")}}}),a=Object(u.a)(t,2),n=a[0],c=a[1];return r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/game"},n.context.sourceCard.length>0?r.a.createElement(_,{state:n,dispatcher:c}):r.a.createElement(s.a,{to:"/"})),r.a.createElement(s.b,{path:"/game-over"},r.a.createElement("h1",null,"Your Loose!")),r.a.createElement(s.b,{path:"/win"},r.a.createElement("h1",null,"Your Win!")),r.a.createElement(s.b,{path:"/"},r.a.createElement(x,{handleLoadCars:function(t){c({type:"SET_CARDS",cards:t}),e.push("/game")}})))};a(62);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(q,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a7cd295d.chunk.js.map