(ns bip.core
  (:require [rum.core :as rum]
            [bip.mixins :as mix]
            [bip.event.controls :as ctrl]
            [bip.event.handlers :as hand]
            [bip.components :as comp]
            [bip.render :as rend]
            [bip.defaults :as defs]))
(defonce *events (atom '()))

(rum/defc app < (mix/periodic-refresh 20)  []
  (let [js-date (js/Date.)
        time-str (.toTimeString js-date)
        present-keys [:weekday :month :day :year :hour :minute :second :timezone :region]
        present-vals (-> (js/Date.) str (clojure.string/split #"[ :]"))
        present-map (zipmap present-keys present-vals)]
    [:div.app
     (str js-date) "----" time-str
     [:p (str present-map)]
     (comp/clock (str (:hour present-map) ":" (:minute present-map) ":" (:second present-map)))
     (comp/new-event-comp *events)
     (rend/render-base *events defs/app-alarm present-map)]))


(rum/mount (app) 
           (. js/document (getElementById "app")))






















(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
