## Link

This is a standard anchor link.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `labelClass`  | `String`      | null          | `*`           | Extra label class names |
| `to`          | `String`      | null          | `*`           | URL link destination |
| `label`       | `Node/String` | null          | `*`           | Link label text/element |

-----
The component can be included within other components like this:

```
<Link/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@link'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@link'}}
```

-----
This code for this component looks like this:

```
{{view '@link'}}
```
