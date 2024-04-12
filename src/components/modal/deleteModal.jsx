import React, { useContext, useState } from 'react'
import { ArticlesContext } from '../../contexts/ArticleContext';
import axios from 'axios';
import LoadingButton from '../buttons/LoadingButton';
import useSweetAlert from '../../hooks/useSweetAlert';



export default function DeleteModal({ isOpen , setIsOpen ,article}) {
    const {articleDispatcher}= useContext(ArticlesContext)
    const [isLoading , setIsLoading] = useState(false)
    const Toast = useSweetAlert()


    const fetchData = async () => {
      try {
        const res = await axios.delete(`https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/Articles/${article.id}`);
        const data = res.data;
        if (data){
          articleDispatcher({
              type :'delete-title',
              id:data.id,
          })
          Toast.fire({
            icon: "success",
            title: "Title deleted successfully"
          });
          setIsOpen(false);
          setIsLoading(false)
        } 
      } catch (error) {
          Toast.fire({
            icon: "error",
            title: "An internal server Error"
          });
          setIsOpen(false);
          setIsLoading(false)

      }
    };

    const handleDelete = () => {
        setIsLoading(true)
        fetchData();
    };

    const handleCancel = () => {
        setIsOpen(false);
        setIsLoading(false)
    };

  return (
    <>
    <div className={isOpen ? 'fixed inset-0 flex items-center backdrop-blur-sm justify-center z-50' : 'hidden'}>
      <div className="fixed inset-0 bg-black  opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">
        <p className="mb-4">Are you sure you want to delete?</p>
        <div className="flex justify-center">
          <button 
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed "
            onClick={handleDelete}
            disabled={isLoading}
          >
              <LoadingButton isLoading={isLoading} text='Delete' /> 
          </button>
          <button 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleCancel}
            disabled={isLoading}
          >
            <span className='w-14 block'>No</span>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
