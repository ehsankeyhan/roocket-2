import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import articlesReducer from '../reducers/articlesReducer';


export default function useArticlesData(apiUrl) {
    const [articles , setArticles] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState(null)
    // const {articleDispatcher}  =useContext(articlesReducer)
    useEffect(()=>{
        
        const fetchData = async ()=>{
            try {
                const res = await axios.get(apiUrl)
                const data = await res.data
                const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                // if(data){
                //     articleDispatcher({
                //         type : 'initial-articles',
                //         articlesData : sortedData
                //     })
                // }
                setArticles(sortedData)
                setIsLoading(false)
            } catch (error) {
                setError(error)  
            }
        }
        fetchData()
    },[apiUrl])

  return {articles , error ,isLoading};
}
