(ns type-junkie.cli.type.out 
  (:require [type-junkie.cli.type.components :as tcomp]
            [rum.core :as rum]))

(rum/defc base []
  [:div
   (tcomp/text-comp)
   (tcomp/input-comp)
   (tcomp/logic)
   (tcomp/next-text?)]
)
