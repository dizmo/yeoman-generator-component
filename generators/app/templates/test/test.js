/* eslint-env browser, node, mocha */
import { MyComponent } from "../lib";
import { expect } from "chai";

describe("MyComponent", () => {
    it("should exist", () => {
        const clazz = window.customElements.get('my-component');
        expect(clazz).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        const clazz = window.customElements.get('my-component');
        expect(clazz).to.be.a("function");
    });
    it("should be a instantiable as a component", () => {
        const clazz = window.customElements.get('my-component');
        expect(new clazz()).to.be.instanceOf(MyComponent);
    });
});
