import React from 'react'

export default function DeleteModal({ isOpen, onCancel, onConfirm }) {

    const modalClasses = isOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden';
  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black  opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">
        <p className="mb-4">Are you sure you want to delete?</p>
        <div className="flex justify-end">
          <button 
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
