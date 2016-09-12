(ns temp.controls
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]
	    ))
(def def-state {:at {:hour "00" :minute "00"  :editing true}})

(defn render-comp [info date]
  (let [handler (:handler info)]
    (handler info date))) 

(defc field-sync-with [event-atom sync-key]
  [:input.sync {:type "text"
                :value ((react event-atom) sync-key)
                :on-click (fn [e] 
                            (reset! event-atom 
                                    (assoc event-atom sync-key
                                           (-> e .-target .-value))))}])



(defc new-event-button [events-atom]
  [:input {:type "button"
           :value "+"
           :on-click (fn [_] (swap! events-atom
                                     (fn [old] (conj old (:at def-state)))))}])
