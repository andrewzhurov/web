// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23537__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23538__i = 0, G__23538__a = new Array(arguments.length -  0);
while (G__23538__i < G__23538__a.length) {G__23538__a[G__23538__i] = arguments[G__23538__i + 0]; ++G__23538__i;}
  args = new cljs.core.IndexedSeq(G__23538__a,0);
} 
return G__23537__delegate.call(this,args);};
G__23537.cljs$lang$maxFixedArity = 0;
G__23537.cljs$lang$applyTo = (function (arglist__23539){
var args = cljs.core.seq(arglist__23539);
return G__23537__delegate(args);
});
G__23537.cljs$core$IFn$_invoke$arity$variadic = G__23537__delegate;
return G__23537;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23540){
var map__23542 = p__23540;
var map__23542__$1 = ((cljs.core.seq_QMARK_.call(null,map__23542))?cljs.core.apply.call(null,cljs.core.hash_map,map__23542):map__23542);
var message = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16208__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16196__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16196__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16196__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19204__auto___23671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___23671,ch){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___23671,ch){
return (function (state_23645){
var state_val_23646 = (state_23645[(1)]);
if((state_val_23646 === (7))){
var inst_23641 = (state_23645[(2)]);
var state_23645__$1 = state_23645;
var statearr_23647_23672 = state_23645__$1;
(statearr_23647_23672[(2)] = inst_23641);

(statearr_23647_23672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (1))){
var state_23645__$1 = state_23645;
var statearr_23648_23673 = state_23645__$1;
(statearr_23648_23673[(2)] = null);

(statearr_23648_23673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (4))){
var inst_23609 = (state_23645[(7)]);
var inst_23609__$1 = (state_23645[(2)]);
var state_23645__$1 = (function (){var statearr_23649 = state_23645;
(statearr_23649[(7)] = inst_23609__$1);

return statearr_23649;
})();
if(cljs.core.truth_(inst_23609__$1)){
var statearr_23650_23674 = state_23645__$1;
(statearr_23650_23674[(1)] = (5));

} else {
var statearr_23651_23675 = state_23645__$1;
(statearr_23651_23675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (13))){
var state_23645__$1 = state_23645;
var statearr_23652_23676 = state_23645__$1;
(statearr_23652_23676[(2)] = null);

(statearr_23652_23676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (6))){
var state_23645__$1 = state_23645;
var statearr_23653_23677 = state_23645__$1;
(statearr_23653_23677[(2)] = null);

(statearr_23653_23677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (3))){
var inst_23643 = (state_23645[(2)]);
var state_23645__$1 = state_23645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23645__$1,inst_23643);
} else {
if((state_val_23646 === (12))){
var inst_23616 = (state_23645[(8)]);
var inst_23629 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23616);
var inst_23630 = cljs.core.first.call(null,inst_23629);
var inst_23631 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23630);
var inst_23632 = console.warn("Figwheel: Not loading code with warnings - ",inst_23631);
var state_23645__$1 = state_23645;
var statearr_23654_23678 = state_23645__$1;
(statearr_23654_23678[(2)] = inst_23632);

(statearr_23654_23678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (2))){
var state_23645__$1 = state_23645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23645__$1,(4),ch);
} else {
if((state_val_23646 === (11))){
var inst_23625 = (state_23645[(2)]);
var state_23645__$1 = state_23645;
var statearr_23655_23679 = state_23645__$1;
(statearr_23655_23679[(2)] = inst_23625);

(statearr_23655_23679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (9))){
var inst_23615 = (state_23645[(9)]);
var inst_23627 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23615,opts);
var state_23645__$1 = state_23645;
if(cljs.core.truth_(inst_23627)){
var statearr_23656_23680 = state_23645__$1;
(statearr_23656_23680[(1)] = (12));

} else {
var statearr_23657_23681 = state_23645__$1;
(statearr_23657_23681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (5))){
var inst_23609 = (state_23645[(7)]);
var inst_23615 = (state_23645[(9)]);
var inst_23611 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23612 = (new cljs.core.PersistentArrayMap(null,2,inst_23611,null));
var inst_23613 = (new cljs.core.PersistentHashSet(null,inst_23612,null));
var inst_23614 = figwheel.client.focus_msgs.call(null,inst_23613,inst_23609);
var inst_23615__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23614);
var inst_23616 = cljs.core.first.call(null,inst_23614);
var inst_23617 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23615__$1,opts);
var state_23645__$1 = (function (){var statearr_23658 = state_23645;
(statearr_23658[(9)] = inst_23615__$1);

(statearr_23658[(8)] = inst_23616);

return statearr_23658;
})();
if(cljs.core.truth_(inst_23617)){
var statearr_23659_23682 = state_23645__$1;
(statearr_23659_23682[(1)] = (8));

} else {
var statearr_23660_23683 = state_23645__$1;
(statearr_23660_23683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (14))){
var inst_23635 = (state_23645[(2)]);
var state_23645__$1 = state_23645;
var statearr_23661_23684 = state_23645__$1;
(statearr_23661_23684[(2)] = inst_23635);

(statearr_23661_23684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (10))){
var inst_23637 = (state_23645[(2)]);
var state_23645__$1 = (function (){var statearr_23662 = state_23645;
(statearr_23662[(10)] = inst_23637);

return statearr_23662;
})();
var statearr_23663_23685 = state_23645__$1;
(statearr_23663_23685[(2)] = null);

(statearr_23663_23685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (8))){
var inst_23616 = (state_23645[(8)]);
var inst_23619 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23620 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23616);
var inst_23621 = cljs.core.async.timeout.call(null,(1000));
var inst_23622 = [inst_23620,inst_23621];
var inst_23623 = (new cljs.core.PersistentVector(null,2,(5),inst_23619,inst_23622,null));
var state_23645__$1 = state_23645;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23645__$1,(11),inst_23623);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19204__auto___23671,ch))
;
return ((function (switch__19142__auto__,c__19204__auto___23671,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19143__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19143__auto____0 = (function (){
var statearr_23667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23667[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19143__auto__);

(statearr_23667[(1)] = (1));

return statearr_23667;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19143__auto____1 = (function (state_23645){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_23645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e23668){if((e23668 instanceof Object)){
var ex__19146__auto__ = e23668;
var statearr_23669_23686 = state_23645;
(statearr_23669_23686[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23687 = state_23645;
state_23645 = G__23687;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19143__auto__ = function(state_23645){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19143__auto____1.call(this,state_23645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19143__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19143__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___23671,ch))
})();
var state__19206__auto__ = (function (){var statearr_23670 = f__19205__auto__.call(null);
(statearr_23670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___23671);

return statearr_23670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___23671,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23688_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23688_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_23695 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23695){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23693 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23694 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23693,_STAR_print_newline_STAR_23694,base_path_23695){
return (function() { 
var G__23696__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23697__i = 0, G__23697__a = new Array(arguments.length -  0);
while (G__23697__i < G__23697__a.length) {G__23697__a[G__23697__i] = arguments[G__23697__i + 0]; ++G__23697__i;}
  args = new cljs.core.IndexedSeq(G__23697__a,0);
} 
return G__23696__delegate.call(this,args);};
G__23696.cljs$lang$maxFixedArity = 0;
G__23696.cljs$lang$applyTo = (function (arglist__23698){
var args = cljs.core.seq(arglist__23698);
return G__23696__delegate(args);
});
G__23696.cljs$core$IFn$_invoke$arity$variadic = G__23696__delegate;
return G__23696;
})()
;})(_STAR_print_fn_STAR_23693,_STAR_print_newline_STAR_23694,base_path_23695))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23694;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23693;
}}catch (e23692){if((e23692 instanceof Error)){
var e = e23692;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23695], null));
} else {
var e = e23692;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23695))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23699){
var map__23704 = p__23699;
var map__23704__$1 = ((cljs.core.seq_QMARK_.call(null,map__23704))?cljs.core.apply.call(null,cljs.core.hash_map,map__23704):map__23704);
var opts = map__23704__$1;
var build_id = cljs.core.get.call(null,map__23704__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23704,map__23704__$1,opts,build_id){
return (function (p__23705){
var vec__23706 = p__23705;
var map__23707 = cljs.core.nth.call(null,vec__23706,(0),null);
var map__23707__$1 = ((cljs.core.seq_QMARK_.call(null,map__23707))?cljs.core.apply.call(null,cljs.core.hash_map,map__23707):map__23707);
var msg = map__23707__$1;
var msg_name = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23706,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23706,map__23707,map__23707__$1,msg,msg_name,_,map__23704,map__23704__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23706,map__23707,map__23707__$1,msg,msg_name,_,map__23704,map__23704__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23704,map__23704__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23711){
var vec__23712 = p__23711;
var map__23713 = cljs.core.nth.call(null,vec__23712,(0),null);
var map__23713__$1 = ((cljs.core.seq_QMARK_.call(null,map__23713))?cljs.core.apply.call(null,cljs.core.hash_map,map__23713):map__23713);
var msg = map__23713__$1;
var msg_name = cljs.core.get.call(null,map__23713__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23712,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23714){
var map__23722 = p__23714;
var map__23722__$1 = ((cljs.core.seq_QMARK_.call(null,map__23722))?cljs.core.apply.call(null,cljs.core.hash_map,map__23722):map__23722);
var on_compile_warning = cljs.core.get.call(null,map__23722__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23722__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23722,map__23722__$1,on_compile_warning,on_compile_fail){
return (function (p__23723){
var vec__23724 = p__23723;
var map__23725 = cljs.core.nth.call(null,vec__23724,(0),null);
var map__23725__$1 = ((cljs.core.seq_QMARK_.call(null,map__23725))?cljs.core.apply.call(null,cljs.core.hash_map,map__23725):map__23725);
var msg = map__23725__$1;
var msg_name = cljs.core.get.call(null,map__23725__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23724,(1));
var pred__23726 = cljs.core._EQ_;
var expr__23727 = msg_name;
if(cljs.core.truth_(pred__23726.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23727))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23726.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23727))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23722,map__23722__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__,msg_hist,msg_names,msg){
return (function (state_23928){
var state_val_23929 = (state_23928[(1)]);
if((state_val_23929 === (7))){
var inst_23862 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23930_23971 = state_23928__$1;
(statearr_23930_23971[(2)] = inst_23862);

(statearr_23930_23971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (20))){
var inst_23890 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23890)){
var statearr_23931_23972 = state_23928__$1;
(statearr_23931_23972[(1)] = (22));

} else {
var statearr_23932_23973 = state_23928__$1;
(statearr_23932_23973[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (27))){
var inst_23902 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23903 = figwheel.client.heads_up.display_warning.call(null,inst_23902);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(30),inst_23903);
} else {
if((state_val_23929 === (1))){
var inst_23850 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23850)){
var statearr_23933_23974 = state_23928__$1;
(statearr_23933_23974[(1)] = (2));

} else {
var statearr_23934_23975 = state_23928__$1;
(statearr_23934_23975[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (24))){
var inst_23918 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23935_23976 = state_23928__$1;
(statearr_23935_23976[(2)] = inst_23918);

(statearr_23935_23976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (4))){
var inst_23926 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23928__$1,inst_23926);
} else {
if((state_val_23929 === (15))){
var inst_23878 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23879 = figwheel.client.format_messages.call(null,inst_23878);
var inst_23880 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23881 = figwheel.client.heads_up.display_error.call(null,inst_23879,inst_23880);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(18),inst_23881);
} else {
if((state_val_23929 === (21))){
var inst_23920 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23936_23977 = state_23928__$1;
(statearr_23936_23977[(2)] = inst_23920);

(statearr_23936_23977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (31))){
var inst_23909 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(34),inst_23909);
} else {
if((state_val_23929 === (32))){
var state_23928__$1 = state_23928;
var statearr_23937_23978 = state_23928__$1;
(statearr_23937_23978[(2)] = null);

(statearr_23937_23978[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (33))){
var inst_23914 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23938_23979 = state_23928__$1;
(statearr_23938_23979[(2)] = inst_23914);

(statearr_23938_23979[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (13))){
var inst_23868 = (state_23928[(2)]);
var inst_23869 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23870 = figwheel.client.format_messages.call(null,inst_23869);
var inst_23871 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23872 = figwheel.client.heads_up.display_error.call(null,inst_23870,inst_23871);
var state_23928__$1 = (function (){var statearr_23939 = state_23928;
(statearr_23939[(7)] = inst_23868);

return statearr_23939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(14),inst_23872);
} else {
if((state_val_23929 === (22))){
var inst_23892 = figwheel.client.heads_up.clear.call(null);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(25),inst_23892);
} else {
if((state_val_23929 === (29))){
var inst_23916 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23940_23980 = state_23928__$1;
(statearr_23940_23980[(2)] = inst_23916);

(statearr_23940_23980[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (6))){
var inst_23858 = figwheel.client.heads_up.clear.call(null);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(9),inst_23858);
} else {
if((state_val_23929 === (28))){
var inst_23907 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23907)){
var statearr_23941_23981 = state_23928__$1;
(statearr_23941_23981[(1)] = (31));

} else {
var statearr_23942_23982 = state_23928__$1;
(statearr_23942_23982[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (25))){
var inst_23894 = (state_23928[(2)]);
var inst_23895 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23896 = figwheel.client.heads_up.display_warning.call(null,inst_23895);
var state_23928__$1 = (function (){var statearr_23943 = state_23928;
(statearr_23943[(8)] = inst_23894);

return statearr_23943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(26),inst_23896);
} else {
if((state_val_23929 === (34))){
var inst_23911 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23944_23983 = state_23928__$1;
(statearr_23944_23983[(2)] = inst_23911);

(statearr_23944_23983[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (17))){
var inst_23922 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23945_23984 = state_23928__$1;
(statearr_23945_23984[(2)] = inst_23922);

(statearr_23945_23984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (3))){
var inst_23864 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23864)){
var statearr_23946_23985 = state_23928__$1;
(statearr_23946_23985[(1)] = (10));

} else {
var statearr_23947_23986 = state_23928__$1;
(statearr_23947_23986[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (12))){
var inst_23924 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23948_23987 = state_23928__$1;
(statearr_23948_23987[(2)] = inst_23924);

(statearr_23948_23987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (2))){
var inst_23852 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23852)){
var statearr_23949_23988 = state_23928__$1;
(statearr_23949_23988[(1)] = (5));

} else {
var statearr_23950_23989 = state_23928__$1;
(statearr_23950_23989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (23))){
var inst_23900 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23900)){
var statearr_23951_23990 = state_23928__$1;
(statearr_23951_23990[(1)] = (27));

} else {
var statearr_23952_23991 = state_23928__$1;
(statearr_23952_23991[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (19))){
var inst_23887 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23888 = figwheel.client.heads_up.append_message.call(null,inst_23887);
var state_23928__$1 = state_23928;
var statearr_23953_23992 = state_23928__$1;
(statearr_23953_23992[(2)] = inst_23888);

(statearr_23953_23992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (11))){
var inst_23876 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23876)){
var statearr_23954_23993 = state_23928__$1;
(statearr_23954_23993[(1)] = (15));

} else {
var statearr_23955_23994 = state_23928__$1;
(statearr_23955_23994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (9))){
var inst_23860 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23956_23995 = state_23928__$1;
(statearr_23956_23995[(2)] = inst_23860);

(statearr_23956_23995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (5))){
var inst_23854 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(8),inst_23854);
} else {
if((state_val_23929 === (14))){
var inst_23874 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23957_23996 = state_23928__$1;
(statearr_23957_23996[(2)] = inst_23874);

(statearr_23957_23996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (26))){
var inst_23898 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23958_23997 = state_23928__$1;
(statearr_23958_23997[(2)] = inst_23898);

(statearr_23958_23997[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (16))){
var inst_23885 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23928__$1 = state_23928;
if(cljs.core.truth_(inst_23885)){
var statearr_23959_23998 = state_23928__$1;
(statearr_23959_23998[(1)] = (19));

} else {
var statearr_23960_23999 = state_23928__$1;
(statearr_23960_23999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (30))){
var inst_23905 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23961_24000 = state_23928__$1;
(statearr_23961_24000[(2)] = inst_23905);

(statearr_23961_24000[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (10))){
var inst_23866 = figwheel.client.heads_up.clear.call(null);
var state_23928__$1 = state_23928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23928__$1,(13),inst_23866);
} else {
if((state_val_23929 === (18))){
var inst_23883 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23962_24001 = state_23928__$1;
(statearr_23962_24001[(2)] = inst_23883);

(statearr_23962_24001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23929 === (8))){
var inst_23856 = (state_23928[(2)]);
var state_23928__$1 = state_23928;
var statearr_23963_24002 = state_23928__$1;
(statearr_23963_24002[(2)] = inst_23856);

(statearr_23963_24002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19204__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19142__auto__,c__19204__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto____0 = (function (){
var statearr_23967 = [null,null,null,null,null,null,null,null,null];
(statearr_23967[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto__);

(statearr_23967[(1)] = (1));

return statearr_23967;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto____1 = (function (state_23928){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_23928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e23968){if((e23968 instanceof Object)){
var ex__19146__auto__ = e23968;
var statearr_23969_24003 = state_23928;
(statearr_23969_24003[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24004 = state_23928;
state_23928 = G__24004;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto__ = function(state_23928){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto____1.call(this,state_23928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__,msg_hist,msg_names,msg))
})();
var state__19206__auto__ = (function (){var statearr_23970 = f__19205__auto__.call(null);
(statearr_23970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_23970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__,msg_hist,msg_names,msg))
);

return c__19204__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19204__auto___24067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___24067,ch){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___24067,ch){
return (function (state_24050){
var state_val_24051 = (state_24050[(1)]);
if((state_val_24051 === (1))){
var state_24050__$1 = state_24050;
var statearr_24052_24068 = state_24050__$1;
(statearr_24052_24068[(2)] = null);

(statearr_24052_24068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24051 === (2))){
var state_24050__$1 = state_24050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24050__$1,(4),ch);
} else {
if((state_val_24051 === (3))){
var inst_24048 = (state_24050[(2)]);
var state_24050__$1 = state_24050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24050__$1,inst_24048);
} else {
if((state_val_24051 === (4))){
var inst_24038 = (state_24050[(7)]);
var inst_24038__$1 = (state_24050[(2)]);
var state_24050__$1 = (function (){var statearr_24053 = state_24050;
(statearr_24053[(7)] = inst_24038__$1);

return statearr_24053;
})();
if(cljs.core.truth_(inst_24038__$1)){
var statearr_24054_24069 = state_24050__$1;
(statearr_24054_24069[(1)] = (5));

} else {
var statearr_24055_24070 = state_24050__$1;
(statearr_24055_24070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24051 === (5))){
var inst_24038 = (state_24050[(7)]);
var inst_24040 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24038);
var state_24050__$1 = state_24050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24050__$1,(8),inst_24040);
} else {
if((state_val_24051 === (6))){
var state_24050__$1 = state_24050;
var statearr_24056_24071 = state_24050__$1;
(statearr_24056_24071[(2)] = null);

(statearr_24056_24071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24051 === (7))){
var inst_24046 = (state_24050[(2)]);
var state_24050__$1 = state_24050;
var statearr_24057_24072 = state_24050__$1;
(statearr_24057_24072[(2)] = inst_24046);

(statearr_24057_24072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24051 === (8))){
var inst_24042 = (state_24050[(2)]);
var state_24050__$1 = (function (){var statearr_24058 = state_24050;
(statearr_24058[(8)] = inst_24042);

return statearr_24058;
})();
var statearr_24059_24073 = state_24050__$1;
(statearr_24059_24073[(2)] = null);

(statearr_24059_24073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19204__auto___24067,ch))
;
return ((function (switch__19142__auto__,c__19204__auto___24067,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19143__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19143__auto____0 = (function (){
var statearr_24063 = [null,null,null,null,null,null,null,null,null];
(statearr_24063[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19143__auto__);

(statearr_24063[(1)] = (1));

return statearr_24063;
});
var figwheel$client$heads_up_plugin_$_state_machine__19143__auto____1 = (function (state_24050){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_24050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e24064){if((e24064 instanceof Object)){
var ex__19146__auto__ = e24064;
var statearr_24065_24074 = state_24050;
(statearr_24065_24074[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24075 = state_24050;
state_24050 = G__24075;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19143__auto__ = function(state_24050){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19143__auto____1.call(this,state_24050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19143__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19143__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___24067,ch))
})();
var state__19206__auto__ = (function (){var statearr_24066 = f__19205__auto__.call(null);
(statearr_24066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___24067);

return statearr_24066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___24067,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__){
return (function (state_24096){
var state_val_24097 = (state_24096[(1)]);
if((state_val_24097 === (1))){
var inst_24091 = cljs.core.async.timeout.call(null,(3000));
var state_24096__$1 = state_24096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24096__$1,(2),inst_24091);
} else {
if((state_val_24097 === (2))){
var inst_24093 = (state_24096[(2)]);
var inst_24094 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24096__$1 = (function (){var statearr_24098 = state_24096;
(statearr_24098[(7)] = inst_24093);

return statearr_24098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24096__$1,inst_24094);
} else {
return null;
}
}
});})(c__19204__auto__))
;
return ((function (switch__19142__auto__,c__19204__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19143__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19143__auto____0 = (function (){
var statearr_24102 = [null,null,null,null,null,null,null,null];
(statearr_24102[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19143__auto__);

(statearr_24102[(1)] = (1));

return statearr_24102;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19143__auto____1 = (function (state_24096){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_24096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e24103){if((e24103 instanceof Object)){
var ex__19146__auto__ = e24103;
var statearr_24104_24106 = state_24096;
(statearr_24104_24106[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24107 = state_24096;
state_24096 = G__24107;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19143__auto__ = function(state_24096){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19143__auto____1.call(this,state_24096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19143__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19143__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__))
})();
var state__19206__auto__ = (function (){var statearr_24105 = f__19205__auto__.call(null);
(statearr_24105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_24105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__))
);

return c__19204__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24108){
var map__24114 = p__24108;
var map__24114__$1 = ((cljs.core.seq_QMARK_.call(null,map__24114))?cljs.core.apply.call(null,cljs.core.hash_map,map__24114):map__24114);
var ed = map__24114__$1;
var formatted_exception = cljs.core.get.call(null,map__24114__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24114__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24114__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24115_24119 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24116_24120 = null;
var count__24117_24121 = (0);
var i__24118_24122 = (0);
while(true){
if((i__24118_24122 < count__24117_24121)){
var msg_24123 = cljs.core._nth.call(null,chunk__24116_24120,i__24118_24122);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24123);

var G__24124 = seq__24115_24119;
var G__24125 = chunk__24116_24120;
var G__24126 = count__24117_24121;
var G__24127 = (i__24118_24122 + (1));
seq__24115_24119 = G__24124;
chunk__24116_24120 = G__24125;
count__24117_24121 = G__24126;
i__24118_24122 = G__24127;
continue;
} else {
var temp__4657__auto___24128 = cljs.core.seq.call(null,seq__24115_24119);
if(temp__4657__auto___24128){
var seq__24115_24129__$1 = temp__4657__auto___24128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24115_24129__$1)){
var c__16993__auto___24130 = cljs.core.chunk_first.call(null,seq__24115_24129__$1);
var G__24131 = cljs.core.chunk_rest.call(null,seq__24115_24129__$1);
var G__24132 = c__16993__auto___24130;
var G__24133 = cljs.core.count.call(null,c__16993__auto___24130);
var G__24134 = (0);
seq__24115_24119 = G__24131;
chunk__24116_24120 = G__24132;
count__24117_24121 = G__24133;
i__24118_24122 = G__24134;
continue;
} else {
var msg_24135 = cljs.core.first.call(null,seq__24115_24129__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24135);

var G__24136 = cljs.core.next.call(null,seq__24115_24129__$1);
var G__24137 = null;
var G__24138 = (0);
var G__24139 = (0);
seq__24115_24119 = G__24136;
chunk__24116_24120 = G__24137;
count__24117_24121 = G__24138;
i__24118_24122 = G__24139;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24140){
var map__24142 = p__24140;
var map__24142__$1 = ((cljs.core.seq_QMARK_.call(null,map__24142))?cljs.core.apply.call(null,cljs.core.hash_map,map__24142):map__24142);
var w = map__24142__$1;
var message = cljs.core.get.call(null,map__24142__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16196__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16196__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16196__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24149 = cljs.core.seq.call(null,plugins);
var chunk__24150 = null;
var count__24151 = (0);
var i__24152 = (0);
while(true){
if((i__24152 < count__24151)){
var vec__24153 = cljs.core._nth.call(null,chunk__24150,i__24152);
var k = cljs.core.nth.call(null,vec__24153,(0),null);
var plugin = cljs.core.nth.call(null,vec__24153,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24155 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24149,chunk__24150,count__24151,i__24152,pl_24155,vec__24153,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24155.call(null,msg_hist);
});})(seq__24149,chunk__24150,count__24151,i__24152,pl_24155,vec__24153,k,plugin))
);
} else {
}

var G__24156 = seq__24149;
var G__24157 = chunk__24150;
var G__24158 = count__24151;
var G__24159 = (i__24152 + (1));
seq__24149 = G__24156;
chunk__24150 = G__24157;
count__24151 = G__24158;
i__24152 = G__24159;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24149);
if(temp__4657__auto__){
var seq__24149__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24149__$1)){
var c__16993__auto__ = cljs.core.chunk_first.call(null,seq__24149__$1);
var G__24160 = cljs.core.chunk_rest.call(null,seq__24149__$1);
var G__24161 = c__16993__auto__;
var G__24162 = cljs.core.count.call(null,c__16993__auto__);
var G__24163 = (0);
seq__24149 = G__24160;
chunk__24150 = G__24161;
count__24151 = G__24162;
i__24152 = G__24163;
continue;
} else {
var vec__24154 = cljs.core.first.call(null,seq__24149__$1);
var k = cljs.core.nth.call(null,vec__24154,(0),null);
var plugin = cljs.core.nth.call(null,vec__24154,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24164 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24149,chunk__24150,count__24151,i__24152,pl_24164,vec__24154,k,plugin,seq__24149__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24164.call(null,msg_hist);
});})(seq__24149,chunk__24150,count__24151,i__24152,pl_24164,vec__24154,k,plugin,seq__24149__$1,temp__4657__auto__))
);
} else {
}

var G__24165 = cljs.core.next.call(null,seq__24149__$1);
var G__24166 = null;
var G__24167 = (0);
var G__24168 = (0);
seq__24149 = G__24165;
chunk__24150 = G__24166;
count__24151 = G__24167;
i__24152 = G__24168;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__24170 = arguments.length;
switch (G__24170) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17248__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17248__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24173){
var map__24174 = p__24173;
var map__24174__$1 = ((cljs.core.seq_QMARK_.call(null,map__24174))?cljs.core.apply.call(null,cljs.core.hash_map,map__24174):map__24174);
var opts = map__24174__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24172){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24172));
});

//# sourceMappingURL=client.js.map