document.addEventListener('DOMContentLoaded', () => {
    const pickTitleButton = document.getElementById('pick-title');
    const titleDisplay = document.getElementById('title');
  
    pickTitleButton.addEventListener('click', async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const title = tab.title;
      titleDisplay.textContent = title;
    });
  });