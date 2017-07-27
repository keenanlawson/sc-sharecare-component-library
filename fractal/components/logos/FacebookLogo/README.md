## Facebook Logo

This is the Facebook logo.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `iconClass`   | `String`      | null          | `*`           | Extra icon class names |

-----
The component can be included within other components like this:

```
<FacebookLogo/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@facebooklogo'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@facebooklogo'}}
```

-----
This code for this component looks like this:

```
{{view '@facebooklogo'}}
```
