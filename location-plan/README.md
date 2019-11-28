# Laminar location plan

### Technical description

Application consists of a tree which can span indefinitely by adding nodes sub nodes. It represents a hierarchy for project management
where one is able to observe the parent-child structure of appended elements. Nodes can be edited, deleted, collapsed and extracted by adding checkbox properties.
Deleting a node will result in the deletion of all of its children's. Collapse action will toggle the children's of the parent node. 

### Example scenario (rail project structure)

A rail project will have multiple stations, each with multiple levels (not necessarily the same number for each station), and
each level may have areas, and each area may have a list of rooms in it. Thereby, the hierarchy would look like:
Project > Station > Level > Area > Room
The above might not be the same for every construction site, it can be structured differently in terms of amount as well as main and sub elements.

### Getting started (configure Node and Git)

- have Node.js installed on your machine. Install node [here](https://nodejs.org/en/download/). Node comes with npm (package manager) needed for executing commands in order to install, and run the app.
- have Git installed. Follow instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Application composition

The application consists of a frontend only.

The frontend is written in React.js (16+) using ES6, and HTML + CSS. Unit tests are written using Enzyme and Jest framework.
Currently, the app doesn't use Typescript.

### Download repository and run the app

After setting up Git and Node (npm included) open your Terminal/Command Prompt.

Clone the repository to your computer: ```git clone https://github.com/eugensunic/laminar-4d-treestructure.git```.
To install the frontend go inside the directory *location-plan* (folder must contain *package.json*) and run: **npm install**.
To run the app execute **npm run start**. App should run on port 3000 (http://localhost:3000/) if port not occupied, otherwise it will assign the next available port number.
To run tests execute **npm run test**.


