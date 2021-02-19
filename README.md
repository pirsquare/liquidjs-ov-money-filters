# liquidjs-ov-money-filters
Money filters for liquidjs used by OnVoard.

## Installation
```shell
yarn add liquidjs-ov-money-filters
```

## Examples
```shell
import { Liquid } from 'liquidjs';
import { moneyFiltersPlugin } from 'liquidjs-ov-money-filters';

const engine = new Liquid();
engine.plugin(moneyFiltersPlugin);

# Output: £79.50
const template = `{{ 79.5|money:"GBP" }}`;
const params = {};
engine.parseAndRenderSync(template, params);
```
