'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '<h1>egg框架</h1>';
  }
  async create() {
    const ctx = this.ctx
    let obj = ctx.request.body
    let tmp = new ctx.model.Egg1({
      name: obj.name,
      phone: obj.phone
    })
    await tmp.save().then(function (err, egg1) {
      ctx.body = {
        code: 0,
        data: obj,
        message: 'success'
      }
      ctx.status = 200;
    })
  }
}

module.exports = HomeController;
