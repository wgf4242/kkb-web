web项目训练营

# 第二章 项目02
## 第1节  06-项目搭建
[nuxt](https://zh.nuxtjs.org/)

1. npx create-nuxt-app front

npm, element, koa ,axios, eslint, jest, ssr

2.
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

更严格的验证 validate-commit-message

## 第3节  08-sessin和jwt架构介绍

1. __session__

注册登录功能必备
```
/register
/login
/checkuser, verify

/sendemail 后端生成字符串
/sendmessage 手机号发手机 
/captcha 图形验证 返回前端图片
```
校验成功才能登录。

后端  session => setcookie

前端  浏览器收到setcookie 保存到 cookie

session server 来做。用redis来保存读取。

缺点，不好做跨域处理。 

2. __jwt__

json web token

node 用户信息过期 => token

browser localstorage token,  
   axios勾子  token=>header

3. __OAuth__

4. jest 自动化测试
先假数据，测试，再清空

## 第4节  09-登录验证码功能

eslint怎样关闭
```
nuxt.configj.js
  buildModules: [
    // '@nuxtjs/eslint-module'
  ],
```

stylus-loader版本不要太高

```
npm install stylus --save
npm install stylus-loader@3.0.2  --save-dev
```

https://github.com/produck/svg-captcha

npm install --save svg-captcha


### proxy代理设置

nuxt.config.js

```js
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    "/api/": {
      target: 'http://localhost:7001',
      secure: false,
      pathRewrite: {
          '^/api': ""
      }
    }
```

## 第5节  10-图片验证码实现




# 第三章 项目03
## 第1节  11-注册表单
## 第2节  12-注册功能实现
## 第3节  13-axios配置
nuxt.config.js

```js
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@plugins/axios'
  ],
```
新建mongodb

第4节  14-eggjs规范指定


第5节  15-注册实现-01


第6节  16-数据入库+mongodb


第7节  17-登录认证