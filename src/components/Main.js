import React ,{useState , useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import './Card.css';

function Main(props) {

    const [posts, setPost] = useState([]);
  
    const [pageNo , setPageNo] = useState(1);




useEffect(() => {

    const getPopular = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/popular?api_key=6859b694b7a2f03c8661d8a7fed94e19&language=en-US&page=${pageNo}`}

    axios.request(getPopular).then(function (res) {
        //console.log(res.data);
        setPost(res.data.results);
        console.log(posts);
    
    }).catch(function (error) {
        console.error(error);
    });
},[pageNo])



    return (

        <div>
        <h2 style={{color:"#fff" ,textAlign: "center" }}>Today's Most Trending Movies : </h2>
        <h3 style={{color:"#fff"  }}>Page No: {pageNo}</h3>
        <div style={{textAlign: "center"}}>
{ pageNo>1 && 
<button className="page-button" onClick={() =>  setPageNo(pageNo - 1)
//  {props.pageNo}

 }>  ← Back</button>
  }

 <button className="page-button"  onClick={() => setPageNo(pageNo + 1)
//  {props.pageNo}

 }>Next →</button>


 </div>
             {  posts.map(post => (
    
    <Card 
    handleClick = {props.onClick}
     id={post.id} 
       url ={post.poster_path}
       movieName={post.title} 
       adultContent={post.adult} 
    rating ={post.vote_average} 
    overview= {post.overview}
    />
   
  ))}
 
        </div>
    )
}

export default Main
