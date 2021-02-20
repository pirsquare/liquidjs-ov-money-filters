import options from './options';

function formatMoney(params) {
  let value = params.value;
  let currency = params.currency;
  let withPrefix = params.withPrefix;
  let native = params.native;

  if (!parseFloat(value) && parseFloat(value) !== 0) value = 0;
  const option = options.currencies.filter((option) => option.value === currency)[0];
  if (!option) {
    if (withPrefix) return `$${value}`;
    return `${value}`;
  }

  let amt = parseFloat(value).toFixed(option.decimal_digits);

  // if decimal are all zeros, remove decimals
  let decimalAmt = 0;
  let splitAmt = amt.split(".");
  if (splitAmt.length > 1) decimalAmt = parseInt(splitAmt[1]);
  if (!decimalAmt) amt = splitAmt[0];

  amt = amt.toLocaleString();
  if (!withPrefix) return `${amt}`;
  if (native) return `${option.symbol_native}${amt}`;
  return `${option.symbol}${amt}`;
}

export function moneyFiltersPlugin(Liquid) {
  this.registerFilter('money', (value, currency) => {
    return formatMoney({
      value: value,
      currency: currency,
      withPrefix: true,
      native: false,
    })
  });

  this.registerFilter('money_native', (value, currency) => {
    return formatMoney({
      value: value,
      currency: currency,
      withPrefix: true,
      native: true,
    })
  });

  this.registerFilter('money_without_prefix', (value, currency) => {
    return formatMoney({
      value: value,
      currency: currency,
      withPrefix: false,
      native: false,
    })
  });
}
