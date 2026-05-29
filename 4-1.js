function simulateServerDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received after 2 seconds");
    }, 2000);
  });
}

// Using the Promise
simulateServerDelay().then((message) => {
  console.log(message);
});