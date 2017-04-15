(ns type-junkie.serv.repl
  (:use ring.server.standalone
        [ring.middleware file-info file]
        )
  (:require [org.httpkit.server :as kit]
            [ring.middleware.cors :as cors]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [type-junkie.serv.ws :as sws]
            [type-junkie.serv.handler :as hand]))

(defonce server_ (atom nil))

(defn get-handler []
  ;; #'app expands to (var app) so that when we reload our code,
  ;; the server is forced to re-resolve the symbol in the var
  ;; rather than having its own copy. When the root binding
  ;; changes, the server picks it up without having to restart.
  (-> #'hand/app
      ; FIXME
      ; Allows access from outside (crossorigin)
      #_ (cors/wrap-cors :access-control-allow-origin [#".*"]
                      :access-control-allow-methods [:get :put :post :delete]
                      :access-control-allow-credentials [true])
      ; Makes static assets in $PROJECT_DIR/resources/public/ available.
      (wrap-file "resources")
      ; Content-Type, Content-Length, and Last Modified headers for files in body
      (wrap-file-info)))


(defn start-server
  "used for starting the server in development mode from REPL"
  [& [port]]
  (sws/start-router!)
  (let [port (if port (Integer/parseInt port) 3000)]
    (reset! server_ (kit/run-server (get-handler)
                                    {:port port
                                     :auto-reload? true
                                     ;; :async? true
                                     :join? false}))
    
    (println (str "You can view the site at http://localhost:" port))))

(defn stop-server []
  (sws/stop-router!)
  (@server_)
  (reset! server_ nil))

;; TODO Reload server side manually or on change
