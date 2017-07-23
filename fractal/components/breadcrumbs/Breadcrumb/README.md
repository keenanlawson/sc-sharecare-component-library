## Page Breadcrumb

This is a breadcrumb bar breadcrumb.

-----
The API for the component is as follows:

| param         | type       | default       | possible     | description           |
|---            |---         |---            |---           |---                    |
| `className`   | `String`   | null          | `*`          | Extra class names |
| `to`          | `String`   | null          | `*`          | URL/URI destination |
| `label`       | `String`   | null          | `*`          | Text to display |

-----
The component can be included within other components like this:

```
<Breadcrumb/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@breadcrumb'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@breadcrumb'}}
```

-----
This code for this component looks like this:

```
{{view '@breadcrumb'}}
```
