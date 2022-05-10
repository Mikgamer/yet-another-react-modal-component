module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: { "\\.css$": "<rootDir>/__mocks__/cssMock.js" },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
}
  