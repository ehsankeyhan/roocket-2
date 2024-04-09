import React, { useContext, useState } from 'react'
import Edit from '../icons/edit'
import Delete from '../icons/delete'
import DeleteModal from '../modal/deleteModal';
import EditModal from '../modal/editModal';
import axios from 'axios';
import { ArticlesContext } from '../../contexts/ArticleContext';

export default function  AriticleItem({article,index}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
                    id:article.id,
                })
              } 
            } catch (error) {
                console.log(error);
            }
          };
          fetchData();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSaveTitle = async (newTitle) => {
        let apiUrl = `https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/Articles/${article.id}`
        const fetchData = async () => {
            try {
              const res = await axios.put(apiUrl, {
                name: newTitle,
                createdAt : Date.now()
              });
              const data = res.data;
              if (data){
                articleDispatcher({
                    type :'edit-title',
                    id:article.id,
                    newTitle,
                })
              } 
            } catch (error) {
                console.log(error);
            }
          };
          fetchData();
        setIsEditModalOpen(false);
     }
    
      const handleCancelEdit = () => {
        setIsEditModalOpen(false); 
      };

  return (
    <tr className=' w-full font-thin'>
        <td className='px-2'>
            <div className='grid grid-cols-12 items-center group hover:bg-zinc-200 hover:bg-opacity-80  rounded-lg'>
                <p className=' text-center w-12'>{index+1}</p>
                <p className='text-left col-span-5 font-semibold'>{article.name}</p>
                <div className='col-span-3 m-1'>
                    <p>{new Date(article.createdAt).toLocaleDateString('en-Us',{ month: 'long', day: '2-digit' })}</p>
                    <p>{new Date(article.createdAt).toLocaleTimeString('en-Us',{ hour12: false, hour: '2-digit', minute: '2-digit'})}</p>
                </div>   
                <div className=' col-span-3 justify-end hidden gap-x-2 group-hover:flex'>
                    <button onClick={() => setIsEditModalOpen(true)}>
                        <Edit />
                    </button>
                    <button onClick={() => setIsModalOpen(true)}>
                        <Delete />
                    </button>

                </div>                           
            </div>
            <DeleteModal 
                isOpen={isModalOpen} 
                onCancel={handleCancel} 
                onConfirm={handleDelete}
            />
            <EditModal
                isOpen={isEditModalOpen} 
                initialTitle={article.name} 
                onSave={handleSaveTitle} 
                onCancel={handleCancelEdit} 
             />
        </td>
    </tr>
  )
}
