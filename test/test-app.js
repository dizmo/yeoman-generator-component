const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const { join } = require('path');

describe('generator-component:app', function () {
    const generator = join(__dirname, '../generators/app');
    it('yo @dizmo/component', () => {
        return helpers.run(generator).withOptions({
            'author': 'Dizmo Developer',
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
                'my-component/docs/.gitignore',
                'my-component/dist',
                'my-component/dist/.gitignore',
                'my-component/dist/.npmignore',
                'my-component/.eslintrc.json',
                'my-component/jsdoc.json',
                'my-component/lib',
                'my-component/lib/index.js',
                'my-component/lib/styles',
                'my-component/lib/styles/styles.scss',
                'my-component/LICENSE',
                'my-component/.npmignore',
                'my-component/package.json',
                'my-component/README.md',
                'my-component/test',
                'my-component/test/test.js',
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
                    '@babel/cli': '^7.14.3',
                    '@babel/core': '^7.14.3',
                    '@babel/plugin-transform-runtime': '^7.14.3',
                    '@babel/preset-env': '^7.14.2',
                    'chai': '^4.3.4',
                    'coveralls': '^3.1.0',
                    'css-loader': '^5.1.1',
                    'eslint': '^7.27.0',
                    'fs-extra': '^9.1.0',
                    'ignore-styles': '^5.0.1',
                    'jsdoc': '^3.6.7',
                    'jsdom': '16.5.0',
                    'jsdom-global': '3.0.2',
                    'minami': '^1.2.3',
                    'mocha': '^8.4.0',
                    'nyc': '^15.1.0',
                    'sass': '^1.32.8',
                    'sass-loader': '^11.0.1',
                    'source-map-loader': '^3.0.0',
                    'style-loader': '^2.0.0',
                    'webpack': '^5.37.1',
                    'webpack-cli': '^4.7.0',
                    'yargs': '^17.0.1'
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
    it('yo @dizmo/module --git', () => {
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
