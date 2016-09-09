// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__23194__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23195__i = 0, G__23195__a = new Array(arguments.length -  0);
while (G__23195__i < G__23195__a.length) {G__23195__a[G__23195__i] = arguments[G__23195__i + 0]; ++G__23195__i;}
  args = new cljs.core.IndexedSeq(G__23195__a,0);
} 
return G__23194__delegate.call(this,args);};
G__23194.cljs$lang$maxFixedArity = 0;
G__23194.cljs$lang$applyTo = (function (arglist__23196){
var args = cljs.core.seq(arglist__23196);
return G__23194__delegate(args);
});
G__23194.cljs$core$IFn$_invoke$arity$variadic = G__23194__delegate;
return G__23194;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23197__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23198__i = 0, G__23198__a = new Array(arguments.length -  0);
while (G__23198__i < G__23198__a.length) {G__23198__a[G__23198__i] = arguments[G__23198__i + 0]; ++G__23198__i;}
  args = new cljs.core.IndexedSeq(G__23198__a,0);
} 
return G__23197__delegate.call(this,args);};
G__23197.cljs$lang$maxFixedArity = 0;
G__23197.cljs$lang$applyTo = (function (arglist__23199){
var args = cljs.core.seq(arglist__23199);
return G__23197__delegate(args);
});
G__23197.cljs$core$IFn$_invoke$arity$variadic = G__23197__delegate;
return G__23197;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map