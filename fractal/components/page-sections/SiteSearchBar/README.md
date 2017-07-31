## Site Search Bar

This is the main search bar for the site.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `text`        | `String`      | null          | `*`           | Text to appear inside of the title bar |
| `mainHeading` | `Boolean`     | true          | true/false    | true: Text is contained inside of an `H1` tag, false: Text is contained inside of a `span` tag |
| `skinny`      | `Boolean`     | false         | true/false    | true: display a shorter title bar with contents hidden, false: display a normal title bar with visible contents |

-----
The component can be included within other components like this:

```
<SiteSearchBar/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@sitesearchbar'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@sitesearchbar'}}
```

-----
This code for this component looks like this:

```
{{view '@sitesearchbar'}}
```
