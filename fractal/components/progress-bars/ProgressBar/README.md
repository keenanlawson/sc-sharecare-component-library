## SVG Bar Chart component

This is a simple bar chart component that will display a fill percentage out of 100%.
It has 5 color ranges:
1. very low:        < 25%
2. low:             < 50%
3. average:         = 50%
4. above-average:   < 75%
5. high:            < 100%
6. very high:       = 100%
7. neutral:         custom

```
{{context @SVGBarChart}}
```


| param | type | default | possible | description |
|---    |---   |---      |---       |---          |
| `percentFull` | `Number` | `0` | `*` | Integer score of 100% |
| `fillClassName` | `String` | `` | `*` | Override generated color and class |
