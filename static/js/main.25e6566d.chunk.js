(window["webpackJsonpreact-imageupload"]=window["webpackJsonpreact-imageupload"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),r=a.n(i),c=(a(14),a(4)),o=a(5),u=a(7),s=a(6),d=a(1),m=a(8),p=(a(15),function(e){function t(){var e;Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).appendData=function(t){var a=document.getElementById("file").value;a=a.slice(a.indexOf(".")+1).toLowerCase();var n=t.target.files[0],i=t.target.files[0],r=window.URL||window.webkitURL,c=new Image;if(c.src=r.createObjectURL(i),c.onload=function(){408!=c.width&&408!=c.height&&alert("408 * 408 \uc0ac\uc774\uc988\uac00 \uc544\ub2d9\ub2c8\ub2e4!")},"png"!=a)alert("png \ud615\uc2dd\uc73c\ub85c \uc62c\ub824\uc8fc\uc138\uc694!");else if(n.size>=512e3)alert("\uc0ac\uc9c4 \ud06c\uae30\uac00 \ub108\ubb34 \ud07d\ub2c8\ub2e4! 500kb \uc774\ud558\uc778 \uc0ac\uc9c4\uc744 \uc62c\ub824\uc8fc\uc138\uc694");else{var o=t.target.files[0],u=new FileReader;u.readAsDataURL(o);u.onload=function(e){this.setState({imgSrc:[u.result],counter:this.state.counter+1}),console.log(u.result)}.bind(Object(d.a)(e)),e.displayData.push(l.a.createElement("div",{id:"display-data"},l.a.createElement("img",{src:e.state.imgSrc,id:"image"})))}};return e.displayData=[],e.state={showdata:e.displayData,postVal:"",showMe:!0,showMe1:!1,color:"#f2f2f2",colorr:"#ffffff",counter:0},e.appendData=e.appendData.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"click",value:function(){this.setState({showMe:!1,showMe1:!0,color:"#ffffff",colorr:"#f2f2f2"})}},{key:"click2",value:function(){this.setState({showMe:!0,showMe1:!1,color:"#f2f2f2",colorr:"#ffffff"})}},{key:"see_guide",value:function(){window.location.assign("https://studio.stipop.io/howtocreate")}},{key:"submit",value:function(){this.state.counter+1<5&&alert("\ucd5c\uc18c 5\uac1c \uc120\ud0dd\ud574\uc8fc\uc138\uc694!"),this.state.counter+1>30&&alert("\ub4f1\ub85d \uc22b\uc790\ub97c \ub118\uc5b4\uc130\uc2b5\ub2c8\ub2e4!")}},{key:"cancel_upload",value:function(){alert("\uc5c5\ub85c\ub4dc \ucc3d\uc744 \ub2eb\uc73c\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ub2eb\uc73c\uc2dc\uba74 \uc791\uc131\ud55c \ub0b4\uc6a9\uc774 \uc9c0\uc6cc\uc9d1\ub2c8\ub2e4.")}},{key:"render",value:function(){var e=this;return l.a.createElement("main",{className:"image-upload"},l.a.createElement("img",{src:"https://studio.stipop.io/static/images/logo-pink.svg",className:"title"}),l.a.createElement("img",{src:"https://studio.stipop.io/static/images/tag-studio.png",className:"studio"}),l.a.createElement("button",{type:"button",id:"cancle_upload",onClick:function(){return e.cancel_upload()}},"\uc5c5\ub85c\ub4dc \ucde8\uc18c X"),l.a.createElement("div",{className:"page"},l.a.createElement("div",{id:"change_div"},l.a.createElement("div",{style:{background:this.state.color,boxShadow:"9px -3px 9px -3px rgba(202, 202, 202, 0.637)"},id:"sticker",onClick:function(){return e.click()}},"\uc6c0\uc9c1\uc774\ub294 \uc2a4\ud2f0\ucee4"),l.a.createElement("div",{style:{background:this.state.colorr,boxShadow:"-3px -3px 9px -3px rgba(202, 202, 202, 0.637)"},id:"move_sticker",onClick:function(){return e.click2()}},"\uc2a4\ud2f0\ucee4")),l.a.createElement("div",{id:"main"},l.a.createElement("div",{id:"info"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,"\uc2a4\ud2f0\ucee4 \uc774\ub984",l.a.createElement("br",null)),l.a.createElement("td",null,l.a.createElement("input",{type:"text",id:"input"}),l.a.createElement("br",null),l.a.createElement("code",null,"\uc2a4\ud2f0\ucee4 \uc774\ub984\uc740 50\uc790 \uc774\ub0b4\uc5ec\uc57c\ud558\uba70 \uae00\uc790\uc640 \uc22b\uc790\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),l.a.createElement("tr",null,l.a.createElement("td",null,"\uce90\ub9ad\ud130 \uba85"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",id:"input"}),l.a.createElement("br",null),l.a.createElement("code",null,"\uc601\uc22b\uc790\ub9cc \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc790 \uc774\ub984 \uc4f0\uae30."))),l.a.createElement("tr",null,l.a.createElement("td",null,"\uce74\ud14c\uace0\ub9ac"),l.a.createElement("td",{align:"left",valign:"middle"},l.a.createElement("button",{id:"btn"},"Animation/Cartoon"),l.a.createElement("button",null,"Animals"),l.a.createElement("button",null,"Celebrity"),l.a.createElement("button",null,"Food/Drink"),l.a.createElement("br",null),l.a.createElement("button",{id:"btn"},"Gag"),l.a.createElement("button",null,"Holloween"),l.a.createElement("button",null,"People"),l.a.createElement("button",null,"Pharase"),l.a.createElement("button",null,"Romance"),l.a.createElement("br",null),l.a.createElement("button",{id:"btn"},"Sports"),l.a.createElement("button",null,"Etc."))),l.a.createElement("tr",null,l.a.createElement("td",null,"\ud0a4\uc6cc\ub4dc"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",id:"input"}),l.a.createElement("br",null),l.a.createElement("code",null,"2 - 5 \uac1c\uc758 \ud0a4\uc6cc\ub4dc\ub97c \uc368\uc8fc\uc138\uc694. \uc27c\ud45c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud0a4\uc6cc\ub4dc\ub97c \uad6c\ubd84\ud574\uc8fc\uc138\uc694."))),l.a.createElement("tr",null,l.a.createElement("td",null,"\uc5b8\uc5b4"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",id:"input",list:"language"})),l.a.createElement("datalist",{id:"language"},l.a.createElement("option",{value:"English"}),l.a.createElement("option",{value:"French"}),l.a.createElement("option",{value:"Korean"}),l.a.createElement("option",{value:"Czech"}))))),this.state.showMe?l.a.createElement("div",{id:"mainContainer"},l.a.createElement("h4",null,"\ud30c\uc77c"),l.a.createElement("button",{type:"button",id:"create",onClick:function(){return e.see_guide()}},"\ucc3d\uc791 \uac00\uc774\ub4dc \ubcf4\uae30"),l.a.createElement("br",null),l.a.createElement("p",null,"PNG, 500kb \uc774\ud558 408 x 408 px, \ucd5c\uc18c 5\uac1c \ucd5c\ub300 30\uac1c \uc2a4\ud2f0\ucee4"),l.a.createElement("p",{id:"p2"},"\uba54\uc778 \uc2a4\ud2f0\ucee4\ub294 \uc2a4\ud2f0\ucee4\ub97c \ubaa8\ub450 \uc5c5\ub85c\ub4dc \ud55c \ud6c4\uc5d0 \uba54\uc778 \uc2a4\ud2f0\ucee4 \uce78\uc73c\ub85c \ub4dc\ub798\uadf8 \ud574\uc8fc\uc138\uc694."),l.a.createElement("div",{id:"img-box"},l.a.createElement("div",{class:"file_input_div"},l.a.createElement("input",{type:"button",value:"\uc5c5\ub85c\ub4dc!",class:"file_input_button"}),l.a.createElement("input",{type:"file",id:"file",class:"file_input_hidden","data-width":"100","data-height":"100",onChange:this.appendData})),l.a.createElement("div",{id:"show_image"},this.displayData)),l.a.createElement("button",{id:"submit",onClick:function(){return e.submit()}},"\uc81c\ucd9c\ud558\uae30")):null,this.state.showMe1?l.a.createElement("div",{id:"mainContainer2"},l.a.createElement("h4",null,"\ud30c\uc77c"),l.a.createElement("button",{type:"button",id:"create",onClick:function(){return e.see_guide()}},"\ucc3d\uc791 \uac00\uc774\ub4dc \ubcf4\uae30"),l.a.createElement("br",null),l.a.createElement("p",null,"\uc6c0\uc9c1\uc774\ub294 \uc2a4\ud2f0\ucee4: GIF, 500kb \uc774\ud558, 408 x 408 px"),l.a.createElement("p",{id:"p2"},"\uba54\uc778 \uc2a4\ud2f0\ucee4\ub294 \uc2a4\ud2f0\ucee4\ub97c \ubaa8\ub450 \uc5c5\ub85c\ub4dc \ud55c \ud6c4\uc5d0 \uba54\uc778 \uc2a4\ud2f0\ucee4 \uce78\uc73c\ub85c \ub4dc\ub798\uadf8 \ud574\uc8fc\uc138\uc694."),l.a.createElement("div",{id:"gif-box"},l.a.createElement("input",{ref:"file",type:"file",className:"button",onChange:this.appendData}),l.a.createElement("div",{id:"show_image"},this.displayData2))):null)))}}]),t}(l.a.PureComponent));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.25e6566d.chunk.js.map