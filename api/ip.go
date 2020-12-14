package handler

import (
	"fmt"
	"net/http"
	"strings"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	var ipStr string
	ipStr = r.Header.Get("X-Real-Ip")

	if ipStr == "" {
		ipArr := strings.Split(r.Header.Get("X-Forwarded-For"), ", ")
		if len(ipArr) > 0 {
			ipStr = ipArr[0]
		}
	}

	if ipStr == "" {
		ipStr = r.RemoteAddr
	}

	if ipStr == "" {
		ipStr = "0.0.0.0"
	}

	w.Header().Add("Content-Type", "text/plain")
	fmt.Fprintf(w, ipStr)
}
