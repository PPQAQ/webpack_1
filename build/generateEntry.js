const fs = require('fs')
const path = require('path')

const jsPath = path.join(__dirname, '../src/js')

function generateEntry() {
    
    let jsFiles = fs.readdirSync(jsPath)

    jsFiles = jsFiles.filter(filename => {
        return /\.js$/.test(filename)
    })

    return jsFiles.reduce((res, filename) => {
        const [point] = filename.split('.')
        res[point] = path.join(jsPath,filename);
        return res
    }, {})
}

module.exports = generateEntry
