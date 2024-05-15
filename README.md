https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2galSzfRiP9d&index=1&pp=iAQB

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
When we create a boiler plate react app it comes with some CSS styles for the root component. The styles are not only applied to the root component, bt they are also applied to any component that is in the browser at that time.
This is because React takes all the styles and adds them to the head element of the webpage.
When you import styles to a component it is applied to the other components in the webpage, it does not scope the styles to a single component.

CSS modules can be used to scope the styles or Style components.
Index.css can be used as a global style sheet.

Inline styling in JSX --- 
In Html we use the style property then add the CSS properties as a string value.
In JSX we add the properties as a dynamic value using curly braces, double curly braces, one indicating it is a dynamic value and the other one is because the value itself is an object.

_____VIDEO 7 Click Events and Functions
There are a lot of events that occur on a website when a user browses it e.g. hover events, keyboard, click events etc.

A function can be created in a component and linked to a button element or any other element, so that when a user clicks on it fires or returns a value. We do this using the onClick property and passing the name of the function as a dynamic value and reference.

We do not add the parenthesis to the name of the function as it is usually done, this is because adding the parenthesis invokes the function and it returns a value before the user clicks on the button.

When we want to pass an argument to the function when invoking it we use an anonymous function.
<button onClick={()=> handleClickAgain('mario')}>Click me again</button>., doing this will not invoke the function until the user clicks, as it is wrapped in an anonymous function. When the user clicks it fires up the function then invokes the other one which passes in the argument.

The events object or parameter typically refers to a data structure that holds information about events, such as user interactions or system notifications.
const.handleClick = (e) => {}

_____VIDEO 8 Using State (useState hook)
The State of a component means, the data being used in a component at that point in time. The state could be an array of values, booleans, strings or objects etc.
A hook is a special type of function that does a certain job. UseState hook gives as a way to make a reactive value and also provides us with a way to change that value whenever we want.

To use the useState hook we need to import it from the react library.
We invoke the function useState and give the state an initial value, then store it in a value using const and then use array destructuring to values that the hook function returns.
const [name, setName] = useState('Trevor')

When we use setName to change the value that triggers react to rerender the component and when it does that we have that new value of name that has been updated.

We can use the useState hook as many times as we want in a component.

_____VIDEO 9 React Developer Tools
React DEveloper tools is an extension for chrome and firefox. You can find it in chrome web store and in firefox you can find it in firefox ADD-ONS library.

React developer tools integrate with the browser development tools and give us extra features that we can use on any website created with react.

When you check on console the button on the right side (>>), react developer tools add two extra tabs; components and profiler.
The component tree gives us a component diagram/tree of our current application.
When you hover over the different components in console, you get extra features which are useful, e.g
 i)  Suspense icon
 ii) Inspect the matching DOM element - It is used to find whatever DOM element the component represents in the elements tab.
 iii) Log this component data to the console icon - it logs all the data about the component to the   console.
 iv) View source for this element icon - it helps us to view the source file or javascript file of the component in the dev tools.

This tool is helpful when developing, testing or debugging react applications.

_____VIDEO 10 Outputting Lists
Having a list as our values, to output the items in the list, we can hand code it in our template bt this is tiresome, onsumes a lot of time and the data may change.

We use the map method in Javascript to cycle through an array and can do something with each item in the array.

_____VIDEO 11 Props
Props are a way to pass data from one component, a parent component, into a child component.
We do this by making a property tag of the child component that we have nested inside the parent component, and then pass a dynamic value which is going to be the variable name we gave our values or data.
<Bloglist blogs={blogs}>

We then pass the property to the child component as props.
const Bloglist = (props) => {
    const blogs = props.blogs;
}

Props makes our components more reusable.
It allows us to use the same data in the parent component when needed later.

_____VIDEO 12 Reusing Components




