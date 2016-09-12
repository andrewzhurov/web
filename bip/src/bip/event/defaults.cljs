(ns bip.event.defaults
  (:require [bip.event.handlers :as hand]))

(def at {:hour "00" :minute "00" :handler hand/at  :editing true})
