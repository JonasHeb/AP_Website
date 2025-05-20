window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
document.addEventListener("DOMContentLoaded", event => {
   // we can move only if we are not in a browser's tab
   isBrowser = matchMedia("(display-mode: browser)").matches;
   if (!isBrowser) {
      window.moveTo(0, 0);
      window.resizeTo(1366, 1024);
   }
});

