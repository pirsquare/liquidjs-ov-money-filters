const get = require('lodash/get');
const options = require('./options');

function formatMoney(value, currency=null, config={}) {
  let withPrefix = get(config, 'withPrefix', true);
  let withTrailingZeros = get(config, 'withTrailingZeros', true);
  let native = get(config, 'native', false);

  if (!parseFloat(value) && parseFloat(value) !== 0) value = 0;

  let option = null;
  if (currency) option = options.currencies.filter((option) => option.value === currency)[0];
  if (!option) {
    if (withTrailingZeros) value = parseFloat(value).toFixed(2);
    if (withPrefix) return `$${value}`;
    return `${value}`;
  }

  let amt = parseFloat(value).toFixed(option.decimal_digits);

  // if no trailing zeros
  if (!withTrailingZeros) {
    let decimalAmt = 0;
    let splitAmt = amt.split(".");
    if (splitAmt.length > 1) decimalAmt = parseInt(splitAmt[1]);
    if (!decimalAmt) amt = splitAmt[0];
  }

  amt = amt.toLocaleString();
  if (!withPrefix) return `${amt}`;
  if (native) return `${option.symbol_native}${amt}`;
  return `${option.symbol}${amt}`;
}

function moneyFiltersPlugin(Liquid) {
  this.registerFilter('money', (value, currency) => {
    return formatMoney(value, currency);
  });

  this.registerFilter('money_native', (value, currency) => {
    return formatMoney(value, currency, {
      native: true
    });
  });

  this.registerFilter('money_without_prefix', (value, currency) => {
    return formatMoney(value, currency, {
      withPrefix: false
    });
  });

  this.registerFilter('money_tag', (value, currency) => {
    return `<span class="money" data-currency="${currency}">${value}</span>`;
  });
}

module.exports.moneyFiltersPlugin = moneyFiltersPlugin;
