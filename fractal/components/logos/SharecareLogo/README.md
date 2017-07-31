## Sharecare Logo

This is the Sharecare logo.  It can display the logo icon and name or just the logo icon.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `labelClass`  | `String`      | null          | `*`           | Extra label class names |
| `iconClass`   | `String`      | null          | `*`           | Extra icon class names |
| `labelOnly`   | `Boolean`     | false         | true/false    | Display the link label only |
| `iconOnly`    | `Boolean`     | true          | true/false    | Display the icon only |
| `monochrome`  | `Boolean`     | false         | true/false    | Use monochrome logo |
| `smallIcon`   | `Boolean`     | false         | true/false    | Use small color icon only instead of icon and name |

-----
The component can be included within other components like this:

```
<SharecareLogo/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@sharecarelogo'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@sharecarelogo'}}
```

-----
This code for this component looks like this:

```
{{view '@sharecarelogo'}}
```
