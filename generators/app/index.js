'use strict';

const fs = require('fs');
const Generator = require('yeoman-generator');
const lodash = require('lodash');
const process = require('process');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument('name', {
            defaults: '@dizmo/my-component',
            required: false,
            type: String
        });
        this.option('description', {
            desc: 'Short one-liner describing the component',
            type: String
        });
    }
    initializing() {
        const app = this.composeWith(require.resolve(
            '@dizmo/generator-module/generators/app'
        ), {
            arguments: this.arguments, ...this.options,
            typescript: undefined, coffeescript: undefined,
            prompts: {
                description: { default: 'web component' },
                yosay: 'dizmo component'
            }
        });
        this.composeWith({
            Generator: SubGenerator(this.arguments, this.options)(app),
            path: require.resolve('.')
        });
    }
}
const SubGenerator = (args, opts) => (app) => class extends Generator {
    constructor() {
        super(args, opts);
    }
    configuring() {
        this.destinationRoot(app.destinationRoot());
    }
    writing() {
        const upgrade = Boolean(
            this.options.upgrade && fs.existsSync('package.json')
        );
        const pkg = this.fs.readJSON(
            this.destinationPath('package.json')
        );
        if (!upgrade || upgrade) {
            pkg.dependencies = sort(
                lodash.assign(pkg.dependencies, {
                })
            );
            pkg.devDependencies = sort(
                lodash.assign(pkg.devDependencies, {
                    'css-loader': '^5.1.1',
                    'fs-extra': '^9.1.0',
                    'ignore-styles': '^5.0.1',
                    'jsdom': '16.5.0',
                    'jsdom-global': '3.0.2',
                    'sass': '^1.32.8',
                    'sass-loader': '^11.0.1',
                    'style-loader': '^2.0.0'
                })
            );
        }
        if (!upgrade || upgrade) {
            this.fs.copyTpl(
                this.templatePath('cli/'),
                this.destinationPath('cli/'), {
                    ...pkg, _: require('lodash')
                }
            );
        }
        if (!upgrade) {
            this.fs.copyTpl(
                this.templatePath('lib/'),
                this.destinationPath('lib/'), {
                    ...pkg, _: require('lodash')
                }
            );
            this.fs.copyTpl(
                this.templatePath('test/'),
                this.destinationPath('test/'), {
                    ...pkg, _: require('lodash')
                }
            );
        }
        if (!upgrade) {
            this.fs.copy(
                this.templatePath('webpack.config.js'),
                this.destinationPath('webpack.config.js'));
        }
        if (!upgrade) {
            this.fs.copyTpl(
                this.templatePath('README.md'),
                this.destinationPath('README.md'), {
                    ...pkg, year: new Date().getFullYear(),
                    _: require('lodash')
                }
            );
        }
        if (!upgrade) {
            if (pkg.keywords instanceof Array) {
                pkg.keywords.unshift('component')
            } else {
                pkg.keywords = ['component', 'module'];
            }
            pkg.keywords = lodash.uniq(pkg.keywords).sort();
        }
        this.fs.writeJSON(
            this.destinationPath('package.json'), pkg, null, 2
        );
        this.env.conflicter.force = this.options.force || upgrade;
    }
    end() {
        const pkg = this.fs.readJSON(
            this.destinationPath('package.json')
        );
        if (!this.options['typescript'] && this.options.upgrade && pkg.devDependencies['coffeescript'] ||
            !this.options['typescript'] && this.options['coffeescript']
        ) {
            this.composeWith(require.resolve(
                '../sub-coffeescript'
            ), lodash.assign(this.options, {
                args: this.args, force: true
            }));
            return;
        }
        if (
            !this.options['coffeescript'] && this.options.upgrade && pkg.devDependencies['typescript'] ||
            !this.options['coffeescript'] && this.options['typescript']
        ) {
            this.composeWith(require.resolve(
                '../sub-typescript'
            ), lodash.assign(this.options, {
                args: this.args, force: true
            }));
            return;
        }
    }
};
function sort(object) {
    return Object.entries(object).sort().reduce(
        (a, [k, v]) => { a[k] = v; return a; }, {}
    );
}
