## Page Layer

This is a full page width container used to contain various content.

-----
The API for the component is as follows:

| param                     | type          | default       | possible      | description           |
|---                        |---            |---            |---            |---                    |
| `className`               | `String`      | null          | `*`           | Extra class names |
| `containerClassName`      | `String`      | null          | `*`           | Extra class names for the constrained container |
| `constrained`             | `Boolean`     | true          | true/false    | true: contents are padded and constrained to max width, false: contents are not padded nor constrained to max width |

-----
The component can be included within other components like this:

```
<PageLayer/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@pagelayer'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@pagelayer'}}
```

-----
This code for this component looks like this:

```
{{view '@pagelayer'}}
```
