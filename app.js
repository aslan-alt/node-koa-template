const Koa = require('koa')
const koaRouter = require('koa-router')
const render = require('koa-art-template')
const app = new Koa()
const path = require('path')
const router = new koaRouter()
//配置 template 模板引擎
render(app,{
    root:path.join(__dirname,'views'),//视图的位置
    extname:'.html',
    debug:process.env.NODE_ENV !== 'production' //是否开启调试模式
})
router.get('/',async (ctx)=>{
    await ctx.render('index')
})
router.get('/news',async (ctx)=>{
    await ctx.render('news',{
        list:['军事','时政','经济','医疗'],
        text:'<h2>这是一个h2标签</h2>',
        number:10
    })
})

// koaRouter.get()
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8080)