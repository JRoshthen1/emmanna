import React from 'react'
import signupimg from '../images/158.svg'

function StartScreen() {
  return (
    <div>
        <div className='container flex flex-col'>
            <img className='h-[50vh]' src={signupimg} alt='signup' />
            <div className='container flex flex-col items-center space-y-4'>
                <input placeholder='Email' type="email" className="rounded-xl border border-gray-200 focus:border-blue-300 outline-none text-gray-600 py-1 px-3 leading-8"/>
                <input placeholder='Password' type="password" className="rounded-xl border border-gray-200 focus:border-blue-300 outline-none text-gray-600 py-1 px-3 leading-8"/>
                <button type='submit' className='flex mx-auto mt-16 text-white bg-blue-500 border-0 py-1 px-8 focus:outline-none hover:bg-blue-400 rounded-xl'>Log in</button>
            </div>
        </div>
    </div>
  )
}

export default StartScreen