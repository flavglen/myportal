const ghpages = require('gh-pages');
const { GIT_PAT } = require('./env');
const fs = require('fs');


const files = ['home', 'projects', 'skills', 'timeline'];
files.forEach(async file => {
    await fs.copyFile('build/index.html', `build/${file}.html`, (err) => {
        if (err) throw err;
        console.log(`Copied ${file}`);
    });
})

console.log('******** DEPLOYING ***********');

ghpages.publish('build', {
    repo: `https://${GIT_PAT}@github.com/flavglen/flavglen.github.io.git`,
    branch: 'gh-pages',
  }, (d)=>{
    console.log('******** Deployed ***********', d);
  });