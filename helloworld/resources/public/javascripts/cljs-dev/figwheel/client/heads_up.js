// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17248__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17248__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24301_24309 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24302_24310 = null;
var count__24303_24311 = (0);
var i__24304_24312 = (0);
while(true){
if((i__24304_24312 < count__24303_24311)){
var k_24313 = cljs.core._nth.call(null,chunk__24302_24310,i__24304_24312);
e.setAttribute(cljs.core.name.call(null,k_24313),cljs.core.get.call(null,attrs,k_24313));

var G__24314 = seq__24301_24309;
var G__24315 = chunk__24302_24310;
var G__24316 = count__24303_24311;
var G__24317 = (i__24304_24312 + (1));
seq__24301_24309 = G__24314;
chunk__24302_24310 = G__24315;
count__24303_24311 = G__24316;
i__24304_24312 = G__24317;
continue;
} else {
var temp__4657__auto___24318 = cljs.core.seq.call(null,seq__24301_24309);
if(temp__4657__auto___24318){
var seq__24301_24319__$1 = temp__4657__auto___24318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24301_24319__$1)){
var c__16993__auto___24320 = cljs.core.chunk_first.call(null,seq__24301_24319__$1);
var G__24321 = cljs.core.chunk_rest.call(null,seq__24301_24319__$1);
var G__24322 = c__16993__auto___24320;
var G__24323 = cljs.core.count.call(null,c__16993__auto___24320);
var G__24324 = (0);
seq__24301_24309 = G__24321;
chunk__24302_24310 = G__24322;
count__24303_24311 = G__24323;
i__24304_24312 = G__24324;
continue;
} else {
var k_24325 = cljs.core.first.call(null,seq__24301_24319__$1);
e.setAttribute(cljs.core.name.call(null,k_24325),cljs.core.get.call(null,attrs,k_24325));

var G__24326 = cljs.core.next.call(null,seq__24301_24319__$1);
var G__24327 = null;
var G__24328 = (0);
var G__24329 = (0);
seq__24301_24309 = G__24326;
chunk__24302_24310 = G__24327;
count__24303_24311 = G__24328;
i__24304_24312 = G__24329;
continue;
}
} else {
}
}
break;
}

var seq__24305_24330 = cljs.core.seq.call(null,children);
var chunk__24306_24331 = null;
var count__24307_24332 = (0);
var i__24308_24333 = (0);
while(true){
if((i__24308_24333 < count__24307_24332)){
var ch_24334 = cljs.core._nth.call(null,chunk__24306_24331,i__24308_24333);
e.appendChild(ch_24334);

var G__24335 = seq__24305_24330;
var G__24336 = chunk__24306_24331;
var G__24337 = count__24307_24332;
var G__24338 = (i__24308_24333 + (1));
seq__24305_24330 = G__24335;
chunk__24306_24331 = G__24336;
count__24307_24332 = G__24337;
i__24308_24333 = G__24338;
continue;
} else {
var temp__4657__auto___24339 = cljs.core.seq.call(null,seq__24305_24330);
if(temp__4657__auto___24339){
var seq__24305_24340__$1 = temp__4657__auto___24339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24305_24340__$1)){
var c__16993__auto___24341 = cljs.core.chunk_first.call(null,seq__24305_24340__$1);
var G__24342 = cljs.core.chunk_rest.call(null,seq__24305_24340__$1);
var G__24343 = c__16993__auto___24341;
var G__24344 = cljs.core.count.call(null,c__16993__auto___24341);
var G__24345 = (0);
seq__24305_24330 = G__24342;
chunk__24306_24331 = G__24343;
count__24307_24332 = G__24344;
i__24308_24333 = G__24345;
continue;
} else {
var ch_24346 = cljs.core.first.call(null,seq__24305_24340__$1);
e.appendChild(ch_24346);

var G__24347 = cljs.core.next.call(null,seq__24305_24340__$1);
var G__24348 = null;
var G__24349 = (0);
var G__24350 = (0);
seq__24305_24330 = G__24347;
chunk__24306_24331 = G__24348;
count__24307_24332 = G__24349;
i__24308_24333 = G__24350;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24298){
var G__24299 = cljs.core.first.call(null,seq24298);
var seq24298__$1 = cljs.core.next.call(null,seq24298);
var G__24300 = cljs.core.first.call(null,seq24298__$1);
var seq24298__$2 = cljs.core.next.call(null,seq24298__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24299,G__24300,seq24298__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17107__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__,hierarchy__17107__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__,hierarchy__17107__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17107__auto__,method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24351 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24351.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24351.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_24351.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24351);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24352,st_map){
var map__24356 = p__24352;
var map__24356__$1 = ((cljs.core.seq_QMARK_.call(null,map__24356))?cljs.core.apply.call(null,cljs.core.hash_map,map__24356):map__24356);
var container_el = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24356,map__24356__$1,container_el){
return (function (p__24357){
var vec__24358 = p__24357;
var k = cljs.core.nth.call(null,vec__24358,(0),null);
var v = cljs.core.nth.call(null,vec__24358,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24356,map__24356__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24359,dom_str){
var map__24361 = p__24359;
var map__24361__$1 = ((cljs.core.seq_QMARK_.call(null,map__24361))?cljs.core.apply.call(null,cljs.core.hash_map,map__24361):map__24361);
var c = map__24361__$1;
var content_area_el = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24362){
var map__24364 = p__24362;
var map__24364__$1 = ((cljs.core.seq_QMARK_.call(null,map__24364))?cljs.core.apply.call(null,cljs.core.hash_map,map__24364):map__24364);
var content_area_el = cljs.core.get.call(null,map__24364__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__){
return (function (state_24406){
var state_val_24407 = (state_24406[(1)]);
if((state_val_24407 === (1))){
var inst_24391 = (state_24406[(7)]);
var inst_24391__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24392 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24393 = ["10px","10px","100%","68px","1.0"];
var inst_24394 = cljs.core.PersistentHashMap.fromArrays(inst_24392,inst_24393);
var inst_24395 = cljs.core.merge.call(null,inst_24394,style);
var inst_24396 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24391__$1,inst_24395);
var inst_24397 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24391__$1,msg);
var inst_24398 = cljs.core.async.timeout.call(null,(300));
var state_24406__$1 = (function (){var statearr_24408 = state_24406;
(statearr_24408[(8)] = inst_24396);

(statearr_24408[(9)] = inst_24397);

(statearr_24408[(7)] = inst_24391__$1);

return statearr_24408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24406__$1,(2),inst_24398);
} else {
if((state_val_24407 === (2))){
var inst_24391 = (state_24406[(7)]);
var inst_24400 = (state_24406[(2)]);
var inst_24401 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24402 = ["auto"];
var inst_24403 = cljs.core.PersistentHashMap.fromArrays(inst_24401,inst_24402);
var inst_24404 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24391,inst_24403);
var state_24406__$1 = (function (){var statearr_24409 = state_24406;
(statearr_24409[(10)] = inst_24400);

return statearr_24409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24406__$1,inst_24404);
} else {
return null;
}
}
});})(c__19204__auto__))
;
return ((function (switch__19142__auto__,c__19204__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto____0 = (function (){
var statearr_24413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24413[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto__);

(statearr_24413[(1)] = (1));

return statearr_24413;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto____1 = (function (state_24406){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_24406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e24414){if((e24414 instanceof Object)){
var ex__19146__auto__ = e24414;
var statearr_24415_24417 = state_24406;
(statearr_24415_24417[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24418 = state_24406;
state_24406 = G__24418;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto__ = function(state_24406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto____1.call(this,state_24406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__))
})();
var state__19206__auto__ = (function (){var statearr_24416 = f__19205__auto__.call(null);
(statearr_24416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_24416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__))
);

return c__19204__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__24420 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__24420,(0),null);
var ln = cljs.core.nth.call(null,vec__24420,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24423 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24423,(0),null);
var file_line = cljs.core.nth.call(null,vec__24423,(1),null);
var file_column = cljs.core.nth.call(null,vec__24423,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24423,file_name,file_line,file_column){
return (function (p1__24421_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24421_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24423,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16208__auto__ = file_line;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
var and__16196__auto__ = cause;
if(cljs.core.truth_(and__16196__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16196__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24425 = figwheel.client.heads_up.ensure_container.call(null);
var map__24425__$1 = ((cljs.core.seq_QMARK_.call(null,map__24425))?cljs.core.apply.call(null,cljs.core.hash_map,map__24425):map__24425);
var content_area_el = cljs.core.get.call(null,map__24425__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__){
return (function (state_24472){
var state_val_24473 = (state_24472[(1)]);
if((state_val_24473 === (1))){
var inst_24455 = (state_24472[(7)]);
var inst_24455__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24456 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24457 = ["0.0"];
var inst_24458 = cljs.core.PersistentHashMap.fromArrays(inst_24456,inst_24457);
var inst_24459 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24455__$1,inst_24458);
var inst_24460 = cljs.core.async.timeout.call(null,(300));
var state_24472__$1 = (function (){var statearr_24474 = state_24472;
(statearr_24474[(8)] = inst_24459);

(statearr_24474[(7)] = inst_24455__$1);

return statearr_24474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24472__$1,(2),inst_24460);
} else {
if((state_val_24473 === (2))){
var inst_24455 = (state_24472[(7)]);
var inst_24462 = (state_24472[(2)]);
var inst_24463 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24464 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24465 = cljs.core.PersistentHashMap.fromArrays(inst_24463,inst_24464);
var inst_24466 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24455,inst_24465);
var inst_24467 = cljs.core.async.timeout.call(null,(200));
var state_24472__$1 = (function (){var statearr_24475 = state_24472;
(statearr_24475[(9)] = inst_24462);

(statearr_24475[(10)] = inst_24466);

return statearr_24475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24472__$1,(3),inst_24467);
} else {
if((state_val_24473 === (3))){
var inst_24455 = (state_24472[(7)]);
var inst_24469 = (state_24472[(2)]);
var inst_24470 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24455,"");
var state_24472__$1 = (function (){var statearr_24476 = state_24472;
(statearr_24476[(11)] = inst_24469);

return statearr_24476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24472__$1,inst_24470);
} else {
return null;
}
}
}
});})(c__19204__auto__))
;
return ((function (switch__19142__auto__,c__19204__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19143__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19143__auto____0 = (function (){
var statearr_24480 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24480[(0)] = figwheel$client$heads_up$clear_$_state_machine__19143__auto__);

(statearr_24480[(1)] = (1));

return statearr_24480;
});
var figwheel$client$heads_up$clear_$_state_machine__19143__auto____1 = (function (state_24472){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_24472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e24481){if((e24481 instanceof Object)){
var ex__19146__auto__ = e24481;
var statearr_24482_24484 = state_24472;
(statearr_24482_24484[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24485 = state_24472;
state_24472 = G__24485;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19143__auto__ = function(state_24472){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19143__auto____1.call(this,state_24472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19143__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19143__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__))
})();
var state__19206__auto__ = (function (){var statearr_24483 = f__19205__auto__.call(null);
(statearr_24483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_24483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__))
);

return c__19204__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__){
return (function (state_24517){
var state_val_24518 = (state_24517[(1)]);
if((state_val_24518 === (1))){
var inst_24507 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24517__$1 = state_24517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24517__$1,(2),inst_24507);
} else {
if((state_val_24518 === (2))){
var inst_24509 = (state_24517[(2)]);
var inst_24510 = cljs.core.async.timeout.call(null,(400));
var state_24517__$1 = (function (){var statearr_24519 = state_24517;
(statearr_24519[(7)] = inst_24509);

return statearr_24519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24517__$1,(3),inst_24510);
} else {
if((state_val_24518 === (3))){
var inst_24512 = (state_24517[(2)]);
var inst_24513 = figwheel.client.heads_up.clear.call(null);
var state_24517__$1 = (function (){var statearr_24520 = state_24517;
(statearr_24520[(8)] = inst_24512);

return statearr_24520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24517__$1,(4),inst_24513);
} else {
if((state_val_24518 === (4))){
var inst_24515 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24517__$1,inst_24515);
} else {
return null;
}
}
}
}
});})(c__19204__auto__))
;
return ((function (switch__19142__auto__,c__19204__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto____0 = (function (){
var statearr_24524 = [null,null,null,null,null,null,null,null,null];
(statearr_24524[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto__);

(statearr_24524[(1)] = (1));

return statearr_24524;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto____1 = (function (state_24517){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_24517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e24525){if((e24525 instanceof Object)){
var ex__19146__auto__ = e24525;
var statearr_24526_24528 = state_24517;
(statearr_24526_24528[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24529 = state_24517;
state_24517 = G__24529;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto__ = function(state_24517){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto____1.call(this,state_24517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__))
})();
var state__19206__auto__ = (function (){var statearr_24527 = f__19205__auto__.call(null);
(statearr_24527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_24527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__))
);

return c__19204__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map