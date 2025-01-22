import playfairDisplay from '@/fonts/header-font'

function Headline({ text, background }: { text: string; background: string }) {
  return (
    <div className='flex justify-center'>
      <h2
        className={`text-3xl min-w-[30%] max-w-[60%] ${playfairDisplay.className} justify-center  border-x-4 border-indigo-500 font-bold text-center ${background}`}
      >
        <strong
          className={`p-1 tracking-widest text-red-700   font-extrabold opacity-55`}
        >
          {text}
        </strong>
      </h2>
    </div>
  )
}

export default Headline
