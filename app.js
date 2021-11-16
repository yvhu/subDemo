const Koa = require('koa');
const app = new Koa();
let code = require('./gitSubmoduleTest/code')
app.use(async ctx => {
  ctx.body = code.text;
});
app.listen(3000);