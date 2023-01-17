import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { render } from '@ember/test-helpers';

module('credit-card-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it should format Card labels correctly with default values', async function (assert) {
    assert.expect(5);

    await render(hbs`{{credit-card-form zipcodeRequired=true}}`);

    assert.equal(
      this.element.querySelector('.cc-number .control-label').innerHTML,
      'Card Number',
      'label says Card Number'
    );

    assert.equal(
      this.element.querySelector('.cc-cvc .control-label').innerHTML,
      'Security Code',
      'label says Security Code'
    );

    assert.equal(
      this.element.querySelector('.cc-name .control-label').innerHTML,
      'Name on Card',
      'label reads Name on Card'
    );

    assert.equal(
      this.element.querySelector('.cc-expiration .control-label').innerHTML,
      'Expiration',
      'label says Expiration'
    );

    assert.equal(
      this.element.querySelector('.cc-zipcode .control-label').innerHTML,
      'Zip Code'
    );
  });

  // tests for custom label

  test('it should format Card Number label correctly with custom numberLabel provided', async function (assert) {
    await render(
      hbs`{{credit-card-form zipcodeRequired=true numberLabel="Kaartnummer" securityCodeLabel="Veiligheidscode" nameOnCardLabel="Naam op Kaart" expirationLabel="Vervalt op" zipCodeLabel="postcode"}}`
    );

    assert.equal(
      this.element.querySelector('.cc-number .control-label').innerHTML,
      'Kaartnummer'
    );

    assert.equal(
      this.element.querySelector('.cc-cvc .control-label').innerHTML,
      'Veiligheidscode'
    );

    assert.equal(
      this.element.querySelector('.cc-name .control-label').innerHTML,
      'Naam op Kaart'
    );

    assert.equal(
      this.element.querySelector('.cc-expiration .control-label').innerHTML,
      'Vervalt op'
    );

    assert.equal(
      this.element.querySelector('.cc-zipcode .control-label').innerHTML,
      'postcode'
    );
  });
});
