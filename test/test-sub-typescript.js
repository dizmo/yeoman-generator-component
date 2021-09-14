const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const { join } = require('path');

describe('generator-module:sub-typescript', function () {
    const generator = join(__dirname, '../generators/app');
    it('yo @dizmo/component --typescript', () => {
        return helpers.run(generator).withOptions({
            'author': 'Dizmo Developer',
            'email': 'developer@dizmo.com',
            'typescript': true,
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
                'my-component/lib',
                'my-component/lib/index.ts',
                'my-component/LICENSE',
                'my-component/.npmignore',
                'my-component/package.json',
                'my-component/README.md',
                'my-component/test',
                'my-component/test/test.ts',
                'my-component/.travis.yml',
                'my-component/tsconfig.json',
                'my-component/typedoc.json',
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
                    '@types/chai': '^4.2.21',
                    '@types/mocha': '^9.0.0',
                    '@typescript-eslint/eslint-plugin': '4.31.1',
                    '@typescript-eslint/parser': '4.31.1',
                    'chai': '^4.3.4',
                    'coveralls': '^3.1.1',
                    'css-loader': '^6.2.0',
                    'eslint': '^7.32.0',
                    'fs-extra': '^10.0.0',
                    'ignore-styles': '^5.0.1',
                    'jsdom': '17.0.0',
                    'jsdom-global': '3.0.2',
                    'minami': '^1.2.3',
                    'mocha': '^9.1.1',
                    'nyc': '^15.1.0',
                    'sass': '^1.40.1',
                    'sass-loader': '^12.1.0',
                    'source-map-loader': '^3.0.0',
                    'style-loader': '^3.2.1',
                    'typedoc': '^0.22.3',
                    'typescript': '^4.4.3',
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
                'types': 'dist/lib/index.d.ts',
                'version': '1.0.0'
            });
        });
    });
    it('yo @dizmo/component --typescript --git', () => {
        return helpers.run(generator).withOptions({
            'author': 'Dizmo Developer',
            'email': 'developer@dizmo.com',
            'git': true,
            'typescript': true
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
