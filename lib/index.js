import options from './options';


function formatMoney(value, currency=null) {
  if (!parseFloat(value) && parseFloat(value) !== 0) value = 0;
  let newValue = parseFloat(value).toFixed(2);
  newValue = newValue.replace(".00", "");
  newValue = newValue.toLocaleString();
  if (!currency) return `$${newValue}`;

  const option = options.currencies.filter((option) => option.value === currency)[0];
  if (!option) return `$${newValue}`;
  return `${option.symbol}${newValue}`;
}

export function moneyFiltersPlugin(Liquid) {
  this.registerFilter('money', formatMoney)
}
