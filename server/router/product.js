const productController=require('../controller/Product')


async function productRouter(fastify,_,done){
    fastify.post('/product/create',productController.create)
    fastify.get('/product/new',productController.ProductNew)
    fastify.get('/product/:id',productController.getOne)
    fastify.get('/product/category/:id',productController.getByCategoryId)
    fastify.get('/product',productController.findProduct)
    fastify.get('/product/productByAllCategory',productController.ProductByCategory)
    fastify.get('/product/delete/:id',productController.ProductByCategory)
    // fastify.get('/product/getAll',productController.getAll)



    done()
}

module.exports=productRouter