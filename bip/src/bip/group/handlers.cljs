(ns bip.group.handlers
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]))

(defn- render-one-coming [*event present-map]
  (let [handler (:handler @*event)]
    (handler *event present-map))) 
(defc render-coming < rum/static [coming-events present-map]
  [:div.group.coming
   [:p "MY COMING"]
   (for [*event coming-events]
     [:div.event 
	 (render-one-coming *event present-map)
])])

