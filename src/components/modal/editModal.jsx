import React, { useContext, useEffect, useState } from 'react';
import { ArticlesContext } from '../../contexts/ArticleContext';
import axios from 'axios';
import LoadingButton from '../buttons/LoadingButton';
import useSweetAlert from '../../hooks/useSweetAlert';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import useFormik from '../../hooks/useFormik';

export default function EditModal ({ isOpen, article, setIsOpen}) {
  const {articleDispatcher}= useContext(ArticlesContext)
  const [isLoading , setIsLoading] = useState(false)
  const Toast = useSweetAlert()
  const formikProps = useFormik(article.title);

  const editTitle = async (newTitle) => {
    try {
      const res = await axios.put(`https://65f7f726b4f842e808867f20.mockapi.io/rocket-1/api/Articles/${article.id}`, {
        title: newTitle,
        createdAt : Date.now()
      });
      const data = res.data;
      if (data){
        articleDispatcher({
            type :'edit-title',
            id:data.id,
            newTitle,
            createdAt:Date.now()
        })
        Toast.fire({
          icon: "success",
          title: "Title edited successfully"
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

  const handleSaveTitle = async (newTitle) => {
      setIsLoading(true)
      editTitle(newTitle);
 }

  const handleCancelEdit = () => {
    setIsOpen(false); 
    setIsLoading(false)
  };

  return (
    <>    
    <div className={isOpen ? 'fixed inset-0 flex items-center font-semibold backdrop-blur-sm justify-center z-50' : 'hidden'}>
      <div className="fixed inset-0 bg-black  opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">
        <p className="mb-4">Edit Title</p>
        <Formik
          {...formikProps}
          onSubmit={(values) => {
          handleSaveTitle(values.title)
         }}
       >
      {({ errors, touched }) => (
        <Form>
          <Field 
            type="text" 
            name="title"
            className={`border rounded-md px-3 py-2 mb-2 w-full ${
              errors.title && touched.title ? 'border-red-500 focus:outline-red-500' : 'border-gray-300 '
            }`}
          />
          <p className='text-red-500 max-w-80 mb-4 text-xs '>
            <ErrorMessage name="title"  />
          </p>
          <div className="flex justify-center">
            <button 
              className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              type='submit'
              disabled={isLoading}
            >
              <LoadingButton isLoading={isLoading} text='Save' /> 
            </button>
            <button 
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleCancelEdit}
              type='button'
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
          </Form>
      )}
        </Formik>
      </div>
    </div>
    </>
  );
};


