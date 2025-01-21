import playfairDisplay from '@/fonts/header-font'

function Headline({ text, background }: { text: string; background: string }) {
  return (
    <h2 className={`text-3xl  border-x-4 border-indigo-500 font-bold text-center ${background}`}>
      <strong
        className={`p-1 tracking-widest text-red-700  ${playfairDisplay.className} font-extrabold opacity-55`}
      >
        {text}
      </strong>
    </h2>
  )
}

export default Headline
