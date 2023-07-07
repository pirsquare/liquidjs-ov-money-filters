# liquidjs-ov-money-filters
Money filters for liquidjs used by OnVoard.

## Installation
```shell
yarn add liquidjs-ov-money-filters
```

## Examples
Setup plugin

```shell
import { Liquid } from 'liquidjs';
import { moneyFiltersPlugin } from 'liquidjs-ov-money-filters';

const engine = new Liquid();
engine.plugin(moneyFiltersPlugin);
```

### money
Format money and display with currency
```shell
# Output: US$79.50
engine.parseAndRenderSync(`{{ 79.5|money:"USD" }}`);
```

### money_native
Format money and display with currency's native symbol
```shell
# Output: $79.50
engine.parseAndRenderSync(`{{ 79.5|money_native:"USD" }}`);
```

### money_without_prefix
Format money and display without currency prefix. Currency still needs to be passed since not all currencies gets rounded to 2 decimal place. Passed currency will be used to round money to the correct decimal place.
```shell
# Output: 79.50
engine.parseAndRenderSync(`{{ 79.5|money_without_prefix:"USD" }}`);
```

### money_tag
Wrap money with span element <code>&lt;span class=&quot;money&quot; data-currency=&quot;{{ currency }}&quot;&gt;{{ value }}&lt;/span&gt;</code>. This is a convention to support currency conversion apps, allowing them to auto detect and convert prices to another currency.
```shell
# Output: <span class="money" data-currency="USD">$79.50</span>
engine.parseAndRenderSync(`{{ 79.5|money_native:"USD"|money_tag:"USD" }}`);
```

### money_thousand_separator
Applies thousand separator to make it easier to read.
```shell
# Output: 79,000,000.50
engine.parseAndRenderSync(`{{ 79000000.5|money_native:"USD"|money_thousand_separator:"," }}`);
```