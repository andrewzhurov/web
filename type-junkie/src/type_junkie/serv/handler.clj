(ns type-junkie.serv.handler
  (:use ring.server.standalone
        )
  (:require [compojure.core :refer [GET defroutes POST]]
            [compojure.route :refer [not-found resources]]
            [ring.util.response :as resp]

            [hiccup.page :refer [include-js include-css html5]]
            
            [type-junkie.serv.ws :as sws]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))


(defn loading-page
  [req]
  (html5
    [:body {:class "body-container"}
     [:h3 "Heavy app is loading"]

     ;; include just index.html
     (include-js "js/compiled/type_junkie.js")]))



(defroutes routes
           (GET "/" req (resp/resource-response "index.html" {:root
                                                              "public"}))
           (POST "/api/v1/close-session" [] (-> (resp/response "Session closed")
                                                (assoc :session nil)))

           (GET  "/chsk" req (sws/ring-ajax-get-or-ws-handshake req))
           (resources "/")
           (not-found "Not Found"))

(def app (->
           #'routes
           (wrap-defaults site-defaults)



           ))

