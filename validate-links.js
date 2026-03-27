const fs = require('fs');
const path = require('path');
const root = path.resolve('dist');
const htmlFiles = [];
function walk(dir){
  for (const e of fs.readdirSync(dir,{withFileTypes:true})){
    if(e.isDirectory()) walk(path.join(dir,e.name));
    else if(e.isFile() && e.name.endsWith('.html')) htmlFiles.push(path.join(dir,e.name));
  }
}
walk(root);
const errors = [];
for (const file of htmlFiles) {
  const html = fs.readFileSync(file,'utf8');
  const rx = /(?:href|src)="([^"#>]+)"/g;
  let m;
  while ((m = rx.exec(html))) {
    const url = m[1];
    if(/^mailto:|^tel:|^javascript:|^#/i.test(url)) continue;
    if(/^https?:\/\//i.test(url)) continue;
    if(/^\/\//.test(url)) continue;
    if(/^data:/i.test(url)) continue;
    const rel = url.replace(/^\//,'');
    if (rel === '') continue;
    const target = path.join(root, rel);
    if (!fs.existsSync(target)) {
      errors.push({file, url, target});
    }
  }
}
if (errors.length) {
  console.log('Broken links found:', errors.length);
  console.table(errors.slice(0, 100));
  process.exit(1);
} else {
  console.log('No broken internal href/src paths found in dist HTML.');
}
