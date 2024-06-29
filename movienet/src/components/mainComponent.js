
import React, { useState, useEffect } from 'react';

import ActionAreaCard from './MUICard';




function MainComponent(){
    const [fetchedData,setFetchedData] = useState([]);
        const API_URL = 'http://www.omdbapi.com/?apikey=707f112d';
        
    const [searched,setSearched] = useState('')
    const[error,setError] = useState(false)

    async function movieFetching(title){
        if(title === '' || title === undefined){
            setError(true)
        }
        else{
        const response = await fetch(`${API_URL}&s=${title}`)
        .then((data1)=>{
            return data1.json()
        })
        .then((value2=>{
            console.log(value2.Search)
            const newData = value2.Search
            console.log("I am new data"  + newData[0].Title)
            newData.forEach(element => {
                console.log(element.Title)
            });
            
            setFetchedData(newData)

          
        }))
    }


    }
    function buttonHandler(){
        movieFetching(searched)
    }

    function TextHandler(e){
        setSearched(e.target.value)

    }
    useEffect( ()=>{
        movieFetching('venom');
        
    
    },[])



    return(
        <div>
            
            <div>
                <input type='text' placeholder='Enter Movie name' onChange={TextHandler}/>
                <button type='buttn' onClick={buttonHandler}> Search</button>
            </div>
            {fetchedData.map(item=>(
                    <div>
                    {/* <p>{item.Title}</p>
                    <p>{item.Year}</p>
                    <img src={item.Poster} alt='moviePoster'></img> */}
                   <ActionAreaCard title={item.Title} image={item.Poster} year={item.Year}  type={item.Type}/>
                    </div>  
                )
            )}
            
            <p>hello</p>


        </div>
    )
}


export default MainComponent;