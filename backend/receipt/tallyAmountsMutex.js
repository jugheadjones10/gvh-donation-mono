var mutex = Promise.resolve();

exports.appendToMutex = function (promise) {
  mutex = mutex.then(() => promise);
};

exports.awaitMutex = async function () {
  await mutex;
};
