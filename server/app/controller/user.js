const BaseController = require("./base");
const createRule = {
  email: { type: "email" },
  nickname: { type: "string" },
  passwd: { type: "string" },
  captcha: { type: "string" },
};

class UserController extends BaseController {
  async login() {}

  async register() {
    const { ctx } = this;
    try {
      // 校验传递的参数
      ctx.validate(createRule);
    } catch (e) {
      return this.error("参数校验失败", -1, e.errors);
    }

    const { email, passwd, captcha, nickname } = ctx.request.body;
    console.log(email, passwd, captcha, nickname);
    if (captcha.toUpperCase() === ctx.session.captcha.toUpperCase()) {
        // 邮箱是不是重复了
      
      } else {
        this.error('验证码错误')
      }
    // this.success({name:'kkb'})
  }

  async verify() {
    // 校验用户名是否存在
  }

  async info() {}
}

module.exports = UserController