(ns bip.utils)

(defn now? [time-at time-now]
  (or (= time-at time-now)
      (clojure.string/blank? time-at)))
