(ns bip.components
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]
            [bip.event.defaults :as edefs]
            [bip.defaults :as defs]))

(defc audio [path] ;; fix me
  [:audio {:controls true :preload "auto" :auto-play true :src path} ])

(defc clock < rum/static [time]
  [:div.clock
   time])

(defc drop-down [*dd]
  [:select {:on-change (fn [e] (reset! *dd (assoc @*dd :current
                                                       (-> e 
                                                           .-target 
                                                           .-value
                                                           keyword))))}
   (for [val (:all @*dd)]
     [:option {:value (name val)} (name val)])])
(defc new-event-button [*events *dd]
  [:input {:type "button"
           :value "+"
           :on-click (fn [_] (swap! *events
                                    (fn [old-list] (conj old-list 
                                                         (atom ((:current @*dd) edefs/type-vals-map))))))}])

(defcs new-event-comp < (rum/local {:current (first defs/new-event-types)
                                    :all defs/new-event-types} :drop-down-state)
  [state *events]
  (let [*dd (:drop-down-state state)]
    [:div 
     (drop-down *dd)
     (str edefs/type-vals-map)
     (str @*dd ":" ((:current @*dd) edefs/type-vals-map))
     (new-event-button *events *dd)]
    ))
