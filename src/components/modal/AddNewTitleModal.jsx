import axios from 'axios';
import React, { useContext, useState } from 'react';
import { ArticlesContext } from '../../contexts/ArticleContext';

export default function AddNewTitleModal ({ isOpen, setIsOpen}) {
  const [title, setTitle] = useState('');
  const {articleDispatcher} = useContext(ArticlesContext)
  const [isLoading , setIsLoading] = useState(false)

  const addNewTitle = async (newTitle) => {    
    try {
      const res = await axios.post(`https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/Articles`, {
        title: newTitle,
        createdAt : Date.now()
      });
      const data = res.data;
      if (data){
        articleDispatcher({
            type :'add',
            id:data?.id,
            title:newTitle,
            createdAt:Date.now()
        })
        setIsOpen(false)
        setIsLoading(false)
        setTitle('')
      } 
    } catch (error) {
        console.log(error);
    }
  };


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSaveNewTitle = (newTitle) => {
      setIsLoading(true)
      addNewTitle(newTitle);
 }

  const handleCancelNewTitle = () => {
    setIsOpen(false); 
  };

  return (
    <div className={isOpen ? 'fixed inset-0 flex items-center backdrop-blur-sm justify-center z-50' : 'hidden'}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">
        <p className="mb-4">Add New Title</p>
        <input 
          type="text" 
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          value={title} 
          onChange={handleTitleChange} 
        />
        <div className="flex justify-end">
          <button 
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleSaveNewTitle(title)}
          >
            {isLoading?'loading':'save'}
          </button>
          <button 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={handleCancelNewTitle}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};


