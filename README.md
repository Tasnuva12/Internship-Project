# How to run the project
- Install git for windows https://git-scm.com/downloads
- Go to the project folder
- Right click and choose 'open git bash here'
- npm install
- npm start

# How to develop New web page
- Create the webpage js file in the ux folder. e.g - Nova.js
- Do normal react things - e.g - export , import, react component development etc. https://reactjs.org/
- *Make sure you export your component*
- Go to app.js
- import your component
- `{
    path: "/nova",
    name: "Nova",
    view: Nova
  },` - Add a new route.
- Refresh browser.
- Any issue restart the server like this - 
    - Stop the server clicking ctrl+c in gitbash or you can write this command : npx kill-port 3000
    - Start the server by npm start
# Develop UI
- https://ant.design/components/overview/
