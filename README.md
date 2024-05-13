____VIDEO 1 REACTJS INTRODUCTION
React is an open source Javascript library used for building User Interfaces and Interactive web applications.

It makes it simple to create Single Page Apps(SPAs).

SPAs are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. Unlike traditional multi-page websites, where each interaction typically involves loading a new page from the server, SPAs use Javascript to dynamically update the content without needing to reload the entire page.

With SPAs webpages are loaded very quickly and results in a speedy user experience.

Platform used 
IDE - VsCode with Simple React Snippets package installed
*Edit Emmet settings for use in react templates.

_____VIDEO 2 Creating a react app
Create-react-app tool is a command line used to create a starter react project. It is easy to use as it comes with the setups and configurations, (instead of configuring them manually),we need for the project e.g babel and webpack which we use to compile our code to production code
It is a command in node.js, which is an open-source, cross-platform Javascript runtime environment.

__node.js installation
use npx create-react-app (and the name of the project) to create a starter project.
node is an open-source, cross-platform JavaScript runtime environment.  

_____VIDEO 3 Components and Templates
Components are the building blocks of a react application. A component is normally a self-contained section of content.
Components contain: i) Template - a template is a structure or blueprint that defines the layout and appearance of the component.(html)
                   ii) Logic - logic refers to the code that determines the behavior and functionality of the component. (Javascript)
In react, JSX is used instead of Html to easily create html style templates. Then in the background babel converts all the JSX to html.

* A component is a function that returns a JSX template then we export the component so that other files can use it.

____VIDEO 4 Dynamic values in Templates
With JSX we can output dynamic variables and values.
The values can only be strings, numbers and arrays. React converts numbers and arrays to strings when displaying.
Objects and Boolean values cannot be used.

You define your variables in the function, then enclose them with curly braces when placing them in an element. The same is done with values you place them in curly braces.

This JSX property is useful when using dynamic data.

_____VIDEO 5 Multiple Components
The first component to be rendered to the DOM is called a Root Component.
In react apps, components are structured in a way that makes up a component tree. The root component sits top of the tree, it is the component that is initially rendered in out html file. The other components are nested in the root component. 

We can use simple react snippets to create a stateless functional component (sfc).
Create a navbar component and export it, then import it in the root component.

_____VIDEO 6 Adding Styles


_____VIDEO 7 Click Events and Functions


_____VIDEO 8 Using State (useState hook)
The State of a component means, the data being used in a componentat that point in time. The state could be an array of values, booleans, strings or objects etc.
A hook is a special type of function that does a certain job. UseState hook gives as a way to make a reactive value and also provides us with a way to change that value whenever we want.


