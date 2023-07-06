import React from 'react';
import background from './assets/blackwhite design.png';

const App = () => {
  return (
    <div>
      <div className='bg-gradient-to-tr from-red-100 to-blue-500 h-screen w-full  relative'>
        <img className='w-full h-full object-cover absolute mix-blend-overlay' src={background} />
        <div className='p-24 flex justify-center items-center h-full border-2 border-rose-500'>
          <div className=' flex flex-col items-center justify-center'>

            <h1 className=" text-slate-200 text-6xl font-bold">Make Your Fashion Dreams Come True</h1>
            <h2 className='text-slate-200 text-4xl mt-5'>Sign up today</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
