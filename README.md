## Eric's AutoFi assignment

**Instructions:**

- Install [NodeJS](https://nodejs.org/en/download/)
- Clone this repo
- Open a command/shell prompt and go in to this project/repo directory
- Run `npm install` or `yarn install` if you have yarn
- Run `npm start` to start the application server
- Use your web browser to access http://localhost:6789/
- You can run `npm test` to run a  unit test for the API


**Assumptions:**

- This is more of JS assignment than UI/UX, so not much time was spent to make it pretty
- Running a modern browser that natively supports ES6.  In a production env, I'd transpile all the code in addition to minifying/bundling it all in to a single js resource
- Would use sass or less for styling, which would again all be compressed and bundled in to a single file
- API only returns 100 posts.  In a real-world scenario there would be paging or infinite scroll or something to reduce size of the DOM
