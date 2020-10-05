import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'button-dev',
  styleUrl: 'button-dev.scss',
  shadow: true,
})
export class ButtonDev {

  @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
  
  render() {

    let classes = {
      'btn-dev': true,
      [this.color]: true
    }

    return (
      <Host>
        <button  class={classes}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
