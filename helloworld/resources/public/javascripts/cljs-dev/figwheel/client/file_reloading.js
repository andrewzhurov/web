// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__24532_SHARP_,p2__24533_SHARP_){
var and__16196__auto__ = p1__24532_SHARP_;
if(cljs.core.truth_(and__16196__auto__)){
return p2__24533_SHARP_;
} else {
return and__16196__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16208__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16208__auto__){
return or__16208__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16208__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16208__auto__){
return or__16208__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16208__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17107__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17107__auto__,method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24534){
var map__24535 = p__24534;
var map__24535__$1 = ((cljs.core.seq_QMARK_.call(null,map__24535))?cljs.core.apply.call(null,cljs.core.hash_map,map__24535):map__24535);
var file = cljs.core.get.call(null,map__24535__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__24536){
var map__24537 = p__24536;
var map__24537__$1 = ((cljs.core.seq_QMARK_.call(null,map__24537))?cljs.core.apply.call(null,cljs.core.hash_map,map__24537):map__24537);
var namespace = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17107__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17107__auto__,method_table__17103__auto__,prefer_table__17104__auto__,method_cache__17105__auto__,cached_hierarchy__17106__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e24538){if((e24538 instanceof Error)){
var e = e24538;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24538;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__24540 = arguments.length;
switch (G__24540) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24542,callback){
var map__24544 = p__24542;
var map__24544__$1 = ((cljs.core.seq_QMARK_.call(null,map__24544))?cljs.core.apply.call(null,cljs.core.hash_map,map__24544):map__24544);
var file_msg = map__24544__$1;
var request_url = cljs.core.get.call(null,map__24544__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24544,map__24544__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24544,map__24544__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24545){
var map__24547 = p__24545;
var map__24547__$1 = ((cljs.core.seq_QMARK_.call(null,map__24547))?cljs.core.apply.call(null,cljs.core.hash_map,map__24547):map__24547);
var file_msg = map__24547__$1;
var namespace = cljs.core.get.call(null,map__24547__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__24547__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16208__auto__ = meta_data;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16196__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16196__auto__){
var or__16208__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16208__auto____$1)){
return or__16208__auto____$1;
} else {
var and__16196__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16196__auto____$1){
var or__16208__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16208__auto____$2){
return or__16208__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16196__auto____$1;
}
}
}
} else {
return and__16196__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24548,callback){
var map__24550 = p__24548;
var map__24550__$1 = ((cljs.core.seq_QMARK_.call(null,map__24550))?cljs.core.apply.call(null,cljs.core.hash_map,map__24550):map__24550);
var file_msg = map__24550__$1;
var request_url = cljs.core.get.call(null,map__24550__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19204__auto___24637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___24637,out){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___24637,out){
return (function (state_24619){
var state_val_24620 = (state_24619[(1)]);
if((state_val_24620 === (1))){
var inst_24597 = cljs.core.nth.call(null,files,(0),null);
var inst_24598 = cljs.core.nthnext.call(null,files,(1));
var inst_24599 = files;
var state_24619__$1 = (function (){var statearr_24621 = state_24619;
(statearr_24621[(7)] = inst_24598);

(statearr_24621[(8)] = inst_24599);

(statearr_24621[(9)] = inst_24597);

return statearr_24621;
})();
var statearr_24622_24638 = state_24619__$1;
(statearr_24622_24638[(2)] = null);

(statearr_24622_24638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24620 === (2))){
var inst_24602 = (state_24619[(10)]);
var inst_24599 = (state_24619[(8)]);
var inst_24602__$1 = cljs.core.nth.call(null,inst_24599,(0),null);
var inst_24603 = cljs.core.nthnext.call(null,inst_24599,(1));
var inst_24604 = (inst_24602__$1 == null);
var inst_24605 = cljs.core.not.call(null,inst_24604);
var state_24619__$1 = (function (){var statearr_24623 = state_24619;
(statearr_24623[(10)] = inst_24602__$1);

(statearr_24623[(11)] = inst_24603);

return statearr_24623;
})();
if(inst_24605){
var statearr_24624_24639 = state_24619__$1;
(statearr_24624_24639[(1)] = (4));

} else {
var statearr_24625_24640 = state_24619__$1;
(statearr_24625_24640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24620 === (3))){
var inst_24617 = (state_24619[(2)]);
var state_24619__$1 = state_24619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24619__$1,inst_24617);
} else {
if((state_val_24620 === (4))){
var inst_24602 = (state_24619[(10)]);
var inst_24607 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24602);
var state_24619__$1 = state_24619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24619__$1,(7),inst_24607);
} else {
if((state_val_24620 === (5))){
var inst_24613 = cljs.core.async.close_BANG_.call(null,out);
var state_24619__$1 = state_24619;
var statearr_24626_24641 = state_24619__$1;
(statearr_24626_24641[(2)] = inst_24613);

(statearr_24626_24641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24620 === (6))){
var inst_24615 = (state_24619[(2)]);
var state_24619__$1 = state_24619;
var statearr_24627_24642 = state_24619__$1;
(statearr_24627_24642[(2)] = inst_24615);

(statearr_24627_24642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24620 === (7))){
var inst_24603 = (state_24619[(11)]);
var inst_24609 = (state_24619[(2)]);
var inst_24610 = cljs.core.async.put_BANG_.call(null,out,inst_24609);
var inst_24599 = inst_24603;
var state_24619__$1 = (function (){var statearr_24628 = state_24619;
(statearr_24628[(8)] = inst_24599);

(statearr_24628[(12)] = inst_24610);

return statearr_24628;
})();
var statearr_24629_24643 = state_24619__$1;
(statearr_24629_24643[(2)] = null);

(statearr_24629_24643[(1)] = (2));


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
});})(c__19204__auto___24637,out))
;
return ((function (switch__19142__auto__,c__19204__auto___24637,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto____0 = (function (){
var statearr_24633 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24633[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto__);

(statearr_24633[(1)] = (1));

return statearr_24633;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto____1 = (function (state_24619){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_24619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e24634){if((e24634 instanceof Object)){
var ex__19146__auto__ = e24634;
var statearr_24635_24644 = state_24619;
(statearr_24635_24644[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24645 = state_24619;
state_24619 = G__24645;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto__ = function(state_24619){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto____1.call(this,state_24619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___24637,out))
})();
var state__19206__auto__ = (function (){var statearr_24636 = f__19205__auto__.call(null);
(statearr_24636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___24637);

return statearr_24636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___24637,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__24646,p__24647){
var map__24650 = p__24646;
var map__24650__$1 = ((cljs.core.seq_QMARK_.call(null,map__24650))?cljs.core.apply.call(null,cljs.core.hash_map,map__24650):map__24650);
var opts = map__24650__$1;
var url_rewriter = cljs.core.get.call(null,map__24650__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__24651 = p__24647;
var map__24651__$1 = ((cljs.core.seq_QMARK_.call(null,map__24651))?cljs.core.apply.call(null,cljs.core.hash_map,map__24651):map__24651);
var file_msg = map__24651__$1;
var file = cljs.core.get.call(null,map__24651__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24652,opts){
var map__24655 = p__24652;
var map__24655__$1 = ((cljs.core.seq_QMARK_.call(null,map__24655))?cljs.core.apply.call(null,cljs.core.hash_map,map__24655):map__24655);
var eval_body__$1 = cljs.core.get.call(null,map__24655__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16196__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16196__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16196__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24656){var e = e24656;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24661,p__24662){
var map__24864 = p__24661;
var map__24864__$1 = ((cljs.core.seq_QMARK_.call(null,map__24864))?cljs.core.apply.call(null,cljs.core.hash_map,map__24864):map__24864);
var opts = map__24864__$1;
var before_jsload = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__24865 = p__24662;
var map__24865__$1 = ((cljs.core.seq_QMARK_.call(null,map__24865))?cljs.core.apply.call(null,cljs.core.hash_map,map__24865):map__24865);
var msg = map__24865__$1;
var files = cljs.core.get.call(null,map__24865__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function (state_24990){
var state_val_24991 = (state_24990[(1)]);
if((state_val_24991 === (7))){
var inst_24879 = (state_24990[(7)]);
var inst_24880 = (state_24990[(8)]);
var inst_24878 = (state_24990[(9)]);
var inst_24877 = (state_24990[(10)]);
var inst_24885 = cljs.core._nth.call(null,inst_24878,inst_24880);
var inst_24886 = figwheel.client.file_reloading.eval_body.call(null,inst_24885,opts);
var inst_24887 = (inst_24880 + (1));
var tmp24992 = inst_24879;
var tmp24993 = inst_24878;
var tmp24994 = inst_24877;
var inst_24877__$1 = tmp24994;
var inst_24878__$1 = tmp24993;
var inst_24879__$1 = tmp24992;
var inst_24880__$1 = inst_24887;
var state_24990__$1 = (function (){var statearr_24995 = state_24990;
(statearr_24995[(7)] = inst_24879__$1);

(statearr_24995[(8)] = inst_24880__$1);

(statearr_24995[(9)] = inst_24878__$1);

(statearr_24995[(11)] = inst_24886);

(statearr_24995[(10)] = inst_24877__$1);

return statearr_24995;
})();
var statearr_24996_25065 = state_24990__$1;
(statearr_24996_25065[(2)] = null);

(statearr_24996_25065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (20))){
var inst_24923 = (state_24990[(12)]);
var inst_24922 = (state_24990[(13)]);
var inst_24929 = (state_24990[(14)]);
var inst_24926 = (state_24990[(15)]);
var inst_24927 = (state_24990[(16)]);
var inst_24932 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24934 = (function (){var all_files = inst_24922;
var files_SINGLEQUOTE_ = inst_24923;
var res_SINGLEQUOTE_ = inst_24926;
var res = inst_24927;
var files_not_loaded = inst_24929;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24923,inst_24922,inst_24929,inst_24926,inst_24927,inst_24932,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function (p__24933){
var map__24997 = p__24933;
var map__24997__$1 = ((cljs.core.seq_QMARK_.call(null,map__24997))?cljs.core.apply.call(null,cljs.core.hash_map,map__24997):map__24997);
var namespace = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24923,inst_24922,inst_24929,inst_24926,inst_24927,inst_24932,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
})();
var inst_24935 = cljs.core.map.call(null,inst_24934,inst_24927);
var inst_24936 = cljs.core.pr_str.call(null,inst_24935);
var inst_24937 = figwheel.client.utils.log.call(null,inst_24936);
var inst_24938 = (function (){var all_files = inst_24922;
var files_SINGLEQUOTE_ = inst_24923;
var res_SINGLEQUOTE_ = inst_24926;
var res = inst_24927;
var files_not_loaded = inst_24929;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24923,inst_24922,inst_24929,inst_24926,inst_24927,inst_24932,inst_24934,inst_24935,inst_24936,inst_24937,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24923,inst_24922,inst_24929,inst_24926,inst_24927,inst_24932,inst_24934,inst_24935,inst_24936,inst_24937,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
})();
var inst_24939 = setTimeout(inst_24938,(10));
var state_24990__$1 = (function (){var statearr_24998 = state_24990;
(statearr_24998[(17)] = inst_24937);

(statearr_24998[(18)] = inst_24932);

return statearr_24998;
})();
var statearr_24999_25066 = state_24990__$1;
(statearr_24999_25066[(2)] = inst_24939);

(statearr_24999_25066[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (27))){
var inst_24949 = (state_24990[(19)]);
var state_24990__$1 = state_24990;
var statearr_25000_25067 = state_24990__$1;
(statearr_25000_25067[(2)] = inst_24949);

(statearr_25000_25067[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (1))){
var inst_24869 = (state_24990[(20)]);
var inst_24866 = before_jsload.call(null,files);
var inst_24867 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24868 = (function (){return ((function (inst_24869,inst_24866,inst_24867,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function (p1__24657_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24657_SHARP_);
});
;})(inst_24869,inst_24866,inst_24867,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
})();
var inst_24869__$1 = cljs.core.filter.call(null,inst_24868,files);
var inst_24870 = cljs.core.not_empty.call(null,inst_24869__$1);
var state_24990__$1 = (function (){var statearr_25001 = state_24990;
(statearr_25001[(21)] = inst_24866);

(statearr_25001[(22)] = inst_24867);

(statearr_25001[(20)] = inst_24869__$1);

return statearr_25001;
})();
if(cljs.core.truth_(inst_24870)){
var statearr_25002_25068 = state_24990__$1;
(statearr_25002_25068[(1)] = (2));

} else {
var statearr_25003_25069 = state_24990__$1;
(statearr_25003_25069[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (24))){
var state_24990__$1 = state_24990;
var statearr_25004_25070 = state_24990__$1;
(statearr_25004_25070[(2)] = null);

(statearr_25004_25070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (4))){
var inst_24914 = (state_24990[(2)]);
var inst_24915 = (function (){return ((function (inst_24914,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function (p1__24658_SHARP_){
var and__16196__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24658_SHARP_);
if(cljs.core.truth_(and__16196__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24658_SHARP_));
} else {
return and__16196__auto__;
}
});
;})(inst_24914,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
})();
var inst_24916 = cljs.core.filter.call(null,inst_24915,files);
var state_24990__$1 = (function (){var statearr_25005 = state_24990;
(statearr_25005[(23)] = inst_24916);

(statearr_25005[(24)] = inst_24914);

return statearr_25005;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_25006_25071 = state_24990__$1;
(statearr_25006_25071[(1)] = (16));

} else {
var statearr_25007_25072 = state_24990__$1;
(statearr_25007_25072[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (15))){
var inst_24904 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25008_25073 = state_24990__$1;
(statearr_25008_25073[(2)] = inst_24904);

(statearr_25008_25073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (21))){
var state_24990__$1 = state_24990;
var statearr_25009_25074 = state_24990__$1;
(statearr_25009_25074[(2)] = null);

(statearr_25009_25074[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (31))){
var inst_24957 = (state_24990[(25)]);
var inst_24967 = (state_24990[(2)]);
var inst_24968 = cljs.core.not_empty.call(null,inst_24957);
var state_24990__$1 = (function (){var statearr_25010 = state_24990;
(statearr_25010[(26)] = inst_24967);

return statearr_25010;
})();
if(cljs.core.truth_(inst_24968)){
var statearr_25011_25075 = state_24990__$1;
(statearr_25011_25075[(1)] = (32));

} else {
var statearr_25012_25076 = state_24990__$1;
(statearr_25012_25076[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (32))){
var inst_24957 = (state_24990[(25)]);
var inst_24970 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24957);
var inst_24971 = cljs.core.pr_str.call(null,inst_24970);
var inst_24972 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_24971)].join('');
var inst_24973 = figwheel.client.utils.log.call(null,inst_24972);
var state_24990__$1 = state_24990;
var statearr_25013_25077 = state_24990__$1;
(statearr_25013_25077[(2)] = inst_24973);

(statearr_25013_25077[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (33))){
var state_24990__$1 = state_24990;
var statearr_25014_25078 = state_24990__$1;
(statearr_25014_25078[(2)] = null);

(statearr_25014_25078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (13))){
var inst_24890 = (state_24990[(27)]);
var inst_24894 = cljs.core.chunk_first.call(null,inst_24890);
var inst_24895 = cljs.core.chunk_rest.call(null,inst_24890);
var inst_24896 = cljs.core.count.call(null,inst_24894);
var inst_24877 = inst_24895;
var inst_24878 = inst_24894;
var inst_24879 = inst_24896;
var inst_24880 = (0);
var state_24990__$1 = (function (){var statearr_25015 = state_24990;
(statearr_25015[(7)] = inst_24879);

(statearr_25015[(8)] = inst_24880);

(statearr_25015[(9)] = inst_24878);

(statearr_25015[(10)] = inst_24877);

return statearr_25015;
})();
var statearr_25016_25079 = state_24990__$1;
(statearr_25016_25079[(2)] = null);

(statearr_25016_25079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (22))){
var inst_24929 = (state_24990[(14)]);
var inst_24942 = (state_24990[(2)]);
var inst_24943 = cljs.core.not_empty.call(null,inst_24929);
var state_24990__$1 = (function (){var statearr_25017 = state_24990;
(statearr_25017[(28)] = inst_24942);

return statearr_25017;
})();
if(cljs.core.truth_(inst_24943)){
var statearr_25018_25080 = state_24990__$1;
(statearr_25018_25080[(1)] = (23));

} else {
var statearr_25019_25081 = state_24990__$1;
(statearr_25019_25081[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (36))){
var state_24990__$1 = state_24990;
var statearr_25020_25082 = state_24990__$1;
(statearr_25020_25082[(2)] = null);

(statearr_25020_25082[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (29))){
var inst_24956 = (state_24990[(29)]);
var inst_24961 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24956);
var inst_24962 = cljs.core.pr_str.call(null,inst_24961);
var inst_24963 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24962)].join('');
var inst_24964 = figwheel.client.utils.log.call(null,inst_24963);
var state_24990__$1 = state_24990;
var statearr_25021_25083 = state_24990__$1;
(statearr_25021_25083[(2)] = inst_24964);

(statearr_25021_25083[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (6))){
var inst_24911 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25022_25084 = state_24990__$1;
(statearr_25022_25084[(2)] = inst_24911);

(statearr_25022_25084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (28))){
var inst_24956 = (state_24990[(29)]);
var inst_24955 = (state_24990[(2)]);
var inst_24956__$1 = cljs.core.get.call(null,inst_24955,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24957 = cljs.core.get.call(null,inst_24955,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_24958 = cljs.core.get.call(null,inst_24955,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24959 = cljs.core.not_empty.call(null,inst_24956__$1);
var state_24990__$1 = (function (){var statearr_25023 = state_24990;
(statearr_25023[(25)] = inst_24957);

(statearr_25023[(30)] = inst_24958);

(statearr_25023[(29)] = inst_24956__$1);

return statearr_25023;
})();
if(cljs.core.truth_(inst_24959)){
var statearr_25024_25085 = state_24990__$1;
(statearr_25024_25085[(1)] = (29));

} else {
var statearr_25025_25086 = state_24990__$1;
(statearr_25025_25086[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (25))){
var inst_24988 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24990__$1,inst_24988);
} else {
if((state_val_24991 === (34))){
var inst_24958 = (state_24990[(30)]);
var inst_24976 = (state_24990[(2)]);
var inst_24977 = cljs.core.not_empty.call(null,inst_24958);
var state_24990__$1 = (function (){var statearr_25026 = state_24990;
(statearr_25026[(31)] = inst_24976);

return statearr_25026;
})();
if(cljs.core.truth_(inst_24977)){
var statearr_25027_25087 = state_24990__$1;
(statearr_25027_25087[(1)] = (35));

} else {
var statearr_25028_25088 = state_24990__$1;
(statearr_25028_25088[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (17))){
var inst_24916 = (state_24990[(23)]);
var state_24990__$1 = state_24990;
var statearr_25029_25089 = state_24990__$1;
(statearr_25029_25089[(2)] = inst_24916);

(statearr_25029_25089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (3))){
var state_24990__$1 = state_24990;
var statearr_25030_25090 = state_24990__$1;
(statearr_25030_25090[(2)] = null);

(statearr_25030_25090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (12))){
var inst_24907 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25031_25091 = state_24990__$1;
(statearr_25031_25091[(2)] = inst_24907);

(statearr_25031_25091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (2))){
var inst_24869 = (state_24990[(20)]);
var inst_24876 = cljs.core.seq.call(null,inst_24869);
var inst_24877 = inst_24876;
var inst_24878 = null;
var inst_24879 = (0);
var inst_24880 = (0);
var state_24990__$1 = (function (){var statearr_25032 = state_24990;
(statearr_25032[(7)] = inst_24879);

(statearr_25032[(8)] = inst_24880);

(statearr_25032[(9)] = inst_24878);

(statearr_25032[(10)] = inst_24877);

return statearr_25032;
})();
var statearr_25033_25092 = state_24990__$1;
(statearr_25033_25092[(2)] = null);

(statearr_25033_25092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (23))){
var inst_24923 = (state_24990[(12)]);
var inst_24922 = (state_24990[(13)]);
var inst_24929 = (state_24990[(14)]);
var inst_24926 = (state_24990[(15)]);
var inst_24949 = (state_24990[(19)]);
var inst_24927 = (state_24990[(16)]);
var inst_24945 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24948 = (function (){var all_files = inst_24922;
var files_SINGLEQUOTE_ = inst_24923;
var res_SINGLEQUOTE_ = inst_24926;
var res = inst_24927;
var files_not_loaded = inst_24929;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24923,inst_24922,inst_24929,inst_24926,inst_24949,inst_24927,inst_24945,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function (p__24947){
var map__25034 = p__24947;
var map__25034__$1 = ((cljs.core.seq_QMARK_.call(null,map__25034))?cljs.core.apply.call(null,cljs.core.hash_map,map__25034):map__25034);
var meta_data = cljs.core.get.call(null,map__25034__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_24923,inst_24922,inst_24929,inst_24926,inst_24949,inst_24927,inst_24945,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
})();
var inst_24949__$1 = cljs.core.group_by.call(null,inst_24948,inst_24929);
var inst_24950 = cljs.core.seq_QMARK_.call(null,inst_24949__$1);
var state_24990__$1 = (function (){var statearr_25035 = state_24990;
(statearr_25035[(19)] = inst_24949__$1);

(statearr_25035[(32)] = inst_24945);

return statearr_25035;
})();
if(inst_24950){
var statearr_25036_25093 = state_24990__$1;
(statearr_25036_25093[(1)] = (26));

} else {
var statearr_25037_25094 = state_24990__$1;
(statearr_25037_25094[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (35))){
var inst_24958 = (state_24990[(30)]);
var inst_24979 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24958);
var inst_24980 = cljs.core.pr_str.call(null,inst_24979);
var inst_24981 = [cljs.core.str("not required: "),cljs.core.str(inst_24980)].join('');
var inst_24982 = figwheel.client.utils.log.call(null,inst_24981);
var state_24990__$1 = state_24990;
var statearr_25038_25095 = state_24990__$1;
(statearr_25038_25095[(2)] = inst_24982);

(statearr_25038_25095[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (19))){
var inst_24923 = (state_24990[(12)]);
var inst_24922 = (state_24990[(13)]);
var inst_24926 = (state_24990[(15)]);
var inst_24927 = (state_24990[(16)]);
var inst_24926__$1 = (state_24990[(2)]);
var inst_24927__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24926__$1);
var inst_24928 = (function (){var all_files = inst_24922;
var files_SINGLEQUOTE_ = inst_24923;
var res_SINGLEQUOTE_ = inst_24926__$1;
var res = inst_24927__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_24923,inst_24922,inst_24926,inst_24927,inst_24926__$1,inst_24927__$1,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function (p1__24660_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24660_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_24923,inst_24922,inst_24926,inst_24927,inst_24926__$1,inst_24927__$1,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
})();
var inst_24929 = cljs.core.filter.call(null,inst_24928,inst_24926__$1);
var inst_24930 = cljs.core.not_empty.call(null,inst_24927__$1);
var state_24990__$1 = (function (){var statearr_25039 = state_24990;
(statearr_25039[(14)] = inst_24929);

(statearr_25039[(15)] = inst_24926__$1);

(statearr_25039[(16)] = inst_24927__$1);

return statearr_25039;
})();
if(cljs.core.truth_(inst_24930)){
var statearr_25040_25096 = state_24990__$1;
(statearr_25040_25096[(1)] = (20));

} else {
var statearr_25041_25097 = state_24990__$1;
(statearr_25041_25097[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (11))){
var state_24990__$1 = state_24990;
var statearr_25042_25098 = state_24990__$1;
(statearr_25042_25098[(2)] = null);

(statearr_25042_25098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (9))){
var inst_24909 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25043_25099 = state_24990__$1;
(statearr_25043_25099[(2)] = inst_24909);

(statearr_25043_25099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (5))){
var inst_24879 = (state_24990[(7)]);
var inst_24880 = (state_24990[(8)]);
var inst_24882 = (inst_24880 < inst_24879);
var inst_24883 = inst_24882;
var state_24990__$1 = state_24990;
if(cljs.core.truth_(inst_24883)){
var statearr_25044_25100 = state_24990__$1;
(statearr_25044_25100[(1)] = (7));

} else {
var statearr_25045_25101 = state_24990__$1;
(statearr_25045_25101[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (14))){
var inst_24890 = (state_24990[(27)]);
var inst_24899 = cljs.core.first.call(null,inst_24890);
var inst_24900 = figwheel.client.file_reloading.eval_body.call(null,inst_24899,opts);
var inst_24901 = cljs.core.next.call(null,inst_24890);
var inst_24877 = inst_24901;
var inst_24878 = null;
var inst_24879 = (0);
var inst_24880 = (0);
var state_24990__$1 = (function (){var statearr_25046 = state_24990;
(statearr_25046[(7)] = inst_24879);

(statearr_25046[(8)] = inst_24880);

(statearr_25046[(33)] = inst_24900);

(statearr_25046[(9)] = inst_24878);

(statearr_25046[(10)] = inst_24877);

return statearr_25046;
})();
var statearr_25047_25102 = state_24990__$1;
(statearr_25047_25102[(2)] = null);

(statearr_25047_25102[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (26))){
var inst_24949 = (state_24990[(19)]);
var inst_24952 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24949);
var state_24990__$1 = state_24990;
var statearr_25048_25103 = state_24990__$1;
(statearr_25048_25103[(2)] = inst_24952);

(statearr_25048_25103[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (16))){
var inst_24916 = (state_24990[(23)]);
var inst_24918 = (function (){var all_files = inst_24916;
return ((function (all_files,inst_24916,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function (p1__24659_SHARP_){
return cljs.core.update_in.call(null,p1__24659_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_24916,state_val_24991,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
})();
var inst_24919 = cljs.core.map.call(null,inst_24918,inst_24916);
var state_24990__$1 = state_24990;
var statearr_25049_25104 = state_24990__$1;
(statearr_25049_25104[(2)] = inst_24919);

(statearr_25049_25104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (30))){
var state_24990__$1 = state_24990;
var statearr_25050_25105 = state_24990__$1;
(statearr_25050_25105[(2)] = null);

(statearr_25050_25105[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (10))){
var inst_24890 = (state_24990[(27)]);
var inst_24892 = cljs.core.chunked_seq_QMARK_.call(null,inst_24890);
var state_24990__$1 = state_24990;
if(inst_24892){
var statearr_25051_25106 = state_24990__$1;
(statearr_25051_25106[(1)] = (13));

} else {
var statearr_25052_25107 = state_24990__$1;
(statearr_25052_25107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (18))){
var inst_24923 = (state_24990[(12)]);
var inst_24922 = (state_24990[(13)]);
var inst_24922__$1 = (state_24990[(2)]);
var inst_24923__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_24922__$1);
var inst_24924 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24923__$1);
var state_24990__$1 = (function (){var statearr_25053 = state_24990;
(statearr_25053[(12)] = inst_24923__$1);

(statearr_25053[(13)] = inst_24922__$1);

return statearr_25053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24990__$1,(19),inst_24924);
} else {
if((state_val_24991 === (37))){
var inst_24985 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25054_25108 = state_24990__$1;
(statearr_25054_25108[(2)] = inst_24985);

(statearr_25054_25108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (8))){
var inst_24890 = (state_24990[(27)]);
var inst_24877 = (state_24990[(10)]);
var inst_24890__$1 = cljs.core.seq.call(null,inst_24877);
var state_24990__$1 = (function (){var statearr_25055 = state_24990;
(statearr_25055[(27)] = inst_24890__$1);

return statearr_25055;
})();
if(inst_24890__$1){
var statearr_25056_25109 = state_24990__$1;
(statearr_25056_25109[(1)] = (10));

} else {
var statearr_25057_25110 = state_24990__$1;
(statearr_25057_25110[(1)] = (11));

}

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
}
}
}
});})(c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
;
return ((function (switch__19142__auto__,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto____0 = (function (){
var statearr_25061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25061[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto__);

(statearr_25061[(1)] = (1));

return statearr_25061;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto____1 = (function (state_24990){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_24990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25062){if((e25062 instanceof Object)){
var ex__19146__auto__ = e25062;
var statearr_25063_25111 = state_24990;
(statearr_25063_25111[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25112 = state_24990;
state_24990 = G__25112;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto__ = function(state_24990){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto____1.call(this,state_24990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
})();
var state__19206__auto__ = (function (){var statearr_25064 = f__19205__auto__.call(null);
(statearr_25064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_25064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__,map__24864,map__24864__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__24865,map__24865__$1,msg,files))
);

return c__19204__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25115,link){
var map__25117 = p__25115;
var map__25117__$1 = ((cljs.core.seq_QMARK_.call(null,map__25117))?cljs.core.apply.call(null,cljs.core.hash_map,map__25117):map__25117);
var file = cljs.core.get.call(null,map__25117__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25117,map__25117__$1,file){
return (function (p1__25113_SHARP_,p2__25114_SHARP_){
if(cljs.core._EQ_.call(null,p1__25113_SHARP_,p2__25114_SHARP_)){
return p1__25113_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25117,map__25117__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25121){
var map__25122 = p__25121;
var map__25122__$1 = ((cljs.core.seq_QMARK_.call(null,map__25122))?cljs.core.apply.call(null,cljs.core.hash_map,map__25122):map__25122);
var match_length = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25118_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25118_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__25124 = arguments.length;
switch (G__25124) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25126){
var map__25128 = p__25126;
var map__25128__$1 = ((cljs.core.seq_QMARK_.call(null,map__25128))?cljs.core.apply.call(null,cljs.core.hash_map,map__25128):map__25128);
var f_data = map__25128__$1;
var file = cljs.core.get.call(null,map__25128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__25128__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16208__auto__ = request_url;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25129,files_msg){
var map__25151 = p__25129;
var map__25151__$1 = ((cljs.core.seq_QMARK_.call(null,map__25151))?cljs.core.apply.call(null,cljs.core.hash_map,map__25151):map__25151);
var opts = map__25151__$1;
var on_cssload = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25152_25172 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25153_25173 = null;
var count__25154_25174 = (0);
var i__25155_25175 = (0);
while(true){
if((i__25155_25175 < count__25154_25174)){
var f_25176 = cljs.core._nth.call(null,chunk__25153_25173,i__25155_25175);
figwheel.client.file_reloading.reload_css_file.call(null,f_25176);

var G__25177 = seq__25152_25172;
var G__25178 = chunk__25153_25173;
var G__25179 = count__25154_25174;
var G__25180 = (i__25155_25175 + (1));
seq__25152_25172 = G__25177;
chunk__25153_25173 = G__25178;
count__25154_25174 = G__25179;
i__25155_25175 = G__25180;
continue;
} else {
var temp__4657__auto___25181 = cljs.core.seq.call(null,seq__25152_25172);
if(temp__4657__auto___25181){
var seq__25152_25182__$1 = temp__4657__auto___25181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25152_25182__$1)){
var c__16993__auto___25183 = cljs.core.chunk_first.call(null,seq__25152_25182__$1);
var G__25184 = cljs.core.chunk_rest.call(null,seq__25152_25182__$1);
var G__25185 = c__16993__auto___25183;
var G__25186 = cljs.core.count.call(null,c__16993__auto___25183);
var G__25187 = (0);
seq__25152_25172 = G__25184;
chunk__25153_25173 = G__25185;
count__25154_25174 = G__25186;
i__25155_25175 = G__25187;
continue;
} else {
var f_25188 = cljs.core.first.call(null,seq__25152_25182__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25188);

var G__25189 = cljs.core.next.call(null,seq__25152_25182__$1);
var G__25190 = null;
var G__25191 = (0);
var G__25192 = (0);
seq__25152_25172 = G__25189;
chunk__25153_25173 = G__25190;
count__25154_25174 = G__25191;
i__25155_25175 = G__25192;
continue;
}
} else {
}
}
break;
}

var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__,map__25151,map__25151__$1,opts,on_cssload){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__,map__25151,map__25151__$1,opts,on_cssload){
return (function (state_25162){
var state_val_25163 = (state_25162[(1)]);
if((state_val_25163 === (1))){
var inst_25156 = cljs.core.async.timeout.call(null,(100));
var state_25162__$1 = state_25162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25162__$1,(2),inst_25156);
} else {
if((state_val_25163 === (2))){
var inst_25158 = (state_25162[(2)]);
var inst_25159 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25160 = on_cssload.call(null,inst_25159);
var state_25162__$1 = (function (){var statearr_25164 = state_25162;
(statearr_25164[(7)] = inst_25158);

return statearr_25164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25162__$1,inst_25160);
} else {
return null;
}
}
});})(c__19204__auto__,map__25151,map__25151__$1,opts,on_cssload))
;
return ((function (switch__19142__auto__,c__19204__auto__,map__25151,map__25151__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto____0 = (function (){
var statearr_25168 = [null,null,null,null,null,null,null,null];
(statearr_25168[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto__);

(statearr_25168[(1)] = (1));

return statearr_25168;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto____1 = (function (state_25162){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25169){if((e25169 instanceof Object)){
var ex__19146__auto__ = e25169;
var statearr_25170_25193 = state_25162;
(statearr_25170_25193[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25194 = state_25162;
state_25162 = G__25194;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto__ = function(state_25162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto____1.call(this,state_25162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__,map__25151,map__25151__$1,opts,on_cssload))
})();
var state__19206__auto__ = (function (){var statearr_25171 = f__19205__auto__.call(null);
(statearr_25171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_25171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__,map__25151,map__25151__$1,opts,on_cssload))
);

return c__19204__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map