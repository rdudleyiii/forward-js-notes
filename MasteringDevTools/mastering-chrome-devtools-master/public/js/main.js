if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

console.log("this is a change from sources tab by adding folder to workspace")