/* eslint-env browser, node */
import './styles/styles.scss';
/**
 * @see: https://developer.mozilla.org/en-US/docs/Web/Web_Components
 */
export class MyComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(): void {
        this.setupEvents();
        this.setupStyle();
    }
    setupEvents(): void {
        this.addEventListener('show', this.onShow.bind(this));
        this.addEventListener('hide', this.onHide.bind(this));
    }
    setupStyle(): void {
        this.classList.add('my-component', 'my-component-hidden');
    }
    show(): void {
        this.classList.remove('my-component-hidden');
    }
    hide(): void {
        this.classList.add('my-component-hidden');
    }
    onShow(): void {
        this.show();
    }
    onHide(): void {
        this.hide();
    }
}
if (typeof window.customElements !== 'undefined') {
    window.customElements.define('my-component', MyComponent);
}
export default MyComponent;
