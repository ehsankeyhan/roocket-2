import React from 'react'

export default function articlesReducer(articlesData , action) {
    switch (action?.type) {
        case 'add':
            
            return[
                ...articlesData,
                {
                    name :action?.name
                }
            ];
    
        case 'initial-articles':
            return action.articlesData;

        case 'edit-title':
            return articlesData.map((article)=>{
                if(action.id===article.id){
                    article.name = action.newTitle
                }
                return article;
            });

        case 'delete-title':
            return articlesData.filter((article)=>{
                return action.id!==article.id;
            });
    
        default:
            return articlesData;
    }
}
