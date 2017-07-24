## Navigation tab

This is a linked tab for a navigation component.

-----
The API for the component is as follows:

| param             | type          | default       | possible      | description           |
|---                |---            |---            |---            |---                    |
| `className`       | `String`      | null          | `*`           | Extra class names |
| `labelClassName`  | `String`      | null          | `*`           | Extra label class names |
| `label`           | `String`      | null          | `*`           | Text to appear inside of the tab link |
| `to`              | `String`      | null          | `*`           | Tab link destination |
| `selected`        | `Boolean`     | false         | true/false    | true: display tab in its selected state, false: display tab in its unselected state |

-----
The component can be included within other components like this:

```
<NavigationTab/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@navigationtab'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@navigationtab'}}
```

-----
This code for this component looks like this:

```
{{view '@navigationtab'}}
```
