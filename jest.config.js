module.exports = {
    moduleNameMapper: {
        '^@$': '<rootDir>/src',
        '^@/(.*)\\.(?!jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/$1',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        // '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
        '.*\\.(css|less)$': 'identity-obj-proxy',
      },
    globals: {    
      "ts-jest": {
        tsConfig: {
          // allow js in typescript
          allowJs: true,
        },
      },
    },
}
   