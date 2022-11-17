
# Sportsee

## General informations

This project presents the first page of the Sportee application which will allow the user to follow the various elements relating to his sports coaching in the form of graphics.

Minimum resolution : 1024 x 780px 

## Prerequisites

- nodeJS (version 16.14.2)

- npm (version 8.5.0)

- Visual Studio Code (version 1.73.1) or another code editor

- git

## Technologies and Dependencies

- Javascript

- [Sass (version 1.55)](https://sass-lang.com/)

- [Axios (version 1.1.3)](https://axios-http.com/)

- [Prop-types (version 15.8.1)](https://www.npmjs.com/package/prop-types)

- [React (version 18.2)](https://fr.reactjs.org/)

- [React-dom (version 6.4.2)](https://fr.reactjs.org/docs/react-dom.html) 

- [React-scripts (version 5.0.1)](https://www.npmjs.com/package/react-scripts) 

- [Recharts(version 2.1.15)](https://recharts.org/en-US/)

- [JsDoc (version 4.0)](https://jsdoc.app/)

## Installation 
#### BACKEND    
    
- Clone this project

```bash
  git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
```

- Go to the project directory

```bash
  cd P9-front-end-dashboard
```

- Install dependencies

```bash
  npm install
```

#### FRONTEND

- Clone this project

```bash
  git clone https://github.com/ascean/sportsee.git
```

- Go to the project directory

```bash
  cd sportsee
```

- Install dependencies

```bash
  npm install
```

## Run the project

You need to run first backend then frontend

#### BACKEND

Start the server

```bash
  npm run start
```
It will be running on port 3000

#### FRONTEND

Start the server

```bash
  npm run start
```
To this question "Something is already running on port 3000. Would you like to run the app on another port instead? » (Y/n)", please answer Y

Finally, open http://localhost:3001 to view the application in your browser. (3001 is your port number)

## Display datas

By default, user_id = 12 and datas are API datas

### From API
- Default datas :
```bash
  http://localhost:3001 
  or
  http://localhost:3001/?user_id=12 
```
- Others datas :
```bash
  http://localhost:3001/?user_id=18
```
### From mock file
- Default datas :
```bash
  http://localhost:3001/?from=mock 
  or
  http://localhost:3001/?user_id=12&from=mock 
```
- Others datas :
```bash
  http://localhost:3001/?user_id=18&from=mock
```

## Document source code with JsDoc

### Installation

JsDoc is installed in devDependencies.

### Generation

```bash
  npm run jsdoc
```
### Consulting

Jsdoc files are generated in public folder. 
You can access to jsdoc by using URL : http://localhost:3001/docs/index.html

## Authors

- Sandrine

