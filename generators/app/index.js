'use strict';

const fs = require('fs');
const Generator = require('yeoman-generator');
const lodash = require('lodash');

module.exports = class extends Generator {
    initializing() {
        this.composeWith(require.resolve(
            '@dizmo/generator-module/generators/app'
        ), {
            arguments: this.arguments, ...this.options,
            typescript: undefined, coffeescript: undefined
        });
        this.composeWith({
            Generator: SubGenerator(this.arguments, this.options),
            path: require.resolve('.')
        });
    }
}
const SubGenerator = (args, opts) => class extends Generator {
    constructor() {
        super(args, opts);
    }
    configuring() {
        this.destinationRoot(process.cwd());
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
                    'css-loader': '^5.0.1',
                    'fs-extra': '^9.0.1',
                    'ignore-styles': '^5.0.1',
                    'jsdom': '16.4.0',
                    'jsdom-global': '3.0.2',
                    'sass': '^1.32.0',
                    'sass-loader': '^10.1.0',
                    'style-loader': '^2.0.0'
                })
            );
        }
        if (!upgrade || upgrade) {
            this.fs.copyTpl(
                this.templatePath('cli/'),
                this.destinationPath('cli/'), { ...pkg, _: require('lodash') });
        }
        if (!upgrade) {
            this.fs.copyTpl(
                this.templatePath('lib/'),
                this.destinationPath('lib/'), { ...pkg, _: require('lodash') });
            this.fs.copyTpl(
                this.templatePath('test/'),
                this.destinationPath('test/'), { ...pkg, _: require('lodash') });
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
                    ...pkg, year: new Date().getFullYear(), _: require('lodash')
                }
            );
        }
        this.fs.writeJSON(
            this.destinationPath('package.json'), pkg, null, 2
        );
        this.conflicter.force = this.options.force || upgrade;
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
