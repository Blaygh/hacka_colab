import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Oswald } from 'next/font/google';
import PlaceHolder from './PlaceHolder';

const oswald = Oswald({
    display: 'swap',
    weight: ['700'],
});


function TextBox({
    response,
    setResponse
    }: {
    response: string,
    setResponse: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <div className='h-[90%] rounded-3xl bg-neutral-700'>
        {
            response === '' ? (
                <PlaceHolder />
            ) : (
                <TypeAnimation
                    cursor={false}
                    sequence={[response, 1000]}
                    className={`text-3xl text-white font-bold ${oswald} p-3`}
                    repeat={0}
                />
            )
        }
    </div>
  )
}

export default TextBox