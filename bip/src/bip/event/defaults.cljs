(ns bip.event.defaults
  (:require [bip.event.handlers :as hand]
            [bip.group.handlers :as rhand]))

(def type-vals-map {:at {:hour "00" :minute "00" :handler hand/at :editing true :group :coming}
                    :bip {:hour "" :minute "50" :second "" :handler hand/bip :editing false :group :coming}})


