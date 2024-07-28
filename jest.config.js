module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'vue', 'json'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: [
      '**/tests/unit/**/*.spec.js',
      '**/__tests__/*.{js,jsx,ts,tsx}',
    ],
    testURL: 'http://localhost/',
    transformIgnorePatterns: ['/node_modules/'],
  };
  