(this["webpackJsonpmusic-quiz-app"]=this["webpackJsonpmusic-quiz-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/playbutton.75be2c69.svg"},42:function(e,t,n){e.exports=n.p+"static/media/pauseButton.e55175de.svg"},46:function(e,t,n){e.exports=n(77)},51:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),o=n.n(c),i=(n(51),n(5)),s=n(6),u=n(8),l=n(7),m=n(14),p=n(2),d=(n(52),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),a=t.call(this,e),console.log("header constructed"),a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement(m.b,{to:{pathname:"/"}},r.a.createElement("button",{className:"header__homeBtn"},r.a.createElement("p",null," Back to home "))),r.a.createElement("h3",null,"This is a header"))}}]),n}(r.a.Component)),h=(n(57),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a.state.category=e.category,a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("article",{className:"category",id:this.state.category},r.a.createElement("h4",{className:"category__container"},this.state.category),r.a.createElement(m.b,{to:{pathname:"/quiz",state:{category:this.state.category}}},r.a.createElement("button",{className:"category__startBtn"},r.a.createElement("p",null,"Take Quiz"))))}}]),n}(r.a.Component)),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={categories:["k-pop"]},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(d,null),r.a.createElement("section",{className:"container"},r.a.createElement("h1",null,"FROM JSX"),this.state.categories.map((function(e,t){return r.a.createElement(h,{key:t,category:e})}))))}}]),n}(r.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",{className:"container"},r.a.createElement("h1",null,"404 NOT FOUND")))}}]),n}(r.a.Component),y=n(33),v=n(29),O=n.n(v),E=n(38),j=n(18),g=n(9),k=n(39),C=n(30),w=n.n(C),S=n(42),x=n.n(S),N=(n(71),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={videoID:"",autoplay:"0",loop:"1",player:null},a.state.options={height:"0",width:"0",playerVars:{autoplay:a.state.autoplay,loop:a.state.loop,start:a.props.start,end:a.props.end,wmode:"opaque",origin:"http://localhost:3000"}},a.state.controlButton=w.a,a.state.videoID=a.props.videoID,a.audioPlayer=r.a.createRef(),a}return Object(s.a)(n,[{key:"toggleControlButton",value:function(e){this.setState({controlButton:e?x.a:w.a})}},{key:"onPlayerStateChange",value:function(e){0===e.data&&this.toggleControlButton(!1)}},{key:"onPlayerReady",value:function(e){var t=this;this.toggleControlButton(5!==e.target.getPlayerState()),this.setState({player:e.target}),this.audioPlayer.current.addEventListener("click",(function(){1===t.state.player.getPlayerState()||3===t.state.player.getPlayerState()?(t.state.player.pauseVideo(),t.toggleControlButton(!1)):(t.state.player.playVideo(),t.toggleControlButton(!0))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"audio-player",ref:this.audioPlayer},r.a.createElement("img",{src:this.state.controlButton,alt:"control-button",className:"audio-player__control-button"}),r.a.createElement(k.a,{videoId:this.state.videoID,host:"https://www.youtube.com",opts:this.state.options,onReady:this.onPlayerReady.bind(this),onStateChange:this.onPlayerStateChange.bind(this)}))}}]),n}(r.a.Component)),I=n(81),P="card",B=(n(72),n(80)),D=(n(73),function(e){var t=Object(a.useState)(e.content),n=Object(g.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(e.type),s=Object(g.a)(i,2),u=s[0],l=s[1];Object(a.useEffect)((function(){o(e.content),l(e.type)}),[e.content,e.type]);var m=Object(B.a)({item:{type:P,id:e.id,content:e.content,cardType:e.type},collect:function(e){return{isDragging:!!e.isDragging()}}}),p=Object(g.a)(m,2),d=p[0].isDragging,h=p[1];return r.a.createElement("div",{className:"answer-card-".concat(u),id:e.id,ref:h,style:{opacity:d?"0.5":"1"}},r.a.createElement("h4",null,c))}),A=function(e){var t=Object(a.useContext)(z),n=t.chooseAnswer,c=t.isCorrectAnswer,o=Object(a.useState)(e.cards),i=Object(g.a)(o,2),s=i[0],u=i[1],l=Object(a.useState)(),m=Object(g.a)(l,2),p=m[0],d=m[1],h=e.handler,b=h.incrementProblemIdx,f=h.incrementScore;Object(a.useEffect)((function(){u(e.cards),d(e.cards)}),[e.cards]);var y=Object(I.a)({accept:P,drop:function(e,t){try{if(j(e.cardType))throw Error()}catch(a){return void alert("same type submitted")}n(e.id)},collect:function(e){return{isOver:!!e.isOver()}}}),v=Object(g.a)(y,2),O=v[0].isOver,E=v[1],j=function(e){return p.some((function(t){return t.type===e}))};return r.a.createElement("div",{className:"target-board",ref:E,style:{backgroundColor:O?"#26de81":"#d1d8e0"}},r.a.createElement("h3",null,"Move answer here"),s.map((function(e,t){return r.a.createElement(D,{content:e.content,id:e.id,type:e.type,key:t})})),r.a.createElement("button",{className:"submit",onClick:function(){p.length>2&&alert("pick a track of an artist");var e="",t="";p.forEach((function(n){"track"===n.type&&(t=n.content),"artist"===n.type&&(e=n.content)})),c(t,e)&&f(),b()}},"submit"))},T=function(e){var t=Object(a.useContext)(z).unchooseAnswer,n=Object(a.useState)(e.cards),c=Object(g.a)(n,2),o=c[0],i=c[1];Object(a.useEffect)((function(){i(e.cards)}),[e.cards]);var s=Object(I.a)({accept:P,drop:function(e,n){t(e.id)},collect:function(e){return{isOver:!!e.isOver()}}}),u=Object(g.a)(s,2),l=(u[0].isOver,u[1]);return r.a.createElement("div",{className:"source-board",ref:l},r.a.createElement("h3",null,"options"),o.map((function(e,t){return r.a.createElement(D,{content:e.content,id:e.id,type:e.type,key:t})})))},z=(n(75),Object(a.createContext)({chooseAnswer:null,unchooseAnswer:null,isCorrectAnswer:null})),M=function(e){var t=Object(a.useState)(e.problem),n=Object(g.a)(t,2),c=n[0],o=(n[1],Object(a.useState)(e.isVisible)),i=Object(g.a)(o,2),s=i[0],u=i[1];Object(a.useEffect)((function(){u(e.isVisible)}),[e]);var l=Object(a.useState)(e.problem.trackOptions.map((function(e,t){return{id:t,content:e,status:"notChosen",type:"track"}})).concat(e.problem.artistOptions.map((function(e,t){return{id:t+3,content:e,status:"notChosen",type:"artist"}})))),m=Object(g.a)(l,2),p=m[0],d=m[1];return r.a.createElement(z.Provider,{value:{chooseAnswer:function(e){var t=p.filter((function(t){return t.id===e}));t[0].status="chosen",d(p.filter((function(t){return t.id!==e})).concat(t[0]))},unchooseAnswer:function(e){var t=p.filter((function(t){return t.id===e}));t[0].status="notChosen",d(p.filter((function(t){return t.id!==e})).concat(t[0]))},isCorrectAnswer:function(e,t){return e===c.track&&t===c.artist}}},r.a.createElement("div",{className:"problem-box-".concat(s)},r.a.createElement(N,{className:"audio-player",videoID:c.videoID,start:c.startSeconds,end:c.endSeconds}),r.a.createElement(T,{cards:p.filter((function(e,t){return"notChosen"===e.status}))}),r.a.createElement(A,{handler:e.handler,cards:p.filter((function(e,t){return"chosen"===e.status}))})))},q=n(44),_=n(79),V=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={category:"",redirect:!1,score:0,problemIdx:0,problems:[]},a.state.category=a.props.location.state.category,a.incrementProblemIdx=a.incrementProblemIdx.bind(Object(j.a)(a)),a.incrementScore=a.incrementScore.bind(Object(j.a)(a)),a}return Object(s.a)(n,[{key:"fetchMusicProblems",value:function(){var e=Object(E.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://ec2-13-124-88-78.ap-northeast-2.compute.amazonaws.com/api/problems");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,n=this.generateMultipleChoice(n),this.setState({problems:n},(function(){}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"incrementProblemIdx",value:function(){this.setState((function(e){return{problemIdx:e.problemIdx+1}}))}},{key:"incrementScore",value:function(){this.setState((function(e){return{score:e.score+1}}))}},{key:"isEnd",value:function(){return this.state.problemIdx===this.state.problems.length}},{key:"generateMultipleChoice",value:function(e){e.map((function(e){return e.track})),e.map((function(e){return e.artist}));return e.map((function(e,t,n){var a=n.filter((function(t){return t.id!==e.id})).map((function(e){return e.track})).sort((function(){return.5-Math.random()})).slice(0,2);a.push(e.track);var r=n.filter((function(t){return t.id!==e.id})).map((function(e){return e.artist})).sort((function(){return.5-Math.random()})).slice(0,2);return r.push(e.artist),Object(y.a)(Object(y.a)({},e),{},{trackOptions:a,artistOptions:r})}))}},{key:"componentDidMount",value:function(){this.fetchMusicProblems()}},{key:"componentDidUpdate",value:function(){this.isEnd()&&this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(p.a,{to:{pathname:"/quizend",state:{numCorrect:this.state.score,numTotal:this.state.problems.length}}}):r.a.createElement(_.a,{backend:q.a},r.a.createElement("div",{className:"wrapper"},r.a.createElement(d,null),r.a.createElement("section",{className:"container"},r.a.createElement("h1",null,"Here comes the Quiz"),r.a.createElement("h3",null,"Category: ",this.state.category),r.a.createElement("h4",null,"Score: ",this.state.score,"/",this.state.problemIdx),this.state.problems.map((function(t,n){return r.a.createElement(M,{problem:t,handler:{incrementProblemIdx:e.incrementProblemIdx,incrementScore:e.incrementScore},isVisible:n===e.state.problemIdx?"visible":"invisible",key:n})})))))}}]),n}(r.a.Component),R=(n(76),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={numCorrect:0,numTotal:0},a.state.numCorrect=a.props.location.state.numCorrect,a.state.numTotal=a.props.location.state.numTotal,a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(d,null),r.a.createElement("section",{className:"container"},r.a.createElement("h1",null,"Thank you for taking quiz! visit agian!!"),r.a.createElement("h3",null,"Your Score: ",this.state.numCorrect," / ",this.state.numTotal),r.a.createElement(m.b,{to:{pathname:"/"}},r.a.createElement("button",null,r.a.createElement("p",null,"Back to Home")))))}}]),n}(r.a.Component)),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),a=t.call(this,e),console.log("App consturcted"),a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:b}),r.a.createElement(p.b,{exact:!0,path:"/404",component:f}),r.a.createElement(p.b,{exact:!0,path:"/quiz",component:V}),r.a.createElement(p.b,{exact:!0,path:"/quizend",component:R}),r.a.createElement(p.a,{to:"/404"})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.4de6838c.chunk.js.map