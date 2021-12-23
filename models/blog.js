const mongoose = require('../db/connection');

const blogSchema = new mongoose.Schema(
    {
        title: String, 
        description: String, 
        body: String, 
        img: String,  
    }, 
    {timestamp: true}
);

const Blog = mongoose.model ('Blog', blogSchema );

module.exports = Blog;