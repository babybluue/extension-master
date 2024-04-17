const button = document.querySelector('.content button')
button.addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
  console.log(tabs)
  chrome.tabs.sendMessage(tabs[0].id, 'start')
})
