web项目训练营

# 第二章 项目02
## 第1节  06-项目搭建
[nuxt](https://zh.nuxtjs.org/)

npx create-nuxt-app front

npm, element, koa ,axios, eslint, jest, ssr

```
mkdir server
cd server
npm init egg --type=simple
```

[eslint](https://eslint.org/docs/rules/semi)
.eslintrc
```json
{
  "extends": "eslint-config-egg",
  "rules": {
    "seim": ["error", "never"]
  }
}
```

npm run lint -- --fix 会自动修复 分号等一。



## 第2节  07-代码规范+husky设置

[husky](https://github.com/typicode/husky)
, 专门做githook

`npm i husky --save-dev`

[commit](https://github.com/commitizen/cz-cli) 校验工具

```
npm install -g commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact


git add .
git cz
```
## 第3节  08-sessin和jwt架构介绍

点播： 08-sessin和jwt架构介绍
看点播

## 第4节  09-登录验证码功能

点播： 09-登录验证码功能
看点播

## 第5节  10-图片验证码实现

点播： 10-图片验证码实现
