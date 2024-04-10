import React, { useContext, useEffect, useReducer, useState } from 'react'
import Recent from '../icons/Recent'
import Delete from '../icons/Delete';
import Edit from '../icons/Edit';
import axios from 'axios';

import AriticleItem from './AriticleItem';
import ArticlesReducer from '../../reducers/ArticlesReducer';
import { ArticlesContext } from '../../contexts/ArticleContext';
import { NavLink } from 'react-router-dom';
import Plus from '../icons/Plus';
import AddNewTitleModal from '../modal/AddNewTitleModal';

export default function ArticlesCard({limited}) {

    const [articlesData , articleDispatcher ] = useReducer(ArticlesReducer,[]) 
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState(null)
    const [isNewTitleModalOpen, setIsNewTitleModalOpen] = useState(false);

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
    useEffect(()=>{
        fetchData()
    },[])


    
  return (
    <>
        <div className='w-full bg-[#dceefd] p-3 '>
            {limited?<NavLink to={'/Articles'} className='p-3  flex justify-between hover:bg-neutral-500 cursor-pointer hover:bg-opacity-15 rounded-xl'>
                <div className='flex items-center gap-x-3'>
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
            </NavLink>
            :<div className={`'p-3  flex justify-between rounded-xl'`}>
                <div className='flex items-center gap-x-3'>
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
                <button onClick={() => setIsNewTitleModalOpen(true)} className='p-2 w-10 h-10 flex justify-center items-center rounded-xl hover:bg-neutral-500 hover:bg-opacity-15'>
                    <Plus w='17' h='17' />
                </button>
            </div>}
            
        </div>
        <div className='max-h-[480px] m-3 overflow-y-scroll'>
        <ArticlesContext.Provider value={{articlesData,articleDispatcher}}>

            <table className='w-full '>
                <tbody className=''>
                        {articlesData&&!isLoading?
                            (limited?articlesData.slice(0,3).map((article,index)=>(
                                <AriticleItem key={index} index={index} article={article}/>
                            )):articlesData.map((article,index)=>(
                                <AriticleItem key={index} index={index}   article={article}/>
                            ))):<tr>
                                    <td>'loading'</td>
                                </tr>
                        }
                </tbody>
            </table>
            <AddNewTitleModal 
            isOpen={isNewTitleModalOpen} 
            setIsOpen={setIsNewTitleModalOpen} 
            />
            </ArticlesContext.Provider>
        </div>
        
    </>
  )
}
