# Flex-Sheet
## Outline
Flex Sheet is designed as a tabletop rpg digital character sheet solution. The core concept of
flex sheets is cards. Cards are created by the user and are given a title and some body text.
Cards can be moved around the screen as well as resized, all within a grid. This allows users to
define exactly how they layout their character sheets. For an example of how cards will work, see [this demo]( https://strml.github.io/react-grid-layout/examples/11-no-vertical-compact.html)

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
## Milestones
| Weeks  | Milestones |
| ------------- | ------------- |
| Week 9   | Content Cell  |
| Week 10  | **Data Storage**: A MongoDB Atlas project has been initialised and is connected to
            the application. Data models for most entities have been written.    
            **Authentication**: A rudimentary authentication system consisting of user login,
            including backend and frontend implementation.  |
| Week 11  | **Cards**: The Card/Grid system has been implemented, allowing users to create new
            cards, drag them to move them around the grid as well as resize them. Card text
            content is not yet implemented.  |
| Week 12  | **Card Text**: Text content of cards is implemented with a rich text editor.
  |
## Project Source Code Guide
## Summary of Next Steps

The second core concept behind Flex Sheet is formulas. Formulas in Flex Sheet work very similar to how they work in Microsoft Excel. Users can name certain values, and can then reference those named values in math formulas within the body content of cards. Below is an example of how formulas could work. Unfortunately we weren’t able to successfully implement this concept within the time period available.

Below is an example of how formulas could work.
<img src="formulas.png"/>

## Main Roles


## Development Guidelines

This section describes some guidelines that should be followed when contributing to the development of this application.

### Pulling

After pulling this project run `npm install` before starting work.

### Better Comments

This app makes use of the 'Better Comments' extension for Visual Studio Code and uses the following tags as defined in the workspace settings file:
![comment descriptions](https://i.imgur.com/avunwoW.png)

















