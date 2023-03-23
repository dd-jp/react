import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '@site/(.*)$': '<rootDir>/$1',
    '@test-utils$': '<rootDir>/src/test-helper',
  },
  testMatch: ['<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/test-helper/jest.setup.ts'],
  preset: 'ts-jest',
}

export default config
