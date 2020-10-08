# Flex-Sheet

Flex-Sheet is a digital tabletop rpg character sheet solution designed with flexibility and universal compatibility in mind.

## Development Guidelines

This section describes some guidelines that should be followed when contributing to the development of this application.

### Pulling

After pulling this project run `npm install` before starting work.

### Better Comments

This app makes use of the 'Better Comments' extension for Visual Studio Code and uses the following tags as defined in the workspace settings file:
<ul id="better-comments-tags" style="list-style:none">
    <hr class="divider">
    <li  style="color:#ffcc00"><code>//# Block Description - Used to describe code blocks such as functions or conditionals. Can also be used in the first line of a file to describe the code in that file.</code></li>
    <hr class="divider">
    <li style="color: #63db00"><code>//* Line Description - used to describe the code in a single line. The most common use of this will be describing the purpose of a declared variable.</code></li>
    <hr class="divider">
    <li style="color:#00cddb"><code>//? Clarification - Used to clarify potentially confusing code.</code></li>
    <hr class="divider">
    <li style="color:#ff1f0f"><code>//FIXME: - Used to indicate bugged code that needs to be fixed. Needs to contain a description of the error. If you have any potential solutions to the problem they should also be described.</code></li>
    <hr class="divider">
    <li style="background-color:#CCCCCC; color:black;"><code style="background-color:#CCCCCC">//DEPLOYMENT: Used to indicate code that is only intended for testing and needs to be modified or removed before deployment. Instructions on how the code needs to be modified must be included.</code></li>
</ul>

<!-- <style>
    body {
        background-color:#282C34;
    }

    * {
        color:#ABB2BF;
    }

    hr.divider {
        height:1px;
    }
</style> -->