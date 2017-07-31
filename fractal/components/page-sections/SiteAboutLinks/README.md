## Site About Links

This is the navigation links for the site footer links.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |

-----
The component can be included within other components like this:

```
<SiteAboutLinks/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@siteaboutlinks'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@siteaboutlinks'}}
```

-----
This code for this component looks like this:

```
{{view '@siteaboutlinks'}}
```
