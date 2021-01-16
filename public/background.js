let history = [];
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let text = request.text && request.text.trim();
  if (text) {
    const clipHistory = localStorage.getItem('clipHistory');
    if (clipHistory) {
      history = [...JSON.parse(clipHistory)];
      const existingIndex = history.indexOf(text);
      if (existingIndex > 0) history.splice(existingIndex, 1);
      history.unshift(text);
    } else {
      history.push(text);
    }
    localStorage.setItem('clipHistory', JSON.stringify(history));
  }
});
