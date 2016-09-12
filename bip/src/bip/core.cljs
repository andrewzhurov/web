(ns bip.core
  (:require [rum.core :as rum]
            [bip.mixins :as mix]
            [bip.controls :as ctrl]
            [bip.handlers :as hand]))
(defonce events (atom '()))
(def passed-events (atom '()))
(def on-minute  (atom  "50"))


(rum/defc audio []
  [:audio {:controls false :preload "auto" :auto-play true :src "sounds/beep17.mp3"} ])

(rum/defc clock < rum/static [time]
  [:div.clock
   time])
(rum/defc alert < rum/static [on-minute now-minute]
  (when (= on-minute now-minute)
    [:div.alert
     "Time to feel!"
     (audio)
     ]))

(rum/defc timer < rum/static [on-minute]
  (let [time (->  (js/Date.) .toTimeString (clojure.string/split " ") first)
        minute (-> time (clojure.string/split ":") second)]
    [:div.timer
     (clock time)
     (alert on-minute minute)
     ]))
(rum/defc get-time < rum/static [event-map]
  (let [h (:hour event-map)
        m (:minute event-map)]
    [:h1 (str h ":" m)]))
(rum/defc render-events < rum/reactive rum/static [events-atom present-map]
  [:div
   (for [event-atom (rum/react events-atom)]
     [:div.event 
	(ctrl/render-comp event-atom present-map)
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
     (ctrl/new-event-button events)
     #_(hand/at (first @events) present-map)
     (render-events events present-map)]))



(rum/mount (app) 
           (. js/document (getElementById "app")))






















(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
