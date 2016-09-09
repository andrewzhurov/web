(ns bip.core
  (:require [rum.core :as rum]))

(def on-minute  (atom  "50"))
(defn periodic-refresh [period]
  {:did-mount 
   (fn [state]
     (let [react-comp (:rum/react-component state)
           interval   (js/setInterval #(rum/request-render react-comp) period)]
       (assoc state ::interval interval)))        
   :will-unmount
   (fn [state]
     (js/clearInterval (::interval state)))})

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
(rum/defc controls < rum/reactive [to-follow]
  [:input {:type "text" 
           :value (rum/react to-follow)
           :on-change  #(reset! to-follow (-> % .-target .-value))}])
(rum/defc timer < rum/static (periodic-refresh 20) [on-minute]
  (let [time (->  (js/Date.) .toTimeString (clojure.string/split " ") first)
        minute (-> time (clojure.string/split ":") second)]
    [:div.timer
     (clock time)
     (alert on-minute minute)
     ]))

(rum/defc app < rum/reactive []
  [:div.app 
   (timer (rum/react on-minute))
   (controls on-minute)])



(rum/mount (app) 
           (. js/document (getElementById "app")))






















(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
