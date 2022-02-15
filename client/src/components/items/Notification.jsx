import React from 'react';

const Notification = () => {
  return (
        <>
            <div style={{border:'1px solid'}} className="notification fixed z-50 shadow rounded-2xl animate-bounce right-10 bg-green-300">
                <div className="content p-3 px-4 w-fit">
                   <p className='text-2xl font-bold '> this is notification</p>
                </div>
            </div>
        </>
    )
};

export default Notification;
