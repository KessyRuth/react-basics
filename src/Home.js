import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
      {title:'My new website', body:'lorem ipsum...', author: 'Kessy', id:1},
      {title:'Welcome party!', body:'lorem ipsum...', author: 'Leo', id:2},
      {title:'With dev top tips', body:'lorem ipsum...', author: 'Trevor', id:3}
    ])
   return (  
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p>Written by {blog.author}</p>
                </div>
            ))}
            </div>
    );
}
 
export default Home;