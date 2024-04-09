import React, { useContext, useEffect, useReducer, useState } from 'react'
import Recent from '../icons/recent'
import useArticlesData from '../../hooks/useArticlesData';
import Delete from '../icons/delete';
import Edit from '../icons/edit';
import axios from 'axios';

import AriticleItem from './ariticleItem';
import articlesReducer from '../../reducers/articlesReducer';
import { ArticlesContext } from '../../contexts/ArticleContext';

export default function ArticlesCard({limited}) {

    const [articlesData , articleDispatcher ] = useReducer(articlesReducer,[]) 
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{

            try {
                const res = await axios.get('https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/Articles')
                const data = await res.data
                const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

                articleDispatcher({
                    type : 'initial-articles',
                    articlesData : sortedData
                })
            
                setIsLoading(false)
            } catch (error) {
                setError(error)  
            }
        }
        fetchData()

    },[])
    
  return (
    <>
        <div className='w-full bg-[#dceefd] p-3 '>
            <div className='p-3 items-center flex gap-x-3 hover:bg-neutral-500 cursor-pointer hover:bg-opacity-15 rounded-xl'>
                <div className='w-10'>
                    <img src="/articles.png" alt="article" />
                </div>
                <div>
                    <p className='font-semibold text-xl tracking-wide'>Articles</p>
                    <div className='flex items-center -mt-1 text-sm text-neutral-600 font-extralight gap-x-1'>
                        <Recent />
                        <p>Recents</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-h-[480px] m-3 overflow-y-scroll'>
            <table className='w-full '>
                <tbody className=''>
                    <ArticlesContext.Provider value={{articlesData,articleDispatcher}}>
                        {articlesData&&!isLoading?
                            (limited?articlesData.slice(0,3).map((article,index)=>(
                                <AriticleItem key={index} index={index} article={article}/>
                            )):articlesData.map((article,index)=>(
                                <AriticleItem key={index} index={index}   article={article}/>
                            ))):<tr>
                                    <td>'loading'</td>
                                </tr>
                        }
                    </ArticlesContext.Provider>
                </tbody>
            </table>
        </div>
    </>
  )
}
