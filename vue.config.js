module.exports ={
    devServer:{
        host:"localhost",
        port:"8080",
        proxy:{
            '/api':{
                target:"/api",
                changeOrigin:true,
                pathRewrite:{
                    "/api":"/api"
                }
            }
        }
    }
}