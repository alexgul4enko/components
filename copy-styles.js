const fs = require('fs')
const path = require('path')

// function copyFileSync(source, target) {
//   var targetFile = target
//   if(fs.existsSync(target)) {
//     if(fs.lstatSync(target).isDirectory()) {
//       targetFile = path.join(target, path.basename(source))
//     }
//   }
//   fs.writeFileSync(targetFile, fs.readFileSync(source))
// }

function checkAndCreateFolder(input, output) {
  if(!fs.existsSync(input)) { return false }
  if(!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true })
  }
  return true
}

function copyDir(input, output) {
  fs.readdirSync(input)
    .filter(name => name !== '.DS_Store')
    .map(file => {
      const source = path.join(input, file)
      const target = path.join(output, file)
      if(fs.lstatSync(source).isDirectory()) {
        if(!checkAndCreateFolder(source, target)) { return }
        return copyDir(source, target)
      }
      fs.writeFileSync(path.join(output, file), fs.readFileSync(path.join(input, file)))
    })
}

function copyFolderDers(folders) {
  if(!folders || !Array.isArray(folders) || !folders.length) {}
  folders.map(folder => {
    const output = path.resolve(`dist/${folder}`)
    const input = path.resolve(`lib/${folder}`)
    if(checkAndCreateFolder(input, output)) {
      copyDir(input, output)
    }
  })
}

copyFolderDers(['fonts', 'styles'])
