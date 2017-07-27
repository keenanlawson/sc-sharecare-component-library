## Doctor Oz Logo

This is the Doctor Oz logo.

-----
The API for the component is as follows:

| param         | type          | default       | possible      | description           |
|---            |---            |---            |---            |---                    |
| `className`   | `String`      | null          | `*`           | Extra class names |
| `iconClass`   | `String`      | null          | `*`           | Extra icon class names |
| `labelClass`  | `String`      | null          | `*`           | Extra label class names |

-----
The component can be included within other components like this:

```
<DoctorOzLogo/>
```

-----
and it therefore expects a set of data to render it that is in the following format:

```
{{context '@doctorozlogo'}}
```

-----
The rendered HTML for this component looks like this:

```
{{render '@doctorozlogo'}}
```

-----
This code for this component looks like this:

```
{{view '@doctorozlogo'}}
```
