const getPromise = () => {
  return {
    getPromise1: (auth) => {
      return new Promise((resolve, reject) => {
        if (auth) {
          setTimeout(() => {
            resolve({ data: "Data from Promise 1" });
          }, 500);
        } else {
          setTimeout(() => {
            reject(new Error("Error from Promise 1"));
          }, 500);
        }
      });
    },
    getPromise2: (auth) => {
      return new Promise((resolve, reject) => {
        if (auth) {
          setTimeout(() => {
            resolve({ data: "Data from Promise 2" });
          }, 3000);
        } else {
          setTimeout(() => {
            reject(new Error("Error from Promise 2"));
          }, 3000);
        }
      });
    },
    getPromise3: (auth) => {
      return new Promise((resolve, reject) => {
        if (auth) {
          setTimeout(() => {
            resolve({ data: "Data from Promise 3" });
          }, 4000);
        } else {
          setTimeout(() => {
            reject(new Error("Error from Promise 3"));
          }, 4000);
        }
      });
    },
  };
};
export default getPromise;
