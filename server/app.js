//require modules
const express = require('express');
// const { resolvePackageData } = require('vite');
const app = express()
const router = express.Router({ mergeParams: true });
const userRoutes = require('./routes/users')
const methodOverride = require('method-override')
const eventRoutes = require('./routes/events');
const { default: mongoose } = require('mongoose');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use('/', userRoutes)
app.use('/', eventRoutes)


mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});




app.get('/', (req, res) => {
    res.send("Home Page!")
})





app.all("*", (req, res, next) => {
    // next(new ExpressError("Page Not Found", 404));
    res.send('404!!')
    next();
});


app.use((err, req, res, next) => {
    // res.send('Something went wrong')
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    // console.log(err);
    res.status(statusCode).render("error", { err });
});

app.listen(3000, (req, res) => {
    console.log('SERVING ON 3000!')
})