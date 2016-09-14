(ns bip.event.handlers
  (:require [rum.core :as rum]
            [bip.event.controls :as ctrl]
            [bip.utils :as u]))

(rum/defc at < rum/reactive rum/static [*event present-map]
  (let [event-map (rum/react *event)
        at-hour (:hour event-map)
        at-minute (:minute event-map)
        now-hour (:hour present-map)
        now-minute (:minute present-map)]
    [:div.event.at
     #_(if (u/now? [at-hour at-minute] [now-hour now-minute]) "Sing with m!")
     (str "I'll fire at:" at-hour ":" at-minute " and now the time is:" now-hour ":" now-minute)
     (ctrl/edit-mode-button *event)
     (when (:editing event-map)
       (ctrl/at *event))])) 
