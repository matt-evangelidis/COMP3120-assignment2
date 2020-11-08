# Deployment

## Local Server

### Front-End

To get the front end running, 

enter the terminal and type:

1. npm start

### Back-End

To get the back end server running,

enter the terminal and type:

1. npm run dev-server

## Deployment to the Internet

### Heroku

Deployment

1. Commit changes to the repository
2. Run the command: git push heroku HEAD:master

![Backend Terminal](/Screenshots/backend.png)

## Future Changes

- The password field in the User object, along with the backend routes for handling logins, will need to be updated to instead store and verify password hashes rather than the direct passwords themselves for obvious security pruposes.

## Live App

[http://www.flex-sheet.com](http://www.flex-sheet.com)
