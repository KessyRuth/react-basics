import { useState,useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
      {title:'My new website', body:'lorem ipsum...', author: 'Kessy', id:1},
      {title:'Welcome party!', body:'lorem ipsum...', author: 'Leo', id:2},
      {title:'With dev top tips', body:'lorem ipsum...', author: 'Trevor', id:3}
    ]);

    const [name, setName]= useState('Kessy');

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !==id);
      setBlogs(newBlogs);
    }

    useEffect(()=> {
      console.log("Use effect run")
    }, [])
   return (  
        <div className="home">
            <Bloglist blogs={blogs} title='All blogs' handleDelete={handleDelete}/>
            <Bloglist blogs={blogs.filter((blog)=>blog.author==='Kessy')} title="Kessy's blog"/>
            <button onClick={()=>setName('Trevor')}>Change name</button>
            <p>{name}</p>
            </div>
    );
 
}
export default Home;