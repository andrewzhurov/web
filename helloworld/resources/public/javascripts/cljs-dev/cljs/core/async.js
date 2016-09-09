// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25200 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25200 = (function (fn_handler,f,meta25201){
this.fn_handler = fn_handler;
this.f = f;
this.meta25201 = meta25201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25202,meta25201__$1){
var self__ = this;
var _25202__$1 = this;
return (new cljs.core.async.t25200(self__.fn_handler,self__.f,meta25201__$1));
});

cljs.core.async.t25200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25202){
var self__ = this;
var _25202__$1 = this;
return self__.meta25201;
});

cljs.core.async.t25200.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25201","meta25201",-1171344073,null)], null);
});

cljs.core.async.t25200.cljs$lang$type = true;

cljs.core.async.t25200.cljs$lang$ctorStr = "cljs.core.async/t25200";

cljs.core.async.t25200.cljs$lang$ctorPrWriter = (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t25200");
});

cljs.core.async.__GT_t25200 = (function cljs$core$async$fn_handler_$___GT_t25200(fn_handler__$1,f__$1,meta25201){
return (new cljs.core.async.t25200(fn_handler__$1,f__$1,meta25201));
});

}

return (new cljs.core.async.t25200(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25204 = buff;
if(G__25204){
var bit__16882__auto__ = null;
if(cljs.core.truth_((function (){var or__16208__auto__ = bit__16882__auto__;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return G__25204.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25204.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25204);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25204);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__25206 = arguments.length;
switch (G__25206) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__25209 = arguments.length;
switch (G__25209) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25211 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25211);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25211,ret){
return (function (){
return fn1.call(null,val_25211);
});})(val_25211,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__25213 = arguments.length;
switch (G__25213) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17093__auto___25215 = n;
var x_25216 = (0);
while(true){
if((x_25216 < n__17093__auto___25215)){
(a[x_25216] = (0));

var G__25217 = (x_25216 + (1));
x_25216 = G__25217;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25218 = (i + (1));
i = G__25218;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25222 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25222 = (function (alt_flag,flag,meta25223){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25223 = meta25223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25224,meta25223__$1){
var self__ = this;
var _25224__$1 = this;
return (new cljs.core.async.t25222(self__.alt_flag,self__.flag,meta25223__$1));
});})(flag))
;

cljs.core.async.t25222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25224){
var self__ = this;
var _25224__$1 = this;
return self__.meta25223;
});})(flag))
;

cljs.core.async.t25222.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25222.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25223","meta25223",261671066,null)], null);
});})(flag))
;

cljs.core.async.t25222.cljs$lang$type = true;

cljs.core.async.t25222.cljs$lang$ctorStr = "cljs.core.async/t25222";

cljs.core.async.t25222.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t25222");
});})(flag))
;

cljs.core.async.__GT_t25222 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25222(alt_flag__$1,flag__$1,meta25223){
return (new cljs.core.async.t25222(alt_flag__$1,flag__$1,meta25223));
});})(flag))
;

}

return (new cljs.core.async.t25222(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25228 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25228 = (function (alt_handler,flag,cb,meta25229){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25229 = meta25229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25230,meta25229__$1){
var self__ = this;
var _25230__$1 = this;
return (new cljs.core.async.t25228(self__.alt_handler,self__.flag,self__.cb,meta25229__$1));
});

cljs.core.async.t25228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25230){
var self__ = this;
var _25230__$1 = this;
return self__.meta25229;
});

cljs.core.async.t25228.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25229","meta25229",-1401859987,null)], null);
});

cljs.core.async.t25228.cljs$lang$type = true;

cljs.core.async.t25228.cljs$lang$ctorStr = "cljs.core.async/t25228";

cljs.core.async.t25228.cljs$lang$ctorPrWriter = (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t25228");
});

cljs.core.async.__GT_t25228 = (function cljs$core$async$alt_handler_$___GT_t25228(alt_handler__$1,flag__$1,cb__$1,meta25229){
return (new cljs.core.async.t25228(alt_handler__$1,flag__$1,cb__$1,meta25229));
});

}

return (new cljs.core.async.t25228(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25231_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25231_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25232_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25232_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16208__auto__ = wport;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25233 = (i + (1));
i = G__25233;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16208__auto__ = ret;
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__16196__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16196__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16196__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17248__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17248__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25236){
var map__25237 = p__25236;
var map__25237__$1 = ((cljs.core.seq_QMARK_.call(null,map__25237))?cljs.core.apply.call(null,cljs.core.hash_map,map__25237):map__25237);
var opts = map__25237__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25234){
var G__25235 = cljs.core.first.call(null,seq25234);
var seq25234__$1 = cljs.core.next.call(null,seq25234);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25235,seq25234__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25239 = arguments.length;
switch (G__25239) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19204__auto___25288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___25288){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___25288){
return (function (state_25263){
var state_val_25264 = (state_25263[(1)]);
if((state_val_25264 === (7))){
var inst_25259 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25265_25289 = state_25263__$1;
(statearr_25265_25289[(2)] = inst_25259);

(statearr_25265_25289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (1))){
var state_25263__$1 = state_25263;
var statearr_25266_25290 = state_25263__$1;
(statearr_25266_25290[(2)] = null);

(statearr_25266_25290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (4))){
var inst_25242 = (state_25263[(7)]);
var inst_25242__$1 = (state_25263[(2)]);
var inst_25243 = (inst_25242__$1 == null);
var state_25263__$1 = (function (){var statearr_25267 = state_25263;
(statearr_25267[(7)] = inst_25242__$1);

return statearr_25267;
})();
if(cljs.core.truth_(inst_25243)){
var statearr_25268_25291 = state_25263__$1;
(statearr_25268_25291[(1)] = (5));

} else {
var statearr_25269_25292 = state_25263__$1;
(statearr_25269_25292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (13))){
var state_25263__$1 = state_25263;
var statearr_25270_25293 = state_25263__$1;
(statearr_25270_25293[(2)] = null);

(statearr_25270_25293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (6))){
var inst_25242 = (state_25263[(7)]);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25263__$1,(11),to,inst_25242);
} else {
if((state_val_25264 === (3))){
var inst_25261 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25263__$1,inst_25261);
} else {
if((state_val_25264 === (12))){
var state_25263__$1 = state_25263;
var statearr_25271_25294 = state_25263__$1;
(statearr_25271_25294[(2)] = null);

(statearr_25271_25294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (2))){
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25263__$1,(4),from);
} else {
if((state_val_25264 === (11))){
var inst_25252 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
if(cljs.core.truth_(inst_25252)){
var statearr_25272_25295 = state_25263__$1;
(statearr_25272_25295[(1)] = (12));

} else {
var statearr_25273_25296 = state_25263__$1;
(statearr_25273_25296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (9))){
var state_25263__$1 = state_25263;
var statearr_25274_25297 = state_25263__$1;
(statearr_25274_25297[(2)] = null);

(statearr_25274_25297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (5))){
var state_25263__$1 = state_25263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25275_25298 = state_25263__$1;
(statearr_25275_25298[(1)] = (8));

} else {
var statearr_25276_25299 = state_25263__$1;
(statearr_25276_25299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (14))){
var inst_25257 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25277_25300 = state_25263__$1;
(statearr_25277_25300[(2)] = inst_25257);

(statearr_25277_25300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (10))){
var inst_25249 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25278_25301 = state_25263__$1;
(statearr_25278_25301[(2)] = inst_25249);

(statearr_25278_25301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25264 === (8))){
var inst_25246 = cljs.core.async.close_BANG_.call(null,to);
var state_25263__$1 = state_25263;
var statearr_25279_25302 = state_25263__$1;
(statearr_25279_25302[(2)] = inst_25246);

(statearr_25279_25302[(1)] = (10));


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
});})(c__19204__auto___25288))
;
return ((function (switch__19142__auto__,c__19204__auto___25288){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_25283 = [null,null,null,null,null,null,null,null];
(statearr_25283[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_25283[(1)] = (1));

return statearr_25283;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_25263){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25284){if((e25284 instanceof Object)){
var ex__19146__auto__ = e25284;
var statearr_25285_25303 = state_25263;
(statearr_25285_25303[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25304 = state_25263;
state_25263 = G__25304;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_25263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_25263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___25288))
})();
var state__19206__auto__ = (function (){var statearr_25286 = f__19205__auto__.call(null);
(statearr_25286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___25288);

return statearr_25286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___25288))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25488){
var vec__25489 = p__25488;
var v = cljs.core.nth.call(null,vec__25489,(0),null);
var p = cljs.core.nth.call(null,vec__25489,(1),null);
var job = vec__25489;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19204__auto___25671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___25671,res,vec__25489,v,p,job,jobs,results){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___25671,res,vec__25489,v,p,job,jobs,results){
return (function (state_25494){
var state_val_25495 = (state_25494[(1)]);
if((state_val_25495 === (1))){
var state_25494__$1 = state_25494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25494__$1,(2),res,v);
} else {
if((state_val_25495 === (2))){
var inst_25491 = (state_25494[(2)]);
var inst_25492 = cljs.core.async.close_BANG_.call(null,res);
var state_25494__$1 = (function (){var statearr_25496 = state_25494;
(statearr_25496[(7)] = inst_25491);

return statearr_25496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25494__$1,inst_25492);
} else {
return null;
}
}
});})(c__19204__auto___25671,res,vec__25489,v,p,job,jobs,results))
;
return ((function (switch__19142__auto__,c__19204__auto___25671,res,vec__25489,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0 = (function (){
var statearr_25500 = [null,null,null,null,null,null,null,null];
(statearr_25500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__);

(statearr_25500[(1)] = (1));

return statearr_25500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1 = (function (state_25494){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25501){if((e25501 instanceof Object)){
var ex__19146__auto__ = e25501;
var statearr_25502_25672 = state_25494;
(statearr_25502_25672[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25673 = state_25494;
state_25494 = G__25673;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = function(state_25494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1.call(this,state_25494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___25671,res,vec__25489,v,p,job,jobs,results))
})();
var state__19206__auto__ = (function (){var statearr_25503 = f__19205__auto__.call(null);
(statearr_25503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___25671);

return statearr_25503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___25671,res,vec__25489,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25504){
var vec__25505 = p__25504;
var v = cljs.core.nth.call(null,vec__25505,(0),null);
var p = cljs.core.nth.call(null,vec__25505,(1),null);
var job = vec__25505;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17093__auto___25674 = n;
var __25675 = (0);
while(true){
if((__25675 < n__17093__auto___25674)){
var G__25506_25676 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25506_25676) {
case "compute":
var c__19204__auto___25678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25675,c__19204__auto___25678,G__25506_25676,n__17093__auto___25674,jobs,results,process,async){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (__25675,c__19204__auto___25678,G__25506_25676,n__17093__auto___25674,jobs,results,process,async){
return (function (state_25519){
var state_val_25520 = (state_25519[(1)]);
if((state_val_25520 === (1))){
var state_25519__$1 = state_25519;
var statearr_25521_25679 = state_25519__$1;
(statearr_25521_25679[(2)] = null);

(statearr_25521_25679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (2))){
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25519__$1,(4),jobs);
} else {
if((state_val_25520 === (3))){
var inst_25517 = (state_25519[(2)]);
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25519__$1,inst_25517);
} else {
if((state_val_25520 === (4))){
var inst_25509 = (state_25519[(2)]);
var inst_25510 = process.call(null,inst_25509);
var state_25519__$1 = state_25519;
if(cljs.core.truth_(inst_25510)){
var statearr_25522_25680 = state_25519__$1;
(statearr_25522_25680[(1)] = (5));

} else {
var statearr_25523_25681 = state_25519__$1;
(statearr_25523_25681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (5))){
var state_25519__$1 = state_25519;
var statearr_25524_25682 = state_25519__$1;
(statearr_25524_25682[(2)] = null);

(statearr_25524_25682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (6))){
var state_25519__$1 = state_25519;
var statearr_25525_25683 = state_25519__$1;
(statearr_25525_25683[(2)] = null);

(statearr_25525_25683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (7))){
var inst_25515 = (state_25519[(2)]);
var state_25519__$1 = state_25519;
var statearr_25526_25684 = state_25519__$1;
(statearr_25526_25684[(2)] = inst_25515);

(statearr_25526_25684[(1)] = (3));


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
});})(__25675,c__19204__auto___25678,G__25506_25676,n__17093__auto___25674,jobs,results,process,async))
;
return ((function (__25675,switch__19142__auto__,c__19204__auto___25678,G__25506_25676,n__17093__auto___25674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0 = (function (){
var statearr_25530 = [null,null,null,null,null,null,null];
(statearr_25530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__);

(statearr_25530[(1)] = (1));

return statearr_25530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1 = (function (state_25519){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25531){if((e25531 instanceof Object)){
var ex__19146__auto__ = e25531;
var statearr_25532_25685 = state_25519;
(statearr_25532_25685[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25686 = state_25519;
state_25519 = G__25686;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = function(state_25519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1.call(this,state_25519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__;
})()
;})(__25675,switch__19142__auto__,c__19204__auto___25678,G__25506_25676,n__17093__auto___25674,jobs,results,process,async))
})();
var state__19206__auto__ = (function (){var statearr_25533 = f__19205__auto__.call(null);
(statearr_25533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___25678);

return statearr_25533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(__25675,c__19204__auto___25678,G__25506_25676,n__17093__auto___25674,jobs,results,process,async))
);


break;
case "async":
var c__19204__auto___25687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25675,c__19204__auto___25687,G__25506_25676,n__17093__auto___25674,jobs,results,process,async){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (__25675,c__19204__auto___25687,G__25506_25676,n__17093__auto___25674,jobs,results,process,async){
return (function (state_25546){
var state_val_25547 = (state_25546[(1)]);
if((state_val_25547 === (1))){
var state_25546__$1 = state_25546;
var statearr_25548_25688 = state_25546__$1;
(statearr_25548_25688[(2)] = null);

(statearr_25548_25688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25547 === (2))){
var state_25546__$1 = state_25546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25546__$1,(4),jobs);
} else {
if((state_val_25547 === (3))){
var inst_25544 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25546__$1,inst_25544);
} else {
if((state_val_25547 === (4))){
var inst_25536 = (state_25546[(2)]);
var inst_25537 = async.call(null,inst_25536);
var state_25546__$1 = state_25546;
if(cljs.core.truth_(inst_25537)){
var statearr_25549_25689 = state_25546__$1;
(statearr_25549_25689[(1)] = (5));

} else {
var statearr_25550_25690 = state_25546__$1;
(statearr_25550_25690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25547 === (5))){
var state_25546__$1 = state_25546;
var statearr_25551_25691 = state_25546__$1;
(statearr_25551_25691[(2)] = null);

(statearr_25551_25691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25547 === (6))){
var state_25546__$1 = state_25546;
var statearr_25552_25692 = state_25546__$1;
(statearr_25552_25692[(2)] = null);

(statearr_25552_25692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25547 === (7))){
var inst_25542 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25553_25693 = state_25546__$1;
(statearr_25553_25693[(2)] = inst_25542);

(statearr_25553_25693[(1)] = (3));


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
});})(__25675,c__19204__auto___25687,G__25506_25676,n__17093__auto___25674,jobs,results,process,async))
;
return ((function (__25675,switch__19142__auto__,c__19204__auto___25687,G__25506_25676,n__17093__auto___25674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0 = (function (){
var statearr_25557 = [null,null,null,null,null,null,null];
(statearr_25557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__);

(statearr_25557[(1)] = (1));

return statearr_25557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1 = (function (state_25546){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25558){if((e25558 instanceof Object)){
var ex__19146__auto__ = e25558;
var statearr_25559_25694 = state_25546;
(statearr_25559_25694[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25695 = state_25546;
state_25546 = G__25695;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = function(state_25546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1.call(this,state_25546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__;
})()
;})(__25675,switch__19142__auto__,c__19204__auto___25687,G__25506_25676,n__17093__auto___25674,jobs,results,process,async))
})();
var state__19206__auto__ = (function (){var statearr_25560 = f__19205__auto__.call(null);
(statearr_25560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___25687);

return statearr_25560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(__25675,c__19204__auto___25687,G__25506_25676,n__17093__auto___25674,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25696 = (__25675 + (1));
__25675 = G__25696;
continue;
} else {
}
break;
}

var c__19204__auto___25697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___25697,jobs,results,process,async){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___25697,jobs,results,process,async){
return (function (state_25582){
var state_val_25583 = (state_25582[(1)]);
if((state_val_25583 === (1))){
var state_25582__$1 = state_25582;
var statearr_25584_25698 = state_25582__$1;
(statearr_25584_25698[(2)] = null);

(statearr_25584_25698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25583 === (2))){
var state_25582__$1 = state_25582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25582__$1,(4),from);
} else {
if((state_val_25583 === (3))){
var inst_25580 = (state_25582[(2)]);
var state_25582__$1 = state_25582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25582__$1,inst_25580);
} else {
if((state_val_25583 === (4))){
var inst_25563 = (state_25582[(7)]);
var inst_25563__$1 = (state_25582[(2)]);
var inst_25564 = (inst_25563__$1 == null);
var state_25582__$1 = (function (){var statearr_25585 = state_25582;
(statearr_25585[(7)] = inst_25563__$1);

return statearr_25585;
})();
if(cljs.core.truth_(inst_25564)){
var statearr_25586_25699 = state_25582__$1;
(statearr_25586_25699[(1)] = (5));

} else {
var statearr_25587_25700 = state_25582__$1;
(statearr_25587_25700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25583 === (5))){
var inst_25566 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25582__$1 = state_25582;
var statearr_25588_25701 = state_25582__$1;
(statearr_25588_25701[(2)] = inst_25566);

(statearr_25588_25701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25583 === (6))){
var inst_25568 = (state_25582[(8)]);
var inst_25563 = (state_25582[(7)]);
var inst_25568__$1 = cljs.core.async.chan.call(null,(1));
var inst_25569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25570 = [inst_25563,inst_25568__$1];
var inst_25571 = (new cljs.core.PersistentVector(null,2,(5),inst_25569,inst_25570,null));
var state_25582__$1 = (function (){var statearr_25589 = state_25582;
(statearr_25589[(8)] = inst_25568__$1);

return statearr_25589;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25582__$1,(8),jobs,inst_25571);
} else {
if((state_val_25583 === (7))){
var inst_25578 = (state_25582[(2)]);
var state_25582__$1 = state_25582;
var statearr_25590_25702 = state_25582__$1;
(statearr_25590_25702[(2)] = inst_25578);

(statearr_25590_25702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25583 === (8))){
var inst_25568 = (state_25582[(8)]);
var inst_25573 = (state_25582[(2)]);
var state_25582__$1 = (function (){var statearr_25591 = state_25582;
(statearr_25591[(9)] = inst_25573);

return statearr_25591;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25582__$1,(9),results,inst_25568);
} else {
if((state_val_25583 === (9))){
var inst_25575 = (state_25582[(2)]);
var state_25582__$1 = (function (){var statearr_25592 = state_25582;
(statearr_25592[(10)] = inst_25575);

return statearr_25592;
})();
var statearr_25593_25703 = state_25582__$1;
(statearr_25593_25703[(2)] = null);

(statearr_25593_25703[(1)] = (2));


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
});})(c__19204__auto___25697,jobs,results,process,async))
;
return ((function (switch__19142__auto__,c__19204__auto___25697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0 = (function (){
var statearr_25597 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__);

(statearr_25597[(1)] = (1));

return statearr_25597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1 = (function (state_25582){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25598){if((e25598 instanceof Object)){
var ex__19146__auto__ = e25598;
var statearr_25599_25704 = state_25582;
(statearr_25599_25704[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25705 = state_25582;
state_25582 = G__25705;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = function(state_25582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1.call(this,state_25582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___25697,jobs,results,process,async))
})();
var state__19206__auto__ = (function (){var statearr_25600 = f__19205__auto__.call(null);
(statearr_25600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___25697);

return statearr_25600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___25697,jobs,results,process,async))
);


var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__,jobs,results,process,async){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__,jobs,results,process,async){
return (function (state_25638){
var state_val_25639 = (state_25638[(1)]);
if((state_val_25639 === (7))){
var inst_25634 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
var statearr_25640_25706 = state_25638__$1;
(statearr_25640_25706[(2)] = inst_25634);

(statearr_25640_25706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (20))){
var state_25638__$1 = state_25638;
var statearr_25641_25707 = state_25638__$1;
(statearr_25641_25707[(2)] = null);

(statearr_25641_25707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (1))){
var state_25638__$1 = state_25638;
var statearr_25642_25708 = state_25638__$1;
(statearr_25642_25708[(2)] = null);

(statearr_25642_25708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (4))){
var inst_25603 = (state_25638[(7)]);
var inst_25603__$1 = (state_25638[(2)]);
var inst_25604 = (inst_25603__$1 == null);
var state_25638__$1 = (function (){var statearr_25643 = state_25638;
(statearr_25643[(7)] = inst_25603__$1);

return statearr_25643;
})();
if(cljs.core.truth_(inst_25604)){
var statearr_25644_25709 = state_25638__$1;
(statearr_25644_25709[(1)] = (5));

} else {
var statearr_25645_25710 = state_25638__$1;
(statearr_25645_25710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (15))){
var inst_25616 = (state_25638[(8)]);
var state_25638__$1 = state_25638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25638__$1,(18),to,inst_25616);
} else {
if((state_val_25639 === (21))){
var inst_25629 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
var statearr_25646_25711 = state_25638__$1;
(statearr_25646_25711[(2)] = inst_25629);

(statearr_25646_25711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (13))){
var inst_25631 = (state_25638[(2)]);
var state_25638__$1 = (function (){var statearr_25647 = state_25638;
(statearr_25647[(9)] = inst_25631);

return statearr_25647;
})();
var statearr_25648_25712 = state_25638__$1;
(statearr_25648_25712[(2)] = null);

(statearr_25648_25712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (6))){
var inst_25603 = (state_25638[(7)]);
var state_25638__$1 = state_25638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25638__$1,(11),inst_25603);
} else {
if((state_val_25639 === (17))){
var inst_25624 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
if(cljs.core.truth_(inst_25624)){
var statearr_25649_25713 = state_25638__$1;
(statearr_25649_25713[(1)] = (19));

} else {
var statearr_25650_25714 = state_25638__$1;
(statearr_25650_25714[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (3))){
var inst_25636 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25638__$1,inst_25636);
} else {
if((state_val_25639 === (12))){
var inst_25613 = (state_25638[(10)]);
var state_25638__$1 = state_25638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25638__$1,(14),inst_25613);
} else {
if((state_val_25639 === (2))){
var state_25638__$1 = state_25638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25638__$1,(4),results);
} else {
if((state_val_25639 === (19))){
var state_25638__$1 = state_25638;
var statearr_25651_25715 = state_25638__$1;
(statearr_25651_25715[(2)] = null);

(statearr_25651_25715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (11))){
var inst_25613 = (state_25638[(2)]);
var state_25638__$1 = (function (){var statearr_25652 = state_25638;
(statearr_25652[(10)] = inst_25613);

return statearr_25652;
})();
var statearr_25653_25716 = state_25638__$1;
(statearr_25653_25716[(2)] = null);

(statearr_25653_25716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (9))){
var state_25638__$1 = state_25638;
var statearr_25654_25717 = state_25638__$1;
(statearr_25654_25717[(2)] = null);

(statearr_25654_25717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (5))){
var state_25638__$1 = state_25638;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25655_25718 = state_25638__$1;
(statearr_25655_25718[(1)] = (8));

} else {
var statearr_25656_25719 = state_25638__$1;
(statearr_25656_25719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (14))){
var inst_25616 = (state_25638[(8)]);
var inst_25618 = (state_25638[(11)]);
var inst_25616__$1 = (state_25638[(2)]);
var inst_25617 = (inst_25616__$1 == null);
var inst_25618__$1 = cljs.core.not.call(null,inst_25617);
var state_25638__$1 = (function (){var statearr_25657 = state_25638;
(statearr_25657[(8)] = inst_25616__$1);

(statearr_25657[(11)] = inst_25618__$1);

return statearr_25657;
})();
if(inst_25618__$1){
var statearr_25658_25720 = state_25638__$1;
(statearr_25658_25720[(1)] = (15));

} else {
var statearr_25659_25721 = state_25638__$1;
(statearr_25659_25721[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (16))){
var inst_25618 = (state_25638[(11)]);
var state_25638__$1 = state_25638;
var statearr_25660_25722 = state_25638__$1;
(statearr_25660_25722[(2)] = inst_25618);

(statearr_25660_25722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (10))){
var inst_25610 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
var statearr_25661_25723 = state_25638__$1;
(statearr_25661_25723[(2)] = inst_25610);

(statearr_25661_25723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (18))){
var inst_25621 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
var statearr_25662_25724 = state_25638__$1;
(statearr_25662_25724[(2)] = inst_25621);

(statearr_25662_25724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (8))){
var inst_25607 = cljs.core.async.close_BANG_.call(null,to);
var state_25638__$1 = state_25638;
var statearr_25663_25725 = state_25638__$1;
(statearr_25663_25725[(2)] = inst_25607);

(statearr_25663_25725[(1)] = (10));


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
});})(c__19204__auto__,jobs,results,process,async))
;
return ((function (switch__19142__auto__,c__19204__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0 = (function (){
var statearr_25667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__);

(statearr_25667[(1)] = (1));

return statearr_25667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1 = (function (state_25638){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25668){if((e25668 instanceof Object)){
var ex__19146__auto__ = e25668;
var statearr_25669_25726 = state_25638;
(statearr_25669_25726[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25727 = state_25638;
state_25638 = G__25727;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__ = function(state_25638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1.call(this,state_25638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19143__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__,jobs,results,process,async))
})();
var state__19206__auto__ = (function (){var statearr_25670 = f__19205__auto__.call(null);
(statearr_25670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_25670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__,jobs,results,process,async))
);

return c__19204__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__25729 = arguments.length;
switch (G__25729) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__25732 = arguments.length;
switch (G__25732) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__25735 = arguments.length;
switch (G__25735) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19204__auto___25787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___25787,tc,fc){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___25787,tc,fc){
return (function (state_25761){
var state_val_25762 = (state_25761[(1)]);
if((state_val_25762 === (7))){
var inst_25757 = (state_25761[(2)]);
var state_25761__$1 = state_25761;
var statearr_25763_25788 = state_25761__$1;
(statearr_25763_25788[(2)] = inst_25757);

(statearr_25763_25788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (1))){
var state_25761__$1 = state_25761;
var statearr_25764_25789 = state_25761__$1;
(statearr_25764_25789[(2)] = null);

(statearr_25764_25789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (4))){
var inst_25738 = (state_25761[(7)]);
var inst_25738__$1 = (state_25761[(2)]);
var inst_25739 = (inst_25738__$1 == null);
var state_25761__$1 = (function (){var statearr_25765 = state_25761;
(statearr_25765[(7)] = inst_25738__$1);

return statearr_25765;
})();
if(cljs.core.truth_(inst_25739)){
var statearr_25766_25790 = state_25761__$1;
(statearr_25766_25790[(1)] = (5));

} else {
var statearr_25767_25791 = state_25761__$1;
(statearr_25767_25791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (13))){
var state_25761__$1 = state_25761;
var statearr_25768_25792 = state_25761__$1;
(statearr_25768_25792[(2)] = null);

(statearr_25768_25792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (6))){
var inst_25738 = (state_25761[(7)]);
var inst_25744 = p.call(null,inst_25738);
var state_25761__$1 = state_25761;
if(cljs.core.truth_(inst_25744)){
var statearr_25769_25793 = state_25761__$1;
(statearr_25769_25793[(1)] = (9));

} else {
var statearr_25770_25794 = state_25761__$1;
(statearr_25770_25794[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (3))){
var inst_25759 = (state_25761[(2)]);
var state_25761__$1 = state_25761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25761__$1,inst_25759);
} else {
if((state_val_25762 === (12))){
var state_25761__$1 = state_25761;
var statearr_25771_25795 = state_25761__$1;
(statearr_25771_25795[(2)] = null);

(statearr_25771_25795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (2))){
var state_25761__$1 = state_25761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25761__$1,(4),ch);
} else {
if((state_val_25762 === (11))){
var inst_25738 = (state_25761[(7)]);
var inst_25748 = (state_25761[(2)]);
var state_25761__$1 = state_25761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25761__$1,(8),inst_25748,inst_25738);
} else {
if((state_val_25762 === (9))){
var state_25761__$1 = state_25761;
var statearr_25772_25796 = state_25761__$1;
(statearr_25772_25796[(2)] = tc);

(statearr_25772_25796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (5))){
var inst_25741 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25742 = cljs.core.async.close_BANG_.call(null,fc);
var state_25761__$1 = (function (){var statearr_25773 = state_25761;
(statearr_25773[(8)] = inst_25741);

return statearr_25773;
})();
var statearr_25774_25797 = state_25761__$1;
(statearr_25774_25797[(2)] = inst_25742);

(statearr_25774_25797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (14))){
var inst_25755 = (state_25761[(2)]);
var state_25761__$1 = state_25761;
var statearr_25775_25798 = state_25761__$1;
(statearr_25775_25798[(2)] = inst_25755);

(statearr_25775_25798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (10))){
var state_25761__$1 = state_25761;
var statearr_25776_25799 = state_25761__$1;
(statearr_25776_25799[(2)] = fc);

(statearr_25776_25799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (8))){
var inst_25750 = (state_25761[(2)]);
var state_25761__$1 = state_25761;
if(cljs.core.truth_(inst_25750)){
var statearr_25777_25800 = state_25761__$1;
(statearr_25777_25800[(1)] = (12));

} else {
var statearr_25778_25801 = state_25761__$1;
(statearr_25778_25801[(1)] = (13));

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
});})(c__19204__auto___25787,tc,fc))
;
return ((function (switch__19142__auto__,c__19204__auto___25787,tc,fc){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_25782 = [null,null,null,null,null,null,null,null,null];
(statearr_25782[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_25782[(1)] = (1));

return statearr_25782;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_25761){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25783){if((e25783 instanceof Object)){
var ex__19146__auto__ = e25783;
var statearr_25784_25802 = state_25761;
(statearr_25784_25802[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25803 = state_25761;
state_25761 = G__25803;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_25761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_25761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___25787,tc,fc))
})();
var state__19206__auto__ = (function (){var statearr_25785 = f__19205__auto__.call(null);
(statearr_25785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___25787);

return statearr_25785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___25787,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__){
return (function (state_25850){
var state_val_25851 = (state_25850[(1)]);
if((state_val_25851 === (1))){
var inst_25836 = init;
var state_25850__$1 = (function (){var statearr_25852 = state_25850;
(statearr_25852[(7)] = inst_25836);

return statearr_25852;
})();
var statearr_25853_25868 = state_25850__$1;
(statearr_25853_25868[(2)] = null);

(statearr_25853_25868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25851 === (2))){
var state_25850__$1 = state_25850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25850__$1,(4),ch);
} else {
if((state_val_25851 === (3))){
var inst_25848 = (state_25850[(2)]);
var state_25850__$1 = state_25850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25850__$1,inst_25848);
} else {
if((state_val_25851 === (4))){
var inst_25839 = (state_25850[(8)]);
var inst_25839__$1 = (state_25850[(2)]);
var inst_25840 = (inst_25839__$1 == null);
var state_25850__$1 = (function (){var statearr_25854 = state_25850;
(statearr_25854[(8)] = inst_25839__$1);

return statearr_25854;
})();
if(cljs.core.truth_(inst_25840)){
var statearr_25855_25869 = state_25850__$1;
(statearr_25855_25869[(1)] = (5));

} else {
var statearr_25856_25870 = state_25850__$1;
(statearr_25856_25870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25851 === (5))){
var inst_25836 = (state_25850[(7)]);
var state_25850__$1 = state_25850;
var statearr_25857_25871 = state_25850__$1;
(statearr_25857_25871[(2)] = inst_25836);

(statearr_25857_25871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25851 === (6))){
var inst_25839 = (state_25850[(8)]);
var inst_25836 = (state_25850[(7)]);
var inst_25843 = f.call(null,inst_25836,inst_25839);
var inst_25836__$1 = inst_25843;
var state_25850__$1 = (function (){var statearr_25858 = state_25850;
(statearr_25858[(7)] = inst_25836__$1);

return statearr_25858;
})();
var statearr_25859_25872 = state_25850__$1;
(statearr_25859_25872[(2)] = null);

(statearr_25859_25872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25851 === (7))){
var inst_25846 = (state_25850[(2)]);
var state_25850__$1 = state_25850;
var statearr_25860_25873 = state_25850__$1;
(statearr_25860_25873[(2)] = inst_25846);

(statearr_25860_25873[(1)] = (3));


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
});})(c__19204__auto__))
;
return ((function (switch__19142__auto__,c__19204__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19143__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19143__auto____0 = (function (){
var statearr_25864 = [null,null,null,null,null,null,null,null,null];
(statearr_25864[(0)] = cljs$core$async$reduce_$_state_machine__19143__auto__);

(statearr_25864[(1)] = (1));

return statearr_25864;
});
var cljs$core$async$reduce_$_state_machine__19143__auto____1 = (function (state_25850){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25865){if((e25865 instanceof Object)){
var ex__19146__auto__ = e25865;
var statearr_25866_25874 = state_25850;
(statearr_25866_25874[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25875 = state_25850;
state_25850 = G__25875;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19143__auto__ = function(state_25850){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19143__auto____1.call(this,state_25850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19143__auto____0;
cljs$core$async$reduce_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19143__auto____1;
return cljs$core$async$reduce_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__))
})();
var state__19206__auto__ = (function (){var statearr_25867 = f__19205__auto__.call(null);
(statearr_25867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_25867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__))
);

return c__19204__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__25877 = arguments.length;
switch (G__25877) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__){
return (function (state_25902){
var state_val_25903 = (state_25902[(1)]);
if((state_val_25903 === (7))){
var inst_25884 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25904_25928 = state_25902__$1;
(statearr_25904_25928[(2)] = inst_25884);

(statearr_25904_25928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (1))){
var inst_25878 = cljs.core.seq.call(null,coll);
var inst_25879 = inst_25878;
var state_25902__$1 = (function (){var statearr_25905 = state_25902;
(statearr_25905[(7)] = inst_25879);

return statearr_25905;
})();
var statearr_25906_25929 = state_25902__$1;
(statearr_25906_25929[(2)] = null);

(statearr_25906_25929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (4))){
var inst_25879 = (state_25902[(7)]);
var inst_25882 = cljs.core.first.call(null,inst_25879);
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25902__$1,(7),ch,inst_25882);
} else {
if((state_val_25903 === (13))){
var inst_25896 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25907_25930 = state_25902__$1;
(statearr_25907_25930[(2)] = inst_25896);

(statearr_25907_25930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (6))){
var inst_25887 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
if(cljs.core.truth_(inst_25887)){
var statearr_25908_25931 = state_25902__$1;
(statearr_25908_25931[(1)] = (8));

} else {
var statearr_25909_25932 = state_25902__$1;
(statearr_25909_25932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (3))){
var inst_25900 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25902__$1,inst_25900);
} else {
if((state_val_25903 === (12))){
var state_25902__$1 = state_25902;
var statearr_25910_25933 = state_25902__$1;
(statearr_25910_25933[(2)] = null);

(statearr_25910_25933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (2))){
var inst_25879 = (state_25902[(7)]);
var state_25902__$1 = state_25902;
if(cljs.core.truth_(inst_25879)){
var statearr_25911_25934 = state_25902__$1;
(statearr_25911_25934[(1)] = (4));

} else {
var statearr_25912_25935 = state_25902__$1;
(statearr_25912_25935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (11))){
var inst_25893 = cljs.core.async.close_BANG_.call(null,ch);
var state_25902__$1 = state_25902;
var statearr_25913_25936 = state_25902__$1;
(statearr_25913_25936[(2)] = inst_25893);

(statearr_25913_25936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (9))){
var state_25902__$1 = state_25902;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25914_25937 = state_25902__$1;
(statearr_25914_25937[(1)] = (11));

} else {
var statearr_25915_25938 = state_25902__$1;
(statearr_25915_25938[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (5))){
var inst_25879 = (state_25902[(7)]);
var state_25902__$1 = state_25902;
var statearr_25916_25939 = state_25902__$1;
(statearr_25916_25939[(2)] = inst_25879);

(statearr_25916_25939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (10))){
var inst_25898 = (state_25902[(2)]);
var state_25902__$1 = state_25902;
var statearr_25917_25940 = state_25902__$1;
(statearr_25917_25940[(2)] = inst_25898);

(statearr_25917_25940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25903 === (8))){
var inst_25879 = (state_25902[(7)]);
var inst_25889 = cljs.core.next.call(null,inst_25879);
var inst_25879__$1 = inst_25889;
var state_25902__$1 = (function (){var statearr_25918 = state_25902;
(statearr_25918[(7)] = inst_25879__$1);

return statearr_25918;
})();
var statearr_25919_25941 = state_25902__$1;
(statearr_25919_25941[(2)] = null);

(statearr_25919_25941[(1)] = (2));


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
});})(c__19204__auto__))
;
return ((function (switch__19142__auto__,c__19204__auto__){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_25923 = [null,null,null,null,null,null,null,null];
(statearr_25923[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_25923[(1)] = (1));

return statearr_25923;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_25902){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_25902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e25924){if((e25924 instanceof Object)){
var ex__19146__auto__ = e25924;
var statearr_25925_25942 = state_25902;
(statearr_25925_25942[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25943 = state_25902;
state_25902 = G__25943;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_25902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_25902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__))
})();
var state__19206__auto__ = (function (){var statearr_25926 = f__19205__auto__.call(null);
(statearr_25926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_25926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__))
);

return c__19204__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25945 = {};
return obj25945;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16196__auto__ = _;
if(and__16196__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16196__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16844__auto__ = (((_ == null))?null:_);
return (function (){var or__16208__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25947 = {};
return obj25947;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16196__auto__ = m;
if(and__16196__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16196__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16844__auto__ = (((m == null))?null:m);
return (function (){var or__16208__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16196__auto__ = m;
if(and__16196__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16196__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16844__auto__ = (((m == null))?null:m);
return (function (){var or__16208__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16196__auto__ = m;
if(and__16196__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16196__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16844__auto__ = (((m == null))?null:m);
return (function (){var or__16208__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26169 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26169 = (function (mult,ch,cs,meta26170){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26170 = meta26170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26171,meta26170__$1){
var self__ = this;
var _26171__$1 = this;
return (new cljs.core.async.t26169(self__.mult,self__.ch,self__.cs,meta26170__$1));
});})(cs))
;

cljs.core.async.t26169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26171){
var self__ = this;
var _26171__$1 = this;
return self__.meta26170;
});})(cs))
;

cljs.core.async.t26169.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26169.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26169.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26169.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26169.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26169.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26170","meta26170",-2066760449,null)], null);
});})(cs))
;

cljs.core.async.t26169.cljs$lang$type = true;

cljs.core.async.t26169.cljs$lang$ctorStr = "cljs.core.async/t26169";

cljs.core.async.t26169.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t26169");
});})(cs))
;

cljs.core.async.__GT_t26169 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26169(mult__$1,ch__$1,cs__$1,meta26170){
return (new cljs.core.async.t26169(mult__$1,ch__$1,cs__$1,meta26170));
});})(cs))
;

}

return (new cljs.core.async.t26169(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19204__auto___26390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___26390,cs,m,dchan,dctr,done){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___26390,cs,m,dchan,dctr,done){
return (function (state_26302){
var state_val_26303 = (state_26302[(1)]);
if((state_val_26303 === (7))){
var inst_26298 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
var statearr_26304_26391 = state_26302__$1;
(statearr_26304_26391[(2)] = inst_26298);

(statearr_26304_26391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (20))){
var inst_26203 = (state_26302[(7)]);
var inst_26213 = cljs.core.first.call(null,inst_26203);
var inst_26214 = cljs.core.nth.call(null,inst_26213,(0),null);
var inst_26215 = cljs.core.nth.call(null,inst_26213,(1),null);
var state_26302__$1 = (function (){var statearr_26305 = state_26302;
(statearr_26305[(8)] = inst_26214);

return statearr_26305;
})();
if(cljs.core.truth_(inst_26215)){
var statearr_26306_26392 = state_26302__$1;
(statearr_26306_26392[(1)] = (22));

} else {
var statearr_26307_26393 = state_26302__$1;
(statearr_26307_26393[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (27))){
var inst_26250 = (state_26302[(9)]);
var inst_26245 = (state_26302[(10)]);
var inst_26174 = (state_26302[(11)]);
var inst_26243 = (state_26302[(12)]);
var inst_26250__$1 = cljs.core._nth.call(null,inst_26243,inst_26245);
var inst_26251 = cljs.core.async.put_BANG_.call(null,inst_26250__$1,inst_26174,done);
var state_26302__$1 = (function (){var statearr_26308 = state_26302;
(statearr_26308[(9)] = inst_26250__$1);

return statearr_26308;
})();
if(cljs.core.truth_(inst_26251)){
var statearr_26309_26394 = state_26302__$1;
(statearr_26309_26394[(1)] = (30));

} else {
var statearr_26310_26395 = state_26302__$1;
(statearr_26310_26395[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (1))){
var state_26302__$1 = state_26302;
var statearr_26311_26396 = state_26302__$1;
(statearr_26311_26396[(2)] = null);

(statearr_26311_26396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (24))){
var inst_26203 = (state_26302[(7)]);
var inst_26220 = (state_26302[(2)]);
var inst_26221 = cljs.core.next.call(null,inst_26203);
var inst_26183 = inst_26221;
var inst_26184 = null;
var inst_26185 = (0);
var inst_26186 = (0);
var state_26302__$1 = (function (){var statearr_26312 = state_26302;
(statearr_26312[(13)] = inst_26185);

(statearr_26312[(14)] = inst_26184);

(statearr_26312[(15)] = inst_26183);

(statearr_26312[(16)] = inst_26186);

(statearr_26312[(17)] = inst_26220);

return statearr_26312;
})();
var statearr_26313_26397 = state_26302__$1;
(statearr_26313_26397[(2)] = null);

(statearr_26313_26397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (39))){
var state_26302__$1 = state_26302;
var statearr_26317_26398 = state_26302__$1;
(statearr_26317_26398[(2)] = null);

(statearr_26317_26398[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (4))){
var inst_26174 = (state_26302[(11)]);
var inst_26174__$1 = (state_26302[(2)]);
var inst_26175 = (inst_26174__$1 == null);
var state_26302__$1 = (function (){var statearr_26318 = state_26302;
(statearr_26318[(11)] = inst_26174__$1);

return statearr_26318;
})();
if(cljs.core.truth_(inst_26175)){
var statearr_26319_26399 = state_26302__$1;
(statearr_26319_26399[(1)] = (5));

} else {
var statearr_26320_26400 = state_26302__$1;
(statearr_26320_26400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (15))){
var inst_26185 = (state_26302[(13)]);
var inst_26184 = (state_26302[(14)]);
var inst_26183 = (state_26302[(15)]);
var inst_26186 = (state_26302[(16)]);
var inst_26199 = (state_26302[(2)]);
var inst_26200 = (inst_26186 + (1));
var tmp26314 = inst_26185;
var tmp26315 = inst_26184;
var tmp26316 = inst_26183;
var inst_26183__$1 = tmp26316;
var inst_26184__$1 = tmp26315;
var inst_26185__$1 = tmp26314;
var inst_26186__$1 = inst_26200;
var state_26302__$1 = (function (){var statearr_26321 = state_26302;
(statearr_26321[(13)] = inst_26185__$1);

(statearr_26321[(14)] = inst_26184__$1);

(statearr_26321[(15)] = inst_26183__$1);

(statearr_26321[(18)] = inst_26199);

(statearr_26321[(16)] = inst_26186__$1);

return statearr_26321;
})();
var statearr_26322_26401 = state_26302__$1;
(statearr_26322_26401[(2)] = null);

(statearr_26322_26401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (21))){
var inst_26224 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
var statearr_26326_26402 = state_26302__$1;
(statearr_26326_26402[(2)] = inst_26224);

(statearr_26326_26402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (31))){
var inst_26250 = (state_26302[(9)]);
var inst_26254 = done.call(null,null);
var inst_26255 = cljs.core.async.untap_STAR_.call(null,m,inst_26250);
var state_26302__$1 = (function (){var statearr_26327 = state_26302;
(statearr_26327[(19)] = inst_26254);

return statearr_26327;
})();
var statearr_26328_26403 = state_26302__$1;
(statearr_26328_26403[(2)] = inst_26255);

(statearr_26328_26403[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (32))){
var inst_26245 = (state_26302[(10)]);
var inst_26244 = (state_26302[(20)]);
var inst_26243 = (state_26302[(12)]);
var inst_26242 = (state_26302[(21)]);
var inst_26257 = (state_26302[(2)]);
var inst_26258 = (inst_26245 + (1));
var tmp26323 = inst_26244;
var tmp26324 = inst_26243;
var tmp26325 = inst_26242;
var inst_26242__$1 = tmp26325;
var inst_26243__$1 = tmp26324;
var inst_26244__$1 = tmp26323;
var inst_26245__$1 = inst_26258;
var state_26302__$1 = (function (){var statearr_26329 = state_26302;
(statearr_26329[(10)] = inst_26245__$1);

(statearr_26329[(22)] = inst_26257);

(statearr_26329[(20)] = inst_26244__$1);

(statearr_26329[(12)] = inst_26243__$1);

(statearr_26329[(21)] = inst_26242__$1);

return statearr_26329;
})();
var statearr_26330_26404 = state_26302__$1;
(statearr_26330_26404[(2)] = null);

(statearr_26330_26404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (40))){
var inst_26270 = (state_26302[(23)]);
var inst_26274 = done.call(null,null);
var inst_26275 = cljs.core.async.untap_STAR_.call(null,m,inst_26270);
var state_26302__$1 = (function (){var statearr_26331 = state_26302;
(statearr_26331[(24)] = inst_26274);

return statearr_26331;
})();
var statearr_26332_26405 = state_26302__$1;
(statearr_26332_26405[(2)] = inst_26275);

(statearr_26332_26405[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (33))){
var inst_26261 = (state_26302[(25)]);
var inst_26263 = cljs.core.chunked_seq_QMARK_.call(null,inst_26261);
var state_26302__$1 = state_26302;
if(inst_26263){
var statearr_26333_26406 = state_26302__$1;
(statearr_26333_26406[(1)] = (36));

} else {
var statearr_26334_26407 = state_26302__$1;
(statearr_26334_26407[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (13))){
var inst_26193 = (state_26302[(26)]);
var inst_26196 = cljs.core.async.close_BANG_.call(null,inst_26193);
var state_26302__$1 = state_26302;
var statearr_26335_26408 = state_26302__$1;
(statearr_26335_26408[(2)] = inst_26196);

(statearr_26335_26408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (22))){
var inst_26214 = (state_26302[(8)]);
var inst_26217 = cljs.core.async.close_BANG_.call(null,inst_26214);
var state_26302__$1 = state_26302;
var statearr_26336_26409 = state_26302__$1;
(statearr_26336_26409[(2)] = inst_26217);

(statearr_26336_26409[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (36))){
var inst_26261 = (state_26302[(25)]);
var inst_26265 = cljs.core.chunk_first.call(null,inst_26261);
var inst_26266 = cljs.core.chunk_rest.call(null,inst_26261);
var inst_26267 = cljs.core.count.call(null,inst_26265);
var inst_26242 = inst_26266;
var inst_26243 = inst_26265;
var inst_26244 = inst_26267;
var inst_26245 = (0);
var state_26302__$1 = (function (){var statearr_26337 = state_26302;
(statearr_26337[(10)] = inst_26245);

(statearr_26337[(20)] = inst_26244);

(statearr_26337[(12)] = inst_26243);

(statearr_26337[(21)] = inst_26242);

return statearr_26337;
})();
var statearr_26338_26410 = state_26302__$1;
(statearr_26338_26410[(2)] = null);

(statearr_26338_26410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (41))){
var inst_26261 = (state_26302[(25)]);
var inst_26277 = (state_26302[(2)]);
var inst_26278 = cljs.core.next.call(null,inst_26261);
var inst_26242 = inst_26278;
var inst_26243 = null;
var inst_26244 = (0);
var inst_26245 = (0);
var state_26302__$1 = (function (){var statearr_26339 = state_26302;
(statearr_26339[(10)] = inst_26245);

(statearr_26339[(20)] = inst_26244);

(statearr_26339[(12)] = inst_26243);

(statearr_26339[(21)] = inst_26242);

(statearr_26339[(27)] = inst_26277);

return statearr_26339;
})();
var statearr_26340_26411 = state_26302__$1;
(statearr_26340_26411[(2)] = null);

(statearr_26340_26411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (43))){
var state_26302__$1 = state_26302;
var statearr_26341_26412 = state_26302__$1;
(statearr_26341_26412[(2)] = null);

(statearr_26341_26412[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (29))){
var inst_26286 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
var statearr_26342_26413 = state_26302__$1;
(statearr_26342_26413[(2)] = inst_26286);

(statearr_26342_26413[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (44))){
var inst_26295 = (state_26302[(2)]);
var state_26302__$1 = (function (){var statearr_26343 = state_26302;
(statearr_26343[(28)] = inst_26295);

return statearr_26343;
})();
var statearr_26344_26414 = state_26302__$1;
(statearr_26344_26414[(2)] = null);

(statearr_26344_26414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (6))){
var inst_26234 = (state_26302[(29)]);
var inst_26233 = cljs.core.deref.call(null,cs);
var inst_26234__$1 = cljs.core.keys.call(null,inst_26233);
var inst_26235 = cljs.core.count.call(null,inst_26234__$1);
var inst_26236 = cljs.core.reset_BANG_.call(null,dctr,inst_26235);
var inst_26241 = cljs.core.seq.call(null,inst_26234__$1);
var inst_26242 = inst_26241;
var inst_26243 = null;
var inst_26244 = (0);
var inst_26245 = (0);
var state_26302__$1 = (function (){var statearr_26345 = state_26302;
(statearr_26345[(10)] = inst_26245);

(statearr_26345[(29)] = inst_26234__$1);

(statearr_26345[(30)] = inst_26236);

(statearr_26345[(20)] = inst_26244);

(statearr_26345[(12)] = inst_26243);

(statearr_26345[(21)] = inst_26242);

return statearr_26345;
})();
var statearr_26346_26415 = state_26302__$1;
(statearr_26346_26415[(2)] = null);

(statearr_26346_26415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (28))){
var inst_26261 = (state_26302[(25)]);
var inst_26242 = (state_26302[(21)]);
var inst_26261__$1 = cljs.core.seq.call(null,inst_26242);
var state_26302__$1 = (function (){var statearr_26347 = state_26302;
(statearr_26347[(25)] = inst_26261__$1);

return statearr_26347;
})();
if(inst_26261__$1){
var statearr_26348_26416 = state_26302__$1;
(statearr_26348_26416[(1)] = (33));

} else {
var statearr_26349_26417 = state_26302__$1;
(statearr_26349_26417[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (25))){
var inst_26245 = (state_26302[(10)]);
var inst_26244 = (state_26302[(20)]);
var inst_26247 = (inst_26245 < inst_26244);
var inst_26248 = inst_26247;
var state_26302__$1 = state_26302;
if(cljs.core.truth_(inst_26248)){
var statearr_26350_26418 = state_26302__$1;
(statearr_26350_26418[(1)] = (27));

} else {
var statearr_26351_26419 = state_26302__$1;
(statearr_26351_26419[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (34))){
var state_26302__$1 = state_26302;
var statearr_26352_26420 = state_26302__$1;
(statearr_26352_26420[(2)] = null);

(statearr_26352_26420[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (17))){
var state_26302__$1 = state_26302;
var statearr_26353_26421 = state_26302__$1;
(statearr_26353_26421[(2)] = null);

(statearr_26353_26421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (3))){
var inst_26300 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26302__$1,inst_26300);
} else {
if((state_val_26303 === (12))){
var inst_26229 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
var statearr_26354_26422 = state_26302__$1;
(statearr_26354_26422[(2)] = inst_26229);

(statearr_26354_26422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (2))){
var state_26302__$1 = state_26302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26302__$1,(4),ch);
} else {
if((state_val_26303 === (23))){
var state_26302__$1 = state_26302;
var statearr_26355_26423 = state_26302__$1;
(statearr_26355_26423[(2)] = null);

(statearr_26355_26423[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (35))){
var inst_26284 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
var statearr_26356_26424 = state_26302__$1;
(statearr_26356_26424[(2)] = inst_26284);

(statearr_26356_26424[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (19))){
var inst_26203 = (state_26302[(7)]);
var inst_26207 = cljs.core.chunk_first.call(null,inst_26203);
var inst_26208 = cljs.core.chunk_rest.call(null,inst_26203);
var inst_26209 = cljs.core.count.call(null,inst_26207);
var inst_26183 = inst_26208;
var inst_26184 = inst_26207;
var inst_26185 = inst_26209;
var inst_26186 = (0);
var state_26302__$1 = (function (){var statearr_26357 = state_26302;
(statearr_26357[(13)] = inst_26185);

(statearr_26357[(14)] = inst_26184);

(statearr_26357[(15)] = inst_26183);

(statearr_26357[(16)] = inst_26186);

return statearr_26357;
})();
var statearr_26358_26425 = state_26302__$1;
(statearr_26358_26425[(2)] = null);

(statearr_26358_26425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (11))){
var inst_26183 = (state_26302[(15)]);
var inst_26203 = (state_26302[(7)]);
var inst_26203__$1 = cljs.core.seq.call(null,inst_26183);
var state_26302__$1 = (function (){var statearr_26359 = state_26302;
(statearr_26359[(7)] = inst_26203__$1);

return statearr_26359;
})();
if(inst_26203__$1){
var statearr_26360_26426 = state_26302__$1;
(statearr_26360_26426[(1)] = (16));

} else {
var statearr_26361_26427 = state_26302__$1;
(statearr_26361_26427[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (9))){
var inst_26231 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
var statearr_26362_26428 = state_26302__$1;
(statearr_26362_26428[(2)] = inst_26231);

(statearr_26362_26428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (5))){
var inst_26181 = cljs.core.deref.call(null,cs);
var inst_26182 = cljs.core.seq.call(null,inst_26181);
var inst_26183 = inst_26182;
var inst_26184 = null;
var inst_26185 = (0);
var inst_26186 = (0);
var state_26302__$1 = (function (){var statearr_26363 = state_26302;
(statearr_26363[(13)] = inst_26185);

(statearr_26363[(14)] = inst_26184);

(statearr_26363[(15)] = inst_26183);

(statearr_26363[(16)] = inst_26186);

return statearr_26363;
})();
var statearr_26364_26429 = state_26302__$1;
(statearr_26364_26429[(2)] = null);

(statearr_26364_26429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (14))){
var state_26302__$1 = state_26302;
var statearr_26365_26430 = state_26302__$1;
(statearr_26365_26430[(2)] = null);

(statearr_26365_26430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (45))){
var inst_26292 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
var statearr_26366_26431 = state_26302__$1;
(statearr_26366_26431[(2)] = inst_26292);

(statearr_26366_26431[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (26))){
var inst_26234 = (state_26302[(29)]);
var inst_26288 = (state_26302[(2)]);
var inst_26289 = cljs.core.seq.call(null,inst_26234);
var state_26302__$1 = (function (){var statearr_26367 = state_26302;
(statearr_26367[(31)] = inst_26288);

return statearr_26367;
})();
if(inst_26289){
var statearr_26368_26432 = state_26302__$1;
(statearr_26368_26432[(1)] = (42));

} else {
var statearr_26369_26433 = state_26302__$1;
(statearr_26369_26433[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (16))){
var inst_26203 = (state_26302[(7)]);
var inst_26205 = cljs.core.chunked_seq_QMARK_.call(null,inst_26203);
var state_26302__$1 = state_26302;
if(inst_26205){
var statearr_26370_26434 = state_26302__$1;
(statearr_26370_26434[(1)] = (19));

} else {
var statearr_26371_26435 = state_26302__$1;
(statearr_26371_26435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (38))){
var inst_26281 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
var statearr_26372_26436 = state_26302__$1;
(statearr_26372_26436[(2)] = inst_26281);

(statearr_26372_26436[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (30))){
var state_26302__$1 = state_26302;
var statearr_26373_26437 = state_26302__$1;
(statearr_26373_26437[(2)] = null);

(statearr_26373_26437[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (10))){
var inst_26184 = (state_26302[(14)]);
var inst_26186 = (state_26302[(16)]);
var inst_26192 = cljs.core._nth.call(null,inst_26184,inst_26186);
var inst_26193 = cljs.core.nth.call(null,inst_26192,(0),null);
var inst_26194 = cljs.core.nth.call(null,inst_26192,(1),null);
var state_26302__$1 = (function (){var statearr_26374 = state_26302;
(statearr_26374[(26)] = inst_26193);

return statearr_26374;
})();
if(cljs.core.truth_(inst_26194)){
var statearr_26375_26438 = state_26302__$1;
(statearr_26375_26438[(1)] = (13));

} else {
var statearr_26376_26439 = state_26302__$1;
(statearr_26376_26439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (18))){
var inst_26227 = (state_26302[(2)]);
var state_26302__$1 = state_26302;
var statearr_26377_26440 = state_26302__$1;
(statearr_26377_26440[(2)] = inst_26227);

(statearr_26377_26440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (42))){
var state_26302__$1 = state_26302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26302__$1,(45),dchan);
} else {
if((state_val_26303 === (37))){
var inst_26270 = (state_26302[(23)]);
var inst_26174 = (state_26302[(11)]);
var inst_26261 = (state_26302[(25)]);
var inst_26270__$1 = cljs.core.first.call(null,inst_26261);
var inst_26271 = cljs.core.async.put_BANG_.call(null,inst_26270__$1,inst_26174,done);
var state_26302__$1 = (function (){var statearr_26378 = state_26302;
(statearr_26378[(23)] = inst_26270__$1);

return statearr_26378;
})();
if(cljs.core.truth_(inst_26271)){
var statearr_26379_26441 = state_26302__$1;
(statearr_26379_26441[(1)] = (39));

} else {
var statearr_26380_26442 = state_26302__$1;
(statearr_26380_26442[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26303 === (8))){
var inst_26185 = (state_26302[(13)]);
var inst_26186 = (state_26302[(16)]);
var inst_26188 = (inst_26186 < inst_26185);
var inst_26189 = inst_26188;
var state_26302__$1 = state_26302;
if(cljs.core.truth_(inst_26189)){
var statearr_26381_26443 = state_26302__$1;
(statearr_26381_26443[(1)] = (10));

} else {
var statearr_26382_26444 = state_26302__$1;
(statearr_26382_26444[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19204__auto___26390,cs,m,dchan,dctr,done))
;
return ((function (switch__19142__auto__,c__19204__auto___26390,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19143__auto__ = null;
var cljs$core$async$mult_$_state_machine__19143__auto____0 = (function (){
var statearr_26386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26386[(0)] = cljs$core$async$mult_$_state_machine__19143__auto__);

(statearr_26386[(1)] = (1));

return statearr_26386;
});
var cljs$core$async$mult_$_state_machine__19143__auto____1 = (function (state_26302){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_26302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e26387){if((e26387 instanceof Object)){
var ex__19146__auto__ = e26387;
var statearr_26388_26445 = state_26302;
(statearr_26388_26445[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26446 = state_26302;
state_26302 = G__26446;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19143__auto__ = function(state_26302){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19143__auto____1.call(this,state_26302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19143__auto____0;
cljs$core$async$mult_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19143__auto____1;
return cljs$core$async$mult_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___26390,cs,m,dchan,dctr,done))
})();
var state__19206__auto__ = (function (){var statearr_26389 = f__19205__auto__.call(null);
(statearr_26389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___26390);

return statearr_26389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___26390,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__26448 = arguments.length;
switch (G__26448) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26451 = {};
return obj26451;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16196__auto__ = m;
if(and__16196__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16196__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16844__auto__ = (((m == null))?null:m);
return (function (){var or__16208__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16196__auto__ = m;
if(and__16196__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16196__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16844__auto__ = (((m == null))?null:m);
return (function (){var or__16208__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16196__auto__ = m;
if(and__16196__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16196__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16844__auto__ = (((m == null))?null:m);
return (function (){var or__16208__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16196__auto__ = m;
if(and__16196__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16196__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16844__auto__ = (((m == null))?null:m);
return (function (){var or__16208__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16196__auto__ = m;
if(and__16196__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16196__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16844__auto__ = (((m == null))?null:m);
return (function (){var or__16208__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17248__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17248__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26456){
var map__26457 = p__26456;
var map__26457__$1 = ((cljs.core.seq_QMARK_.call(null,map__26457))?cljs.core.apply.call(null,cljs.core.hash_map,map__26457):map__26457);
var opts = map__26457__$1;
var statearr_26458_26461 = state;
(statearr_26458_26461[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26457,map__26457__$1,opts){
return (function (val){
var statearr_26459_26462 = state;
(statearr_26459_26462[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26457,map__26457__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26460_26463 = state;
(statearr_26460_26463[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26452){
var G__26453 = cljs.core.first.call(null,seq26452);
var seq26452__$1 = cljs.core.next.call(null,seq26452);
var G__26454 = cljs.core.first.call(null,seq26452__$1);
var seq26452__$2 = cljs.core.next.call(null,seq26452__$1);
var G__26455 = cljs.core.first.call(null,seq26452__$2);
var seq26452__$3 = cljs.core.next.call(null,seq26452__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26453,G__26454,G__26455,seq26452__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26583 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26583 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26584){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26584 = meta26584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26585,meta26584__$1){
var self__ = this;
var _26585__$1 = this;
return (new cljs.core.async.t26583(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26584__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26585){
var self__ = this;
var _26585__$1 = this;
return self__.meta26584;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26583.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26583.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26583.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26583.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26583.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26583.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26583.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26583.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26584","meta26584",148769695,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26583.cljs$lang$type = true;

cljs.core.async.t26583.cljs$lang$ctorStr = "cljs.core.async/t26583";

cljs.core.async.t26583.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t26583");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26583 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26583(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26584){
return (new cljs.core.async.t26583(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26584));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26583(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19204__auto___26702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___26702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___26702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26655){
var state_val_26656 = (state_26655[(1)]);
if((state_val_26656 === (7))){
var inst_26599 = (state_26655[(7)]);
var inst_26604 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26599);
var state_26655__$1 = state_26655;
var statearr_26657_26703 = state_26655__$1;
(statearr_26657_26703[(2)] = inst_26604);

(statearr_26657_26703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (20))){
var inst_26614 = (state_26655[(8)]);
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26655__$1,(23),out,inst_26614);
} else {
if((state_val_26656 === (1))){
var inst_26589 = (state_26655[(9)]);
var inst_26589__$1 = calc_state.call(null);
var inst_26590 = cljs.core.seq_QMARK_.call(null,inst_26589__$1);
var state_26655__$1 = (function (){var statearr_26658 = state_26655;
(statearr_26658[(9)] = inst_26589__$1);

return statearr_26658;
})();
if(inst_26590){
var statearr_26659_26704 = state_26655__$1;
(statearr_26659_26704[(1)] = (2));

} else {
var statearr_26660_26705 = state_26655__$1;
(statearr_26660_26705[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (24))){
var inst_26607 = (state_26655[(10)]);
var inst_26599 = inst_26607;
var state_26655__$1 = (function (){var statearr_26661 = state_26655;
(statearr_26661[(7)] = inst_26599);

return statearr_26661;
})();
var statearr_26662_26706 = state_26655__$1;
(statearr_26662_26706[(2)] = null);

(statearr_26662_26706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (4))){
var inst_26589 = (state_26655[(9)]);
var inst_26595 = (state_26655[(2)]);
var inst_26596 = cljs.core.get.call(null,inst_26595,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26597 = cljs.core.get.call(null,inst_26595,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26598 = cljs.core.get.call(null,inst_26595,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26599 = inst_26589;
var state_26655__$1 = (function (){var statearr_26663 = state_26655;
(statearr_26663[(11)] = inst_26596);

(statearr_26663[(12)] = inst_26598);

(statearr_26663[(13)] = inst_26597);

(statearr_26663[(7)] = inst_26599);

return statearr_26663;
})();
var statearr_26664_26707 = state_26655__$1;
(statearr_26664_26707[(2)] = null);

(statearr_26664_26707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (15))){
var state_26655__$1 = state_26655;
var statearr_26665_26708 = state_26655__$1;
(statearr_26665_26708[(2)] = null);

(statearr_26665_26708[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (21))){
var inst_26607 = (state_26655[(10)]);
var inst_26599 = inst_26607;
var state_26655__$1 = (function (){var statearr_26666 = state_26655;
(statearr_26666[(7)] = inst_26599);

return statearr_26666;
})();
var statearr_26667_26709 = state_26655__$1;
(statearr_26667_26709[(2)] = null);

(statearr_26667_26709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (13))){
var inst_26651 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
var statearr_26668_26710 = state_26655__$1;
(statearr_26668_26710[(2)] = inst_26651);

(statearr_26668_26710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (22))){
var inst_26649 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
var statearr_26669_26711 = state_26655__$1;
(statearr_26669_26711[(2)] = inst_26649);

(statearr_26669_26711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (6))){
var inst_26653 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26655__$1,inst_26653);
} else {
if((state_val_26656 === (25))){
var state_26655__$1 = state_26655;
var statearr_26670_26712 = state_26655__$1;
(statearr_26670_26712[(2)] = null);

(statearr_26670_26712[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (17))){
var inst_26629 = (state_26655[(14)]);
var state_26655__$1 = state_26655;
var statearr_26671_26713 = state_26655__$1;
(statearr_26671_26713[(2)] = inst_26629);

(statearr_26671_26713[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (3))){
var inst_26589 = (state_26655[(9)]);
var state_26655__$1 = state_26655;
var statearr_26672_26714 = state_26655__$1;
(statearr_26672_26714[(2)] = inst_26589);

(statearr_26672_26714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (12))){
var inst_26629 = (state_26655[(14)]);
var inst_26608 = (state_26655[(15)]);
var inst_26615 = (state_26655[(16)]);
var inst_26629__$1 = inst_26608.call(null,inst_26615);
var state_26655__$1 = (function (){var statearr_26673 = state_26655;
(statearr_26673[(14)] = inst_26629__$1);

return statearr_26673;
})();
if(cljs.core.truth_(inst_26629__$1)){
var statearr_26674_26715 = state_26655__$1;
(statearr_26674_26715[(1)] = (17));

} else {
var statearr_26675_26716 = state_26655__$1;
(statearr_26675_26716[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (2))){
var inst_26589 = (state_26655[(9)]);
var inst_26592 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26589);
var state_26655__$1 = state_26655;
var statearr_26676_26717 = state_26655__$1;
(statearr_26676_26717[(2)] = inst_26592);

(statearr_26676_26717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (23))){
var inst_26640 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
if(cljs.core.truth_(inst_26640)){
var statearr_26677_26718 = state_26655__$1;
(statearr_26677_26718[(1)] = (24));

} else {
var statearr_26678_26719 = state_26655__$1;
(statearr_26678_26719[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (19))){
var inst_26637 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
if(cljs.core.truth_(inst_26637)){
var statearr_26679_26720 = state_26655__$1;
(statearr_26679_26720[(1)] = (20));

} else {
var statearr_26680_26721 = state_26655__$1;
(statearr_26680_26721[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (11))){
var inst_26614 = (state_26655[(8)]);
var inst_26620 = (inst_26614 == null);
var state_26655__$1 = state_26655;
if(cljs.core.truth_(inst_26620)){
var statearr_26681_26722 = state_26655__$1;
(statearr_26681_26722[(1)] = (14));

} else {
var statearr_26682_26723 = state_26655__$1;
(statearr_26682_26723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (9))){
var inst_26607 = (state_26655[(10)]);
var inst_26607__$1 = (state_26655[(2)]);
var inst_26608 = cljs.core.get.call(null,inst_26607__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26609 = cljs.core.get.call(null,inst_26607__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26610 = cljs.core.get.call(null,inst_26607__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26655__$1 = (function (){var statearr_26683 = state_26655;
(statearr_26683[(10)] = inst_26607__$1);

(statearr_26683[(17)] = inst_26609);

(statearr_26683[(15)] = inst_26608);

return statearr_26683;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26655__$1,(10),inst_26610);
} else {
if((state_val_26656 === (5))){
var inst_26599 = (state_26655[(7)]);
var inst_26602 = cljs.core.seq_QMARK_.call(null,inst_26599);
var state_26655__$1 = state_26655;
if(inst_26602){
var statearr_26684_26724 = state_26655__$1;
(statearr_26684_26724[(1)] = (7));

} else {
var statearr_26685_26725 = state_26655__$1;
(statearr_26685_26725[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (14))){
var inst_26615 = (state_26655[(16)]);
var inst_26622 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26615);
var state_26655__$1 = state_26655;
var statearr_26686_26726 = state_26655__$1;
(statearr_26686_26726[(2)] = inst_26622);

(statearr_26686_26726[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (26))){
var inst_26645 = (state_26655[(2)]);
var state_26655__$1 = state_26655;
var statearr_26687_26727 = state_26655__$1;
(statearr_26687_26727[(2)] = inst_26645);

(statearr_26687_26727[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (16))){
var inst_26625 = (state_26655[(2)]);
var inst_26626 = calc_state.call(null);
var inst_26599 = inst_26626;
var state_26655__$1 = (function (){var statearr_26688 = state_26655;
(statearr_26688[(18)] = inst_26625);

(statearr_26688[(7)] = inst_26599);

return statearr_26688;
})();
var statearr_26689_26728 = state_26655__$1;
(statearr_26689_26728[(2)] = null);

(statearr_26689_26728[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (10))){
var inst_26614 = (state_26655[(8)]);
var inst_26615 = (state_26655[(16)]);
var inst_26613 = (state_26655[(2)]);
var inst_26614__$1 = cljs.core.nth.call(null,inst_26613,(0),null);
var inst_26615__$1 = cljs.core.nth.call(null,inst_26613,(1),null);
var inst_26616 = (inst_26614__$1 == null);
var inst_26617 = cljs.core._EQ_.call(null,inst_26615__$1,change);
var inst_26618 = (inst_26616) || (inst_26617);
var state_26655__$1 = (function (){var statearr_26690 = state_26655;
(statearr_26690[(8)] = inst_26614__$1);

(statearr_26690[(16)] = inst_26615__$1);

return statearr_26690;
})();
if(cljs.core.truth_(inst_26618)){
var statearr_26691_26729 = state_26655__$1;
(statearr_26691_26729[(1)] = (11));

} else {
var statearr_26692_26730 = state_26655__$1;
(statearr_26692_26730[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (18))){
var inst_26609 = (state_26655[(17)]);
var inst_26608 = (state_26655[(15)]);
var inst_26615 = (state_26655[(16)]);
var inst_26632 = cljs.core.empty_QMARK_.call(null,inst_26608);
var inst_26633 = inst_26609.call(null,inst_26615);
var inst_26634 = cljs.core.not.call(null,inst_26633);
var inst_26635 = (inst_26632) && (inst_26634);
var state_26655__$1 = state_26655;
var statearr_26693_26731 = state_26655__$1;
(statearr_26693_26731[(2)] = inst_26635);

(statearr_26693_26731[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26656 === (8))){
var inst_26599 = (state_26655[(7)]);
var state_26655__$1 = state_26655;
var statearr_26694_26732 = state_26655__$1;
(statearr_26694_26732[(2)] = inst_26599);

(statearr_26694_26732[(1)] = (9));


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
});})(c__19204__auto___26702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19142__auto__,c__19204__auto___26702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19143__auto__ = null;
var cljs$core$async$mix_$_state_machine__19143__auto____0 = (function (){
var statearr_26698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26698[(0)] = cljs$core$async$mix_$_state_machine__19143__auto__);

(statearr_26698[(1)] = (1));

return statearr_26698;
});
var cljs$core$async$mix_$_state_machine__19143__auto____1 = (function (state_26655){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_26655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e26699){if((e26699 instanceof Object)){
var ex__19146__auto__ = e26699;
var statearr_26700_26733 = state_26655;
(statearr_26700_26733[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26734 = state_26655;
state_26655 = G__26734;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19143__auto__ = function(state_26655){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19143__auto____1.call(this,state_26655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19143__auto____0;
cljs$core$async$mix_$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19143__auto____1;
return cljs$core$async$mix_$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___26702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19206__auto__ = (function (){var statearr_26701 = f__19205__auto__.call(null);
(statearr_26701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___26702);

return statearr_26701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___26702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26736 = {};
return obj26736;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16196__auto__ = p;
if(and__16196__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16196__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16844__auto__ = (((p == null))?null:p);
return (function (){var or__16208__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16196__auto__ = p;
if(and__16196__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16196__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16844__auto__ = (((p == null))?null:p);
return (function (){var or__16208__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__26738 = arguments.length;
switch (G__26738) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16196__auto__ = p;
if(and__16196__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16196__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16844__auto__ = (((p == null))?null:p);
return (function (){var or__16208__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16196__auto__ = p;
if(and__16196__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16196__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16844__auto__ = (((p == null))?null:p);
return (function (){var or__16208__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16844__auto__)]);
if(or__16208__auto__){
return or__16208__auto__;
} else {
var or__16208__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16208__auto____$1){
return or__16208__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__26742 = arguments.length;
switch (G__26742) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16208__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16208__auto__)){
return or__16208__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16208__auto__,mults){
return (function (p1__26740_SHARP_){
if(cljs.core.truth_(p1__26740_SHARP_.call(null,topic))){
return p1__26740_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26740_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16208__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26743 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26743 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26744){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26744 = meta26744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26745,meta26744__$1){
var self__ = this;
var _26745__$1 = this;
return (new cljs.core.async.t26743(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26744__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26745){
var self__ = this;
var _26745__$1 = this;
return self__.meta26744;
});})(mults,ensure_mult))
;

cljs.core.async.t26743.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26743.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26743.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26743.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26743.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26744","meta26744",1461216746,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t26743.cljs$lang$type = true;

cljs.core.async.t26743.cljs$lang$ctorStr = "cljs.core.async/t26743";

cljs.core.async.t26743.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t26743");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26743 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26744){
return (new cljs.core.async.t26743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26744));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26743(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19204__auto___26866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___26866,mults,ensure_mult,p){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___26866,mults,ensure_mult,p){
return (function (state_26817){
var state_val_26818 = (state_26817[(1)]);
if((state_val_26818 === (7))){
var inst_26813 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26819_26867 = state_26817__$1;
(statearr_26819_26867[(2)] = inst_26813);

(statearr_26819_26867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (20))){
var state_26817__$1 = state_26817;
var statearr_26820_26868 = state_26817__$1;
(statearr_26820_26868[(2)] = null);

(statearr_26820_26868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (1))){
var state_26817__$1 = state_26817;
var statearr_26821_26869 = state_26817__$1;
(statearr_26821_26869[(2)] = null);

(statearr_26821_26869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (24))){
var inst_26796 = (state_26817[(7)]);
var inst_26805 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26796);
var state_26817__$1 = state_26817;
var statearr_26822_26870 = state_26817__$1;
(statearr_26822_26870[(2)] = inst_26805);

(statearr_26822_26870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (4))){
var inst_26748 = (state_26817[(8)]);
var inst_26748__$1 = (state_26817[(2)]);
var inst_26749 = (inst_26748__$1 == null);
var state_26817__$1 = (function (){var statearr_26823 = state_26817;
(statearr_26823[(8)] = inst_26748__$1);

return statearr_26823;
})();
if(cljs.core.truth_(inst_26749)){
var statearr_26824_26871 = state_26817__$1;
(statearr_26824_26871[(1)] = (5));

} else {
var statearr_26825_26872 = state_26817__$1;
(statearr_26825_26872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (15))){
var inst_26790 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26826_26873 = state_26817__$1;
(statearr_26826_26873[(2)] = inst_26790);

(statearr_26826_26873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (21))){
var inst_26810 = (state_26817[(2)]);
var state_26817__$1 = (function (){var statearr_26827 = state_26817;
(statearr_26827[(9)] = inst_26810);

return statearr_26827;
})();
var statearr_26828_26874 = state_26817__$1;
(statearr_26828_26874[(2)] = null);

(statearr_26828_26874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (13))){
var inst_26772 = (state_26817[(10)]);
var inst_26774 = cljs.core.chunked_seq_QMARK_.call(null,inst_26772);
var state_26817__$1 = state_26817;
if(inst_26774){
var statearr_26829_26875 = state_26817__$1;
(statearr_26829_26875[(1)] = (16));

} else {
var statearr_26830_26876 = state_26817__$1;
(statearr_26830_26876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (22))){
var inst_26802 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
if(cljs.core.truth_(inst_26802)){
var statearr_26831_26877 = state_26817__$1;
(statearr_26831_26877[(1)] = (23));

} else {
var statearr_26832_26878 = state_26817__$1;
(statearr_26832_26878[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (6))){
var inst_26796 = (state_26817[(7)]);
var inst_26748 = (state_26817[(8)]);
var inst_26798 = (state_26817[(11)]);
var inst_26796__$1 = topic_fn.call(null,inst_26748);
var inst_26797 = cljs.core.deref.call(null,mults);
var inst_26798__$1 = cljs.core.get.call(null,inst_26797,inst_26796__$1);
var state_26817__$1 = (function (){var statearr_26833 = state_26817;
(statearr_26833[(7)] = inst_26796__$1);

(statearr_26833[(11)] = inst_26798__$1);

return statearr_26833;
})();
if(cljs.core.truth_(inst_26798__$1)){
var statearr_26834_26879 = state_26817__$1;
(statearr_26834_26879[(1)] = (19));

} else {
var statearr_26835_26880 = state_26817__$1;
(statearr_26835_26880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (25))){
var inst_26807 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26836_26881 = state_26817__$1;
(statearr_26836_26881[(2)] = inst_26807);

(statearr_26836_26881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (17))){
var inst_26772 = (state_26817[(10)]);
var inst_26781 = cljs.core.first.call(null,inst_26772);
var inst_26782 = cljs.core.async.muxch_STAR_.call(null,inst_26781);
var inst_26783 = cljs.core.async.close_BANG_.call(null,inst_26782);
var inst_26784 = cljs.core.next.call(null,inst_26772);
var inst_26758 = inst_26784;
var inst_26759 = null;
var inst_26760 = (0);
var inst_26761 = (0);
var state_26817__$1 = (function (){var statearr_26837 = state_26817;
(statearr_26837[(12)] = inst_26760);

(statearr_26837[(13)] = inst_26761);

(statearr_26837[(14)] = inst_26759);

(statearr_26837[(15)] = inst_26783);

(statearr_26837[(16)] = inst_26758);

return statearr_26837;
})();
var statearr_26838_26882 = state_26817__$1;
(statearr_26838_26882[(2)] = null);

(statearr_26838_26882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (3))){
var inst_26815 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26817__$1,inst_26815);
} else {
if((state_val_26818 === (12))){
var inst_26792 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26839_26883 = state_26817__$1;
(statearr_26839_26883[(2)] = inst_26792);

(statearr_26839_26883[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (2))){
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26817__$1,(4),ch);
} else {
if((state_val_26818 === (23))){
var state_26817__$1 = state_26817;
var statearr_26840_26884 = state_26817__$1;
(statearr_26840_26884[(2)] = null);

(statearr_26840_26884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (19))){
var inst_26748 = (state_26817[(8)]);
var inst_26798 = (state_26817[(11)]);
var inst_26800 = cljs.core.async.muxch_STAR_.call(null,inst_26798);
var state_26817__$1 = state_26817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26817__$1,(22),inst_26800,inst_26748);
} else {
if((state_val_26818 === (11))){
var inst_26772 = (state_26817[(10)]);
var inst_26758 = (state_26817[(16)]);
var inst_26772__$1 = cljs.core.seq.call(null,inst_26758);
var state_26817__$1 = (function (){var statearr_26841 = state_26817;
(statearr_26841[(10)] = inst_26772__$1);

return statearr_26841;
})();
if(inst_26772__$1){
var statearr_26842_26885 = state_26817__$1;
(statearr_26842_26885[(1)] = (13));

} else {
var statearr_26843_26886 = state_26817__$1;
(statearr_26843_26886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (9))){
var inst_26794 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26844_26887 = state_26817__$1;
(statearr_26844_26887[(2)] = inst_26794);

(statearr_26844_26887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (5))){
var inst_26755 = cljs.core.deref.call(null,mults);
var inst_26756 = cljs.core.vals.call(null,inst_26755);
var inst_26757 = cljs.core.seq.call(null,inst_26756);
var inst_26758 = inst_26757;
var inst_26759 = null;
var inst_26760 = (0);
var inst_26761 = (0);
var state_26817__$1 = (function (){var statearr_26845 = state_26817;
(statearr_26845[(12)] = inst_26760);

(statearr_26845[(13)] = inst_26761);

(statearr_26845[(14)] = inst_26759);

(statearr_26845[(16)] = inst_26758);

return statearr_26845;
})();
var statearr_26846_26888 = state_26817__$1;
(statearr_26846_26888[(2)] = null);

(statearr_26846_26888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (14))){
var state_26817__$1 = state_26817;
var statearr_26850_26889 = state_26817__$1;
(statearr_26850_26889[(2)] = null);

(statearr_26850_26889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (16))){
var inst_26772 = (state_26817[(10)]);
var inst_26776 = cljs.core.chunk_first.call(null,inst_26772);
var inst_26777 = cljs.core.chunk_rest.call(null,inst_26772);
var inst_26778 = cljs.core.count.call(null,inst_26776);
var inst_26758 = inst_26777;
var inst_26759 = inst_26776;
var inst_26760 = inst_26778;
var inst_26761 = (0);
var state_26817__$1 = (function (){var statearr_26851 = state_26817;
(statearr_26851[(12)] = inst_26760);

(statearr_26851[(13)] = inst_26761);

(statearr_26851[(14)] = inst_26759);

(statearr_26851[(16)] = inst_26758);

return statearr_26851;
})();
var statearr_26852_26890 = state_26817__$1;
(statearr_26852_26890[(2)] = null);

(statearr_26852_26890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (10))){
var inst_26760 = (state_26817[(12)]);
var inst_26761 = (state_26817[(13)]);
var inst_26759 = (state_26817[(14)]);
var inst_26758 = (state_26817[(16)]);
var inst_26766 = cljs.core._nth.call(null,inst_26759,inst_26761);
var inst_26767 = cljs.core.async.muxch_STAR_.call(null,inst_26766);
var inst_26768 = cljs.core.async.close_BANG_.call(null,inst_26767);
var inst_26769 = (inst_26761 + (1));
var tmp26847 = inst_26760;
var tmp26848 = inst_26759;
var tmp26849 = inst_26758;
var inst_26758__$1 = tmp26849;
var inst_26759__$1 = tmp26848;
var inst_26760__$1 = tmp26847;
var inst_26761__$1 = inst_26769;
var state_26817__$1 = (function (){var statearr_26853 = state_26817;
(statearr_26853[(12)] = inst_26760__$1);

(statearr_26853[(13)] = inst_26761__$1);

(statearr_26853[(14)] = inst_26759__$1);

(statearr_26853[(17)] = inst_26768);

(statearr_26853[(16)] = inst_26758__$1);

return statearr_26853;
})();
var statearr_26854_26891 = state_26817__$1;
(statearr_26854_26891[(2)] = null);

(statearr_26854_26891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (18))){
var inst_26787 = (state_26817[(2)]);
var state_26817__$1 = state_26817;
var statearr_26855_26892 = state_26817__$1;
(statearr_26855_26892[(2)] = inst_26787);

(statearr_26855_26892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26818 === (8))){
var inst_26760 = (state_26817[(12)]);
var inst_26761 = (state_26817[(13)]);
var inst_26763 = (inst_26761 < inst_26760);
var inst_26764 = inst_26763;
var state_26817__$1 = state_26817;
if(cljs.core.truth_(inst_26764)){
var statearr_26856_26893 = state_26817__$1;
(statearr_26856_26893[(1)] = (10));

} else {
var statearr_26857_26894 = state_26817__$1;
(statearr_26857_26894[(1)] = (11));

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
});})(c__19204__auto___26866,mults,ensure_mult,p))
;
return ((function (switch__19142__auto__,c__19204__auto___26866,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_26861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26861[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_26861[(1)] = (1));

return statearr_26861;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_26817){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_26817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e26862){if((e26862 instanceof Object)){
var ex__19146__auto__ = e26862;
var statearr_26863_26895 = state_26817;
(statearr_26863_26895[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26896 = state_26817;
state_26817 = G__26896;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_26817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_26817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___26866,mults,ensure_mult,p))
})();
var state__19206__auto__ = (function (){var statearr_26864 = f__19205__auto__.call(null);
(statearr_26864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___26866);

return statearr_26864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___26866,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__26898 = arguments.length;
switch (G__26898) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__26901 = arguments.length;
switch (G__26901) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__26904 = arguments.length;
switch (G__26904) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19204__auto___26974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___26974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___26974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26943){
var state_val_26944 = (state_26943[(1)]);
if((state_val_26944 === (7))){
var state_26943__$1 = state_26943;
var statearr_26945_26975 = state_26943__$1;
(statearr_26945_26975[(2)] = null);

(statearr_26945_26975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (1))){
var state_26943__$1 = state_26943;
var statearr_26946_26976 = state_26943__$1;
(statearr_26946_26976[(2)] = null);

(statearr_26946_26976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (4))){
var inst_26907 = (state_26943[(7)]);
var inst_26909 = (inst_26907 < cnt);
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26909)){
var statearr_26947_26977 = state_26943__$1;
(statearr_26947_26977[(1)] = (6));

} else {
var statearr_26948_26978 = state_26943__$1;
(statearr_26948_26978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (15))){
var inst_26939 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
var statearr_26949_26979 = state_26943__$1;
(statearr_26949_26979[(2)] = inst_26939);

(statearr_26949_26979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (13))){
var inst_26932 = cljs.core.async.close_BANG_.call(null,out);
var state_26943__$1 = state_26943;
var statearr_26950_26980 = state_26943__$1;
(statearr_26950_26980[(2)] = inst_26932);

(statearr_26950_26980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (6))){
var state_26943__$1 = state_26943;
var statearr_26951_26981 = state_26943__$1;
(statearr_26951_26981[(2)] = null);

(statearr_26951_26981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (3))){
var inst_26941 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26943__$1,inst_26941);
} else {
if((state_val_26944 === (12))){
var inst_26929 = (state_26943[(8)]);
var inst_26929__$1 = (state_26943[(2)]);
var inst_26930 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26929__$1);
var state_26943__$1 = (function (){var statearr_26952 = state_26943;
(statearr_26952[(8)] = inst_26929__$1);

return statearr_26952;
})();
if(cljs.core.truth_(inst_26930)){
var statearr_26953_26982 = state_26943__$1;
(statearr_26953_26982[(1)] = (13));

} else {
var statearr_26954_26983 = state_26943__$1;
(statearr_26954_26983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (2))){
var inst_26906 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26907 = (0);
var state_26943__$1 = (function (){var statearr_26955 = state_26943;
(statearr_26955[(9)] = inst_26906);

(statearr_26955[(7)] = inst_26907);

return statearr_26955;
})();
var statearr_26956_26984 = state_26943__$1;
(statearr_26956_26984[(2)] = null);

(statearr_26956_26984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (11))){
var inst_26907 = (state_26943[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26943,(10),Object,null,(9));
var inst_26916 = chs__$1.call(null,inst_26907);
var inst_26917 = done.call(null,inst_26907);
var inst_26918 = cljs.core.async.take_BANG_.call(null,inst_26916,inst_26917);
var state_26943__$1 = state_26943;
var statearr_26957_26985 = state_26943__$1;
(statearr_26957_26985[(2)] = inst_26918);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26943__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (9))){
var inst_26907 = (state_26943[(7)]);
var inst_26920 = (state_26943[(2)]);
var inst_26921 = (inst_26907 + (1));
var inst_26907__$1 = inst_26921;
var state_26943__$1 = (function (){var statearr_26958 = state_26943;
(statearr_26958[(10)] = inst_26920);

(statearr_26958[(7)] = inst_26907__$1);

return statearr_26958;
})();
var statearr_26959_26986 = state_26943__$1;
(statearr_26959_26986[(2)] = null);

(statearr_26959_26986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (5))){
var inst_26927 = (state_26943[(2)]);
var state_26943__$1 = (function (){var statearr_26960 = state_26943;
(statearr_26960[(11)] = inst_26927);

return statearr_26960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26943__$1,(12),dchan);
} else {
if((state_val_26944 === (14))){
var inst_26929 = (state_26943[(8)]);
var inst_26934 = cljs.core.apply.call(null,f,inst_26929);
var state_26943__$1 = state_26943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26943__$1,(16),out,inst_26934);
} else {
if((state_val_26944 === (16))){
var inst_26936 = (state_26943[(2)]);
var state_26943__$1 = (function (){var statearr_26961 = state_26943;
(statearr_26961[(12)] = inst_26936);

return statearr_26961;
})();
var statearr_26962_26987 = state_26943__$1;
(statearr_26962_26987[(2)] = null);

(statearr_26962_26987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (10))){
var inst_26911 = (state_26943[(2)]);
var inst_26912 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26943__$1 = (function (){var statearr_26963 = state_26943;
(statearr_26963[(13)] = inst_26911);

return statearr_26963;
})();
var statearr_26964_26988 = state_26943__$1;
(statearr_26964_26988[(2)] = inst_26912);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26943__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (8))){
var inst_26925 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
var statearr_26965_26989 = state_26943__$1;
(statearr_26965_26989[(2)] = inst_26925);

(statearr_26965_26989[(1)] = (5));


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
});})(c__19204__auto___26974,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19142__auto__,c__19204__auto___26974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_26969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26969[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_26969[(1)] = (1));

return statearr_26969;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_26943){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_26943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e26970){if((e26970 instanceof Object)){
var ex__19146__auto__ = e26970;
var statearr_26971_26990 = state_26943;
(statearr_26971_26990[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26991 = state_26943;
state_26943 = G__26991;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_26943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_26943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___26974,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19206__auto__ = (function (){var statearr_26972 = f__19205__auto__.call(null);
(statearr_26972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___26974);

return statearr_26972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___26974,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__26994 = arguments.length;
switch (G__26994) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19204__auto___27049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___27049,out){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___27049,out){
return (function (state_27024){
var state_val_27025 = (state_27024[(1)]);
if((state_val_27025 === (7))){
var inst_27004 = (state_27024[(7)]);
var inst_27003 = (state_27024[(8)]);
var inst_27003__$1 = (state_27024[(2)]);
var inst_27004__$1 = cljs.core.nth.call(null,inst_27003__$1,(0),null);
var inst_27005 = cljs.core.nth.call(null,inst_27003__$1,(1),null);
var inst_27006 = (inst_27004__$1 == null);
var state_27024__$1 = (function (){var statearr_27026 = state_27024;
(statearr_27026[(7)] = inst_27004__$1);

(statearr_27026[(9)] = inst_27005);

(statearr_27026[(8)] = inst_27003__$1);

return statearr_27026;
})();
if(cljs.core.truth_(inst_27006)){
var statearr_27027_27050 = state_27024__$1;
(statearr_27027_27050[(1)] = (8));

} else {
var statearr_27028_27051 = state_27024__$1;
(statearr_27028_27051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (1))){
var inst_26995 = cljs.core.vec.call(null,chs);
var inst_26996 = inst_26995;
var state_27024__$1 = (function (){var statearr_27029 = state_27024;
(statearr_27029[(10)] = inst_26996);

return statearr_27029;
})();
var statearr_27030_27052 = state_27024__$1;
(statearr_27030_27052[(2)] = null);

(statearr_27030_27052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (4))){
var inst_26996 = (state_27024[(10)]);
var state_27024__$1 = state_27024;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27024__$1,(7),inst_26996);
} else {
if((state_val_27025 === (6))){
var inst_27020 = (state_27024[(2)]);
var state_27024__$1 = state_27024;
var statearr_27031_27053 = state_27024__$1;
(statearr_27031_27053[(2)] = inst_27020);

(statearr_27031_27053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (3))){
var inst_27022 = (state_27024[(2)]);
var state_27024__$1 = state_27024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27024__$1,inst_27022);
} else {
if((state_val_27025 === (2))){
var inst_26996 = (state_27024[(10)]);
var inst_26998 = cljs.core.count.call(null,inst_26996);
var inst_26999 = (inst_26998 > (0));
var state_27024__$1 = state_27024;
if(cljs.core.truth_(inst_26999)){
var statearr_27033_27054 = state_27024__$1;
(statearr_27033_27054[(1)] = (4));

} else {
var statearr_27034_27055 = state_27024__$1;
(statearr_27034_27055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (11))){
var inst_26996 = (state_27024[(10)]);
var inst_27013 = (state_27024[(2)]);
var tmp27032 = inst_26996;
var inst_26996__$1 = tmp27032;
var state_27024__$1 = (function (){var statearr_27035 = state_27024;
(statearr_27035[(11)] = inst_27013);

(statearr_27035[(10)] = inst_26996__$1);

return statearr_27035;
})();
var statearr_27036_27056 = state_27024__$1;
(statearr_27036_27056[(2)] = null);

(statearr_27036_27056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (9))){
var inst_27004 = (state_27024[(7)]);
var state_27024__$1 = state_27024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27024__$1,(11),out,inst_27004);
} else {
if((state_val_27025 === (5))){
var inst_27018 = cljs.core.async.close_BANG_.call(null,out);
var state_27024__$1 = state_27024;
var statearr_27037_27057 = state_27024__$1;
(statearr_27037_27057[(2)] = inst_27018);

(statearr_27037_27057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (10))){
var inst_27016 = (state_27024[(2)]);
var state_27024__$1 = state_27024;
var statearr_27038_27058 = state_27024__$1;
(statearr_27038_27058[(2)] = inst_27016);

(statearr_27038_27058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (8))){
var inst_27004 = (state_27024[(7)]);
var inst_26996 = (state_27024[(10)]);
var inst_27005 = (state_27024[(9)]);
var inst_27003 = (state_27024[(8)]);
var inst_27008 = (function (){var cs = inst_26996;
var vec__27001 = inst_27003;
var v = inst_27004;
var c = inst_27005;
return ((function (cs,vec__27001,v,c,inst_27004,inst_26996,inst_27005,inst_27003,state_val_27025,c__19204__auto___27049,out){
return (function (p1__26992_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26992_SHARP_);
});
;})(cs,vec__27001,v,c,inst_27004,inst_26996,inst_27005,inst_27003,state_val_27025,c__19204__auto___27049,out))
})();
var inst_27009 = cljs.core.filterv.call(null,inst_27008,inst_26996);
var inst_26996__$1 = inst_27009;
var state_27024__$1 = (function (){var statearr_27039 = state_27024;
(statearr_27039[(10)] = inst_26996__$1);

return statearr_27039;
})();
var statearr_27040_27059 = state_27024__$1;
(statearr_27040_27059[(2)] = null);

(statearr_27040_27059[(1)] = (2));


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
});})(c__19204__auto___27049,out))
;
return ((function (switch__19142__auto__,c__19204__auto___27049,out){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_27044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27044[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_27044[(1)] = (1));

return statearr_27044;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_27024){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_27024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e27045){if((e27045 instanceof Object)){
var ex__19146__auto__ = e27045;
var statearr_27046_27060 = state_27024;
(statearr_27046_27060[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27061 = state_27024;
state_27024 = G__27061;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_27024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_27024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___27049,out))
})();
var state__19206__auto__ = (function (){var statearr_27047 = f__19205__auto__.call(null);
(statearr_27047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___27049);

return statearr_27047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___27049,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27063 = arguments.length;
switch (G__27063) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19204__auto___27111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___27111,out){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___27111,out){
return (function (state_27087){
var state_val_27088 = (state_27087[(1)]);
if((state_val_27088 === (7))){
var inst_27069 = (state_27087[(7)]);
var inst_27069__$1 = (state_27087[(2)]);
var inst_27070 = (inst_27069__$1 == null);
var inst_27071 = cljs.core.not.call(null,inst_27070);
var state_27087__$1 = (function (){var statearr_27089 = state_27087;
(statearr_27089[(7)] = inst_27069__$1);

return statearr_27089;
})();
if(inst_27071){
var statearr_27090_27112 = state_27087__$1;
(statearr_27090_27112[(1)] = (8));

} else {
var statearr_27091_27113 = state_27087__$1;
(statearr_27091_27113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (1))){
var inst_27064 = (0);
var state_27087__$1 = (function (){var statearr_27092 = state_27087;
(statearr_27092[(8)] = inst_27064);

return statearr_27092;
})();
var statearr_27093_27114 = state_27087__$1;
(statearr_27093_27114[(2)] = null);

(statearr_27093_27114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (4))){
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27087__$1,(7),ch);
} else {
if((state_val_27088 === (6))){
var inst_27082 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27094_27115 = state_27087__$1;
(statearr_27094_27115[(2)] = inst_27082);

(statearr_27094_27115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (3))){
var inst_27084 = (state_27087[(2)]);
var inst_27085 = cljs.core.async.close_BANG_.call(null,out);
var state_27087__$1 = (function (){var statearr_27095 = state_27087;
(statearr_27095[(9)] = inst_27084);

return statearr_27095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27087__$1,inst_27085);
} else {
if((state_val_27088 === (2))){
var inst_27064 = (state_27087[(8)]);
var inst_27066 = (inst_27064 < n);
var state_27087__$1 = state_27087;
if(cljs.core.truth_(inst_27066)){
var statearr_27096_27116 = state_27087__$1;
(statearr_27096_27116[(1)] = (4));

} else {
var statearr_27097_27117 = state_27087__$1;
(statearr_27097_27117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (11))){
var inst_27064 = (state_27087[(8)]);
var inst_27074 = (state_27087[(2)]);
var inst_27075 = (inst_27064 + (1));
var inst_27064__$1 = inst_27075;
var state_27087__$1 = (function (){var statearr_27098 = state_27087;
(statearr_27098[(10)] = inst_27074);

(statearr_27098[(8)] = inst_27064__$1);

return statearr_27098;
})();
var statearr_27099_27118 = state_27087__$1;
(statearr_27099_27118[(2)] = null);

(statearr_27099_27118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (9))){
var state_27087__$1 = state_27087;
var statearr_27100_27119 = state_27087__$1;
(statearr_27100_27119[(2)] = null);

(statearr_27100_27119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (5))){
var state_27087__$1 = state_27087;
var statearr_27101_27120 = state_27087__$1;
(statearr_27101_27120[(2)] = null);

(statearr_27101_27120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (10))){
var inst_27079 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27102_27121 = state_27087__$1;
(statearr_27102_27121[(2)] = inst_27079);

(statearr_27102_27121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (8))){
var inst_27069 = (state_27087[(7)]);
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27087__$1,(11),out,inst_27069);
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
});})(c__19204__auto___27111,out))
;
return ((function (switch__19142__auto__,c__19204__auto___27111,out){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_27106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27106[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_27106[(1)] = (1));

return statearr_27106;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_27087){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_27087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e27107){if((e27107 instanceof Object)){
var ex__19146__auto__ = e27107;
var statearr_27108_27122 = state_27087;
(statearr_27108_27122[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27123 = state_27087;
state_27087 = G__27123;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_27087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_27087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___27111,out))
})();
var state__19206__auto__ = (function (){var statearr_27109 = f__19205__auto__.call(null);
(statearr_27109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___27111);

return statearr_27109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___27111,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27131 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27131 = (function (map_LT_,f,ch,meta27132){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27132 = meta27132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27133,meta27132__$1){
var self__ = this;
var _27133__$1 = this;
return (new cljs.core.async.t27131(self__.map_LT_,self__.f,self__.ch,meta27132__$1));
});

cljs.core.async.t27131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27133){
var self__ = this;
var _27133__$1 = this;
return self__.meta27132;
});

cljs.core.async.t27131.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27131.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27131.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27134 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27134 = (function (map_LT_,f,ch,meta27132,_,fn1,meta27135){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27132 = meta27132;
this._ = _;
this.fn1 = fn1;
this.meta27135 = meta27135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27136,meta27135__$1){
var self__ = this;
var _27136__$1 = this;
return (new cljs.core.async.t27134(self__.map_LT_,self__.f,self__.ch,self__.meta27132,self__._,self__.fn1,meta27135__$1));
});})(___$1))
;

cljs.core.async.t27134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27136){
var self__ = this;
var _27136__$1 = this;
return self__.meta27135;
});})(___$1))
;

cljs.core.async.t27134.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27124_SHARP_){
return f1.call(null,(((p1__27124_SHARP_ == null))?null:self__.f.call(null,p1__27124_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27134.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27132","meta27132",1018108436,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27135","meta27135",-860489232,null)], null);
});})(___$1))
;

cljs.core.async.t27134.cljs$lang$type = true;

cljs.core.async.t27134.cljs$lang$ctorStr = "cljs.core.async/t27134";

cljs.core.async.t27134.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t27134");
});})(___$1))
;

cljs.core.async.__GT_t27134 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27134(map_LT___$1,f__$1,ch__$1,meta27132__$1,___$2,fn1__$1,meta27135){
return (new cljs.core.async.t27134(map_LT___$1,f__$1,ch__$1,meta27132__$1,___$2,fn1__$1,meta27135));
});})(___$1))
;

}

return (new cljs.core.async.t27134(self__.map_LT_,self__.f,self__.ch,self__.meta27132,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16196__auto__ = ret;
if(cljs.core.truth_(and__16196__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16196__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27131.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27132","meta27132",1018108436,null)], null);
});

cljs.core.async.t27131.cljs$lang$type = true;

cljs.core.async.t27131.cljs$lang$ctorStr = "cljs.core.async/t27131";

cljs.core.async.t27131.cljs$lang$ctorPrWriter = (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t27131");
});

cljs.core.async.__GT_t27131 = (function cljs$core$async$map_LT__$___GT_t27131(map_LT___$1,f__$1,ch__$1,meta27132){
return (new cljs.core.async.t27131(map_LT___$1,f__$1,ch__$1,meta27132));
});

}

return (new cljs.core.async.t27131(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27140 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27140 = (function (map_GT_,f,ch,meta27141){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27141 = meta27141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27142,meta27141__$1){
var self__ = this;
var _27142__$1 = this;
return (new cljs.core.async.t27140(self__.map_GT_,self__.f,self__.ch,meta27141__$1));
});

cljs.core.async.t27140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27142){
var self__ = this;
var _27142__$1 = this;
return self__.meta27141;
});

cljs.core.async.t27140.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27140.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27140.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27141","meta27141",-1867241951,null)], null);
});

cljs.core.async.t27140.cljs$lang$type = true;

cljs.core.async.t27140.cljs$lang$ctorStr = "cljs.core.async/t27140";

cljs.core.async.t27140.cljs$lang$ctorPrWriter = (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t27140");
});

cljs.core.async.__GT_t27140 = (function cljs$core$async$map_GT__$___GT_t27140(map_GT___$1,f__$1,ch__$1,meta27141){
return (new cljs.core.async.t27140(map_GT___$1,f__$1,ch__$1,meta27141));
});

}

return (new cljs.core.async.t27140(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27146 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27146 = (function (filter_GT_,p,ch,meta27147){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27147 = meta27147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27148,meta27147__$1){
var self__ = this;
var _27148__$1 = this;
return (new cljs.core.async.t27146(self__.filter_GT_,self__.p,self__.ch,meta27147__$1));
});

cljs.core.async.t27146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27148){
var self__ = this;
var _27148__$1 = this;
return self__.meta27147;
});

cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27147","meta27147",-577210475,null)], null);
});

cljs.core.async.t27146.cljs$lang$type = true;

cljs.core.async.t27146.cljs$lang$ctorStr = "cljs.core.async/t27146";

cljs.core.async.t27146.cljs$lang$ctorPrWriter = (function (this__16787__auto__,writer__16788__auto__,opt__16789__auto__){
return cljs.core._write.call(null,writer__16788__auto__,"cljs.core.async/t27146");
});

cljs.core.async.__GT_t27146 = (function cljs$core$async$filter_GT__$___GT_t27146(filter_GT___$1,p__$1,ch__$1,meta27147){
return (new cljs.core.async.t27146(filter_GT___$1,p__$1,ch__$1,meta27147));
});

}

return (new cljs.core.async.t27146(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__27150 = arguments.length;
switch (G__27150) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19204__auto___27193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___27193,out){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___27193,out){
return (function (state_27171){
var state_val_27172 = (state_27171[(1)]);
if((state_val_27172 === (7))){
var inst_27167 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27173_27194 = state_27171__$1;
(statearr_27173_27194[(2)] = inst_27167);

(statearr_27173_27194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (1))){
var state_27171__$1 = state_27171;
var statearr_27174_27195 = state_27171__$1;
(statearr_27174_27195[(2)] = null);

(statearr_27174_27195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (4))){
var inst_27153 = (state_27171[(7)]);
var inst_27153__$1 = (state_27171[(2)]);
var inst_27154 = (inst_27153__$1 == null);
var state_27171__$1 = (function (){var statearr_27175 = state_27171;
(statearr_27175[(7)] = inst_27153__$1);

return statearr_27175;
})();
if(cljs.core.truth_(inst_27154)){
var statearr_27176_27196 = state_27171__$1;
(statearr_27176_27196[(1)] = (5));

} else {
var statearr_27177_27197 = state_27171__$1;
(statearr_27177_27197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (6))){
var inst_27153 = (state_27171[(7)]);
var inst_27158 = p.call(null,inst_27153);
var state_27171__$1 = state_27171;
if(cljs.core.truth_(inst_27158)){
var statearr_27178_27198 = state_27171__$1;
(statearr_27178_27198[(1)] = (8));

} else {
var statearr_27179_27199 = state_27171__$1;
(statearr_27179_27199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (3))){
var inst_27169 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27171__$1,inst_27169);
} else {
if((state_val_27172 === (2))){
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27171__$1,(4),ch);
} else {
if((state_val_27172 === (11))){
var inst_27161 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27180_27200 = state_27171__$1;
(statearr_27180_27200[(2)] = inst_27161);

(statearr_27180_27200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (9))){
var state_27171__$1 = state_27171;
var statearr_27181_27201 = state_27171__$1;
(statearr_27181_27201[(2)] = null);

(statearr_27181_27201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (5))){
var inst_27156 = cljs.core.async.close_BANG_.call(null,out);
var state_27171__$1 = state_27171;
var statearr_27182_27202 = state_27171__$1;
(statearr_27182_27202[(2)] = inst_27156);

(statearr_27182_27202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (10))){
var inst_27164 = (state_27171[(2)]);
var state_27171__$1 = (function (){var statearr_27183 = state_27171;
(statearr_27183[(8)] = inst_27164);

return statearr_27183;
})();
var statearr_27184_27203 = state_27171__$1;
(statearr_27184_27203[(2)] = null);

(statearr_27184_27203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (8))){
var inst_27153 = (state_27171[(7)]);
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27171__$1,(11),out,inst_27153);
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
});})(c__19204__auto___27193,out))
;
return ((function (switch__19142__auto__,c__19204__auto___27193,out){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_27188 = [null,null,null,null,null,null,null,null,null];
(statearr_27188[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_27188[(1)] = (1));

return statearr_27188;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_27171){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_27171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e27189){if((e27189 instanceof Object)){
var ex__19146__auto__ = e27189;
var statearr_27190_27204 = state_27171;
(statearr_27190_27204[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27205 = state_27171;
state_27171 = G__27205;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_27171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_27171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___27193,out))
})();
var state__19206__auto__ = (function (){var statearr_27191 = f__19205__auto__.call(null);
(statearr_27191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___27193);

return statearr_27191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___27193,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27207 = arguments.length;
switch (G__27207) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto__){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto__){
return (function (state_27374){
var state_val_27375 = (state_27374[(1)]);
if((state_val_27375 === (7))){
var inst_27370 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27376_27417 = state_27374__$1;
(statearr_27376_27417[(2)] = inst_27370);

(statearr_27376_27417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (20))){
var inst_27340 = (state_27374[(7)]);
var inst_27351 = (state_27374[(2)]);
var inst_27352 = cljs.core.next.call(null,inst_27340);
var inst_27326 = inst_27352;
var inst_27327 = null;
var inst_27328 = (0);
var inst_27329 = (0);
var state_27374__$1 = (function (){var statearr_27377 = state_27374;
(statearr_27377[(8)] = inst_27327);

(statearr_27377[(9)] = inst_27328);

(statearr_27377[(10)] = inst_27329);

(statearr_27377[(11)] = inst_27326);

(statearr_27377[(12)] = inst_27351);

return statearr_27377;
})();
var statearr_27378_27418 = state_27374__$1;
(statearr_27378_27418[(2)] = null);

(statearr_27378_27418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (1))){
var state_27374__$1 = state_27374;
var statearr_27379_27419 = state_27374__$1;
(statearr_27379_27419[(2)] = null);

(statearr_27379_27419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (4))){
var inst_27315 = (state_27374[(13)]);
var inst_27315__$1 = (state_27374[(2)]);
var inst_27316 = (inst_27315__$1 == null);
var state_27374__$1 = (function (){var statearr_27380 = state_27374;
(statearr_27380[(13)] = inst_27315__$1);

return statearr_27380;
})();
if(cljs.core.truth_(inst_27316)){
var statearr_27381_27420 = state_27374__$1;
(statearr_27381_27420[(1)] = (5));

} else {
var statearr_27382_27421 = state_27374__$1;
(statearr_27382_27421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (15))){
var state_27374__$1 = state_27374;
var statearr_27386_27422 = state_27374__$1;
(statearr_27386_27422[(2)] = null);

(statearr_27386_27422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (21))){
var state_27374__$1 = state_27374;
var statearr_27387_27423 = state_27374__$1;
(statearr_27387_27423[(2)] = null);

(statearr_27387_27423[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (13))){
var inst_27327 = (state_27374[(8)]);
var inst_27328 = (state_27374[(9)]);
var inst_27329 = (state_27374[(10)]);
var inst_27326 = (state_27374[(11)]);
var inst_27336 = (state_27374[(2)]);
var inst_27337 = (inst_27329 + (1));
var tmp27383 = inst_27327;
var tmp27384 = inst_27328;
var tmp27385 = inst_27326;
var inst_27326__$1 = tmp27385;
var inst_27327__$1 = tmp27383;
var inst_27328__$1 = tmp27384;
var inst_27329__$1 = inst_27337;
var state_27374__$1 = (function (){var statearr_27388 = state_27374;
(statearr_27388[(14)] = inst_27336);

(statearr_27388[(8)] = inst_27327__$1);

(statearr_27388[(9)] = inst_27328__$1);

(statearr_27388[(10)] = inst_27329__$1);

(statearr_27388[(11)] = inst_27326__$1);

return statearr_27388;
})();
var statearr_27389_27424 = state_27374__$1;
(statearr_27389_27424[(2)] = null);

(statearr_27389_27424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (22))){
var state_27374__$1 = state_27374;
var statearr_27390_27425 = state_27374__$1;
(statearr_27390_27425[(2)] = null);

(statearr_27390_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (6))){
var inst_27315 = (state_27374[(13)]);
var inst_27324 = f.call(null,inst_27315);
var inst_27325 = cljs.core.seq.call(null,inst_27324);
var inst_27326 = inst_27325;
var inst_27327 = null;
var inst_27328 = (0);
var inst_27329 = (0);
var state_27374__$1 = (function (){var statearr_27391 = state_27374;
(statearr_27391[(8)] = inst_27327);

(statearr_27391[(9)] = inst_27328);

(statearr_27391[(10)] = inst_27329);

(statearr_27391[(11)] = inst_27326);

return statearr_27391;
})();
var statearr_27392_27426 = state_27374__$1;
(statearr_27392_27426[(2)] = null);

(statearr_27392_27426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (17))){
var inst_27340 = (state_27374[(7)]);
var inst_27344 = cljs.core.chunk_first.call(null,inst_27340);
var inst_27345 = cljs.core.chunk_rest.call(null,inst_27340);
var inst_27346 = cljs.core.count.call(null,inst_27344);
var inst_27326 = inst_27345;
var inst_27327 = inst_27344;
var inst_27328 = inst_27346;
var inst_27329 = (0);
var state_27374__$1 = (function (){var statearr_27393 = state_27374;
(statearr_27393[(8)] = inst_27327);

(statearr_27393[(9)] = inst_27328);

(statearr_27393[(10)] = inst_27329);

(statearr_27393[(11)] = inst_27326);

return statearr_27393;
})();
var statearr_27394_27427 = state_27374__$1;
(statearr_27394_27427[(2)] = null);

(statearr_27394_27427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (3))){
var inst_27372 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27374__$1,inst_27372);
} else {
if((state_val_27375 === (12))){
var inst_27360 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27395_27428 = state_27374__$1;
(statearr_27395_27428[(2)] = inst_27360);

(statearr_27395_27428[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (2))){
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27374__$1,(4),in$);
} else {
if((state_val_27375 === (23))){
var inst_27368 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27396_27429 = state_27374__$1;
(statearr_27396_27429[(2)] = inst_27368);

(statearr_27396_27429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (19))){
var inst_27355 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27397_27430 = state_27374__$1;
(statearr_27397_27430[(2)] = inst_27355);

(statearr_27397_27430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (11))){
var inst_27326 = (state_27374[(11)]);
var inst_27340 = (state_27374[(7)]);
var inst_27340__$1 = cljs.core.seq.call(null,inst_27326);
var state_27374__$1 = (function (){var statearr_27398 = state_27374;
(statearr_27398[(7)] = inst_27340__$1);

return statearr_27398;
})();
if(inst_27340__$1){
var statearr_27399_27431 = state_27374__$1;
(statearr_27399_27431[(1)] = (14));

} else {
var statearr_27400_27432 = state_27374__$1;
(statearr_27400_27432[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (9))){
var inst_27362 = (state_27374[(2)]);
var inst_27363 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27374__$1 = (function (){var statearr_27401 = state_27374;
(statearr_27401[(15)] = inst_27362);

return statearr_27401;
})();
if(cljs.core.truth_(inst_27363)){
var statearr_27402_27433 = state_27374__$1;
(statearr_27402_27433[(1)] = (21));

} else {
var statearr_27403_27434 = state_27374__$1;
(statearr_27403_27434[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (5))){
var inst_27318 = cljs.core.async.close_BANG_.call(null,out);
var state_27374__$1 = state_27374;
var statearr_27404_27435 = state_27374__$1;
(statearr_27404_27435[(2)] = inst_27318);

(statearr_27404_27435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (14))){
var inst_27340 = (state_27374[(7)]);
var inst_27342 = cljs.core.chunked_seq_QMARK_.call(null,inst_27340);
var state_27374__$1 = state_27374;
if(inst_27342){
var statearr_27405_27436 = state_27374__$1;
(statearr_27405_27436[(1)] = (17));

} else {
var statearr_27406_27437 = state_27374__$1;
(statearr_27406_27437[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (16))){
var inst_27358 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27407_27438 = state_27374__$1;
(statearr_27407_27438[(2)] = inst_27358);

(statearr_27407_27438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (10))){
var inst_27327 = (state_27374[(8)]);
var inst_27329 = (state_27374[(10)]);
var inst_27334 = cljs.core._nth.call(null,inst_27327,inst_27329);
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27374__$1,(13),out,inst_27334);
} else {
if((state_val_27375 === (18))){
var inst_27340 = (state_27374[(7)]);
var inst_27349 = cljs.core.first.call(null,inst_27340);
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27374__$1,(20),out,inst_27349);
} else {
if((state_val_27375 === (8))){
var inst_27328 = (state_27374[(9)]);
var inst_27329 = (state_27374[(10)]);
var inst_27331 = (inst_27329 < inst_27328);
var inst_27332 = inst_27331;
var state_27374__$1 = state_27374;
if(cljs.core.truth_(inst_27332)){
var statearr_27408_27439 = state_27374__$1;
(statearr_27408_27439[(1)] = (10));

} else {
var statearr_27409_27440 = state_27374__$1;
(statearr_27409_27440[(1)] = (11));

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
});})(c__19204__auto__))
;
return ((function (switch__19142__auto__,c__19204__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19143__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19143__auto____0 = (function (){
var statearr_27413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27413[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19143__auto__);

(statearr_27413[(1)] = (1));

return statearr_27413;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19143__auto____1 = (function (state_27374){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_27374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e27414){if((e27414 instanceof Object)){
var ex__19146__auto__ = e27414;
var statearr_27415_27441 = state_27374;
(statearr_27415_27441[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27442 = state_27374;
state_27374 = G__27442;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19143__auto__ = function(state_27374){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19143__auto____1.call(this,state_27374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19143__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19143__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto__))
})();
var state__19206__auto__ = (function (){var statearr_27416 = f__19205__auto__.call(null);
(statearr_27416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto__);

return statearr_27416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto__))
);

return c__19204__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__27444 = arguments.length;
switch (G__27444) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__27447 = arguments.length;
switch (G__27447) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__27450 = arguments.length;
switch (G__27450) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19204__auto___27500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___27500,out){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___27500,out){
return (function (state_27474){
var state_val_27475 = (state_27474[(1)]);
if((state_val_27475 === (7))){
var inst_27469 = (state_27474[(2)]);
var state_27474__$1 = state_27474;
var statearr_27476_27501 = state_27474__$1;
(statearr_27476_27501[(2)] = inst_27469);

(statearr_27476_27501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27475 === (1))){
var inst_27451 = null;
var state_27474__$1 = (function (){var statearr_27477 = state_27474;
(statearr_27477[(7)] = inst_27451);

return statearr_27477;
})();
var statearr_27478_27502 = state_27474__$1;
(statearr_27478_27502[(2)] = null);

(statearr_27478_27502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27475 === (4))){
var inst_27454 = (state_27474[(8)]);
var inst_27454__$1 = (state_27474[(2)]);
var inst_27455 = (inst_27454__$1 == null);
var inst_27456 = cljs.core.not.call(null,inst_27455);
var state_27474__$1 = (function (){var statearr_27479 = state_27474;
(statearr_27479[(8)] = inst_27454__$1);

return statearr_27479;
})();
if(inst_27456){
var statearr_27480_27503 = state_27474__$1;
(statearr_27480_27503[(1)] = (5));

} else {
var statearr_27481_27504 = state_27474__$1;
(statearr_27481_27504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27475 === (6))){
var state_27474__$1 = state_27474;
var statearr_27482_27505 = state_27474__$1;
(statearr_27482_27505[(2)] = null);

(statearr_27482_27505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27475 === (3))){
var inst_27471 = (state_27474[(2)]);
var inst_27472 = cljs.core.async.close_BANG_.call(null,out);
var state_27474__$1 = (function (){var statearr_27483 = state_27474;
(statearr_27483[(9)] = inst_27471);

return statearr_27483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27474__$1,inst_27472);
} else {
if((state_val_27475 === (2))){
var state_27474__$1 = state_27474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27474__$1,(4),ch);
} else {
if((state_val_27475 === (11))){
var inst_27454 = (state_27474[(8)]);
var inst_27463 = (state_27474[(2)]);
var inst_27451 = inst_27454;
var state_27474__$1 = (function (){var statearr_27484 = state_27474;
(statearr_27484[(7)] = inst_27451);

(statearr_27484[(10)] = inst_27463);

return statearr_27484;
})();
var statearr_27485_27506 = state_27474__$1;
(statearr_27485_27506[(2)] = null);

(statearr_27485_27506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27475 === (9))){
var inst_27454 = (state_27474[(8)]);
var state_27474__$1 = state_27474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27474__$1,(11),out,inst_27454);
} else {
if((state_val_27475 === (5))){
var inst_27451 = (state_27474[(7)]);
var inst_27454 = (state_27474[(8)]);
var inst_27458 = cljs.core._EQ_.call(null,inst_27454,inst_27451);
var state_27474__$1 = state_27474;
if(inst_27458){
var statearr_27487_27507 = state_27474__$1;
(statearr_27487_27507[(1)] = (8));

} else {
var statearr_27488_27508 = state_27474__$1;
(statearr_27488_27508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27475 === (10))){
var inst_27466 = (state_27474[(2)]);
var state_27474__$1 = state_27474;
var statearr_27489_27509 = state_27474__$1;
(statearr_27489_27509[(2)] = inst_27466);

(statearr_27489_27509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27475 === (8))){
var inst_27451 = (state_27474[(7)]);
var tmp27486 = inst_27451;
var inst_27451__$1 = tmp27486;
var state_27474__$1 = (function (){var statearr_27490 = state_27474;
(statearr_27490[(7)] = inst_27451__$1);

return statearr_27490;
})();
var statearr_27491_27510 = state_27474__$1;
(statearr_27491_27510[(2)] = null);

(statearr_27491_27510[(1)] = (2));


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
});})(c__19204__auto___27500,out))
;
return ((function (switch__19142__auto__,c__19204__auto___27500,out){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_27495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27495[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_27495[(1)] = (1));

return statearr_27495;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_27474){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_27474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e27496){if((e27496 instanceof Object)){
var ex__19146__auto__ = e27496;
var statearr_27497_27511 = state_27474;
(statearr_27497_27511[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27512 = state_27474;
state_27474 = G__27512;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_27474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_27474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___27500,out))
})();
var state__19206__auto__ = (function (){var statearr_27498 = f__19205__auto__.call(null);
(statearr_27498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___27500);

return statearr_27498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___27500,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__27514 = arguments.length;
switch (G__27514) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19204__auto___27583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___27583,out){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___27583,out){
return (function (state_27552){
var state_val_27553 = (state_27552[(1)]);
if((state_val_27553 === (7))){
var inst_27548 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
var statearr_27554_27584 = state_27552__$1;
(statearr_27554_27584[(2)] = inst_27548);

(statearr_27554_27584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (1))){
var inst_27515 = (new Array(n));
var inst_27516 = inst_27515;
var inst_27517 = (0);
var state_27552__$1 = (function (){var statearr_27555 = state_27552;
(statearr_27555[(7)] = inst_27517);

(statearr_27555[(8)] = inst_27516);

return statearr_27555;
})();
var statearr_27556_27585 = state_27552__$1;
(statearr_27556_27585[(2)] = null);

(statearr_27556_27585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (4))){
var inst_27520 = (state_27552[(9)]);
var inst_27520__$1 = (state_27552[(2)]);
var inst_27521 = (inst_27520__$1 == null);
var inst_27522 = cljs.core.not.call(null,inst_27521);
var state_27552__$1 = (function (){var statearr_27557 = state_27552;
(statearr_27557[(9)] = inst_27520__$1);

return statearr_27557;
})();
if(inst_27522){
var statearr_27558_27586 = state_27552__$1;
(statearr_27558_27586[(1)] = (5));

} else {
var statearr_27559_27587 = state_27552__$1;
(statearr_27559_27587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (15))){
var inst_27542 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
var statearr_27560_27588 = state_27552__$1;
(statearr_27560_27588[(2)] = inst_27542);

(statearr_27560_27588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (13))){
var state_27552__$1 = state_27552;
var statearr_27561_27589 = state_27552__$1;
(statearr_27561_27589[(2)] = null);

(statearr_27561_27589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (6))){
var inst_27517 = (state_27552[(7)]);
var inst_27538 = (inst_27517 > (0));
var state_27552__$1 = state_27552;
if(cljs.core.truth_(inst_27538)){
var statearr_27562_27590 = state_27552__$1;
(statearr_27562_27590[(1)] = (12));

} else {
var statearr_27563_27591 = state_27552__$1;
(statearr_27563_27591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (3))){
var inst_27550 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27552__$1,inst_27550);
} else {
if((state_val_27553 === (12))){
var inst_27516 = (state_27552[(8)]);
var inst_27540 = cljs.core.vec.call(null,inst_27516);
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27552__$1,(15),out,inst_27540);
} else {
if((state_val_27553 === (2))){
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27552__$1,(4),ch);
} else {
if((state_val_27553 === (11))){
var inst_27532 = (state_27552[(2)]);
var inst_27533 = (new Array(n));
var inst_27516 = inst_27533;
var inst_27517 = (0);
var state_27552__$1 = (function (){var statearr_27564 = state_27552;
(statearr_27564[(7)] = inst_27517);

(statearr_27564[(10)] = inst_27532);

(statearr_27564[(8)] = inst_27516);

return statearr_27564;
})();
var statearr_27565_27592 = state_27552__$1;
(statearr_27565_27592[(2)] = null);

(statearr_27565_27592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (9))){
var inst_27516 = (state_27552[(8)]);
var inst_27530 = cljs.core.vec.call(null,inst_27516);
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27552__$1,(11),out,inst_27530);
} else {
if((state_val_27553 === (5))){
var inst_27517 = (state_27552[(7)]);
var inst_27520 = (state_27552[(9)]);
var inst_27525 = (state_27552[(11)]);
var inst_27516 = (state_27552[(8)]);
var inst_27524 = (inst_27516[inst_27517] = inst_27520);
var inst_27525__$1 = (inst_27517 + (1));
var inst_27526 = (inst_27525__$1 < n);
var state_27552__$1 = (function (){var statearr_27566 = state_27552;
(statearr_27566[(11)] = inst_27525__$1);

(statearr_27566[(12)] = inst_27524);

return statearr_27566;
})();
if(cljs.core.truth_(inst_27526)){
var statearr_27567_27593 = state_27552__$1;
(statearr_27567_27593[(1)] = (8));

} else {
var statearr_27568_27594 = state_27552__$1;
(statearr_27568_27594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (14))){
var inst_27545 = (state_27552[(2)]);
var inst_27546 = cljs.core.async.close_BANG_.call(null,out);
var state_27552__$1 = (function (){var statearr_27570 = state_27552;
(statearr_27570[(13)] = inst_27545);

return statearr_27570;
})();
var statearr_27571_27595 = state_27552__$1;
(statearr_27571_27595[(2)] = inst_27546);

(statearr_27571_27595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (10))){
var inst_27536 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
var statearr_27572_27596 = state_27552__$1;
(statearr_27572_27596[(2)] = inst_27536);

(statearr_27572_27596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (8))){
var inst_27525 = (state_27552[(11)]);
var inst_27516 = (state_27552[(8)]);
var tmp27569 = inst_27516;
var inst_27516__$1 = tmp27569;
var inst_27517 = inst_27525;
var state_27552__$1 = (function (){var statearr_27573 = state_27552;
(statearr_27573[(7)] = inst_27517);

(statearr_27573[(8)] = inst_27516__$1);

return statearr_27573;
})();
var statearr_27574_27597 = state_27552__$1;
(statearr_27574_27597[(2)] = null);

(statearr_27574_27597[(1)] = (2));


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
});})(c__19204__auto___27583,out))
;
return ((function (switch__19142__auto__,c__19204__auto___27583,out){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_27578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27578[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_27578[(1)] = (1));

return statearr_27578;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_27552){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_27552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e27579){if((e27579 instanceof Object)){
var ex__19146__auto__ = e27579;
var statearr_27580_27598 = state_27552;
(statearr_27580_27598[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27599 = state_27552;
state_27552 = G__27599;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_27552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_27552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___27583,out))
})();
var state__19206__auto__ = (function (){var statearr_27581 = f__19205__auto__.call(null);
(statearr_27581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___27583);

return statearr_27581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___27583,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__27601 = arguments.length;
switch (G__27601) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19204__auto___27674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19204__auto___27674,out){
return (function (){
var f__19205__auto__ = (function (){var switch__19142__auto__ = ((function (c__19204__auto___27674,out){
return (function (state_27643){
var state_val_27644 = (state_27643[(1)]);
if((state_val_27644 === (7))){
var inst_27639 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27645_27675 = state_27643__$1;
(statearr_27645_27675[(2)] = inst_27639);

(statearr_27645_27675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (1))){
var inst_27602 = [];
var inst_27603 = inst_27602;
var inst_27604 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27643__$1 = (function (){var statearr_27646 = state_27643;
(statearr_27646[(7)] = inst_27603);

(statearr_27646[(8)] = inst_27604);

return statearr_27646;
})();
var statearr_27647_27676 = state_27643__$1;
(statearr_27647_27676[(2)] = null);

(statearr_27647_27676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (4))){
var inst_27607 = (state_27643[(9)]);
var inst_27607__$1 = (state_27643[(2)]);
var inst_27608 = (inst_27607__$1 == null);
var inst_27609 = cljs.core.not.call(null,inst_27608);
var state_27643__$1 = (function (){var statearr_27648 = state_27643;
(statearr_27648[(9)] = inst_27607__$1);

return statearr_27648;
})();
if(inst_27609){
var statearr_27649_27677 = state_27643__$1;
(statearr_27649_27677[(1)] = (5));

} else {
var statearr_27650_27678 = state_27643__$1;
(statearr_27650_27678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (15))){
var inst_27633 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27651_27679 = state_27643__$1;
(statearr_27651_27679[(2)] = inst_27633);

(statearr_27651_27679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (13))){
var state_27643__$1 = state_27643;
var statearr_27652_27680 = state_27643__$1;
(statearr_27652_27680[(2)] = null);

(statearr_27652_27680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (6))){
var inst_27603 = (state_27643[(7)]);
var inst_27628 = inst_27603.length;
var inst_27629 = (inst_27628 > (0));
var state_27643__$1 = state_27643;
if(cljs.core.truth_(inst_27629)){
var statearr_27653_27681 = state_27643__$1;
(statearr_27653_27681[(1)] = (12));

} else {
var statearr_27654_27682 = state_27643__$1;
(statearr_27654_27682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (3))){
var inst_27641 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27643__$1,inst_27641);
} else {
if((state_val_27644 === (12))){
var inst_27603 = (state_27643[(7)]);
var inst_27631 = cljs.core.vec.call(null,inst_27603);
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27643__$1,(15),out,inst_27631);
} else {
if((state_val_27644 === (2))){
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27643__$1,(4),ch);
} else {
if((state_val_27644 === (11))){
var inst_27607 = (state_27643[(9)]);
var inst_27611 = (state_27643[(10)]);
var inst_27621 = (state_27643[(2)]);
var inst_27622 = [];
var inst_27623 = inst_27622.push(inst_27607);
var inst_27603 = inst_27622;
var inst_27604 = inst_27611;
var state_27643__$1 = (function (){var statearr_27655 = state_27643;
(statearr_27655[(7)] = inst_27603);

(statearr_27655[(11)] = inst_27623);

(statearr_27655[(8)] = inst_27604);

(statearr_27655[(12)] = inst_27621);

return statearr_27655;
})();
var statearr_27656_27683 = state_27643__$1;
(statearr_27656_27683[(2)] = null);

(statearr_27656_27683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (9))){
var inst_27603 = (state_27643[(7)]);
var inst_27619 = cljs.core.vec.call(null,inst_27603);
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27643__$1,(11),out,inst_27619);
} else {
if((state_val_27644 === (5))){
var inst_27607 = (state_27643[(9)]);
var inst_27604 = (state_27643[(8)]);
var inst_27611 = (state_27643[(10)]);
var inst_27611__$1 = f.call(null,inst_27607);
var inst_27612 = cljs.core._EQ_.call(null,inst_27611__$1,inst_27604);
var inst_27613 = cljs.core.keyword_identical_QMARK_.call(null,inst_27604,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27614 = (inst_27612) || (inst_27613);
var state_27643__$1 = (function (){var statearr_27657 = state_27643;
(statearr_27657[(10)] = inst_27611__$1);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27614)){
var statearr_27658_27684 = state_27643__$1;
(statearr_27658_27684[(1)] = (8));

} else {
var statearr_27659_27685 = state_27643__$1;
(statearr_27659_27685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (14))){
var inst_27636 = (state_27643[(2)]);
var inst_27637 = cljs.core.async.close_BANG_.call(null,out);
var state_27643__$1 = (function (){var statearr_27661 = state_27643;
(statearr_27661[(13)] = inst_27636);

return statearr_27661;
})();
var statearr_27662_27686 = state_27643__$1;
(statearr_27662_27686[(2)] = inst_27637);

(statearr_27662_27686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (10))){
var inst_27626 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27663_27687 = state_27643__$1;
(statearr_27663_27687[(2)] = inst_27626);

(statearr_27663_27687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (8))){
var inst_27607 = (state_27643[(9)]);
var inst_27603 = (state_27643[(7)]);
var inst_27611 = (state_27643[(10)]);
var inst_27616 = inst_27603.push(inst_27607);
var tmp27660 = inst_27603;
var inst_27603__$1 = tmp27660;
var inst_27604 = inst_27611;
var state_27643__$1 = (function (){var statearr_27664 = state_27643;
(statearr_27664[(7)] = inst_27603__$1);

(statearr_27664[(8)] = inst_27604);

(statearr_27664[(14)] = inst_27616);

return statearr_27664;
})();
var statearr_27665_27688 = state_27643__$1;
(statearr_27665_27688[(2)] = null);

(statearr_27665_27688[(1)] = (2));


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
});})(c__19204__auto___27674,out))
;
return ((function (switch__19142__auto__,c__19204__auto___27674,out){
return (function() {
var cljs$core$async$state_machine__19143__auto__ = null;
var cljs$core$async$state_machine__19143__auto____0 = (function (){
var statearr_27669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27669[(0)] = cljs$core$async$state_machine__19143__auto__);

(statearr_27669[(1)] = (1));

return statearr_27669;
});
var cljs$core$async$state_machine__19143__auto____1 = (function (state_27643){
while(true){
var ret_value__19144__auto__ = (function (){try{while(true){
var result__19145__auto__ = switch__19142__auto__.call(null,state_27643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19145__auto__;
}
break;
}
}catch (e27670){if((e27670 instanceof Object)){
var ex__19146__auto__ = e27670;
var statearr_27671_27689 = state_27643;
(statearr_27671_27689[(5)] = ex__19146__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27690 = state_27643;
state_27643 = G__27690;
continue;
} else {
return ret_value__19144__auto__;
}
break;
}
});
cljs$core$async$state_machine__19143__auto__ = function(state_27643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19143__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19143__auto____1.call(this,state_27643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19143__auto____0;
cljs$core$async$state_machine__19143__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19143__auto____1;
return cljs$core$async$state_machine__19143__auto__;
})()
;})(switch__19142__auto__,c__19204__auto___27674,out))
})();
var state__19206__auto__ = (function (){var statearr_27672 = f__19205__auto__.call(null);
(statearr_27672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19204__auto___27674);

return statearr_27672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19206__auto__);
});})(c__19204__auto___27674,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map