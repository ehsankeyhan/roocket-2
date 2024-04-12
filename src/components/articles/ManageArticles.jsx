import React from 'react'
import ArticlesCard from './ArticlesCard'


export default function ManageArticles() {
   
  return (
    <>
        <div className=' mb-20 md:w-full w-80 rounded-2xl bg-white  overflow-hidden '>
            <ArticlesCard limited={false} />
        </div>
    </>
  )
}
