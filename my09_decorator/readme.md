安装

```
npm init -y
npm i typescript ts-node-dev eslint @types/node -D
```

package.json

```
"scripts": {
    "start": "ts-node-dev ./src/index.ts -P tsconfig.json --no-cache",
    "build": "tsc -P tsconfig.json 7& node ./dist/index.js",
    "tslint": "tslint --fix -p tsconfig.json"
}
```

启动

`npm start`
