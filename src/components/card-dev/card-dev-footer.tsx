
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'card-dev-footer'
})
export class CardDevFooter {

  render() {
    return (
      <Host class="card-dev-footer">
          <slot></slot>
      </Host>
    );
  }

}
