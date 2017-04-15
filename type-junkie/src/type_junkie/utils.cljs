(ns type-junkie.utils)

(def emoji-codes (range 128516 128592))
(defn rand-emoji-number []
  (rand-nth emoji-codes))
