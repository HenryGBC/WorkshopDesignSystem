import { newSpecPage } from '@stencil/core/testing';
import { CardDev } from '../card-dev';

describe('card-dev', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardDev],
      html: `<card-dev></card-dev>`,
    });
    expect(page.root).toEqualHtml(`
      <card-dev>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-dev>
    `);
  });
});
