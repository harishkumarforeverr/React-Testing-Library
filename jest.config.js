module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^axios$': '<rootDir>/node_modules/axios/index.js',
  },
};
