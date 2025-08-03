const fs = require('fs')
const path = require('path')
const {JSDOM} = require('jsdom')

const outputPath = './out'

function optimizeHtml(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err)
      return
    }

    const dom = new JSDOM(data)
    const document = dom.window.document

    const body = document.querySelector('body')

    // Remove preload js links

    document
      .querySelectorAll('link[rel="preload"][href$=".js"]')
      .forEach(link => {
        link.remove()
      })

    // Move and defer js scripts
    Array.from(document.querySelectorAll('script'))
      .filter(script => {
        const src = script.getAttribute('src')
        return src && src.endsWith('.js')
      })
      .forEach(script => {
        script.parentNode.removeChild(script)
        body.appendChild(script)

        if (!script.hasAttribute('defer')) {
          script.setAttribute('defer', '')
          if (script.hasAttribute('async')) {
            script.removeAttribute('async')
          }
        }
      })

    const modifiedHtml = dom.serialize()

    fs.writeFile(filePath, modifiedHtml, 'utf8', err => {
      if (err) {
        console.error(`Error rewriting ${filePath}:`, err)
        return
      }
      console.log(`Successfully modified `, filePath)
    })
  })
}

fs.readdir(outputPath, (err, files) => {
  if (err) {
    console.error(`Error reading output directory:`, err)
    return
  }

  files.forEach(file => {
    if (file.endsWith('.html')) {
      const filePath = path.join(outputPath, file)
      optimizeHtml(filePath)
    }
  })
})
