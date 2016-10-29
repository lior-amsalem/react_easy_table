# React Package Template
This is basic initial react component template, if you want to build a new react component that you or others can consume (`import`/`require`) via npm registery for example - you can build the component (inside `src`) and publish it to npm.


## How To Use
1. Install with `npm install my-component-name --save`.
2. Import to your "js" file: `import Input from 'my-component-name';`.
3. In your code, use like that: `<MyComponentName onChange={this.test}/>`.
4. See `example/basic.js` as reference.

## Features
1. 

## Todo
1. 

## Bugs
1. 

## Screenshot

![alt tag](examples/my-component-name.jpg)

## How to Contribute
1. Fork the project (top right button, in github UI).
2. Clone the forked repository to your machine.
3. Run `npm install`.
4. Run `npm start` (or better `npm run demon` in case you have `nodemon`, otherwise run `npm install nodemon -g`).
5. Create a new branch.
6. Go to `http://localhost:3334/`.
7. Write your code, commit and push to your own forked repository in the new branch.
8. Open a PR and wait for someone to review and merge to master.