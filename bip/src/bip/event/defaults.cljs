(ns bip.event.defaults
  (:require [bip.event.handlers :as hand]
            [bip.group.handlers :as rhand]))

(def at {:hour "00" :minute "00" :handler hand/at  :editing true :group :coming})


