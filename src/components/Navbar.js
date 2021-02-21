import React , {useState ,useRef, useEffect} from 'react';
import { SiThemoviedatabase } from 'react-icons/si'
import {BsSearch} from 'react-icons/bs';
import axios from 'axios';
import Card from './Card';
import Main from './Main';



function Navbar() {
  const inputRef = useRef();
const [ search , setSearch] = useState("");
const [searchResult, setSearchResult] = useState([]);
const [buttonClick,setButtonClick] = useState(false);


const searchDetail = {
  method: "GET",
  url:`https://api.themoviedb.org/3/search/movie?api_key=6859b694b7a2f03c8661d8a7fed94e19&language=en-US&query=${search}`
}

const searchButton = () => {
  setButtonClick(true);
axios.request(searchDetail).then(function (res) {
	//console.log(res.data);
  setSearchResult(res.data.results);
   //console.log(searchResult);

  
}).catch(function (error) {
	console.error(error);
});
}




useEffect(()=> {
  inputRef.current.focus();
})


    return (
        <div>
       <table className="titlebar">
       <tbody>
       <tr>
      <td style={{cursor: "pointer", color: "#228B22"}}>
      {/* <img width = "14" src="" /> */}
      <h1><SiThemoviedatabase /></h1>
      </td>
      <td width = "10"/>
      <td style={{cursor: "pointer",color: "#228B22"
      }}>
      
      <h1>MovieDB Search</h1>
      </td>
      <td width = "700" />
      <td>
      <input  className="search-bar" type="text" value={search}
      onChange = {(e) => {setSearch(e.target.value)}}  ref={inputRef}
       />
      </td>
       <td width = "2"/>
      <td onClick={searchButton} style={{cursor: "pointer"}} >
      <BsSearch />
      </td>
      </tr>
      </tbody>
       </table>

{ buttonClick ? <div>
  
<h3 style={{color: "#fff" , textAlign: "center"}}>{searchResult.length} results found: </h3>
 {  searchResult.map(searchRes => (
   
    <Card 
    cardDetail = {(searchRes.id)}
     id={searchRes.id} 
       url ={searchRes.poster_path}
       movieName={searchRes.title} 
       adultContent={searchRes.adult}
    rating ={searchRes.vote_average} 
    overview= {searchRes.overview}
    />
   
  ))}  </div> :  <Main />}

 
   
 </div>
    )
}

export default Navbar

   /* <p id ={searchRes.id} > {searchRes.l} </p> */