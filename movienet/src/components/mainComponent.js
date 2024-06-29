
import React, { useState, useEffect } from 'react';






function MainComponent(){
    const [fetchedData,setFetchedData] = useState([]);
    const API_URL = 'http://www.omdbapi.com/?apikey=707f112d';
    


    async function movieFetching(title){
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json;
        console.log(data)
        setFetchedData(data)


    }
    useEffect( ()=>{
        movieFetching('spiderman');
        
    
    })
    return(
        <div>
            {fetchedData.map(
                item=>(
                    <div>
                    <p>{item.imdbID}</p>
                    <p>{item.movie}</p>
                    </div>  
                )
            )}
        </div>
    )
}


export default MainComponent;