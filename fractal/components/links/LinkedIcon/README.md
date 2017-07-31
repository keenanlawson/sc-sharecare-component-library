## Linked Icon

This is a link with a label and icon as its contents.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `labelClass`  | `String`      | null          | `*`           | Extra label class names |
| `iconClass`   | `String`      | null          | `*`           | Extra icon class names |
| `labelOnly`   | `Boolean`     | false         | true/false    | Display the link label only |
| `iconOnly`    | `Boolean`     | true          | true/false    | Display the icon only |
| `to`          | `String`      | null          | `*`           | URL link destination |
| `label`       | `Node/String` | null          | `*`           | Link label text/element |
| `icon`        | `String`      | null          | `*`           | Icon name |

-----
The component can be included within other components like this:

```
<LinkedIcon/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@linkedicon'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@linkedicon'}}
```

-----
This code for this component looks like this:

```
{{view '@linkedicon'}}
```
