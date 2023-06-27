const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt from showing
  event.preventDefault();
  // Save the event for later use
  deferredPrompt = event;
  // Display the install button or perform any other UI action
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Check if the deferredPrompt is available
  if (deferredPrompt) {
    // Show the browser install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    // Hide the install button or perform any other UI action
    butInstall.style.display = 'none';
    // Handle the user's choice (e.g., track analytics, display confirmation message)
    console.log('User choice:', result.outcome);
  }
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Perform any actions after the app is successfully installed
  console.log('App installed');
});
