import {useEffect,useState} from 'react'

export const useFetch = (url) => {


    const [state, setstate] = useState({
        data: null,
        isLoadnig: true,
        error: null
    });

    const getFetch = async () =>{

        setstate({
            ...state,
            isLoadnig: true
        })
              
        const resp = await fetch(url)
        const data = await  resp.json()

         setstate({
            data,
            isLoadnig: false,
            error: null
         })
    } 
  
  
    useEffect(() => {
        getFetch()
       
    }, [url]);

    return {
        data:  state.data,
        isLoadnig: state.isLoadnig,
        error:  state.error
    }
}
