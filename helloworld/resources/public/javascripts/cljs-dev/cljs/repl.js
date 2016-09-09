// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24843_24855 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24844_24856 = null;
var count__24845_24857 = (0);
var i__24846_24858 = (0);
while(true){
if((i__24846_24858 < count__24845_24857)){
var f_24859 = cljs.core._nth.call(null,chunk__24844_24856,i__24846_24858);
cljs.core.println.call(null,"  ",f_24859);

var G__24860 = seq__24843_24855;
var G__24861 = chunk__24844_24856;
var G__24862 = count__24845_24857;
var G__24863 = (i__24846_24858 + (1));
seq__24843_24855 = G__24860;
chunk__24844_24856 = G__24861;
count__24845_24857 = G__24862;
i__24846_24858 = G__24863;
continue;
} else {
var temp__4657__auto___24864 = cljs.core.seq.call(null,seq__24843_24855);
if(temp__4657__auto___24864){
var seq__24843_24865__$1 = temp__4657__auto___24864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24843_24865__$1)){
var c__16993__auto___24866 = cljs.core.chunk_first.call(null,seq__24843_24865__$1);
var G__24867 = cljs.core.chunk_rest.call(null,seq__24843_24865__$1);
var G__24868 = c__16993__auto___24866;
var G__24869 = cljs.core.count.call(null,c__16993__auto___24866);
var G__24870 = (0);
seq__24843_24855 = G__24867;
chunk__24844_24856 = G__24868;
count__24845_24857 = G__24869;
i__24846_24858 = G__24870;
continue;
} else {
var f_24871 = cljs.core.first.call(null,seq__24843_24865__$1);
cljs.core.println.call(null,"  ",f_24871);

var G__24872 = cljs.core.next.call(null,seq__24843_24865__$1);
var G__24873 = null;
var G__24874 = (0);
var G__24875 = (0);
seq__24843_24855 = G__24872;
chunk__24844_24856 = G__24873;
count__24845_24857 = G__24874;
i__24846_24858 = G__24875;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24876 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16208__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24876);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24876)))?cljs.core.second.call(null,arglists_24876):arglists_24876));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24847 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24848 = null;
var count__24849 = (0);
var i__24850 = (0);
while(true){
if((i__24850 < count__24849)){
var vec__24851 = cljs.core._nth.call(null,chunk__24848,i__24850);
var name = cljs.core.nth.call(null,vec__24851,(0),null);
var map__24852 = cljs.core.nth.call(null,vec__24851,(1),null);
var map__24852__$1 = ((cljs.core.seq_QMARK_.call(null,map__24852))?cljs.core.apply.call(null,cljs.core.hash_map,map__24852):map__24852);
var doc = cljs.core.get.call(null,map__24852__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24852__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24877 = seq__24847;
var G__24878 = chunk__24848;
var G__24879 = count__24849;
var G__24880 = (i__24850 + (1));
seq__24847 = G__24877;
chunk__24848 = G__24878;
count__24849 = G__24879;
i__24850 = G__24880;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24847);
if(temp__4657__auto__){
var seq__24847__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24847__$1)){
var c__16993__auto__ = cljs.core.chunk_first.call(null,seq__24847__$1);
var G__24881 = cljs.core.chunk_rest.call(null,seq__24847__$1);
var G__24882 = c__16993__auto__;
var G__24883 = cljs.core.count.call(null,c__16993__auto__);
var G__24884 = (0);
seq__24847 = G__24881;
chunk__24848 = G__24882;
count__24849 = G__24883;
i__24850 = G__24884;
continue;
} else {
var vec__24853 = cljs.core.first.call(null,seq__24847__$1);
var name = cljs.core.nth.call(null,vec__24853,(0),null);
var map__24854 = cljs.core.nth.call(null,vec__24853,(1),null);
var map__24854__$1 = ((cljs.core.seq_QMARK_.call(null,map__24854))?cljs.core.apply.call(null,cljs.core.hash_map,map__24854):map__24854);
var doc = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24885 = cljs.core.next.call(null,seq__24847__$1);
var G__24886 = null;
var G__24887 = (0);
var G__24888 = (0);
seq__24847 = G__24885;
chunk__24848 = G__24886;
count__24849 = G__24887;
i__24850 = G__24888;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map