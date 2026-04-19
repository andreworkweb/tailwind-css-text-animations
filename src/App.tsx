import './App.css'

import Tailwind_text from './tailwind-animations/t-text/t-text.tsx'

function App() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 pb-20">
        <img src="https://i.gifer.com/6oa.gif" width="200" height="200" alt="Funny greeting gif" />
        <h1 className="text-5xl font-extrabold">HELLO :) :) :)</h1>
        <h2 className="text-2xl font-bold">How are you?</h2>
        <h3 className="text-lg font-medium">A collection of Tailwind and CSS gradient animations XD.</h3>
      </section>

      <Tailwind_text />
    </>
  )
}

export default App
