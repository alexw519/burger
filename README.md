# Burger

https://alex-burger-orm-1.herokuapp.com/

This website presents the user with a list of burgers that have or have not been "Devoured" and lets the user choose to devour a burger or add a new burger.

#### Homepage
On the homepage, you can select one of the buttons for the burgers under "To Be Devoured!" and by doing so, it will move it to the "Devoured" tab. You are also able to add a new burger by just putting in the name and pushing the "Add Burger" button.

## How It Works
Everytime the page is loaded, it pulls up two lists. "To Be Devoured!" which is a list of burger objects in which the "devoured" property is false. And "Devoured" which is a list where the "devoured" property is true.

When you select the "Devour" button, it runs an sql update command which will change the property of "Devoured" to true.

When you add a burger, it will run a create sql command using the burgername that you put in the text field.

## Technologies
Written in javascript, node.js.
Uses express, express-handlebars and mysql2 packages.
Uses heroku for the server.
Uses jawsdb on heroku for database.
