(ns bip.mixins
  (:require [rum.core :as rum]))

(defn periodic-refresh [period]
  {:did-mount 
   (fn [state]
     (let [react-comp (:rum/react-component state)
           interval   (js/setInterval #(rum/request-render react-comp) period)]
       (assoc state ::interval interval)))        
   :will-unmount
   (fn [state]
     (js/clearInterval (::interval state)))})
