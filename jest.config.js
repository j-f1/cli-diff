module.exports = {
  coverageDirectory: 'coverage',
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  testEnvironment: 'node',
  testMatch: ['**/tests/*.ts'],
  preset: 'ts-jest',
}
