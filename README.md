# MyLibrary GraphGL

A simple GraphQL [Apollo Server](https://www.apollographql.com/docs/apollo-server/) with a [MongoDB](https://www.mongodb.com/) Database

#### Types
* Book
* Author
* User

### Run the project

#### Configure MongoDB connection details 
* Make sure to add the following to the [config.js](https://github.com/Silby17/MyLibrary-GraphQL/blob/master/src/config.js)
```
    MONGO_URL: URL to your MongoDB
    MONGO_USER: You MongoDB username  
    MONGO_PASSWORD: Your MongoDB password
    APP_PORT: (optional) Port to run your Apollo Server on
```
#### Run
```
npm run start
```