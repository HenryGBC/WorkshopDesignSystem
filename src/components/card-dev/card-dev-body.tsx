import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'card-dev-body'
})
export class CardDevBody {

  render() {
    return (
      <Host class="card-dev-body">
          <slot></slot>
      </Host>
    );
  }

}
