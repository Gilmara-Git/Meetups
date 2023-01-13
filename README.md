<h1 align="center">MeetUp application</h1>


This is a SPA ( Single Page Application) with React
To **create** the project: npx create-react-app my-app

##Motivation
Project developed to practice 'React Route v5' and simulate a backend (Api + database) with google Firebase
##Tools:
**Routing:**
React Route v5
npm install react-router-dom@5

Defined the routes with ```<Route>```. 
Added the ***exact*** property to show the exact route.
Wrapped the ***routes*** around ```<Switch>``` to show the active page.
Used the ```<Link>``` component provided by the react-router-dom **instead of** the Anchor tag ```<a>```, so, it prevents the browser from sending a request. 

**Firebase:**
[firebase](https://firebase.google.com/)
Sign in with your google account. 
Provide a project name, disable Google Analytics
Use **Real Time Database** > Create Database > Start in Test Mode in order to be able to send requests.
This sets up a database and an API for us to send requests.
We send the request to the API which behind the scenes stores the data in the database.
**How to se the request on this Firebase API** 
<h1><img src=""/></h1>

##Styling the App
***Create React app*** gives us a feature (**css modules**) that allows us to style our component in a way that it wont clash with other classes.  
This is achieved because the styles are scoped when using **Css Modules**. It **dynamically** creates/modifies each className to a unique name.
Example how the file should be named:```MainNavigation.module.css```
When you import it, you can import as **classes** and this is an object of properties that can be used to style the component. 
Example of how to import a css module file.
```import classes from "./AllMeetup.module.css";```

##To run the project:
In the project directory, you can run:

## `clone`  
```run npm install ```
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\


