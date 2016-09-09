// Compiled by ClojureScript 0.0-3308 {}
goog.provide('helloworld.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('helloworld.navbar');
helloworld.core.header = (function helloworld$core$header(in$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgray",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"verdana"], null)], null),in$], null);
});
helloworld.core.navbarmy = (function helloworld$core$navbarmy(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar my"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#home"], null),"First"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#second"], null),"Second"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#third"], null),"Third"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#fourth"], null),"Fourth"], null)], null)], null)], null);
});
helloworld.core.value = reagent.core.atom.call(null,"");
helloworld.core.current_count = reagent.core.atom.call(null,(0));
helloworld.core.clicker = (function helloworld$core$clicker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.swap_BANG_.call(null,helloworld.core.current_count,(function (old_state){
return (old_state + (1));
}));

return alert(cljs.core.deref.call(null,helloworld.core.value));
})], null),cljs.core.deref.call(null,helloworld.core.current_count)], null);
});
helloworld.core.input = (function helloworld$core$input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,helloworld.core.value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23106_SHARP_){
return cljs.core.reset_BANG_.call(null,helloworld.core.value,p1__23106_SHARP_.target.value);
})], null)], null);
});
helloworld.core.listener = (function helloworld$core$listener(atom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("Now you are:"),cljs.core.str(cljs.core.deref.call(null,atom))].join('')], null);
});
helloworld.core.stylish_listener = (function helloworld$core$stylish_listener(atom,font){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),font], null),"(B!]= ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.listener,atom], null)], null);
});
helloworld.core.audio_player = (function helloworld$core$audio_player(src){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"controls","controls",1340701452),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"type","type",1174270348),"audio/mp3"], null)], null)], null);
});
helloworld.core.image_player = (function helloworld$core$image_player(src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null);
});
helloworld.core.app = (function helloworld$core$app(){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"skyblue",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"courier"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.navbarmy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.header,"Big one here!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Not so, but also!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Even more!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Almost none!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.clicker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.listener,helloworld.core.value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.stylish_listener,helloworld.core.value,"verdana"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.audio_player,"http://cdn.radio-t.com/rt_podcast499.mp3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.image_player,"http://i.imgur.com/qNq6nrB.gif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://video.webmfiles.org/big-buck-bunny_trailer.webm",new cljs.core.Keyword(null,"controls","controls",1340701452),"true",new cljs.core.Keyword(null,"width","width",-384071477),"320",new cljs.core.Keyword(null,"height","height",1025178622),"240"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"List"], null),(function (){var iter__16962__auto__ = (function helloworld$core$app_$_iter__23111(s__23112){
return (new cljs.core.LazySeq(null,(function (){
var s__23112__$1 = s__23112;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23112__$1);
if(temp__4657__auto__){
var s__23112__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23112__$2)){
var c__16960__auto__ = cljs.core.chunk_first.call(null,s__23112__$2);
var size__16961__auto__ = cljs.core.count.call(null,c__16960__auto__);
var b__23114 = cljs.core.chunk_buffer.call(null,size__16961__auto__);
if((function (){var i__23113 = (0);
while(true){
if((i__23113 < size__16961__auto__)){
var x = cljs.core._nth.call(null,c__16960__auto__,i__23113);
if(cljs.core.even_QMARK_.call(null,x)){
cljs.core.chunk_append.call(null,b__23114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str("Item "),cljs.core.str(x)].join('')], null));

var G__23115 = (i__23113 + (1));
i__23113 = G__23115;
continue;
} else {
var G__23116 = (i__23113 + (1));
i__23113 = G__23116;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23114),helloworld$core$app_$_iter__23111.call(null,cljs.core.chunk_rest.call(null,s__23112__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23114),null);
}
} else {
var x = cljs.core.first.call(null,s__23112__$2);
if(cljs.core.even_QMARK_.call(null,x)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str("Item "),cljs.core.str(x)].join('')], null),helloworld$core$app_$_iter__23111.call(null,cljs.core.rest.call(null,s__23112__$2)));
} else {
var G__23117 = cljs.core.rest.call(null,s__23112__$2);
s__23112__$1 = G__23117;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16962__auto__.call(null,cljs.core.range.call(null,(10)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),helloworld.navbar.loren.call(null,(10))], null)], null);
});
helloworld.navbar.track_scroll.call(null);
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map