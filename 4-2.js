function simulateServerDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received after 2 seconds");
    }, 2000);
  });
}

// Using async/await
async function getData() {
  const message = await simulateServerDelay();
  console.log(message);
}

getData();
