import React, { useState } from 'react';

export default function EditModal ({ isOpen, initialTitle, onCancel, onSave }) {
  const [title, setTitle] = useState(initialTitle);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className={isOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden'}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">
        <p className="mb-4">Edit Title</p>
        <input 
          type="text" 
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          value={title} 
          onChange={handleTitleChange} 
        />
        <div className="flex justify-end">
          <button 
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => onSave(title)}
          >
            Save
          </button>
          <button 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};


