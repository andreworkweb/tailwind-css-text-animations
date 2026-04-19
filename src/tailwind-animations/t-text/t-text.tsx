import { useState } from "react";

const Tailwind_text = () => {
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);
  const [show4, setShow4] = useState<boolean>(false);

  return (
    <>
      <section className="min-h-screen bg-gray-50 flex flex-col items-center px-4 pb-20">
        <div className="w-full max-w-3xl flex flex-col gap-12">
          
          {/*Gradient Text */}
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-8 transition-all">
            <div className="flex items-center justify-center">
              <p className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                Example text
              </p>
            </div>

            <button
              className="mt-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              onClick={() => setShow(!show)}
            >
              {show ? "Hide Code" : "Show Code"}
            </button>

            {show && (
              <div className="mt-6 w-full flex flex-col gap-4 text-left animate-fade-in">
                <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                  <p className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">Tailwind (JSX)</p>
                  <pre className="text-emerald-400 text-sm font-mono">
                    <code>
                        {`<p className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                          Example text
                        </p>`}
                    </code>
                  </pre>
                </div>

                <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                  <p className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">CSS</p>
                  <pre className="text-blue-400 text-sm font-mono">
                    <code>
                        {`@keyframes gradientMove {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientMove 4s ease infinite;
}`}
                    </code>
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/*Typewriter*/}
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-8 transition-all">
            <div className="flex items-center justify-center">
              <div className="inline-block">
                <h1 className="text-4xl font-mono font-bold text-gray-800 animate-typewriter border-r-4 border-gray-800 pr-1">
                  Hello, I am a Developer.
                </h1>
              </div>
            </div>

            <button
              className="mt-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              onClick={() => setShow1(!show1)}
            >
              {show1 ? "Hide Code" : "Show Code"}
            </button>

            {show1 && (
              <div className="mt-6 w-full flex flex-col gap-4 text-left animate-fade-in">
                <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                  <p className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">Tailwind (JSX)</p>
                  <pre className="text-emerald-400 text-sm font-mono">
                    <code>
                        {`<h1 className="text-4xl font-mono font-bold text-gray-800 animate-typewriter border-r-4 border-gray-800 pr-1">
                  Hello, I am a Developer.
                </h1>`}
                    </code>
                  </pre>
                </div>

                <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                  <p className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">CSS</p>
                  <pre className="text-blue-400 text-sm font-mono">
                    <code>
                        {`.animate-typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 4px solid #3b82f6; /* Цвет курсора (blue-500) */
  animation: 
    typing 3s steps(30, end),
    blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #3b82f6; }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            )}
          </div>
          

          {/*Shimmer*/}
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-8 transition-all">
            <div className="flex items-center justify-center w-full">
              <div className="p-8 bg-gray-900 rounded-xl w-full text-center">
                <h1 className="text-5xl font-bold animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#939393,45%,#fff,55%,#939393)] bg-[length:200%_100%]">
                  Next Code
                </h1>
              </div>
            </div>

            <button
              className="mt-4 px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              onClick={() => setShow2(!show2)}
            >
              {show2 ? "Hide Code" : "Show Code"}
            </button>

            {show2 && (
              <div className="mt-6 w-full flex flex-col gap-4 text-left animate-fade-in">
                <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                  <p className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">Tailwind (JSX)</p>
                  <pre className="text-emerald-400 text-sm font-mono">
                    <code>
                        {`<h1 className="text-5xl font-bold animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#939393,45%,#fff,55%,#939393)] bg-[length:200%_100%]">
                  Next Code
                </h1>`}
                    </code>
                  </pre>
                </div>

                <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                  <p className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">CSS</p>
                  <pre className="text-blue-400 text-sm font-mono">
                    <code>
                        {`.animate-shimmer {
  background: linear-gradient(to right, #9ca3af 20%, #ffffff 50%, #9ca3af 80%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  to { background-position: 200% center; }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/*Blur Reveal*/}
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-8 transition-all">
            <div className=" flex items-center justify-center">
              <h1 className="text-5xl font-black text-gray-800 animate-blur-reveal">
                Welcome to the Future
              </h1>
            </div>

            <button
              className="mt-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              onClick={() => setShow3(!show3)}
            >
              {show3 ? "Hide Code" : "Show Code"}
            </button>

            {show3 && (
              <div className="mt-6 w-full bg-gray-900 rounded-xl p-5 animate-fade-in text-left">
                <p className="text-emerald-400 text-sm font-mono">!</p>
              </div>
            )}
          </div>

          {/*Glitch */}
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-8 transition-all">
            <div className="flex items-center justify-center w-full glitch-wrapper">
              <h1
                className="text-6xl font-black text-gray-900 animate-glitch relative inline-block"
                data-text="SYSTEM FAILURE"
              >
                SYSTEM FAILURE
              </h1>
            </div>

            <button
              className="mt-4 px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              onClick={() => setShow4(!show4)}
            >
              {show4 ? "Hide Code" : "Show Code"}
            </button>

            {show4 && (
              <div className="mt-6 w-full bg-gray-900 rounded-xl p-5 animate-fade-in text-left">
                <p className="text-emerald-400 text-sm font-mono">!</p>
              </div>
            )}
          </div>

        </div>
      </section>

      <div className="fixed top-5 left-5 italic underline">
        File gonna be updated
      </div>
    </>
  );
};

export default Tailwind_text;