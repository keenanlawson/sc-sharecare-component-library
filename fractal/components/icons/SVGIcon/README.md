## SVG Icon component

This is a simple 'gauge' component that will display an integer score out of 100%.
It has 5 background color ranges:
1. very low:    0 - 10%
2. low:         10 - 25%
3. normal:      25 - 50%
4. high:        50 - 80%
5. very high:   80 - 100%

```
{{context @SVGArcChart}}
```


| param | type | default | possible | description |
|---    |---   |---      |---       |---          |
| `percentFull` | `Number` | `0` | `*` | Integer score of 100% |