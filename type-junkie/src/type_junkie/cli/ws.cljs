(ns type-junkie.cli.ws
  (:require [taoensso.sente       :as sente]
            ))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as before
       {:type :auto ; e/o #{:auto :ajax :ws}
        })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )
(defn start-router-with [msg-handler]
  (sente/start-client-chsk-router! ch-chsk msg-handler))

(defn send-message [msg]
  (chsk-send! [:msg/new msg]))


;; FIXME
#_(defonce router
  (sente/start-client-chsk-router! ch-chsk event))

