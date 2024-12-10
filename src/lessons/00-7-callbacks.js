function customSetTimeout(callback, delay) {
  // Pass the callback function and delay to the standard setTimeout function
setTimeout(callback, delay)
}

function delayedMessage() {
  console.log("This message is delayed by 1 second.");
}

// Call customeSetTimeout in a way that executes the console.log in delayedMessage after 1 second (1000 ms)
customSetTimeout(delayedMessage, 1000);