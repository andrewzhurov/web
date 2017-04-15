(ns type-junkie.cli.chat
  (:require [rum.core :as rum :refer-macros [defc defcs]
                              :refer [reactive react]]
            [type-junkie.cli.ws :as cws]))

(defonce *session (atom {:msgs []}))
(defonce *msgs (rum/cursor-in *session [:msgs])) 
(defonce *name (rum/cursor-in *session [:name])) ;; Hackable
(when (empty? @*name) (reset! *name "Anonymous"))
(when (empty? @*msgs) (reset! *msgs [{:text (str "Hello, " @*name ". Show me what you got")
                                      :name "Greetbot"}]))

(defc msg-queue < reactive []
  [:div.msg-queue
   [:ul
    (for [m (react *msgs)]
      [:li
       [:div.msg 
        (:name m)
        [:p]
        (:text m)
        [:p]]])]])

(defcs send-panel < reactive (rum/local "" :msg) [state]
  (let [*msg (:msg state)]
    [:div.send-panel
     [:input {:type "text"
              :value @*msg 
              :on-change #(reset! *msg (-> % .-target .-value))}]
     [:input {:type "button"  
              :value "Send" 
              :on-click #((cws/send-message {:text @*msg
                                             :name @*name})
                          (reset! *msg ""))
              }]
      ]))

(defcs obtain-name < (rum/local "Jack Smith" :new-name) [state]
  (let [*new-name (:new-name state)]
    [:div.obtain-name
     [:input {:type "text"
              :value @*new-name 
              :on-change #(reset! *new-name (-> % .-target .-value))}]
     [:input {:type  "button" 
              :value "Use name" 
              :disabled (clojure.string/blank? @*new-name)
              :on-click #(reset! *name @*new-name)
              }]
     ]))
