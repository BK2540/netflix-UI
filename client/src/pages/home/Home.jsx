import { useEffect, useState } from 'react';
import Features from '../../components/features/Features';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try{
        const res = await axios.get( 
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""}`,{
              headers:{
                token: 
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjY1MDQzY2I1MmY3MzhlYzRjYTUzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTc3Nzg1NiwiZXhwIjoxNjkwMjA5ODU2fQ.2F2xf6klLk1atGeIwzkUD63QsMCiRE0WFt3UX2zsdbw" 
            }
            }
        ); 
        
        setLists(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='home'>
        <Navbar/>
        <Features type={type} setGenre={setGenre}/>
        {lists.map((list) => (
        <List list={list} />
      ))}
        
    </div>
  )
}

export default Home