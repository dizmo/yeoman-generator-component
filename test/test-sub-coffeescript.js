const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const { join } = require('path');

describe('generator-component:sub-coffeescript', function () {
    const generator = join(__dirname, '../generators/app');
    it('yo @dizmo/component --coffeescript', () => {
        return helpers.run(generator).withOptions({
            'author': 'Dizmo Developer',
            'coffeescript': true,
            'email': 'developer@dizmo.com',
            'url': 'https://www.dizmo.com/developer'
        }).then(() => {
            assert.file([
                'my-component/babel.config.js',
                'my-component/cli',
                'my-component/cli/run-build.js',
                'my-component/cli/run-clean.js',
                'my-component/cli/run-docs.js',
                'my-component/cli/run-lint.js',
                'my-component/cli/run-prepack.js',
                'my-component/cli/run-test.js',
                'my-component/cli/run-utils.js',
                'my-component/coffeelint.json',
                'my-component/docs/.gitignore',
                'my-component/dist',
                'my-component/dist/.gitignore',
                'my-component/dist/.npmignore',
                'my-component/jsdoc.json',
                'my-component/lib',
                'my-component/lib/index.coffee',
                'my-component/lib/styles',
                'my-component/lib/styles/styles.scss',
                'my-component/LICENSE',
                'my-component/.npmignore',
                'my-component/package.json',
                'my-component/README.md',
                'my-component/test',
                'my-component/test/test.coffee',
                'my-component/.travis.yml',
                'my-component/webpack.config.js',
                'my-component/.yo-rc.json'
            ]);
            assert.jsonFileContent('my-component/package.json', {
                'author': {
                    'name': 'Dizmo Developer',
                    'email': 'developer@dizmo.com',
                    'url': 'https://www.dizmo.com/developer'
                },
                'contributors': [
                    {
                        'name': 'Dizmo Developer',
                        'email': 'developer@dizmo.com',
                        'url': 'https://www.dizmo.com/developer'
                    }
                ],
                'dependencies': {},
                'description': 'web component',
                'devDependencies': {
                    '@babel/cli': '^7.15.4',
                    '@babel/core': '^7.15.5',
                    '@babel/plugin-transform-runtime': '^7.15.0',
                    '@babel/preset-env': '^7.15.6',
                    'chai': '^4.3.4',
                    'coffeelint': '2.1.0',
                    'coffeescript': '^2.5.1',
                    'coveralls': '^3.1.1',
                    'css-loader': '^6.2.0',
                    'fs-extra': '^10.0.0',
                    'ignore-styles': '^5.0.1',
                    'jsdoc': '^3.6.7',
                    'jsdom': '17.0.0',
                    'jsdom-global': '3.0.2',
                    'minami': '^1.2.3',
                    'mocha': '^9.1.1',
                    'nyc': '^15.1.0',
                    'sass': '^1.40.1',
                    'sass-loader': '^12.1.0',
                    'source-map-loader': '^3.0.0',
                    'style-loader': '^3.2.1',
                    'tmp': '^0.2.1',
                    'webpack': '^5.52.1',
                    'webpack-cli': '^4.8.0',
                    'yargs': '^17.1.1'
                },
                'files': [
                    'dist/lib'
                ],
                'keywords': [
                    'component', 'module'
                ],
                'license': 'ISC',
                'main': 'dist/lib/index.js',
                'name': '@dizmo/my-component',
                'repository': {
                    'type': 'git',
                    'url': ''
                },
                'scripts': {
                    'build': 'node ./cli/run-build.js',
                    'clean': 'node ./cli/run-clean.js',
                    'cover': 'node ./cli/run-test.js --cover',
                    'docs': 'node ./cli/run-docs.js',
                    'lint': 'node ./cli/run-lint.js',
                    'prepack': 'node ./cli/run-prepack.js',
                    'test': 'node ./cli/run-test.js'
                },
                'version': '1.0.0'
            });
        });
    });
    it('yo @dizmo/component --git --coffeescript', () => {
        return helpers.run(generator).withOptions({
            'author': 'Dizmo Developer',
            'email': 'developer@dizmo.com',
            'git': true
        }).then(() => {
            assert.file([
                'my-component.git/.gitignore'
            ]);
            assert.noFile([
                'my-component.git/.npmignore'
            ]);
        });
    });
});
