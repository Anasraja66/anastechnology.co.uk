const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.html') || file.endsWith('.json')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src').concat(['./index.html']);
files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Ordered replacements to prevent partial matches issue
    content = content.replace(/Ahdus Technology/gi, 'Anas Technology UK');
    content = content.replace(/ahdustechnology/gi, 'anastechnologyuk');
    content = content.replace(/ahdustech/gi, 'anastechuk');
    content = content.replace(/AHDUS/g, 'ANAS');
    content = content.replace(/Ahdus/g, 'Anas');
    
    if(content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
