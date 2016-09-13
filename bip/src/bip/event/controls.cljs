(ns bip.event.controls
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]))

(defc field-sync-with < reactive [event-atom sync-key] 
  [:input.sync {:type "text"
                :value (sync-key (react event-atom))
                :on-change (fn [e] 
                            (reset! event-atom 
                                   (assoc @event-atom sync-key 
                                          (-> e .-target .-value))))}])

(defc edit-mode-button [event-atom]
  [:input {:type "button"
           :value "edit"
           :on-click (fn [_]
                       (swap! event-atom (fn [old-map] 
                                           (assoc old-map :editing (not (:editing old-map))))))}])

(defc at < rum/static [at-atom]
  [:div.event.controls
   (for [key [:hour :minute :second]]
     (field-sync-with at-atom key))])
