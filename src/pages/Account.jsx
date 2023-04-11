import React from 'react'
import SavedPrograms from '../components/SavedPrograms'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
            className='w-full h-[400px] object-cover'
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/2ca6fba7-5902-4b3b-8f40-bc4e500e84a5/US-en-20230403-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold"> My Shows </h1>
        </div>

      </div>
      <SavedPrograms />
    </>
  )
}

export default Account