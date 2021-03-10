<%_ name_prefix = name[0] === '@' ? name.slice(1).split('/')[0] : name.split('/')[0] _%>
<%_ name_suffix = name[0] === '@' ? name.slice(1).split('/').pop() : name.split('/').pop() _%>
<%_ name_ucamel = _.upperFirst(_.camelCase(name_suffix)) _%>
/* eslint-env browser, node, mocha */
import { <%= name_ucamel %> } from '../lib';
import { expect } from 'chai';

describe('<%= name_ucamel %>', () => {
    it('should exist', () => {
        expect(<%= name_ucamel %>).to.not.be.an('undefined');
    });
    it('should be a function', () => {
        expect(<%= name_ucamel %>).to.be.a('function');
    });
    it('should be a instantiable', () => {
        expect(new <%= name_ucamel %>()).to.be.instanceOf(<%= name_ucamel %>);
    });
});
