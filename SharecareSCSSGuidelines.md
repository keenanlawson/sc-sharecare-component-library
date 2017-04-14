Sharecare SCSS Guidelines
=========================

Summary
---------------
TBD

Ways of thinking
----------------
* [OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/) / [SMACSS](http://smacss.com/) / [BEM](http://getbem.com/)
* Composition over Inheritance
* Single responsibility principle
* [The open/closed principle applied to CSS](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/)
* Location independence
* Progressive enhancement
* Responsive development: Mobile first

<a name="toc">Table of Contents</a>
-----------------

1. [Required Reading](#required-reading)
2. [Code Syntax and Formatting](#syntax-formatting)
3. [Strings](#strings)
    3. [Encoding](#string-encoding)
    3. [Quotes](#string-quotes)
    3. [Strings as CSS values](#string-as-value)
    3. [Strings containing quotes](#string-with-quotes)
    3. [URLs](#string-urls)
4. [Numbers](#numbers)
    4. [Zeros](#number-zeros)
    4. [Units](#number-units)
    4. [Calculations](#number-calculations)
5. [Colors](#colors)
    5. [Base colors](#base-colors)
    5. [Component colors](#component-colors)
6. [CSS rule sets](#css-rule-sets)
7. [Declaration sorting](#declaration-sorting)
8. [Selector nesting](#selector-nesting)
9. [Naming conventions](#naming-conventions)
    9. [Constants](#naming-constants)
    9. [Variables](#naming-variables)
    9. [Classes](#naming-classes)
    9. [Files](#naming-files)
10. [Commenting](#commenting)
11. [Project Architecture](#project-architecture)
12. [Component Structure](#component-structure)
13. [Folder Structure](#folder-structure)
14. [Imports](#imports)
    14. [Application style configuration flow](#import-flow)
    14. [Importing partials](#import-partials)
15. [Shame file](#shame)
16. [Responsive Web Design and Breakpoints: element queries](#responsive-design)
17. [Themes and Motifs](#themes)
    17. [Themes](#theme)
    17. [Motifs](#motif)
18. [Other](#other)
19. [Things to Note](#discussion-points)


<a name="required-reading">Required Reading</a>
-----------

Please take the time to read the following (and their sub-links) for a great background on organizing CSS and the direction on where this guide is headed.

This guide was shamelessly inspired (and mostly duplicated) from the following sources:

* https://github.com/timhartmann/Scss-Styleguide/blob/master/README.md
* http://cssguidelin.es/
* https://sass-guidelin.es/

Other resources that inspired this guide:

* http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss
* http://smacss.com
* http://getbem.com




# Syntax



<a name="syntax-formatting">Code Syntax and Formatting</a>
-----------

We will use the SCSS format vs. SASS.  Roughly, we want (shamelessly inspired by [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)):

* two (2) spaces indents, no tabs
* ideally, 80-characters wide lines
* properly written multi-line CSS rules
* meaningful use of whitespace

```
// Yep
.foo {
  display: block;
  overflow: hidden;
  padding: 0 1em;
}

// Nope
.foo {
    display: block; overflow: hidden;

    padding: 0 1em;
}
```

#### Strings
<a name="strings"></a>

##### Encoding
<a name="string-encoding"></a>

To avoid any potential issue with character encoding, force [UTF-8](http://en.wikipedia.org/wiki/UTF-8) encoding in each of the [main stylesheets](#main-files) using the `@charset` directive. Make sure it is the very first element of the stylesheet and there is no character of any kind before it.

```
@charset 'utf-8';
```

##### Quotes
<a name="string-quotes"></a>

Strings should always be wrapped with single quotes (`'`) in SASS

* most syntax highlighters will choke on unquoted strings
* it helps general readability
* there is no valid reason not to quote strings

```
// Yep
$direction: 'left';

// Nope
$direction: left;
```

##### Strings as CSS values
<a name="string-as-value"></a>

Specific CSS values (identifiers) such as `initial` or `sans-serif` require not to be quoted. Indeed, the declaration `font-family: 'sans-serif'` will silently fail because CSS is expecting an identifier, not a quoted string. Because of this, we do not quote those values.

```
// Yep
$font-type: sans-serif;

// Nope
$font-type: 'sans-serif';

// Works but prefer not
$font-type: unquote('sans-serif');
```

##### Strings containing quotes
<a name="string-with-quotes"></a>

If a string contains one or several single quotes, one might consider wrapping the string with double quotes (") instead, in order to avoid escaping characters within the string.

```
// Okay
@warn 'You can\'t do that.';

// Okay
@warn "You can't do that.";
```

##### URLs
<a name="string-urls"></a>

URLs should be quoted

```
// Yep
.foo {
  background-image: url('/images/kittens.jpg');
}

// Nope
.foo {
  background-image: url(/images/kittens.jpg);
}
```

#### Numbers
<a name="numbers"></a>

##### Zeros
<a name="number-zeros"></a>

Numbers should display leading zeros before a decimal value less than one. Never display trailing zeros.

```
// Yep
.foo {
  padding: 2em;
  opacity: 0.5;
}

// Nope
.foo {
  padding: 2.0em;
  opacity: .5;
}
```

##### Units
<a name="number-units"></a>

When dealing with lengths, a `0` value should never ever have a unit.  This practice should be limited to lengths only.

```
// Yep
$length: 0;

// Nope
$length: 0em;
```

##### Calculations
<a name="number-calculations"></a>

Top-level numeric calculations should always be wrapped in parentheses. Not only does this requirement dramatically improve readability, it also prevents some edge cases by forcing Sass to evaluate the contents of the parentheses.

```
// Yep
.foo {
  width: (100% / 3);
}

// Nope
.foo {
  width: 100% / 3;
}
```

#### Colors
<a name="colors"></a>

We utilize a base color palette file, `_s-color-palette.scss`, with useful-named colors, currently culled from [Name That Color](http://chir.ag/projects/name-that-color).  Using the methodology from [Sass Color Variables That Don't Suck](https://davidwalsh.name/sass-color-variables-dont-suck), we have 2 groups of variables, the aforementioned base colors and component colors.

##### Base Colors
<a name="base-colors"></a>

* Should be treated as CONSTANTS, never to be changed
* Values should be unquoted HEX color value (`#fff`)
* Color names should never be used (`white`)
* Use lowercase and short color values when possible (`#fff` over `#ffffff`)

```
// Yep
$COLOR_NEON_FOO: #abcdef;

// Yep
$COLOR_NEON_FOO: #000;

// Nope
$COLOR_NEON_FOO: '#abcdef';

// Nope
$COLOR_NEON_FOO: 'darkblue';

// Nope
$COLOR_NEON_FOO: #eeeeee;
```

##### Component Colors
<a name="component-colors"></a>

* Defined in the component partial
* Values should always refer to a base color variable
* `rgba()` usages should always reference a base color variable

```
// Yep
$my-awesome-component-background-color: $COLOR_NEON_FOO;

// Yep
$my-awesome-component-shadow-color: rgba($COLOR_NEON_FOO, 0.5);

// Nope
$my-awesome-component-background-color: '#abcdef';

// Nope
$my-awesome-component-background-color: 'darkblue';

// Nope
$my-awesome-component-shadow-color: rgba(0, 0, 0, 0.5);
```

#### CSS Rule Sets
<a name="css-rule-sets"></a>

* selectors on new lines
* the opening brace (`{`) spaced from the last selector by a single space
* each declaration on its own new line
* a space after the colon (`:`)
* a trailing semi-colon (`;`) at the end of all declarations
* the closing brace (`}`) on its own new line
* a new line after the closing brace `}`

```
// Yep
.foo,
.foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// Nope
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
    margin: 0 auto }
```

* local variables being declared before any declarations, then spaced from declarations by a new line
* mixin calls with no `@content` coming before any declaration
* nested selectors always coming after a new line
* mixin calls with `@content` coming after any nested selector
* no new line before a closing brace (`}`)

```
.foo,
.foo-bar,
.baz {
  $length: 42em;

  @include ellipsis;
  @include size($length);
  display: block;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  @include respond-to('small') {
    overflow: visible;
  }
}
```

#### Declaration Sorting
<a name="declaration-sorting"></a>

We should strive to order declarations by type based on [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS).  Basically using the box model to define the order starting on the outside, moving inward.
Since our model is based on `border-box` we will be using the following order when declaring component base styles (color and typography styles are in different sections so they are not included here):

* a new line between groups

```
#Concentric-CSS-Overview {
  width: ;      /* Content dimensions and scrollbars */
  height: ;

  display: ;    /* Directions about where and how the box is placed */
  position: ;
  float: ;
  clear: ;

  visibility: ; /* Next: can the box be seen? */
  opacity: ;
  z-index: ;

  margin: ;     /* Layers of the box model, from outside to inside */
  outline: ;
  border: ;
  padding: ;

  overflow: ;
}

.foo {
  width: 100px;
  height: 100px;

  position: absolute;
  right: 0;
  bottom: 0;

  padding: 20px;
  border: 1px solid;

  overflow: hidden;
}
```

#### Selector Nesting
<a name="selector-nesting"></a>

Nested selectors make a component too specific. It forces an HTML structure and can make it quite difficult to change its structure afterwards.  They should be avoided as much as possible.

```
// Yep
// Less nesting
.c-tabs__trigger {}

// Yep
// Classname
.c-tabs .c-tabs__trigger {}

// Nope
// Child-selector
.c-tabs > li {}
```

##### Exceptions

* Pseudo-classes
* Pseudo-elements

```
.foo {
  border: 1px solid;

  &:hover {
    border: 2px solid;
  }

  &::before {
    content: 'pseudo-element';
  }
}
```

* State classes

```
.foo {
  // …

  &.is-active {
    font-weight: bold;
  }
}
```

* When an element happens to be contained within another specific element

```
.foo {
  // …

  .no-opacity & {
    display: none;
  }
}
```



<a name="naming-conventions">Naming conventions</a>
----------

#### Constants
<a name="naming-constants"></a>

Since SASS does not support constants, we will rely on normal constant naming conventions.

* UPPERCASE
* UNDERSCORE_DELIMITED
* meaningful

```
// Yep
$CSS_POSITIONS: (top, right, bottom, left, center);

// Nope
$css-positions: (top, right, bottom, left, center);
```

##### Constant naming patterns

```
// Color constants
// Pattern: $COLOR_{USEFUL_COLOR_NAME}
$COLOR_CHESTNUT_ROSE: #d15050;
$COLOR_OLIVE_DRAB: #6d8d23;
```

#### Variables
<a name="naming-variables"></a>

Regarding variables, functions and mixins, we will use CSS like naming.

* lowercase
* hyphen-delimited
* meaningful

```
$vertical-rhythm-baseline: 1.5rem;

@mixin size($width, $height: $width) {
  // …
}

@function opposite-direction($direction) {
  // …
}
```

Only create variables when it makes sense to do so. A new variable should be created only when all of the following criteria are met:

* the value is repeated at least twice
* the value is likely to be updated at least once
* all occurrences of the value are tied to the variable (i.e. not by coincidence)

##### Variable naming patterns

```
// Component naming
// Pattern: ${component-name}-{context}-color
$button-background-color: $COLOR_OLIVE_DRAB;
$button-text-color: $COLOR_CHESTNUT_ROSE;

// Font icon naming
// Pattern: $font-icon-{useful-icon-name}
$font-icon-banner: "\e900";
$font-icon-calendar-clock: "\e901";

// Font weight naming
// Pattern: $font-{font-property}-{useful-name}
$font-weight-normal: normal;
$font-weight-semi: 600;
$font-weight-bold: 800;
```

#### Classes
<a name="naming-classes"></a>

For class names, utilize a combination of [SMACSS](http://smacss.com/) / [BEM](http://getbem.com/).

##### Class naming patterns

Some of the core class types will utilize a prefix, mostly for maintainability and readability.

```
// Layouts
// Prefix "l-"
.l-footer {}
.l-header {}
.l-main {}

// Components
// Prefix "c-"
.c-avatar {}
.c-card {}
.c-list {}

// Child element of card
// Seperator: "__"
.c-card__title {}
.c-card__avatar {}

// Modifier of card
// Seperator: "--"
.c-card--plain {}
.c-card--hero {}

// Modifier of child element of card
// Seperators: "__" & "--"
.c-card__title--constrained {}
.c-card__avatar--glowing {}

// States
// Mostly with prefix like "is-" or "has-"
.is-active {}
.is-hidden {}

// JavaScript hooks
// Prefix "js-"
.js-toggle {}
.js-trigger {}

// Icons have no prefix but utilize BEM modifiers
.svg-icon--sharecare-logo {}
.font-icon--camera {}
```

#### Files
<a name="naming-files"></a>

File naming conventions are as described below:

* lowercase
* hyphen-delimited
* meaningful
* if it is to be included in another `.scss` file then it should begin with an underscore (`_`)

##### File naming patterns and prefixes

Files will utilize a prefix as well for maintainability and readability and even search assistance if the category is known.

```
Pattern: _{prefix}-{useful-name}.scss

// Base
// Prefix "b-"
_b-defaults.scss
_b-resets.scss

// Components
// Prefix "c-"
_c-card.scss
_c-list.scss

// Icons
// Prefix "i-"
_i-font-icons.scss
_i-svg-icons.scss

// Layouts
// Prefix "l-"
_l-grids.scss
_l-header.scss

// Settings
// Prefix "s-"
_s-color-palette.scss
_s-font-icons.scss

// Theme Settings
// Prefix "th-"
_th-burgundy.scss
_th-copper-rust.scss

// Typography
// Prefix "ty-"
_ty-lato.scss
_ty-proxima-nova.scss
```



<a name="commenting">Commenting</a>
----------

We should strive to heavily comment our code, even CSS.  Things to consider adding to your comments:

* the structure and/or role of a file
* the goal of a ruleset
* the idea behind a magic number
* the reason for a CSS declaration
* the order of CSS declarations
* the thought process behind a way of doing things

The Sharecare SCSS project code will utilize *[Sassdoc](https://github.com/SassDoc/sassdoc)*.  This will enable the ability to generate an HTML version of our CSS API documentation for reference.
Examples:
(Note: Three slashes (`/`) required)

```
/// Vertical rhythm baseline used all over the code base.
/// @type Length
$vertical-rhythm-baseline: 1.5rem;

/// Mixin helping defining both `width` and `height` simultaneously.
///
/// @author Hugo Giraudel
///
/// @access public
///
/// @param {Length} $width - Element’s `width`
/// @param {Length} $height [$width] - Element’s `height`
///
/// @example scss - Usage
///   .foo {
///     @include size(10em);
///   }
///
///   .bar {
///     @include size(100%, 10em);
///   }
///
/// @example css - CSS output
///   .foo {
///     width: 10em;
///     height: 10em;
///   }
///
///   .bar {
///     width: 100%;
///     height: 10em;
///   }
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
```

At the minimum, we should be including the following:

* At the first line of your comment, give a small description about the snippet. It helps a lot to have a quick overview.
* `@author`: Declare the person, which wrote this snippet. <br/>
* `@example scss`: Write a quick example how you can use it
* `@example css`: Write a quick example what it generates

**[Sassdoc Examples](http://scss-components.com/sassdoc/)**
**[Sassdoc Documentation](https://github.com/SassDoc/sassdoc)**




# Architecture



<a name="project-architecture">Project Architecture</a>
-----------

The Sharecare SCSS project code will utilize modified approaches of [OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/), [SMACSS](http://smacss.com/) and [BEM](http://getbem.com/) with a focus on component driven architecture.



<a name="component-structure">Component Structure</a>
-----------

A component can have so many different types or become very complex, a well planned structure helps.  Components can be anything, as long as they:

* do one thing and one thing only
* are re-usable and re-used across the project
* are independent

Components should exist in their own folder within the `components` directory.  They should be broken up as independent micro-modules and `@import`ed into a main component file. The styles described in each component file should only be concerned with:

* the style of the component itself
* the style of the component’s variants, modifiers, and/or states
* the styles of the component’s children, if necessary

Avoid referencing (i.e. `@import`-ing) component files from other component files.

For theme purposes, all component color configuration variables must be allowed to be overwritten by including the `!default` flag with each declaration.

Here is an example of a button component partial:

```
// Config
$button-background-color: $COLOR_DUSTY_GRAY !default;
$button-text-color: $COLOR_PURE_WHITE !default;
$button-icon-color: $COLOR-MOUNTAIN-MEADOW !default;

// Base Layout
.c-button {
  display: block;
  padding: 1rem;

  & .font-icon {
    width: 25px;
    height: 25px;
  }
}

// State
.c-button--inline {
  display: inline-block;
}

.c-button.is-disabled {
  opacity: 0.5;
}

// Theme
.c-button {
  background-color: $button-background-color;
  color: $button-text-color;

  & .font-icon {
    color: $button-icon-color;
  }
}

// Typography
.c-button {
  font-size: 1.6rem;
}
```

#### Component Sections

* At first we have an area for config. Here we define specific colors or other stuff.
* Base is the core section. Add styles here for the component layout as well as media queries.
* Third we have the various states of the component.  These include 'is-/has-' based classes and BEM modifiers 'element--modifier' as well as state-specific media queries.
* Next are the skin and theme rules.  These will probably be limited to mostly colors, backgrounds and borders.
* Last is the typography section for font sizes, weights, line-heights, etc.



<a name="folder-structure">Folder Structure</a>
-----------

The folder structure is loosely based on the 7-1 pattern with the most notable exception of themed Motifs which are the main SASS entry points.

```
scss/
|- base/
|  |- _b-defaults.scss
|  |- _b-resets.scss
|  |- ...

|- components/
|  |- card
|    |- _c-card.scss
|    |- _c-card-title.scss
|    |- _c-card-media.scss
|    |- ...
|  |- list
|    |- _c-list.scss
|    |- _c-list-item.scss
|    |- _c-list-item-text.scss
|    |- ...
|  ...

|- icons/
|  |- _i-font-icons.scss
|  |- _i-svg-icons.scss
|  |- ...

|- layouts/
|  |- _l-footer.scss                        # Footer
|  |- _l-grids.scss                         # Grid system
|  |- _l-header.scss                        # Header
|  |- ...

|- modules/
|  |- ...                                   # TO BE FROZEN

|- motifs/                                  # Main Entry Points
|  |- hca/
|    |- hca.scss
|  |- sharecare/
|    |- sharecare.scss
|  |- trinity/
|    |- trinity.scss
|  ...

|- pages/
|  |- _homepage.scss                        # Homepage specific styles
|  |- ...

|- settings/
|  |- themes/
|    |- _th-burgundy.scss                   # Theme settings
|    |- _th-copper-rust.scss
|    |- _th-dark-cerulean.scss
|    |- ...
|  |- _s-base-config.scss                   # Default Application Theme and Configuration variables
|  |- _s-color-palette.scss                 # Variables list of every application color
|  |- _s-font-icons.scss                    # Font icon variables list of icon font unicode characters

|- typography/
|  |- _ty-lato.scss
|  |- _ty-proxima-nova.scss
|  |- _ty-sharecare-font-icons.scss
|  |- ...

|- vendors/
|  |- _vendor1.scss
|  |- _vendor2.css
|  |- ...

|- _core-application-mobile-styles.scss     # Main mobile application includes
|- _core-application-styles.scss            # Main application includes
```

#### Folder descriptions:

* base - resets and global element defaults
* components - all of the widgets that make up the reusable areas of the site
* icons - svg, font and other icons
* layouts - main site components (header, footer, navigation, sidebar, grids, etc.)
* modules - our current system - SHOULD BE FROZEN in favor of components
* motifs - 'theme' entry points for generating themed CSS for customers
* motifs/{motif} - contains entry points for desktop/mobile as well as customer-specific additions outside of the main shared application
* pages - page specific styles that do not coincide with this paradigm
* settings - application variables, functions, utilities, placeholders, etc
* settings/themes - lists of variables that override the default application variables and themed component colors
* typography - typography styles and font settings
* vendors - plugin/vendor specific styles



<a name="imports">Imports</a>
-----------

#### Application style configuration flow
<a name="import-flow"></a>

Files are imported in the following order:

```
|  motifs/{motif-name}/{motif-name}.scss                  # Entry points
|  | typography/{motif-preferred-typography}              # Preferred motif typography styles
|  | settings/themes/{motif-preferred-theme}              # Preferred motif theme overrides
|  | core-application-[mobile]-styles                     # Application core
|    | settings/base-config                               # Application default configuration
|      | settings/color-palette                           # Color palette variables
|      | settings/font-icons                              # Font Icon variables
|      | settings/sharecare-font-icons                    # Font Icon typography styles
|    | base/resets                                        # Reset styles
|    | base/defaults                                      # Default element styles
|    | layouts/...                                        # Layout styles
|    | components/...                                     # Component styles
|    | modules/...                                        # Existing application module styles
|    | icons/...                                          # Icon styles
|    | shame/...                                          # Shame styles
```

#### Importing partials
<a name="import-partials"></a>

* one file per @import
* one @import per line
* no new line between two imports from the same folder
* a new line after the last import from a folder
* file extensions and leading underscores omitted

```
@import 'base/b-reset';
@import 'base/b-default';

@import 'layout/l-navigation';
@import 'layout/l-grid';
@import 'layout/l-header';
@import 'layout/l-footer';
@import 'layout/l-sidebar';
@import 'layout/l-forms';

@import 'components/c-buttons';
@import 'components/c-carousel';
@import 'components/c-cover';
@import 'components/c-dropdown';

@import 'pages/home';
```



<a name="shame">Shame File</a>
----------

Imported at the very end of the stylesheets, `_shame.scss` will be where hacks and non-standard declarations are added to be refactored properly at a later time.

```
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a {
    color: #BADA55 !important;
}
```



<a name="responsive-design">Responsive Web Design and Breakpoints: Element Queries</a>
-----------

We declare the responsive behavior of a component within its selectors to help keep everything about the component in one location.  The duplication in the output and performance impact is [trivial at best](http://sasscast.tumblr.com/post/38673939456/sass-and-media-queries) when GZIP is taken into account but readability and maintainability improve greatly.  Read more about this in [a blog post](http://helloanselm.com/2014/web-performance-one-or-thousand-media-queries/) by Anselm Hannemann.

```
// SCSS
.foo {
  color: red;

  @include respond-to('medium') {
    color: blue;
  }
}

// Generated CSS
.foo {
  color: red;
}

@media (min-width: 800px) {
  .foo {
    color: blue;
  }
}
```



<a name="themes">Themes and Motifs</a>
-----------

#### Themes
<a name="theme"></a>

This project uses a modified version of the theme methodology described in [How to use Sass to build one project with multiple themes](https://webdesign.tutsplus.com/tutorials/how-to-use-sass-to-build-one-project-with-multiple-themes--cms-22104).

* A theme is a collection of variables that are used to overwrite the default component colors that are defined using the `!default` directive
* Theme settings can overwrite the default base `font-color`
* Theme settings can also overwrite the default application path variable `$theme` (defined in `_s-base-config.scss`) which typically point to the sprite and other image assets

To prepare a new theme:

1. copy/paste/rename an existing theme settings partial (ex: `_light-sea-green.scss` which is the Sharecare default theme)
2. overwrite the path variable `$theme` with the new theme name
3. overwrite component variable color values with the new theme colors (it is best to overwrite all default variables as the site defaults could change)
4. optionally overwrite base font color variable value with the new theme color (this will change some svg/font-icon colors as well unless specifically overwritten)

#### Motifs
<a name="motif"></a>

A motif is a specific collection of typography, theme settings, application styles and optional extended styles.  This collection is usually for clients with specific desires for their own themes.

* Each motif has its own directory to keep all items associated with that motif in one place
* A motif has a place to `@import` styles that apply only to that motif

To prepare a new motif:

1. copy/paste/rename an existing motif directory and entry file
2. update the path to the desired motif typography
3. update the path to the desired motif theme settings
4. optionally `@import` styles that apply only to this motif at the bottom of the file



<a name="other">Other</a>
-----------

#### Avoid IDs

IDs are really hard and are too specific. Use classes.

#### Avoid `!important`

If we need the `!important` declaration something is seriously wrong with our CSS architecture.
We need this only if we want really want to overwrite styles. If our code structure is clean we won't need this.



<a name="discussion-points">Things to Note</a>
-----------

* `modules` directory
    - this directory needs to be frozen and the targeted HTML refactored in favor of using component classes which will all be global in nature.  The results of which will be removing this entire directory, removing an extra HTTP request and seriously trimming down the number of bytes of our current global styles.
    - if you think something should be added to this directory then it should most likely be a component extension
* Publish component library as a Node Module
    - discuss pros / cons
    - discuss if components should be 1 per file or micro files as described in this guide
    - can be imported into major and micro sites for consistency
    - `.tag` files and `.handlebars` templates would have to be maintained and kept in sync
    - once a component is created and tested/design SVd as rock solid it should rarely ever change
    - as all CSS component classes would be global, there would be no 'module/section' css file/http request
    - developers will mostly focus on HTML composition of components (JSPs/Handlebars) into modules vs creating styles
    - controlled by architects with pull requests for developer additions
* Implementation and migration process for Sharecare
    - identify design patterns
    - convert patterns to layouts and components
    - get components design SVd and locked down
    - refactor current system
        - reorganize/rename files into proposed directory structure
        - update import statements
        - convert existing `themes` to `motifs`
    - update build process
* Implementation and migration process for themes
* Refactoring icon PNG usages to use Font Icons
    - goal is to empty the icons folder and eliminate/reduce the sprite.png in favor of SVGs and Font Icons
    - most of the icons already exist as SVGs in the Zeplin project
    - most of the icons are versions of arrows/chevrons/carets
    - work with design team on mapping PNG to SVG/Font Icon
    - work with design team on multi color SVG theme process
    - if icons need to stay, does any icon/sprite related process need improvement/modifications
* Combine desktop and mobile styles/JSPs and go responsive
    - Java/JSPs can still do their own desktop/mobile thing
    - Correct responsive styling will still render based on Java/JSP behavior
