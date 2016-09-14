(ns bip.components
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]
            [bip.event.defaults :as edefs]))

(defc audio [path] ;; fix me
  [:audio {:controls false :preload "auto" :auto-play true :src path} ])

(defc clock < rum/static [time]
  [:div.clock
   time])

(defc new-event-button [*events]
  [:input {:type "button"
           :value "+"
           :on-click (fn [_] (swap! *events
                                    (fn [old-list] (conj old-list (atom edefs/at)))))}])
