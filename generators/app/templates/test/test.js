<%_ name_prefix = name[0] === '@' ? name.slice(1).split('/')[0] : name.split('/')[0] _%>
<%_ name_suffix = name[0] === '@' ? name.slice(1).split('/').pop() : name.split('/').pop() _%>
<%_ name_ucamel = _.upperFirst(_.camelCase(name_suffix)) _%>
/* eslint-env browser, node, mocha */
import { <%= name_ucamel %> } from '../lib';
import { expect } from 'chai';

describe('<%= name_ucamel %>', () => {
    it('should exist', () => {
        const clazz = window.customElements.get('<%= name_suffix %>');
        expect(clazz).to.not.be.an('undefined');
    });
    it('should be a function', () => {
        const clazz = window.customElements.get('<%= name_suffix %>');
        expect(clazz).to.be.a('function');
    });
    it('should be a instantiable', () => {
        const clazz = window.customElements.get('<%= name_suffix %>');
        expect(new clazz()).to.be.instanceOf(<%= name_ucamel %>);
    });
});
