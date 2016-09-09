(ns rum-first.navbar
  (:require [rum.core :as rum]))

(def chds [:ul 
                [:li [:a {:href "#home"} "First"]]
                [:li [:a {:href "#second"} "Second"]]
                [:li [:a {:href "#third"} "Third"]]
                [:li [:a {:href "#fourth"} "Fourth"]]]) ;; :/
(def scrollpos (atom 0))

(defn update-scroll []
  (reset! scrollpos (.-pageYOffset js/window)))

(defn track-scroll []
  (.addEventListener js/window "scroll" update-scroll))

(defn crazyfloat [sp]
  (cond
    (< sp 30) "static"
    :else "fixed"))

(rum/defcs navbar < rum/reactive []
  [:div {:style {:position (crazyfloat (rum/react scrollpos))
                 :width "100%"
                 }}
   chds])
