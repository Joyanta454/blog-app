import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center rounded-tl-3xl rounded-br-3xl border p-3 border-teal-500 text-center'>
      <div className="text-center flex-1 flex-col justify-center  flex">
        <h2 className='text-2xl '>
          Want to learn more about JavaScript?
        </h2>
        <p className='text-gray-500 my-2'>Checkout these resources with 100 JavaScript Project</p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href='https://leetcode.com/sarkarjoyanta454/' target='_blank' rel='noopener noreferrer'>Learn More</a>
        </Button>
      </div>
      <div className="flex-1 p-6">
        <img src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" alt="image" />
      </div>
    </div>
  )
}
