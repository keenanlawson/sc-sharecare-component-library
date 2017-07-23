## Page Layer Container

This container contains and pads page layer content ands constrains it to the maximum width.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |

-----
The component can be included within other components like this:

```
<LayerContainer/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@layercontainer'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@layercontainer'}}
```

-----
This code for this component looks like this:

```
{{view '@layercontainer'}}
```
