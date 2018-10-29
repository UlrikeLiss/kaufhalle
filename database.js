
const fs = require('fs')

async function save(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./data.json', JSON.stringify(data), (err, file) => {
            if (err) return reject(err)
            resolve()
        })
    })
}
    
async function load(dbPath) {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)
            const data = JSON.parse(file)
            resolve(data)
       })
    })
}
    
module.exports = {
    save,
    load
}
