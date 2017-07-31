## Twitter Logo

This is the Twitter logo.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `labelClass`  | `String`      | null          | `*`           | Extra label class names |
| `iconClass`   | `String`      | null          | `*`           | Extra icon class names |
| `labelOnly`   | `Boolean`     | false         | true/false    | Display the link label only |
| `iconOnly`    | `Boolean`     | true          | true/false    | Display the icon only |

-----
The component can be included within other components like this:

```
<TwitterLogo/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@twitterlogo'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@twitterlogo'}}
```

-----
This code for this component looks like this:

```
{{view '@twitterlogo'}}
```
