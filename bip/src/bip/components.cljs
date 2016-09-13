(ns bip.components
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]
            [bip.event.defaults :as defs]))

(defc audio [path] ;; fix me
  [:audio {:controls false :preload "auto" :auto-play true :src path} ])

(defc clock < rum/static [time]
  [:div.clock
   time])

(defc new-event-button [events-atom]
  [:input {:type "button"
           :value "+"
           :on-click (fn [_] (swap! events-atom
                                    (fn [old] (conj old (atom defs/at)))))}])
