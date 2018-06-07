# Spotify code challenge 

#### steps to run the project

1. clone the repo
2. ```yarn install``` or ```npm install```
3. ```yarn start``` or ```npm start``` this runs node server.js (needed for login) and create-react-app servers
4. open browser in `http://localhost:3000`

#### summary

##### This project has four routes: 

`/` this route renders the login page

`/search` this route needs authentication first and then you can seach for songs

`/current` shows a song that the current user is currently playing

# `/following` shows the top 50 artists followed by the current logged user

##### The directory structure is given by react-create-app but all the stuff inside `/src` is created the following way:

`/src/components` Has all the react JSX components
`/src/components/login` contains the web components for "login" view
`/src/components/search` contains the web components for "search" view
`/src/components/current` contains the web components for "current track" view

`src/actions` contains all the redux actions per component page/route

`src/reducers` contains all the redux reducers per component page/route

`src/store` contains a redux store configuration + the following:
- reduxImmutableStateInvariant library for detecting state mutation in development process
- thunk library to dispatch async actions
- logger for logging store state during the development process

`src/services` contains API ajax calls to spotify API this uses axios as web client

`src/util` contains some useful methods you can use through the app

`src/App.js` is the web component that handles app layout

`src/index.js` is the entry point
