import React, { useState, useEffect } from 'react';
import HttpRequest from './HttpRequest';

const DivideByCity = (City, FullAddress) =>{
    let SoloData = {
        Toronto: '',
        Peel: '',
        York: '',
        Durham: ''
    }

    if(City === 'Toronto'){
        SoloData = { ...SoloData, Toronto: FullAddress}
    }

  else  if(City === 'Brampton' || City === 'Mississauga' || City === 'Caledon'){
        SoloData = { ...SoloData, Peel: FullAddress}
    }

 else   if(City === 'Markham' || City === 'Vaughan' || City === 'Newmarket'){
        SoloData = { ...SoloData, York: FullAddress}
    }

 else   if(City === "Oshawa" || City === 'Clarington' || City === 'Ajax' || City === 'Pickering'){
        SoloData = { ...SoloData, Durham: FullAddress}
    }
    return SoloData
}

export default () =>{

    const [ res, Req, isLoading ] = HttpRequest()
    const [ Region, setRegion ] = useState([])
    
    useEffect(() =>{
    //Getting Data from the server
        const Load = {
          "Query": "SELECT * FROM dataset"
        }
    
        Req(`/api/HttpRequest.php?Query=${Load.Query}`)


      },[])

    
    useEffect(() =>{
      
        if(res !== '' && !isLoading){
          let Orderlist = {
              Toronto: '',
              Peel: '',
              York: '', 
              Durham: ''
          };
          for(const x in res){
            let City = res[x].Address.split(",")[1].trim();
         
          const { Toronto, Peel, York, Durham } = DivideByCity(City, res[x])

             Orderlist = {
                 Toronto: [...Orderlist.Toronto, Toronto ].filter((item) => item !== ""),
                 Peel: [ ...Orderlist.Peel, Peel].filter((item) => item !== ""),
                 York: [...Orderlist.York, York].filter((item) => item !== ""),
                 Durham: [...Orderlist.Durham, Durham].filter((item) => item !== ""),
             }
          
          }

        
           setRegion(Orderlist)
        }
 

    }, [res, isLoading])
   
   
   


 return Region
}