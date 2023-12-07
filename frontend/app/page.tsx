"use client";
import InputBox from '@/layouts/InputBox'
import TextBox from '@/layouts/TextBox'
import { useState } from 'react';

export default function Home() {
  const [ response, setResponse ] = useState<string>('');
  const [ prompt, setPrompt ] = useState<string>('');

  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center bg-[#E6E6E9]">
      <div className="min-w-[70%] h-[700px] rounded-3xl bg-white border-2 border-neutral-500 p-3 flex flex-col">
        <TextBox />
        <InputBox />
      </div>
    </main> 
  )
}
