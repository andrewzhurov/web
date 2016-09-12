(ns bip.event.handlers
  (:require [rum.core :as rum]
            [bip.event.controls :as ctrl]))

(rum/defc at < rum/reactive rum/static [event-atom present-map]
  (let [event-map (rum/react event-atom)
        at-hour (:hour event-map)
        at-minute (:minute event-map)
        now-hour (:hour present-map)
        now-minute (:minute present-map)]
    [:div.event.at 
     (str "I'll fire at:" at-hour ":" at-minute " and now the time is:" now-hour ":" now-minute)
     (ctrl/edit-mode-button event-atom)
     (when (:editing event-map)
       (ctrl/at event-atom))])) 
