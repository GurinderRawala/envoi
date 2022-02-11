import React, { useState } from 'react';
import envoi from '../API/envoi';

export default () =>{
   
    
    const [response , setResponse] = useState('');
    const [isLoading, setLoading] = useState(false);

    const SendInput = async(url) =>{

        try {
            setLoading(true);
            const Response = await envoi.get(url);
          
            if(Response){
                setResponse(Response.data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error.message);
        }
          
        };
     
   return[response, SendInput, isLoading];
}