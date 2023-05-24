const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users   =require("../models/user.js");

//Router Middlewares
app.use(express.json());

//Type of query (Hint)

/*

1. / --> this means we need to consider all users
2. /?name=swa --> Will return count of all the user name that have prefix swa. We will (Swaraj Jain, Swarak agrawal, etc). 
3. /?name= -->this means we need to consider all users

*/


// Complete this Route which will return the count of Number of Prefixmatch for the name in the query/

app.get("/",async function(req,res){

    var count = 0;

    //Write you code here
db.myCollection.find({ $nor: [{ age: { $lt: 18 } }, { age: { $gt: 30 } }] });
```

This will return all documents where the **`age`** field is not less than 18 or greater than 30.

You can also use these logical operators in combination with other query conditions to create more complex queries. For example:

```
db.myCollection.find({ $and: [{ age: { $gte: 18 } }, { age: { $lte: 30 } }], gender: "male" });
```

This will return all documents where the **`age`** field is between 18 and 30 (inclusive) and the **`gender`** field is "male".
    //update count variable

    res.send(JSON.stringify(count));

});

module.exports = app;
