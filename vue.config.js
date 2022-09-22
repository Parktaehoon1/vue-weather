const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/page-weather",
  lintOnSave: false, // eslint 자꾸 걸림;;
});
