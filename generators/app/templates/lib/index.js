/* eslint-env browser, node */
import './styles/styles.scss';
/**
 * @see: https://developer.mozilla.org/en-US/docs/Web/Web_Components
 */
export class MyComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.setupEvents();
        this.setupStyle();
    }
    setupEvents() {
        this.addEventListener('show', this.onShow.bind(this));
        this.addEventListener('hide', this.onHide.bind(this));
    }
    setupStyle() {
        this.classList.add('my-component', 'my-component-hidden');
    }
    show() {
        this.classList.remove('my-component-hidden');
    }
    hide() {
        this.classList.add('my-component-hidden');
    }
    onShow() {
        this.show();
    }
    onHide() {
        this.hide();
    }
}
if (typeof window.customElements !== 'undefined') {
    window.customElements.define('my-component', MyComponent);
}
export default MyComponent;
