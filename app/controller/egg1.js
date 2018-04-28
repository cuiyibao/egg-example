'use strict';

const Controller = require('egg').Controller;

class Egg1Controller extends Controller {
  async index() {
    const ctx = this.ctx
    ctx.body = {
      code: 0,
      data: await ctx.service.egg1.find(),
      message: 'success'
    }
    ctx.status = 200;
  }
  async create() {
    const ctx = this.ctx
    let obj = ctx.request.body
    console.log(obj)
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

module.exports = Egg1Controller;
