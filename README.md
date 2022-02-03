### React Assignment solution:
* I have implemented the application with one page called Home.

* you need first to run : ``` npm install ``` .

* you can start running the application with this command: ``` npm run start ``` .

* you need to install an HTTP server to be able to run the react application in production mode : ``` npm install serve -g ``` .

* to run the React application in production mode run : ``` npm run build ``` then  ``` serve -s build ``` .

* I have used Jest for unit testing the components, you can try it out by this command: ``` npm run test ```.

* I have used Cypress for E2E testing : you can try it out by this command: ``` npm run cypress:open ``` , If that command doesn't work , maybe this command is better :  ``` yarn start & yarn cypess open ``` .

* for code organization and having the same syntax, I have used Eslint. I have some eslint rules setted up in .eslintrc.js .

* I have downloaded eslint plugin in VScode, so that the editor can easily detect if there is an eslint error.

* I have used 'lint-staged' in package.json , so that if there is an error for eslint can be easily detected before committing my changes to github.

* In the application,when you click on the button to request an invite , first you need to write the correct email,confirm email and FullName , then the api will be called.

* if you enter invalid fields , you will get an error messages and the api will not be called.

* If you used 'Usedemail@airwallex.com' , you will get an error message from the api response.

* I have used 'react-modal' library for the popup dialog, it is more flexible library and can be edited easily.

* I have use useContext and useReducer hooks for state managements, to store the states and share the states between components. also to not have Prop drilling issue.

* I have used Atomic component design for structuring the components: 
https://atomicdesign.bradfrost.com/chapter-2/

the component sturcture:

```
.
├── README.md
├── public
│   └── broccoli-logo.png
│   └── index.html
│   └── favicon.ico
│   └── manifest.json
│   └── facebook.png
│   └── twitter.png
│   │
├── cypress
│   └── fixtures
│   └── integeration
│   │   └── home.js
│   └── plugins
│   └── support
│   │
├── src
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   │    └── index.js
│   │   │   │    └── style.css
│   │   │   │    └── Button.test.js
│   │   │   │
│   │   │   ├── Dialog
│   │   │   │    └── index.js
│   │   │   │    └── style.css
│   │   │   │    └── Dialog.test.js
│   │   │   │
│   │   │   ├── Input
│   │   │   │    └── index.js
│   │   │   │    └── style.css
│   │   │   │    └── Input.test.js
│   │   │   │
│   │   ├── molecules
│   │   │   ├── Footer
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   │   └── Footer.test.js
│   │   │   │
│   │   │   └── Header
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   │   └── Header.test.js
│   │   │   │
│   │   │   └── UserFrom
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   │   └── UserForm.test.js
│   │   │   │
│   │   ├── organisms
│   │   │   ├── HomeContent
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   │   └── HomeContent.test.js
│   │   │   │
│   │   │   ├── RequestInvite
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   │   └── RequestInvite.test.js
│   │   │   │
│   │   │   ├── SuccessInvite
│   │   │   │   ├── index.js
│   │   │   │   └── style.css
│   │   │   │   └── SuccessInvite.test.js
│   │   │   │
│   │   └── templates
│   │   │   ├── HomeLayout
│   │   │   │   ├── index.js
│   │   │   │   ├── style.js
│   │   │   │   └── HomeLayout.test.js
│   │   │   │
│   ├── helper
│   │   ├── validations.js
│   │   │
│   └── pages
│   │    └──Home
│   │    │  └──index.js
│   │    │  └──style.css
│   │    │  └──Home.test.js
│   └── store
│   │    └──actionsType.js
│   │    └──DialogReducer.js
│   │    └──StoreProvider.js
│   │    │
│   └── service
│   │    └──api.js
│   │    │  
│   │    │  
├── index.css
├── index.js
├── setupTests.js
├── style.js
├── cypress.json
├── node_modules
│   └── [...]
├── .eslintrc.js
├── .prettierrc
└── package-lock.json
└── package.json
```
