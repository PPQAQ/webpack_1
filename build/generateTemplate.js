const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const templatePath = path.resolve(__dirname,'../src/view')

function generateTemplate(entry) {
    const keys = Object.keys(entry)
    let files = keys.map(keys => `${keys}.html`)

    files = files.filter(filename => fs.existsSync(path.join(templatePath, filename)))
    return files.map(filename => new HtmlWebpackPlugin({
        template: path.resolve(templatePath, filename),
        filename,
        chunks: [filename.split('.')[0]]
    }))
}

module.exports = generateTemplate