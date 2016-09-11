(ns bip.core
  (:require [rum.core :as rum]
            [bip.mixins :as mix]
            [bip.controls :as ctrl]))
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

(rum/defc timer < rum/static (mix/periodic-refresh 20) [on-minute]
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
(rum/defc render-events < rum/reactive [events-atom]
  [:div
   (for [event-atom (rum/react events-atom)]
     [:div.event 
	(render-comp @event-atom)
])])


(rum/defc app < rum/reactive  []
  #_(let [fresh-data (js/Date.)])
   #_(str fresh-data)
   #_(render-events events)
   #_(ctrl/new-event-button)
   [:div.app 
    (timer (rum/react on-minute))
    #_(ctrl/new-event-button events)
    #_(render-events events)]
)



(rum/mount (app) 
           (. js/document (getElementById "app")))






















(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
