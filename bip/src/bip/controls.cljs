(ns bip.controls
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]))
(def fields {:at [:hour :minute]})
(defn def-event [] (atom {:hour "00" :minute "00" :type :at :editing true}))
(defc sync-with [event-atom sync-key]
  [:input.sync {:type "text"
                :value ((react event-atom) sync-key)
                :on-click (fn [e] 
                            (reset! event-atom 
                                    (assoc event-atom sync-key
                                           (-> e .-target .-value))))}])
(defc event-controls [event-atom]
  (case (:type @event-atom)
    :at [:div.controls.at
         (for [key (:at fields)]
           (sync-with event-atom key))]))


(defc new-event-button [events-atom]
  [:input {:type "button"
           :value "+"
           :on-click (fn [_] (swap! events-atom
                                     (fn [old] (conj old (def-event)))))}])
