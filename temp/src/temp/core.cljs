(ns temp.core
  (:require [rum.core :as rum]
            [temp.controls :as ctrl]))

(enable-console-print!)

(println "This text is printed from src/temp/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload
(defn periodic-refresh [period]
  {:did-mount 
   (fn [state]
     (let [react-comp (:rum/react-component state)
           interval   (js/setInterval #(rum/request-render react-comp) period)]
       (assoc state ::interval interval)))        
   :will-unmount
   (fn [state]
     (js/clearInterval (::interval state)))})
(defonce app-state (atom {:text "Hello world!"}))
(rum/defc clock < rum/static [time]
  [:div (str time)])
(rum/defc hello-world < (periodic-refresh 20) []
    [:h1 (str (js/Date.) "________")]) 
(rum/mount (hello-world)
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
