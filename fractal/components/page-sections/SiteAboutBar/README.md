## Site About Bar

This is the full page width footer bar of partner and social logos.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |

-----
The component can be included within other components like this:

```
<SiteAboutBar/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@siteaboutbar'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@siteaboutbar'}}
```

-----
This code for this component looks like this:

```
{{view '@siteaboutbar'}}
```
