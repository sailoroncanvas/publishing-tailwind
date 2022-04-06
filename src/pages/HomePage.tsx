import React from 'react';

export const HomePage = () => {
  return (
    <div className="m-4">
      <div className="mb-4 font-bold text-2xl">List</div>
      <div className="p-4 border">
        <div className="py-20 bg-indigo-50"></div>
        <div className="font-bold mt-3 mb-2">Card title</div>
        <div className="text-gray-500 font-light mb-4 text-base">
          Sed vel turpis adipiscing penatibus orcineque. Erat sed fermentum
          ipsum vel quis quam. Nunc etiam dui tortor, non in aluquam lacinia
          tempor.
        </div>
        <div className="py-2 bg-gray-800 text-white text-center font-bold mb-3">
          button
        </div>
        <div className="py-2 border-2 border-gray-800 text-gray text-center font-bold">
          button
        </div>
      </div>
    </div>
  );
};
