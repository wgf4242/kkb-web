const md5 = require("md5");
const jwt = require("jsonwebtoken");
const HashSalt = ":Kkoisjf@gos#.123_";
const BaseController = require("./base");

const createRule = {
  email: { type: "email" },
  nickname: { type: "string" },
  passwd: { type: "string" },
  captcha: { type: "string" },
};

class UserController extends BaseController {
  async login() {
    // this.success('token')
    const { ctx, app } = this;
    const { email, captcha, passwd, emailcode } = ctx.request.body;
    if (captcha.toUpperCase() !== ctx.session.captcha.toUpperCase()) {
      return this.error("验证码错误");
    }

    if (emailcode !== ctx.session.emailcode) {
      return this.error("邮箱验证码错误");
    }

    const user = await ctx.model.User.findOne({ email, passwd: md5(passwd + HashSalt) });

    if (!user) {
      return this.error("用户名密码错误");
    }

    // 用户的信息加密成token 返回
    const token = jwt.sign(
      {
        _id: user._id,
        email,
      },
      app.config.jwt.secret,
      {
        expiresIn: "3 days",
        // expiresIn:'1h'
      }
    );
    this.success({ token, email, nickname: user.nickname });
  }

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
      if (await this.checkEmail(email)) {
        this.error("邮箱重复了");
      } else {
        const ret = await this.ctx.model.User.create({
          email,
          nickname,
          passwd: md5(passwd + HashSalt),
        });

        if (ret._id) {
          this.message("注册成功");
        }
      }
    } else {
      this.error("验证码错误");
    }
    // this.success({name:'kkb'})
  }

  async checkEmail(email) {
    const user = await this.ctx.model.User.findOne({ email });
    return user;
  }
  async verify() {
    // 校验用户名是否存在
  }
  async detail() {
    // 只能token怎么获取详情
    const { ctx } = this;
    const user = await this.checkEmail(ctx.state.email);
    this.success(user);
  }

  async info() {
    const { ctx } = this;
    //获取header，解析
    //你不知道是哪个邮件，需要从token里去读取
    // 有的接口需要从token里读取数据，有的不需要从token里
    const { email } = ctx.state;
    const user = await this.checkEmail(email);
    this.success(user);
  }

  async updateInfo() {
    const { ctx } = this;
    const url = ctx.request.body.url;

    await ctx.model.User.updateOne({ _id: ctx.state.userid }, { avatar: url });
    this.success;
  }

  async isFollow() {
    const { ctx } = this;
    const me = await ctx.model.User.findById(ctx.state.userid);
    // 我的follow 字段里,有没有传来这个用户id
    const isFollow = !!me.following.find(id => id.toString() === ctx.params.id);
    this.success({ isFollow });
  }

  async follow() {
    const { ctx } = this;

    const me = await ctx.model.User.findById(ctx.state.userid);
    const isFollow = !!me.following.find(id => id.toString() === ctx.params.id);
    if (!isFollow) {
      me.following.push(ctx.params.id);
      me.save();
      this.message("成功");
    }
    this.success({ isFollow });
  }
  async cancelFollow() {
    const { ctx } = this;

    const me = await ctx.model.User.findById(ctx.state.userid);
    const index= !!me.following.find(id => id.toString()).indexOf(ctx.params.id);
    if (index > -1) {
      me.following.splice(index, 1);
      me.save
      this.message("成功");
    }
  }

  async followers() {
    const { ctx } = this;
    const users = await ctx.model.User.find({following: ctx.params.id})
    this.success(users)
  }
}

module.exports = UserController;
