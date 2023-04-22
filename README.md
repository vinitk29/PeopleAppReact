# People App React

Visit our people app on https://vinitk29.github.io/PeopleAppReact/

This project is build using React, Redux, TypeScript using below template
```
npx create-react-app my-app --template typescript.
```

The data of 10 users is fetched from https://jsonplaceholder.typicode.com/users endpoint using GET API call.

The profile image is generated by following GET call
```
https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm deploy`

Runs the build by internally calling the above command and then deploys the final bundle to github-pages site.

