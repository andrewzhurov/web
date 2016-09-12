(ns bip.handlers
  (:require [rum.core :as rum]))

(rum/defc at < rum/reactive rum/static [event-atom present-map]
  (let [event-map (rum/react event-atom)
        at-hour (:hour event-map)
        at-minute (:minute event-map)
        now-hour (:hour present-map)
        now-minute (:minute present-map)]
    [:div.event.at 
     (str "I'll fire at:" at-hour ":" at-minute " and now the time is:" now-hour ":" now-minute)])) 
