## LinkedIn Logo

This is the LinkedIn logo.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `iconClass`   | `String`      | null          | `*`           | Extra icon class names |

-----
The component can be included within other components like this:

```
<LinkedInLogo/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@linkedinlogo'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@linkedinlogo'}}
```

-----
This code for this component looks like this:

```
{{view '@linkedinlogo'}}
```
