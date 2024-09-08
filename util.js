function getRandomValue(array) {
  return (random = array[Math.floor(Math.random() * array.length)]);
}

function doSomeHeavyTask() {
  const ms = getRandomValue([1000, 2000, 3000, 4000, 5000]);
  const throwError = getRandomValue([1, 2, 3, 4, 5, 6, 7, 8]) === 8;
  if (throwError) {
    const error = getRandomValue([
      "Internal Server Error",
      "Bad Gateway",
      "Service Unavailable",
      "Gateway Timeout",
      "HTTP Version Not Supported",
    ]);
    throw new Error(error);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

module.exports = { doSomeHeavyTask };
