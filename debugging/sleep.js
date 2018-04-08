// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Wait 2 seconds
sleep(2000).then(() => {
  // do the things
});
