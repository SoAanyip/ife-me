var fs = require('fs')
var chokidar = require('chokidar')
var cssgrace = require('cssgrace')
var postcss = require('postcss');

var src = 'css/temp.css'
console.info('Watching…\nModify the input.css and save.')

chokidar.watch(src, {
  ignored: /[\/\\]\./,
  persistent: true
}).on('all',
  function(event, path, stats) {
    var css = fs.readFileSync(src, 'utf8')
    var output = postcss()
        .use(cssgrace)
        .process(css)
        .css;
    fs.writeFileSync('build/output.css', output)
  })