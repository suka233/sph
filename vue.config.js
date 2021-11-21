const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports={
    lintOnSave:false,
    devServer:{
      proxy: {
          "/api":{
              target:"http://127.0.0.1:8888"
          }
      }
    },
    configureWebpack:{
        resolve:{
            alias:{
                http:resolve('src/http'),
                pages:resolve("src/pages"),
                router:resolve("src/router"),
                routes:resolve("src/routes"),
                store:resolve("src/store"),
                components:resolve("src/components"),
                mock:resolve("src/mock"),
                common:resolve("src/common")
            }
        }
    }
}