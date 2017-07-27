***3/14/2017***

Beginning migration of config files from .json to .js

Beginning migration of .hbs templates to allow a mix of context and explicit property declarations

Created separate files for more base configuration variables

Added some more useful mixins (multi line ellipsis, url encode svg)

Updated style guide css build to use prefixer, sourcemaps, url encode svg

---

***3/20/2017***

Updated components to combine both explicit and context classes

Working out responsive header and footer templates and styles

---

***3/21/2017***

Working out responsive header, content and footer templates and styles

Fixed scoped property name references in a few components

***3/23/2017***

Working out responsive header, content and footer templates and styles

Began adding drawer component

***4/2/2017***

Still working out responsive header, content and footer templates and styles

Added 'global search' component (needs JS counterpart)

***4/9/2017***

Still working out responsive header, content and footer templates and styles

Added a Component Factory function.  Added breakpoint visibility classes.  Added social icons component.

***4/9/2017***

Still working out responsive header, content and footer templates and styles

Added updated SVG icons from Zeplin.  Updated link component to allow for label classes.  Added social icons and site logos components.

***4/10/2017***

Still working out responsive header, content and footer templates and styles

Added site about links and site about bar components.


***4/11/2017***

Still working out responsive header, content and footer templates and styles

Added site disclaimer links and site disclaimer bar components.

***4/17/2017***

Still working out responsive header, content and footer templates and styles

Added drawer, site header/footer bars, cleaned styles


***4/19/2017***

Still working out responsive header, content and footer templates and styles

Updated styles to use a base-size-unit variable as design has changed from 10px base spacing units to 8px.  Doing this to be flexible.

-----

6/21/2017

- Adding React Card components
- Adding React Loading Spinner component

-----

6/23/2017

- Added sticky bar component

-----

6/24/2017

- Updated some breakpoint functions and mix-ins
- Updated sticky bar with some consolidation and style changes

-----

7/2/2017

- Updated tooltip component
- Added use case for individually compiling and loading component JS in fractal preview for interactivity

-----

7/7/2017

- Removed hard coded icon in ToolTip component
- Added Sticky preview interactivity JS
- Updated Sticky functionality to be more stable

-----

7/8/2017

- Updated Sticky functionality to be more stable

-----

7/9/2017

- Started working out React component SDK

-----

7/10/2017

- Removed unnecessary positioning and width on loading spinner

-----

7/14/2017

- Adding assessment components
- Added React Link component
- Added more 'interactive' components for testing assessment components
- Updated components used by the assessment components after bugs/issues found

-----

7/16/2017

- Added recommendation summary and score (overall) summary and summary group components
- Added Assessment Score component

-----

7/17/2017

- Finished recommendation details navigation
- Updated Sticky Bar component to allow for a non-docking version

-----

7/19/2017

- Refactored Recommendation Details into smaller components, detail and detail group
- Added HashLink component
- Added component sub-classes for Card Header and Card Text
- Added ability to send HTML into Card Text as html prop (used for assessment recommendations, etc)
- Renamed Recommendation Navigation and TOC components
- Added React Breadcrumb and Breadcrumb Bar components
- Refactored Assessment Score component to a stateless component
- Added Link label class addition
- Added a few base size variables
- Added Recommendation Detail View component
- Updated related Recommendation Detail components

-----

7/20/2017

- Added Recommendation Summary View component
- Refactored Recommendation Summary Group to a stateless component
- Synchronized components between MoneyFit usages and this library

-----

7/21/2017

- Starting React version of responsive header and footer

-----

7/22/2017

- Added page header component, title bar and updated breadcrumb component
- Updated some component readme files

-----

7/23/2017

- Adding navigation components and site navigation bar

-----

7/24/2017

- Added site navigation and site navigation bar
- Added site logo to site navigation bar
- Added drawer components
- Adding and styling site drawer

-----

7/26/2017

- Updated component breakpoints from medium to small as per mock documents
- Updated breadcrumb to have natural height and better text wrapping
- Commented out some currently unused button styles
- Added drawer component and sub-components
- Added site drawer component
- Added ability to add input class names to Text Input component
- Added key to navigation tab array
- Finished site navigation and bar components
- Finished Page Header HTML, layout and responsiveness
- Added opacity map SCSS setting and accessor function
- Added overlay z-index
- Rearranged z-index map layers
- Fixed some breakpoint mix-ins
- Added global search form component
- Added Site search bar component
- Split out all logos into individual linked SVG icons
- Deleted a lot of Handlebars templates and configs
- Split SCSS spacing and typography units into their own partials and refactored usages of 'base-variables'
- Refactored away use of 'base-config'
- Cleaned up library component core configuration SCSS
- Updated SCSS partials to import all functions/settings they require
- Renamed SCSS spacing unit variable names
- Renamed common typography partial
- Moved and categorized some components into other directories


-----

TODO:
- Delete /scss/settings/_s-base-config.scss after updating Guidelines doc
- Delete /scss/settings/_s-base-variables.scss after updating Guidelines doc
- Delete /scss/style-guide.scss after updating Guidelines doc
