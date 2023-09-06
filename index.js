const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json())
app.use(express.static('public'))



const commentsRoute = require('./routes/comments')
const contactsRoute = require('./routes/contacts')
const productsRoute = require('./routes/products')
const vehiclesRoute = require('./routes/vehicles')

app.use('/comments', commentsRoute)
app.use('/contacts', contactsRoute)
app.use('/products', productsRoute)
app.use('/vehicles', vehiclesRoute)



const port = process.env.PORT || 4001;




app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
