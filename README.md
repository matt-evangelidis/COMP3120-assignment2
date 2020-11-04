# Flex-Sheet
## Outline
Flex Sheet is designed as a tabletop rpg digital character sheet solution. The core concept of
flex sheets is cards. Cards are created by the user and are given a title and some body text.
Cards can be moved around the screen as well as resized, all within a grid. This allows users to
define exactly how they layout their character sheets. For an example of how cards will work,
see [this demo](https://strml.github.io/react-grid-layout/examples/11-no-vertical-compact.html)

The target user group for Flex Sheet is players of tabletop roleplaying games such as Dungeons
and Dragons and Pathfinder. Users will use the app to track information and statistics about
their characters. Flex Sheet is designed as a kind of response to the many other digital solutions
that exist to fulfill a very similar purpose, but with one particular aspect in mind; ‘flexibility’.
While using other similar solutions such as dedicated apps such as the official Dungeons and
Dragons character sheet app or form fillable pdfs, we have found that dedicated applications
were often too strict on enforcing their own system on how information was portrayed, and
while form fillable pdfs offer some degree of flexibility, they also had their own unique problem
of awkward and buggy text display issues.

## Reference
A reference to your second Github repository if you used one

## Milestones

| Weeks | Milestones |
| ------------- | ------------- |
| Week 9 | **Project Strucutre**: Implement the projects structure. Create all the folders and layout. |
| Week 10 | **Data Storage**: A MongoDB Atlas project has been initialised and is connected to the application. Data models for most entities have been written. **Authentication**: A rudimentary authentication system consisting of user login, including backend and frontend implementation. |
| Week 11 | **Cards**: The Card/Grid system has been implemented, allowing users to create new cards, drag them to move them around the grid as well as resize them. Card text content is not yet implemented. |
| Week 12 | **Card Text**: Text content of cards is implemented with a rich text editor. |

## Project Source Code Guide
The project is split into two sections:
1. Front (src)
2. Back (server)

### Front-End (src)
![Frontend folders](/Screenshots/src.png)

The src folder contains all the files and code for the frontend section of the project.


| Folders | Role |
| ------------- | ------------- |
| Actions| Authicates post and get requests |
| Components | Houses most of the projects parts. Including auth, Notes, Sheets, the Layout |
| Constants | Houses the index  |
| Services | Holds login.js that sends the HTTP post request to /login |
| Styles | Stores all the different styling for the Frontend|
| Utils |  |
| App |  Provides a baseline css stylesheet that will override any default browser styles |
| Index | Authicates post and get requests |
| Theme | Houses themes used on the frontend |


### Back-End (server)
![Backend Folders](/Screenshots/backendfiles.png)

The server folder contains all the files and code for the backend section of the project.

| Folders | Role |
| ------------- | ------------- |
| Models | Houses all the models for the various parts of the project (Notes, Sheet, User) |
| Routes | Houses the sheets and user routes for the server |
| Tests | User testing to make sure everything is working |
| Validation | Authentication to make sure the correct information is being used and sent to the server |
| app.js |  |
| server.js |  |

## Summary of Next Steps

The next stage of this project would be to include formulas: Formulas in Flex Sheet work very similar to how they work in Microsoft Excel. Users can name certain values, and can then reference those named values in math formulas within the body content of cards. Below is an example of how formulas could work. Unfortunately we weren’t able to successfully implement this concept within the time period available.

Below is an example of how formulas could work.

![Formulas](/Screenshots/formulas.png)

## Main Roles

| Role  | Assigned User |
| ------------- | ------------- |
| Frontend  | Suphichaya Chaochuangchot  |
| Backend  | Thomas Clark  |
| Database  | Matthew Evangelidis  |
| Backend  | Justin Erasmus  |

- The team mainly used discord as our communication platform, where each member was able to share files, join voice and video calls, discuss topics and brainstorm together. 
- Another product used was Trello, allowing the team to keep track of what what has been done, what is currently being worked on and what needs to be completed in the future.

## Development Guidelines

This section describes some guidelines that should be followed when contributing to the development of this application.

### Pulling

After pulling this project run `npm install` before starting work.

### Better Comments

This app makes use of the 'Better Comments' extension for Visual Studio Code and uses the following tags as defined in the workspace settings file:
![comment descriptions](https://i.imgur.com/avunwoW.png)

















