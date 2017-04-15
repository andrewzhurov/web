(ns type-junkie.cli.type.components
  (:require [rum.core :as rum]
            [clojure.string :as str]
            [type-junkie.utils :as u]
            [type-junkie.dealer :as d]
            [type-junkie.cli.chat :as chat]
            [type-junkie.cli.components :as comp])
  )

(defonce text-state (atom "Let's begin!"))
(defonce input-state (atom ""))

(rum/defc input-field < rum/reactive [sync-with]
  [:input {:type "text"
           :value (rum/react sync-with) 
           :on-change #(reset! sync-with (-> % .-target .-value))}])


(rum/defc text-comp < rum/reactive []
  [:div
   "T:"
   (rum/react text-state)
   ])
(rum/defc input-comp []
  (input-field input-state))


(rum/defc next-text-button []
  [:button {:on-click (fn [_] (reset! text-state (d/next!)))}
   "Go next!"])
(rum/defc next-text? < rum/reactive []
  [:div (if (str/blank? (rum/react text-state))
          (next-text-button)
          "________")])

(rum/defc logic < rum/reactive []
  (let [in (rum/react input-state)
        text (rum/react text-state)]
    [:text (if (str/starts-with? text in)
             (do (swap! text-state #(str/replace-first % (re-pattern in) ""))
                 (reset! input-state "")
                 "..")
             "!!")]))

