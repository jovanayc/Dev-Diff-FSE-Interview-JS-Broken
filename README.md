# Super hero task management
Find the bugs to get the superhero their task!
There are 2 bugs in this code, one on the Login page and one on the task management page. 
Start by trying to log into the web app. See the bug descriptions at the bottom of this Readme.

## Project Structure

The project consists of the following files:

HTML files
- `1_login.html`: The main login page where users enter their credentials.
- `2_home.html`: Displays the greeting and fireworks effect after a successful login. Show the tasks and super heros assigned to them.
- `3_congrats.html`: Displays a congratulatory message when you crack the code!

JS Script files
- `display.js`: Handles what to display on the task management page.
- `login.js`: Login flow that checks username and password against database of accounts. 
- `tasks.js`: Stores task database and task table; gets task for given username which is needed to start task.
- `user-data.js`: Contains stored user accounts in plain-text.

CSS file
- `style.css`: The stylesheet for styling the web pages.

- `README.md`: This file containing project information and credentials.

## Test Credentials

To log in, use the following test credentials:

- **Username:** `spidey`
- **Password:** `1234`

## How to Run the App

1. Clone or download the repository to your local machine.
2. Open the project folder in your code editor (e.g., VS Code).
3. Open `1_login.html` in your browser. You can do this by:
   - Right-clicking on `1_login.html` and selecting "Open with" > your preferred browser.
   - Or, using the Live Server extension in VS Code for a better development experience.

## Bug descriptions
Bug 1 - The log in won’t register input and allow the continue button to submit. Continue button should press and load next screen when it works. You need to restart live server to get log in button to work.
Bug 2  - The task is not connecting to the table information to correctly display the task of the username who logged in. Text should be green when it works.
