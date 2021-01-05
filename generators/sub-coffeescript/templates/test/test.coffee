import { MyComponent } from '../lib'
import { expect } from 'chai'

describe 'MyComponent', =>
  it 'should exist', =>
    clazz = window.customElements.get 'my-component'
    expect(clazz).to.not.be.an 'undefined'

  it 'should be a function', =>
    clazz = window.customElements.get 'my-component'
    expect(clazz).to.be.a 'function'

  it 'should be a instantiable as a component', =>
    clazz = window.customElements.get 'my-component'
    expect(new clazz()).to.be.instanceOf MyComponent
