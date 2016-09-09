(ns type-junkie.core
  (:require [rum.core :as rum]
            [clojure.string :as str]
            [type-junkie.utils :as u]
            [type-junkie.dealer :as d])
  )

(enable-console-print!)
(defn render [app]
  (rum/mount (app) (. js/document (getElementById "app"))))

(defonce text-state (atom "Let's begin!"))
(defonce input-state (atom ""))
(rum/defc next-text-button []
  [:button {:on-click (fn [_] (reset! text-state (d/next!)))}
   "Go next!"])
(rum/defc next-text? < rum/reactive []
  [:div (if (str/blank? (rum/react text-state))
          (next-text-button)
          "________")])
(rum/defc input-field < rum/reactive [sync-with]
  [:input {:type "text"
           :value (rum/react sync-with) 
           :on-change #(reset! sync-with (-> % .-target .-value))}])
(rum/defc text-field < rum/reactive 
  ([sync-with] (text-field sync-with {}))
  ([sync-with style]
   [:div {:style style} 
    "State of the text: " (rum/react sync-with)]))


(defn emoji [] 
  (goog.string/format "%c" (u/rand-emoji-number)))

(rum/defc logic < rum/reactive []
  (let [in (rum/react input-state)
        text (rum/react text-state)]
    [:text (if (str/starts-with? text in)
            (do (swap! text-state #(str/replace-first % (re-pattern in) ""))
                (reset! input-state "")
                 ".. ")
             "!! ")]))

(rum/defc app < rum/reactive []
  [:div
   "T:" 
   [:p]
   (rum/react text-state)
   [:p]
   (input-field input-state)
   [:p]
   (text-field input-state)
   [:p]
   (logic)
   (next-text?)
   ])
(next-text?)
(render app)

















(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
