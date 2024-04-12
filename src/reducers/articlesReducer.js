
export default function ArticlesReducer(articlesData , action) {
    switch (action?.type) {
        case 'add':
             let newData = [
                ...articlesData,
                {   
                    id:action?.id,
                    title :action?.title,
                    createdAt:action?.createdAt
                }
            ]
            return newData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            ;
    
        case 'initial-articles':
            return action.articlesData;

        case 'edit-title':
            return articlesData.map((article)=>{
                if(action.id===article.id){
                    article.title = action.newTitle
                    article.createdAt = action.createdAt
                }
                return article;
            }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            ;

        case 'delete-title':
            let newDataDeleted=articlesData.filter((article)=>{
                return action.id!==article.id;
            }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            return newDataDeleted;
    
        default:
            return articlesData;
    }
}
