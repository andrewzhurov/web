(ns helloworld.navbar 
  (:require [reagent.core :as r :refer [render atom]]))

(defn loren [reps]
  (apply str (take reps (repeat "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum."))))

(def scrollpos (atom 0))

(defn update-scroll []
  (reset! scrollpos (.-pageYOffset js/window)))

(defn track-scroll []
  (.addEventListener js/window "scroll" update-scroll))

(defn crazyfloat [sp]
  (cond
    (< sp 30) "static"
    :else "fixed"))

(defn navbar []
  [:div {:style {:position (crazyfloat @scrollpos)
                 :background-color "lightgrey"}}
   [:h4 "In bar"]
   [:h4 "In bar too"]
   [:h4 "And I"]
                                        ; components containing navbar items go here
   ])

(defn das-page []
  [:div
    [navbar]
    [:p (loren 10)]])

(track-scroll)

(render [das-page] (.getElementById js/document "app"))
