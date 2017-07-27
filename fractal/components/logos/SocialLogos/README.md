## Site Logo

This is the main site logo.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `baseUrl`     | `String`      | null          | `*`           | URL destination when clicked |

-----
The component can be included within other components like this:

```
<SiteLogo/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@sitelogo'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@sitelogo'}}
```

-----
This code for this component looks like this:

```
{{view '@sitelogo'}}
```
