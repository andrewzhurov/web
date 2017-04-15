(ns type-junkie.serv.ws
  (:require [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]

            ))

;; -------------------
;; Sente part

;; Obtain chsk and make a good API
(let [{:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket! (get-sch-adapter) {})]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

;; For ws routing, distinguish messages by id key
(defmulti event :id)

(defmethod event :default [{:as ev-msg}]
  ;; Makes a lot of noise due to WSs
  #_ (log/info "Incoming. Simple message." ev-msg))


;; When received our message, it'll send a response to all the active channels (distinguished by id) 
;; Since it's a server and here could be multiple connections, chsk-send! func
;; requires explicit id to send
(defonce msg-number (atom 0))
(defmethod event :msg/new [{:as ev-msg :keys [?data event client-id uid]}]
  (println "In :msg/new hand")
  #_ (log/info "Incoming. From sente-sample." 
            "Id of client:" client-id
            "Whole message:" ev-msg) 

  (doseq [uidd (:any @connected-uids)]
    (do #_ (log/info "++The message is:" event "I'll send it back!++"
                  "UUIDS: " @connected-uids) 
        (chsk-send! uid event)))) ;; FIXME Add time

(defonce *router (atom nil))
(defn  stop-router! [] (when-let [stop-fn @*router] (stop-fn)))
(defn start-router! []
  #_ (log/info "WS router started!")
  (stop-router!)
  (reset! *router
    (sente/start-chsk-router!
      ch-chsk event)))

;; End of Sente
;; -------------------

