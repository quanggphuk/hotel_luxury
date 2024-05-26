# Hotel Project

## Dependencies

All the dependencies can be found in `package.json` file
```bash
"@reduxjs/toolkit": "^1.8.1",
"bcryptjs": "^2.4.3",
"color": "^4.2.3",
"colors": "^1.4.0",
"concurrently": "^7.1.0",
"cors": "^2.8.5",
"dotenv": "^16.0.0",
"express": "^4.17.3",
"express-async-handler": "^1.2.0",
"http-proxy-middleware": "^2.0.6",
"jsonwebtoken": "^8.5.1",
"mongoose": "^6.2.11",
"mysql": "^2.18.1",
"mysql2": "^1.7.0",
"path": "^0.12.7",
"react-icons": "^4.3.1",
"react-redux": "^8.0.1",
"sequelize": "^6.20.0",
"sequelize-auto": "^0.8.8",
"sequelize-auto-models": "^0.2.14",
"sequelize-cli": "^6.4.1",
"stream": "^0.0.2"
```

# How to use (local PC)
Open terminal at project folder and do following step : 
## First time running 
When you running server for the first time, you need to install package by using :  
```
  npm install 
```
Make sure that you have installed **npm** and **nodeJS** .
## Developement mode
### Set `.env`
At `.env` file, make sure that 
```
NODE_ENV = developement
```
### Start back-end server
At project folder, run server :   
 ``` 
  npm run server
```
### Start front-end server
```
cd frontend
npm install
npm start
```

