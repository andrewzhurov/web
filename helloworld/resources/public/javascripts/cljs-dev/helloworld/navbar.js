// Compiled by ClojureScript 0.0-3308 {}
goog.provide('helloworld.navbar');
goog.require('cljs.core');
goog.require('reagent.core');
helloworld.navbar.loren = (function helloworld$navbar$loren(reps){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,reps,cljs.core.repeat.call(null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n      aliquip ex ea commodo consequat. Duis aute irure dolor in\n      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n      culpa qui officia deserunt mollit anim id est laborum.")));
});
helloworld.navbar.scrollpos = reagent.core.atom.call(null,(0));
helloworld.navbar.update_scroll = (function helloworld$navbar$update_scroll(){
return cljs.core.reset_BANG_.call(null,helloworld.navbar.scrollpos,window.pageYOffset);
});
helloworld.navbar.track_scroll = (function helloworld$navbar$track_scroll(){
return window.addEventListener("scroll",helloworld.navbar.update_scroll);
});
helloworld.navbar.crazyfloat = (function helloworld$navbar$crazyfloat(sp){
if((sp < (30))){
return "static";
} else {
return "fixed";

}
});
helloworld.navbar.navbar = (function helloworld$navbar$navbar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),helloworld.navbar.crazyfloat.call(null,cljs.core.deref.call(null,helloworld.navbar.scrollpos)),new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgrey"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"In bar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"In bar too"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"And I"], null)], null);
});
helloworld.navbar.das_page = (function helloworld$navbar$das_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.navbar.navbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),helloworld.navbar.loren.call(null,(10))], null)], null);
});
helloworld.navbar.track_scroll.call(null);
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.navbar.das_page], null),document.getElementById("app"));

//# sourceMappingURL=navbar.js.map