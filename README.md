<h1 align="center"align="center">Meetups application</h1>


<h1 align="center"><img src='https://ik.imagekit.io/cnbmdh4b9w/Screenshot_2_xfikzQBbX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673723610101' alt='Main Page'/></h1>

<h1 align="center"><img src="https://ik.imagekit.io/cnbmdh4b9w/ezgif.com-gif-maker_8eB3qGaGz.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1673725536563" alt="gif showing the app"</h1>


<h1 align="center"align="center">Motivation</h1>
Project developed to practice **React Route v5** and **Google Firebase** to  simulate a backend (Api with a database)

<h1 align="center"align="center">Technologies</h1>

**React**

**React Route v5**
```npm install react-router-dom@5```

Defined the routes with ```<Route>```. 
Added the ***exact*** property to show the exact route.
Wrapped the ***routes*** around ```<Switch>``` to show the active page.
Used the ```<Link>``` component provided by the react-router-dom **instead of** the anchor tag ```<a>```, so, it prevents the browser from sending requests. 
Replaced ```<Link>``` with ```<NavLink>```, in order to show the active link by using activeClassName on the ```<NavLink>```

**Firebase to simulate an API which uses a RealTime database:**
[ Link to Firebase](https://firebase.google.com/)
Sign in with your google account. 
Provide a project name, disable Google Analytics
Use **Real Time Database** > Create Database > Start in **Test Mode** in order to be able to send requests.
This sets up a **database** and an **API** for us to send requests.
We send requests to the API, which behind the scenes stores the data in the database.
Then we fetch the data from Firebase.
**Example:**
<h1 align="center"><img src='https://ik.imagekit.io/cnbmdh4b9w/firebase_07XHKTtVii.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673723390157'alt="database in Firebase"/></h1>

**P.s**
In order to play with the browser local storage, saved the **Favorites items** into the **localStorage* by passing a **react state** with a list of **Meetups** to it.

<h1 align="center"align="center">Styling the App</h1>

***Create React app*** gives us a feature (**css modules**) that allows us to style our component in a way that it wont clash with other classes/components.  
This is achieved because the styles are scoped when using **Css Modules**. It **dynamically** creates/modifies each className to a unique name.
Example how the file should be named:```MainNavigation.module.css```
When you import it, you can import as **classes** and this is an object of properties that can be used to style your component. 
Example of how to import a css module file.
```import classes from "./AllMeetup.module.css";```

## To run the project:
In the project directory, you can run:

## `clone`  
```run npm install ```
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.




