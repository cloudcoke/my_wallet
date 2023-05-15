# Setting

## 프로젝트 생성

```shell
npx create-react-app bitcoin_wallet --template typescript
```

## 패키지 설치

```shell
npm install react-router-dom redux redux-thunk redux-persist react-redux axios
```

[참고](https://velog.io/@yesoryeseul/npm-ERR-Cannot-read-properties-of-null-reading-edgesOut)

```shell
npm i -D styled-components@5.3.10 @types/styled-components
```

## React Typescript Path Alias 설정

[참고](https://leego.tistory.com/entry/React-CRA%EC%97%90%EC%84%9C-Path-alias-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

```shell
npm install @craco/craco tsconfig-paths-webpack-plugin
```

tsconfig.paths.json

설정할 경로 지정

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@pages/*": ["pages/*"],
      "@routes/*": ["routes/*"]
    }
  }
}
```

tsconfig.json

extends 추가

```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "extends": "./tsconfig.paths.json" // 추가
}
```

craco.config.js

craco 설정 파일 생성

```js
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}))
          return webpackConfig
        },
      },
    },
  ],
}
```

package.json

scripts 수정

```json
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  },
```

## Jest Alias 설정

[참고](https://cloudless.blog/post/React%20Typescript%20Jest%20%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%20craco%EB%A5%BC%20%EC%9D%B4%EC%9A%A9%ED%95%9C%20path%20alias%20%EC%84%A4%EC%A0%95)

craco.config.js

plugins 밑에 추가

```js
 jest: {
    configure: {
      moduleNameMapper: { "^@(pages|routes)/(.+)$": "<rootDir>/src/$1/$2" },
    },
  },
```

## Jest Styled Components

```shell
npm install -D jest-styled-components
```

## 패키지 업그레이드

[참고](https://min9nim.github.io/2018/09/npm-command/)

### 패키지 정보 확인

```shell
npm info [패키지명]
```

### 프로젝트에서 사용하고 있는 오래된 패키지 확인

```shell
npm outdated
```

### 패키지 버전 수정

수정 전

```json
{
  "name": "bitcoin_wallet",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@craco/craco": "^7.1.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.28",
    "@types/react": "^18.2.6",
    "@types/react-dom": "^18.2.4",
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.11.1",
    "react-scripts": "5.0.1",
    "redux": "^4.2.1",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.4.2",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  },
  "devDependencies": {
    "@types/styled-components": "^5.1.26",
    "styled-components": "^5.3.10",
    "tsconfig-paths-webpack-plugin": "^4.0.1"
  }
}
```

수정 후

```json
{
  "name": "bitcoin_wallet",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@craco/craco": "^7.1.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/jest": "^29.5.1",
    "@types/node": "^16.18.28",
    "@types/react": "^18.2.6",
    "@types/react-dom": "^18.2.4",
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.11.1",
    "react-scripts": "5.0.1",
    "redux": "^4.2.1",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.4.2",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  },
  "devDependencies": {
    "@types/styled-components": "^5.1.26",
    "styled-components": "^5.3.10",
    "tsconfig-paths-webpack-plugin": "^4.0.1"
  }
}
```
