const fse = require('fs-extra');

fse.emptyDirSync('dir1');
fse.ensureFileSync('dir1/test.js');
fse.emptyDirSync('dir2');
fse.moveSync('dir1/test.js', 'dir2/test.js');
fse.emptyDirSync('dir3');
fse.copySync('dir2/test.js', 'dir3/test.js');
fse.removeSync('dir2/test.js');
fse.removeSync('dir3/test.js');
fse.removeSync('dir1');
fse.removeSync('dir2');
fse.removeSync('dir3');