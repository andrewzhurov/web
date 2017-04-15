(ns type-junkie.cli.handler
  (:require [type-junkie.cli.ws :as cws]
            [type-junkie.cli.chat :as chat]))

(defmulti msg-handler :id)

(defmethod msg-handler :default [{:as ev-msg :keys [event]}]
  (println "Unhandled event: %s" event))

(defmethod msg-handler :chsk/state [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (println "Channel socket successfully established!")
    (println "Channel socket state change:" ?data)))

(defmethod msg-handler :chsk/recv [{:as ev-msg :keys [?data]}]
  (.log js/console (str ev-msg))
  (case (first ?data)
    :msg/new (swap! chat/*msgs conj (second ?data))))
(defmethod msg-handler :msg/new [{:as ev-msg :keys [event]}]
  (.log js/console "In :msg/new hand")
  (swap! chat/*msgs into (second event)))

(defn start-router []
  (cws/start-router-with msg-handler))
