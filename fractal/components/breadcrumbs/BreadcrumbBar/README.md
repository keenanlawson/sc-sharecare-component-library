## Page Breadcrumb

This is a breadcrumb bar breadcrumb.

-----
The API for the component is as follows:

| param         | type                              | default       | possible                          | description           |
|---            |---                                |---            |---                                |---                    |
| `className`   | `String`                          | null          | `*`                               | Extra class names |
| `breadcrumbs` | `Breadcrumb/Array.<Breadcrumb>`   | null          | `Breadcrumb/Array.<Breadcrumb>`   | Breadcrumbs to display |

-----
The component can be included within other components like this:

```
<BreadcrumbBar/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@breadcrumbbar'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@breadcrumbbar'}}
```

-----
This code for this component looks like this:

```
{{view '@breadcrumbbar'}}
```
