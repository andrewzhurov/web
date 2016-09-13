(ns bip.core
  (:require [rum.core :as rum]
            [bip.mixins :as mix]
            [bip.event.controls :as ctrl]
            [bip.event.handlers :as hand]
            [bip.components :as comp]))
(defonce events (atom '()))
(def passed-events (atom '()))


(defn render-comp [event-atom present-map]
  (let [handler (:handler @event-atom)]
    (handler event-atom present-map)))
(rum/defc render-events < rum/reactive rum/static [events-atom present-map]
  [:div
   (for [event-atom (rum/react events-atom)]
     [:div.event 
	(render-comp event-atom present-map)
])])


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
     (comp/new-event-button events)
     (render-events events present-map)]))
(def at (atom 0))
#_(rum/defc app < rum/reactive []
  [:div [:input {:type :text
                 :value (rum/react at)
                 :on-change (fn [e] (reset! at (-> e .-target .-value)))}
         ]
   (rum/react at)]
  )


(rum/mount (app) 
           (. js/document (getElementById "app")))






















(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
