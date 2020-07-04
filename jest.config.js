module.exports = {
  preset: '@testing-library/react-native',
  testMatch: ['**/__tests__/**/*.test.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules',
  ],
  coverageDirectory: '__tests__/coverage',
};
