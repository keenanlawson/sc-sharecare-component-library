## Social Logos

This is a collection of social logos linked to their respective home pages.
They have a hover state that displays them in a color tone.


-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `logoClass`   | `String`      | null          | `*`           | Extra logo (link) class names |
| `iconClass`   | `String`      | null          | `*`           | Extra icon class names |
| `labelClass`  | `String`      | null          | `*`           | Extra label (link label) class names |
| `labelOnly`   | `Boolean`     | false         | true/false    | Display all link labels only |
| `iconOnly`    | `Boolean`     | true          | true/false    | Display all icons only |

-----
The component can be included within other components like this:

```
<SocialLogos/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@sociallogos'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@sociallogos'}}
```

-----
This code for this component looks like this:

```
{{view '@sociallogos'}}
```
