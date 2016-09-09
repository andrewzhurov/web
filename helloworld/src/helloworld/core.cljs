(ns helloworld.core
  (:require [reagent.core :as r]
            [helloworld.navbar :as bar]))

(defn header [in]
  [:h1 {:style {:color "lightgray"
                :font-family "verdana"}}
   in])

(defn navbarmy []
  [:div {:class "navbar my"}
   [:ul 
    [:li [:a {:href "#home"} "First"]]
    [:li [:a {:href "#second"} "Second"]]
    [:li [:a {:href "#third"} "Third"]]
    [:li [:a {:href "#fourth"} "Fourth"]]]])

(def value (r/atom ""))
(def current-count (r/atom 0))
(defn clicker []
  [:button {:on-click (fn [event]
                   (swap! current-count (fn [old-state]
                                          (inc old-state)))
                   (js/alert @value))}
   @current-count])
(defn input []
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])
(defn listener [atom]
  [:p (str "Now you are:" @atom)])
(defn stylish-listener [atom font]
  [:div {:font-family font} "(B!]= " [listener atom]])
(defn audio-player [src]
  [:audio {:controls "true"} 
   [:source {:src src
             :type "audio/mp3"}]])
(defn image-player [src]
  [:img {:src src}])
(defn app []
  [:div {:style {:color "skyblue"
                 :font-family "courier"}} 
   [navbarmy]
   [header "Big one here!"]
   [:h2 "Not so, but also!"]
   [:h3 "Even more!"]
   [:h4 "Almost none!"]
   [clicker]
   [input]
   [listener value]
   [stylish-listener value "verdana"]
   [audio-player "http://cdn.radio-t.com/rt_podcast499.mp3"]
   [image-player "http://i.imgur.com/qNq6nrB.gif"]
   [:video {:src "http://video.webmfiles.org/big-buck-bunny_trailer.webm"
            :controls "true"
            :width "320"
            :height "240"}]

   [:ol [:h3 "List"]
    (for [x (range 10)
          :when (even? x)]
      [:li (str "Item " x)])]
   [:p (bar/loren 10)]])

(bar/track-scroll)

(r/render [app] (js/document.querySelector "#cljs-target"))
