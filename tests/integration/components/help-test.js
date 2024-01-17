import { module, test } from 'qunit';
import { setupRenderingTest } from 'todo-mvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | help', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Help />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Help>
        template block text
      </Help>
    `);

    assert.dom().hasText('template block text');
  });
});
