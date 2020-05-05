"use strict";
if ('WebSocket' in window) {
  (function () {
    const protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    const address = protocol + window.location.host +'/skeleton/autoload';
    const socket = new WebSocket(address);
    socket.onopen = ()=> {
      socket.send("try autoload !");
    }
    socket.onmessage = async  function (result) {
      if (result.data != 'reloadFull' && result.data != 'reloadCss' ) {
          console.log(result.data)
      }
      if (result.data == 'reloadFull') {
        window.location.reload();
      } else if (result.data == 'reloadCss') {
        let sheets = [].slice.call(document.getElementsByTagName("link"));
        let head = document.getElementsByTagName("head")[0];
        for (let i = 0; i < sheets.length; ++i) {
          let elem = sheets[i];
          head.removeChild(elem);
          let rel = elem.rel;
          if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
            let url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
            elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
          }
          head.appendChild(elem);
        }
      }
    };
    socket.onclose =  async function(err) {
      console.log("Server was closed \nTrying reload resources");
      //window.location.reload();
    }
    socket.onerror = function (msg) {
      console.log('[HMR] Autoload wass error\nTrying reload resources');
      window.location.reload();
    }
  })();
  console.log('[HMR] Prepare auto loader');
}
