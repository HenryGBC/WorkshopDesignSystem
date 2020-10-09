import { newSpecPage } from '@stencil/core/testing';
import { ModalDev } from '../modal-dev';

describe('modal-dev', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModalDev],
      html: `<modal-dev></modal-dev>`,
    });
    expect(page.root).toEqualHtml(`
      <modal-dev>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </modal-dev>
    `);
  });
});
