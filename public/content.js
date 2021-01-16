document.body.addEventListener('copy', function(e) {
  chrome.runtime.sendMessage('plflmegneaggpkonkifalfcnkbpbaccb', { text: window.getSelection().toString() }, function(res) {});
});
