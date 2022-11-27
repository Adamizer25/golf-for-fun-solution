import fs from 'fs';
export const fileName = 'logs.txt';
export function clearLogs() {
    fs.writeFile(fileName, "", (err) => { });
}
export function log(...content) {
    console.log(content)
    let date = new Date().toLocaleString()
    let data = content.toString()
    fs.appendFile(fileName, `${date} ${data}\n`, (err) => {
        if (err) throw err
    })
}
