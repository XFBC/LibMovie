import React from 'react';

export const Container = ({ children }) => {
  return (
    <div className="bg-[#191919] pt-11 pl-[20%] flex md:flex-col flex-col">
      {children}
    </div>
  );
};
