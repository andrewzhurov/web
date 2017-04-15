(ns bip.render
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]))


(defc render-base < rum/static reactive [*events state-handlers present-map]
  
  (let [grouped (group-by #(:group @%) (react *events))]
    [:div 
     (for [[group-key ghand] state-handlers]
       (ghand (group-key grouped) present-map))
     #_[:p (str "GROUPED: " grouped)]])
  )

