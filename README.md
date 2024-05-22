https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2galSzfRiP9d&index=1&pp=iAQB

**_____VIDEO 1 REACTJS INTRODUCTION**
React is an open source Javascript library used for building User Interfaces and Interactive web applications.

It makes it simple to create Single Page Apps(SPAs).

SPAs are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. Unlike traditional multi-page websites, where each interaction typically involves loading a new page from the server, SPAs use Javascript to dynamically update the content without needing to reload the entire page.

With SPAs webpages are loaded very quickly and results in a speedy user experience.

Platform used 
IDE - VsCode with Simple React Snippets package installed
*Edit Emmet settings for use in react templates.

**_____VIDEO 2 Creating a react app**
Create-react-app tool is a command line used to create a starter react project. It is easy to use as it comes with the setups and configurations, (instead of configuring them manually),we need for the project e.g babel and webpack which we use to compile our code to production code
It is a command in node.js, which is an open-source, cross-platform Javascript runtime environment.

__node.js installation
use npx create-react-app (and the name of the project) to create a starter project.
node is an open-source, cross-platform JavaScript runtime environment.  

**_____VIDEO 3 Components and Templates**
Components are the building blocks of a react application. A component is normally a self-contained section of content.
Components contain: i) Template - a template is a structure or blueprint that defines the layout and appearance of the component.(html)
                   ii) Logic - logic refers to the code that determines the behavior and functionality of the component. (Javascript)
In react, JSX is used instead of Html to easily create html style templates. Then in the background babel converts all the JSX to html.

* A component is a function that returns a JSX template then we export the component so that other files can use it.

**____VIDEO 4 Dynamic values in Templates**
With JSX we can output dynamic variables and values.
The values can only be strings, numbers and arrays. React converts numbers and arrays to strings when displaying.
Objects and Boolean values cannot be used.

You define your variables in the function, then enclose them with curly braces when placing them in an element. The same is done with values you place them in curly braces.

This JSX property is useful when using dynamic data.

**_____VIDEO 5 Multiple Components**
The first component to be rendered to the DOM is called a Root Component.
In react apps, components are structured in a way that makes up a component tree. The root component sits top of the tree, it is the component that is initially rendered in out html file. The other components are nested in the root component. 

We can use simple react snippets to create a stateless functional component (sfc).
Create a navbar component and export it, then import it in the root component.

**_____VIDEO 6 Adding Styles**
When we create a boiler plate react app it comes with some CSS styles for the root component. The styles are not only applied to the root component, bt they are also applied to any component that is in the browser at that time.
This is because React takes all the styles and adds them to the head element of the webpage.
When you import styles to a component it is applied to the other components in the webpage, it does not scope the styles to a single component.

CSS modules can be used to scope the styles or Style components.
Index.css can be used as a global style sheet.

Inline styling in JSX --- 
In Html we use the style property then add the CSS properties as a string value.
In JSX we add the properties as a dynamic value using curly braces, double curly braces, one indicating it is a dynamic value and the other one is because the value itself is an object.

**_____VIDEO 7 Click Events and Functions**
There are a lot of events that occur on a website when a user browses it e.g. hover events, keyboard, click events etc.

A function can be created in a component and linked to a button element or any other element, so that when a user clicks on it fires or returns a value. We do this using the onClick property and passing the name of the function as a dynamic value and reference.

We do not add the parenthesis to the name of the function as it is usually done, this is because adding the parenthesis invokes the function and it returns a value before the user clicks on the button.

When we want to pass an argument to the function when invoking it we use an anonymous function.
<button onClick={()=> handleClickAgain('mario')}>Click me again</button>., doing this will not invoke the function until the user clicks, as it is wrapped in an anonymous function. When the user clicks it fires up the function then invokes the other one which passes in the argument.

The events object or parameter typically refers to a data structure that holds information about events, such as user interactions or system notifications.
const.handleClick = (e) => {}

**_____VIDEO 8 Using State (useState hook)**
The State of a component means, the data being used in a component at that point in time. The state could be an array of values, booleans, strings or objects etc.
A hook is a special type of function that does a certain job. UseState hook gives as a way to make a reactive value and also provides us with a way to change that value whenever we want.

To use the useState hook we need to import it from the react library.
We invoke the function useState and give the state an initial value, then store it in a value using const and then use array destructuring to values that the hook function returns.
const [name, setName] = useState('Trevor')

When we use setName to change the value that triggers react to rerender the component and when it does that we have that new value of name that has been updated.

We can use the useState hook as many times as we want in a component.

**_____VIDEO 9 React Developer Tools**
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

**_____VIDEO 10 Outputting Lists**
Having a list as our values, to output the items in the list, we can hard code it in our template bt this is tiresome, onsumes a lot of time and the data may change.

We use the map method in Javascript to cycle through an array and can do something with each item in the array.

**_____VIDEO 11 Props**
Props are a way to pass data from one component, a parent component, into a child component.
We do this by making a property tag of the child component that we have nested inside the parent component, and then pass a dynamic value which is going to be the variable name we gave our values or data.
<Bloglist blogs={blogs}>

We then pass the property to the child component as props.
const Bloglist = (props) => {
    const blogs = props.blogs;
}

Props makes our components more reusable.
It allows us to use the same data in the parent component when needed later.

**_____VIDEO 12 Reusing Components**
Externalizing logic into a different component makes the code more reusable.
We can reuse the component in different places in our application where we need it and pass different data into it each time.

**_____VIDEO 13 Functions as Props (delete an item)**
When we want to edit data or update it, we do that where it is initialized, where it's state is. We shouldn't edit the data props passed to the child component.

We can pass functions as props
So we define a function in the parent component where our data is initialized then pass the function as props to the child component.
<Bloglist handleDelete={handleDelete}>

**_____VIDEO 14 useEffect Hook**
This hook runs a function every render of the component. It runs code on every render.
To use we need to import it.
We don't store the function in a variable as it returns no value. We pass a function as an argument to the hook, this function will run with the initial render, and every time there is a rerender.

**_____VIDEO 15 useEffect Dependencies**
We use a dependency array, for the useEffect to run for certain renders instead of running every time there is a render.
We can pass the dependency array as a second argument to the function.

An empty dependency array [], ensures that the useEffect only runs the function after the first initial render.
We can also add an actual dependencies to the array, [name]. This means any state values that should trigger the useEffect to run when they change.

**_____VIDEO 16 Using JSON Server**
JSON server allows us to create a fake REST API using a JSON file.
A JSON server is a lightweight, mock server that can be used to create a simple RESTful API for development and testing purposes. It allows developers to quickly set up a backend by providing data in JSON format, which the server then makes available via standard HTTP methods (GET, POST, PUT, DELETE)

We first create a JSON that is going to act as our database.
When using JSON server each top level property in objects is considered a resource, and it creates endpoints for us to interact with this resource, so we can do things like delete items from it, add items, edit items.
  {
    **"blogs": [**
        {
            list of objects
        }
    ]
  }

The next thing we do is use the JSON server package to essentially watch the JSON file and wrap it with some endpoints.
We can do this by either installing the JSON server package locally into the project and then use it, or we can use npx to run the code from the web and it will still watch the JSON file.
**npx run json-server --watch data/db.json --port 8000**

### Endpoints
/blogs            GET           Fetch all blogs
/blogs/{id}       GET           Fetch a single blog
/blogs            POST          Add a new blog
/blogs/{id}       DELETE        Delete a blog

**_____VIDEO 17 Fetching Data with useEffect**
We can fetch data from the json file in the useEffect hook, using the fetch request.
We use fetch function with an endpoint: 
useEffect(()=> {
   fetch('http://localhost:8000/blogs')
}, [])
This returns a promise and so we tackle on a then method. 
We cannot make the useEffect asynchronous, only if the logic is externalized as an  independent component, that is when you can make it async.

Making a function asychronous in react means defining it to handle asychronous operations, typically using the 'async' keyword. This allows the function to use 'await' to pause execution until, a promise is resolved or rejected.

The then method will fire a function after the promise is resolved. First we get a response object, the response object is not the data. To get the data we need to something with the response object, this is where we use the fetch API.
  .then(res => {
    return=res.json();
  })
  .then(data => {

  })
This parses the json into a javascript object for us and returns it as a value. This returns us another promise. We then tackle another then method, which fires a function once the promise is complete and it takes as a parameter the actual data that the above then method gets us.

**_____VIDEO 18 Conditional Templates**
We do a conditional template by using a logical and (&&). Logical and works by checking the value on the left, if it's true then the value on the right is executed, if false the value is not even checked.
{blogs && <Bloglist blogs = {blogs} title='All blogs!'/>}

A loading message can be displayed when the process of fetching data is been awaited. We can do this using the useState hook and the conditional templates.

**_____VIDEO 19 Handling Errors**
The catch method block catches any kind of network error and fires a function.
The catch error does not catch any other error apart from the connection error. 

Incase we have another error like our request reaches the server bt the server returns an error back maybe if the request is denied.
In this case we need to check the response object when we get it back, so we do an if check and check the ok property on the response object. We check if the ok property is not okay then we throw an error and enter our own message error, and then catch it with the catch block method.









