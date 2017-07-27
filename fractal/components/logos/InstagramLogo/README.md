## Instagram Logo

This is the Instagram logo.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `iconClass`   | `String`      | null          | `*`           | Extra icon class names |

-----
The component can be included within other components like this:

```
<InstagramLogo/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@instagramlogo'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@instagramlogo'}}
```

-----
This code for this component looks like this:

```
{{view '@instagramlogo'}}
```
