import React from 'react'
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import { Oswald } from 'next/font/google';
const oswald = Oswald({
    display: 'swap',
    weight: ['700'],
});

function PlaceHolder() {
  return (
    <div className='h-full w-full flex flex-col justify-between'>
        <div className="flex flex-col gap-3 items-center w-full">
            <StarPurple500Icon className='text-[#40E0D0] text-9xl' />
            <h3 className={`${oswald.className} text-2xl`}>
                  How can I help you today?
            </h3>
        </div>
    </div>
  )
}

export default PlaceHolder