const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//自动生成入口
const getEntry = function () {
    const entry = {};
    glob.sync("./src/pages/**/*.js").forEach((file) => {
        let name = file.match(/\.\/src\/pages\/(\S+)\/(\S+)\.js/);
        if (name !== null) {
            name = name[1];
            entry[name] = {
                import: file
            };
        }
    })
    return entry
}
//自动引入模板
const getPageTemplate = function () {
    return glob
        .sync('./src/pages/**/*.html')
        .map((file) => {
            return { name: file.match(/\.\/src\/pages\/(\S+)\/(\S+)\.html/)[1], path: file };
        })
        .map(
            (template) => {
                return new HtmlWebpackPlugin({
                    template: template.path,
                    chunks: [template.name.toString()],
                    filename: `pages/${template.name}.html`,
                })
            }
        );
}
getEntry()
module.exports = {
    getEntry,
    getPageTemplate
}