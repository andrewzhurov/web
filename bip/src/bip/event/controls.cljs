(ns bip.event.controls
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]))

(defc field-sync-with < reactive rum/static [event-atom sync-key]
  (let [event-map (react event-atom)] 
    [:input.sync {:type "text"
                  :value (sync-key event-atom)
                  :on-click (fn [e] 
                              (reset! event-atom 
                                      (assoc event-map sync-key
                                             (-> e .-target .-value))))}]))

(defc edit-mode-button [event-atom]
  [:input {:type "button"
           :value "edit"
           :on-click (fn [_]
                       (swap! event-atom (fn [old-map] 
                                           (assoc old-map :editing (not (:editing old-map))))))}])

(defc at [at-atom]
  [:div.event.controls
   (for [key [:hour ]]
     (field-sync-with at-atom key))])

 




