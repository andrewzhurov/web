(ns rum-first.core
  (:require [rum.core :as rum]
            [rum-first.navbar :as bar]))

(enable-console-print!)

(println "This text is printed from src/rum-first/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom 1))
(defonce text-state (atom ""))

(defn render [app]
  (rum/mount (app)
             (. js/document (getElementById "app"))))
#_(rum/defc render-button [app]
  [:button {:on-click #(render app)}
   "RENDER!"])
(rum/defc top < rum/reactive []
  [:h1  (str "Now you are: " (rum/react app-state))])
(rum/defc inc-button [state]
  [:button {:on-click (fn [_] (swap! state inc))}
   "inc"])
(rum/defcs local-state-button < (rum/local 0)
  [state title]
  (let [*count (:rum/local state)]
    [:button
     {:on-click (fn [_] (swap! *count inc))}
     title ": " @*count]))

(rum/defc input-field [sync-with]
  [:input {:type "text"
           :value @sync-with
           :on-change #(reset! sync-with (-> % .-target .-value))}])
(rum/defc text-field < rum/reactive 
  ([sync-with] (text-field sync-with {}))
  ([sync-with style]
   [:div {:style style} 
    "State of the text: " (rum/react text-state)]))

(rum/defc audio-player [src]
  [:audio {:controls "true"} 
   [:source {:src src
             :type "audio/mp3"}]])
(rum/defc image-player [src]
  [:img {:src src}])

(rum/defc base []
  [:div
   (bar/navbar)
   (top)
   #_(render-button base)
   #_[:h1 "ANOTHER"]
   (inc-button app-state)
   (local-state-button)
   (input-field text-state)
   (text-field text-state {:color "gray"} )
   (audio-player "http://cdn.radio-t.com/rt_podcast499.mp3")
   #_(image-player "http://i.imgur.com/qNq6nrB.gif")
   [:video {:src "http://video.webmfiles.org/big-buck-bunny_trailer.webm"
            :controls "true"
            :width "320"
            :height "240"}]
   (repeat 999 "ABRACADABRA\n")])

(bar/track-scroll)
(render base)











(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
