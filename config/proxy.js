
console.log("enter local proxy")
module.exports = {
        "/api": {
          "target": "http://jsonplaceholder.typicode.com/",
          "changeOrigin": true,
          "pathRewrite": { "^/api" : "" }
        }
}
  