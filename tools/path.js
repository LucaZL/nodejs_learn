var path = require('path');

console.log('normalization: ' + path.normalize('/test123/sfdsdfsdf//23khjkxdf/13213132/tab/..'));

console.log('joint path: ' + path.join('/test123', 'sfdsdfsdf', '23khjkxdf/13213132', 'tab', '..'));

console.log('resolve: ' + path.resolve('path.js'));

console.log('ext name: ' + path.extname('path.js'));