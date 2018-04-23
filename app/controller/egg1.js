'use strict';

const Controller = require('egg').Controller;

class Egg1Controller extends Controller {
  async index() {
    const ctx = this.ctx
    await ctx.model.Egg1.find().then(function (egg1){
        ctx.body = {
            code: 0,
            data: egg1,
            message: 'success'
        }
        ctx.status = 200;
    })
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

module.exports = Egg1Controller;
