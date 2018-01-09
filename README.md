# React Webpack Setup

#### Install Babel
1. npm install -g babel
2. npm install -g babel-cli

#### Install Webpack
1. npm install webpack --save-dev
2. npm install webpack-dev-server --save-dev

#### Install React
1. npm install react --save
2. npm install react-dom --save

#### Install babel-presets
1. npm install babel-core --save-dev
2. npm install babel-loader --save-dev
3. npm install babel-preset-es2015 --save-dev
4. npm install babel-preset-react --save-dev

#### Create the required Files
1. Create index.html, App.jsx, main.js, webpack.config.js

#### Set Compiler, Server and Loaders
1. Configure webpack.config.js
2. in package.json edit scripts property to
    "start": "webpack-dev-server --hot"
3. edit index.html, App.jsx and main.js*
4. npm start to start the App
