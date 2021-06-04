web项目训练营

eworj@qq.com a12312314
eworj@qq.com

MacOS  mongod --config /usr/local/etc/mongod.conf

git commit without husky

set HUSKY=0&&git commit -am ""&&git push

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

## 第4节  14-eggjs规范指定
新建mongodb, kkbhub

`npm install egg-router-group egg-mongoose egg-validate md5 jsonwebtoken --save`

规范
```json
{
  code:0
  data:{
  },
  message:{
  }
}
```
code 0 成功， 其他是失败
-1 是错误 
-666 登录状态过期

## 第5节  15-注册实现-01

app\model\user.js
```js
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema(
    {
      // __v:
      email: { type: String, require: true },
      password: { type: String, require: true },
      nickname: { type: String, require: true },
      avatar: { type: String, require: false, default: "/user.png" },
    },
    { timestamp: true }
  );
  return mongoose.model("User", UserSchema);
};
```


第6节  16-数据入库+mongodb


第7节  17-登录认证

# 第四章 
## 第1节  18-发送邮件验证码
1.用户名密码验证
    1.简单的验证码
    2.token的管理 => 用户中心页面，，发送请求，自动 带上token
2.用户信息
    1.信息的增删改查
    2.头像的上传
 
`npm i nodemailer`

第2节  19-登录验证码认证
第3节  20-axios管理token认证
## 第4节  21-图片上传0.1版本实现

`npm i fs-extra`

# 第五章
## 第1节  22-文件上传0.2版本，拖拽+进度条

div里完成 dragover dragleave drop 事件， e.preventDefault


第2节  23-文件上传-二进制信息确认文件格式0.3
## 第3节  24-文件上传-png和jpg文件类型限制

文件头

## 第4节  25-web-worker计算md5值

`npm i spark-md5`

__webworker使用__

将spark-md5.min 放在 static 下。

webworker 局限，无法在NPM包里。。无法和NPM产生联系

SparkMD5 操作毫秒级时，大颗粒不太合适。尝试使用时间切片完成试下。

## 第5节  26-requestIdleCallback计算文件md5

## 第六章  项目06
### 第1节  27-抽样hash计算
```
      // 布隆过滤器 判断一个数据存在与否
      // 1个G的文件，抽样后5M以内
      // hash一样，文件不一定一样
      // hash不一样，文件一定不一样
```
第2节  28-切片上传
第3节  29-网格进度条
第4节  30-切片上传后端实现
第5节  31-后端文件合并

## 第七章 项目07

第1节  32-秒传功能实现
checkfile请求 计算hash, 检查hash文件存在，uploaded = true, else uploadedList = [xx1,xx2,xx3]

第2节  33-断点续传
第3节  34-异步任务控制

upload时字体加载慢。。可以提前使用一个进行渲染。。

第4节  35-并发数控制实现（头条藐视提）
第5节  36-报错重试+报错次数限制实现