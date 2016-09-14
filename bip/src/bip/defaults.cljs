(ns bip.defaults
  (:require [bip.group.handlers :as rhand]))
(def new-event-types '(:at :bip :up))
(def app-alarm {:coming rhand/render-coming})
