module.exports = {
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**' // nao cobrir essa pasta
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.ts$': 'ts-jest'
  },

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
