(ns type-junkie.core
  (:require [rum.core :as rum]
            [clojure.string :as str]
            [type-junkie.utils :as u]
            [type-junkie.dealer :as d]
            [type-junkie.cli.chat :as chat]
            [type-junkie.cli.type.out :as tout]
            [type-junkie.cli.handler :as chand])


   )

(rum/defc app < rum/reactive []
  [:div
   (tout/base)
   [:p]
   (chat/msg-queue)
   (chat/send-panel)
   (chat/obtain-name)
   ])


(enable-console-print!)
(rum/mount (app) (. js/document (getElementById "app")))
(chand/start-router)

