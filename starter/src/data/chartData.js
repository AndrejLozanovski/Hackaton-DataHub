const productPrices = {
  January: {
    ...Array.from({ length: 31 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  February: {
    ...Array.from({ length: 28 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  March: {
    ...Array.from({ length: 31 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  April: {
    ...Array.from({ length: 30 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  May: {
    ...Array.from({ length: 31 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  June: {
    ...Array.from({ length: 30 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  July: {
    ...Array.from({ length: 31 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  August: {
    ...Array.from({ length: 31 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  September: {
    ...Array.from({ length: 30 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  October: {
    ...Array.from({ length: 31 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  November: {
    ...Array.from({ length: 30 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
  December: {
    ...Array.from({ length: 31 }, (_, i) => ({
      [i + 1]: Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500,
    })).reduce((a, b) => Object.assign(a, b), {}),
  },
};
