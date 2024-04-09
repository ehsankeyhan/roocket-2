import React from 'react'
import ArticlesCard from './articlesCard'


export default function ManageArticles() {
   
  return (
    <>
        <div className=' mb-20  rounded-2xl bg-white overflow-hidden'>
            <ArticlesCard limited={false} />
        </div>
    </>
  )
}
