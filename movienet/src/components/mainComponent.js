
import React, { useState, useEffect } from 'react';

import ActionAreaCard from './MUICard';
import CircularIndeterminate from './Spinner';



function MainComponent(){
    const [fetchedData,setFetchedData] = useState([]);
        const API_URL = 'http://www.omdbapi.com/?apikey=707f112d';
        
    const [searched,setSearched] = useState('')
    const[error,setError] = useState(false)
    const[spin,setSpin] = useState(false)
    async function movieFetching(title){
        setSpin(true)
        if(title === '' || title === undefined){
            setError(true)
        }
        else{
            setError(false)
        await fetch(`${API_URL}&s=${title}`)
        .then((data1)=>{
            if(data1 !== undefined ||  data1.length>0){
            return data1.json()
            }
        })
        .then((value2=>{
            setSpin(false)
            console.log(value2.Search)
            if(value2 !== undefined || value2 !== '' || value2.length>0){
            const newData = value2.Search
           
            
            

            if(newData === undefined || newData === '' || newData.length<=0){
                setError(true)
                console.log('less than zero')
            }
            else{
                setError(false)
                setFetchedData(newData)
            }
        }
        

          
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
        <div className='mainDiv'>
            <div className='headerName'>
                
            <h1 className='textDesign'>Movie Net</h1>
            </div>
            
            <div className='searchBarStyle'>
                <input type='text' placeholder='Enter Movie name' onChange={TextHandler} className='inputDesign'/>
                <button type='buttn' onClick={buttonHandler} className='buttonDesign'> Search</button>
            </div>
            {spin ? <CircularIndeterminate/>:<p></p>}
            
            {error ? 
             <p>No Result to Show Search Something Valid</p>
               :
               <div className='cardStyle2'>

               {fetchedData.map(item=>(
                       <div className='cardStyChild'>
                       <ActionAreaCard title={item.Title} image={item.Poster} year={item.Year}  type={item.Type} />
                       </div> 

                   )
               )}
               </div>
                   

        }
            
            
           


        </div>
    )
}


export default MainComponent;