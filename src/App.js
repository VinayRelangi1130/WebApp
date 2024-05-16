import React, { useState } from 'react';
import './App.css';
import ImageComp from './components/ImageComp';

function App() {
  const accessToken = "8nKE34Ab0YWqQgtyC46hBvisu8Y9MhwtkV3dsCMxQew"
  const [value,setValue] = useState("")
  const [data,setData] = useState([])
  const [totalPages,setTotalPages] = useState()
  const storeTheInput = (e) => {
   setValue(e.target.value)
  }
  const fetchData = async () => {
    // https://api.unsplash.com/search/photos
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${accessToken}&query=${value}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const responseData = await response.json();
      // console.log(responseData)
      return responseData
      // setData(responseData);
      // setLoading(false);
    } catch (error) {
      console.log(error)
      // setError(error);
      // setLoading(false);
    }
  };

  const searchBtn = async () => {
    let array = await fetchData(value)
    console.log(array)
    setData(array?.results)
    setTotalPages(array?.total_pages)
  }

  return (
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiJ_xS9f3pGH3NkqRyzDn2loPTdH8-fzPuQtJ9cWnnA&s" alt="logo" className='imglogo' />
      <div className='searchBar'>
       <input type="text" className='search' onChange={storeTheInput} onFocus={() => {
        setData([])
       }}/>
       <button onClick={searchBtn} className='btn'> Search</button>
       </div>
       <div className='btn-container'>
        <button className='btns'>Mountains</button>
        <button className='btns'>Flowers</button>
        <button className='btns'>Beaches</button> 
        <button className='btns'>Cities</button>
       </div>
       
       <div className='parentCont'>
        <div className="total-Image-Container">
         {data?.length > 0 && (
           data.map((each) => <ImageComp key={each?.id} urls={each.urls}/>)
         )}
          </div>
       </div>
    </div>
  );
}

export default App;
