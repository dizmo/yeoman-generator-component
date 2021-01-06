const { arg, npm, npx } = require('./run-utils');
const { exit } = require('process');

const styles = () => require('fs-extra').copy(
    'lib/styles', 'dist/lib/styles'
).then(() => npx('sass',
    'dist/lib/styles/styles.scss',
    'dist/lib/styles/styles.css',
    '--style=compressed'
));
const script = () => npx('tsc').then(() => npx('babel',
    '--source-maps=true', '--verbose',
    '--out-dir', 'dist', 'dist'
));
if (require.main === module) {
    let p = npm('install').then(() => {
        p = arg('lint')(true) ? p.then(() => require('./run-lint')()) : p;
        p = arg('clean')(true) ? p.then(() => require('./run-clean')()) : p;
        p = p.then(styles).then(script);
        p = arg('prepack')(false) ? p.then(() => require('./run-prepack')()) : p;
        p = p.catch(exit);
    });
}
module.exports = () => styles().then(script);
