# Overview

![Flexsheet](https://media.giphy.com/media/LZmF7wsbGJISHRylUx/giphy.gif)


## Login

Login.png shows the login screen for out application.

<!-- <img align="left" height="300" src="login.png"> -->
![Login](login.png)
On the login screen is the username and password fields that users must fill in to be authenticated and logged in.
The form includes two buttons:
1. Login
The login button redirects the user to the Home page specific to the user, which contains all their saved Notes and Sheets.
2. Register
The Register button takes you to Register form. <br />


## Login Errors

Login Errors: Error messages appear when the fields are empty in red.

<!-- <img align="left" height="300" src="login_auth.png"> <br /> -->
![Login Erros](login_auth.png)


## Register

Regiser.png shows the registration page, where new users are able to create an account

It includes three input fields:

- Username: Where the user inputs their chosen username

- Password: Where the user inputs their chosen password

- Repeat Password: Where the user repeats their password

<!-- <img align="left" height="200" src="register.png"> -->
![Registration](register.png)

## Header

![Header/navbar](Header.png)

Header.png is the navigation bar of the application.

Through it, the user is able to navigate through the different pages of the application.

The Header includes the Title/Logo and the Login button

Once the user is logged in, the header changes to include additional options/buttons.

The login button has been replaced with a User button, showing which user is currently logged in.

Additionally, a SHEETS button has been added in the middle of the header, which allows the user to be redirected to the Sheets page.


## Logout

Lougout.png illustrates how the logout is displayed for the user.

It shows which user is logged in as well as giving the user the option to logout or return to the home page.


![Logout](logout.png)

## Footer

The Footer is displayed on all pages.
It displays the members of the team and the title of the application.

<!-- ![Footer](Footer.png) -->
<img align="left" height="200" src="Footer.png">


## Notes

Notes.png displays the currently displayed sheet and its contents.

Each Note can be moved across the screen, and the user can change the size of each note individually.
This allows each user to customise and place their notes however they like.

within Notes.png we can see the user is using a Sheet called "Smiley" and the Notes within that Sheet have been loaded.

At the top right side of the screen, we can see two blue buttons:

1. plus (+): When pressed, new notes are created for the user within the current sheet
2. Save (floppydisk): When pressed, saves the current sheet.

![Notes](notes.png)

Each Note includes a text editor that allows for a broad variety of rich text composition, including basic text styles all the way to embedded media.

To edit a note, double click the Note in question. Once you have done so, a editable text block appears.
Once done, just click outside of the text box.
It works with multiple cards whilst saving/loading.

We used [Draft.js](https://draftjs.org/) for the text editor



## Sheets

<img align="left" height="200" src="sheets.png">

Sheets.png shows the Sheets page, where the user is able to pick a Sheet to open it and see its saved Notes(contents)

Each user has their own list of saved Sheets, which are saved to MongoDB. Whenever the user saves a Sheet, it will be added to the list 
on the top left. Each Sheet when clicked directs the user into the sheet.


Under all the Sheets is a link to create another Sheet.

<!-- ![Sheets](sheets.png) -->


## Brought to you by Team X:
### - Thomas Clark
### - Matthew Evangelidis
### - Suphichaya Chaochuangchot
### - Justin Erasmus






