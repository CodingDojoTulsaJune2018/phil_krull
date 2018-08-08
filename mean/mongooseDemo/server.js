/////////////// single file on the server side /////////////

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
// const path = require("path");
const fs = require("fs");
const PORT = 8888;

mongoose.connect("mongodb://localhost:27017/users", { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ urlencoded: true }));


const PostSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Posts must have a title"]},
    content: {type: String, required: [true, "Posts must have content"]},
  }, {timestamps: true})
  const BlogSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Blogs must have a title"], minlength: [3, "Titles must have at least 3 characters"]},
    posts: [PostSchema]
  }, {timestamps: true})
  const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, "A first name is required"]},
    last_name: {type: String, required: [true, "A last name is required"]},
    blogs: [BlogSchema]
  }, {timestamps: true})

  
const Blog = mongoose.model('Blog', BlogSchema);
const User = mongoose.model('User', UserSchema);

const user = new User();

user.first_name = "Phil";
user.last_name = "Krull";

// user.save();

for(let i = 0; i < 10; i++) {
    Blog.create({title: `This in blog number ${i+1}`}, function(err, blog){
        if(err){
            // handle the error from creating a blog
            console.log(err);
        }
        else {
            console.log("=======================================", blog)
            user.blogs.push(blog);
            if(i == 9) {
                user.save()
            }
        }
    })    
}
// setTimeout(5000, test );

// function test(user){
// }


app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})