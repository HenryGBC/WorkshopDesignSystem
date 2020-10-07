import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'card-dev',
  styleUrl: 'card-dev.scss',
})
export class CardDev {

  render() {
    return (
      <Host class="card-dev">
              <slot></slot>
      </Host>
    );
  }

}
