import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

const InputBox = ({
    prompt,
    setPrompt,
    sendMessage
}: {
    prompt: string,
    setPrompt: React.Dispatch<React.SetStateAction<string>>,
    sendMessage: () => void
}) => {
  return (
    <div className='w-full flex flex-row gap-2 justify-end bottom-0 items-center basis-1/5'>
        <ImageIcon />
        <div className="w-full flex flex-row gap-2 rounded-3xl border-neutral-500  items-center">
            <input value={prompt} onChange={(e) => setPrompt(e.target.value)} type="text" className="w-full p-2 focus:outline-none border-none focus:border-transparent" placeholder="Enter a prompt here"/>
            <MicIcon />
        </div>
        <div onClick={() => sendMessage()}
        className="p-2 rounded-full hover:bg-neutral-100 duration-300 flex items-center justify-center cursor-pointer">
            <SendIcon className='text-[#40E0D0]' />
        </div>
    </div>
  )
}

export default InputBox