import React, { useContext } from 'react'
import { ArticlesContext } from '../../contexts/ArticleContext';
import axios from 'axios';

export default function DeleteModal({ isOpen , setIsOpen ,article}) {
    const {articleDispatcher}= useContext(ArticlesContext)


    const handleDelete = () => {
        let apiUrl = `https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/Articles/${article.id}`
        const fetchData = async () => {
            try {
              const res = await axios.delete(apiUrl);
              const data = res.data;
              if (data){
                articleDispatcher({
                    type :'delete-title',
                    id:data.id,
                })
              } 

            } catch (error) {
                console.log(error);
            }
          };
          fetchData();

          setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

  return (
    <div className={isOpen ? 'fixed inset-0 flex items-center backdrop-blur-sm justify-center z-50' : 'hidden'}>
      <div className="fixed inset-0 bg-black  opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">
        <p className="mb-4">Are you sure you want to delete?</p>
        <div className="flex justify-end">
          <button 
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={handleCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
