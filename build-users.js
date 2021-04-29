const fs = require('fs-extra');
const concat = require('concat');


const build = async () => {
  const files = [
    './dist/apps/users-widget/runtime.js',
    './dist/apps/users-widget/polyfills.js',
    './dist/apps/users-widget/main.js'
  ];

  await concat(files, 'html/wctest-users.js');
}

build();


