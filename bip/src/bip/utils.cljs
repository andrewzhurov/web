(ns bip.utils
  (:require [cljs.test :as test :refer-macros [deftest testing is run-tests]]))

(defn now? [time-at time-now]
  (->> (map (fn [at-part now-part]
             (or (= at-part now-part)
                 (clojure.string/blank? at-part))) 
           time-at time-now)
       (remove identity)
       empty?))



(deftest utils-test
  (testing "now? correctness"
    (is (= (now? ["12" "00"] ["12" "01"]) false))
    (is (= (now? ["12" ""] ["12" "01"]) true))
    (is (= (now? ["" "50"] ["09" "50"]) true))
    (is (= (now? ["09" "50"] ["09" "50"]) true))))

(run-tests)

