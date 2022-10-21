import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-hero bg-cover flex flex-wrap-reverse h-screen bg-neutral-900 via-black to-black pb:10  md:pb-16 lg:pb-10 lg:px-8 xl:pb-20 text-white overflow-hidden">

        <main className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-20 lg:w-100 ">
          <div className="my-10 relative flex flex-col h-full justify-between">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <h1 className="lg:text-7xl tracking-tight font-extrabold text-3xl md:text-5xl text-white">
                  <span className="block xl:inline text-white uppercase">
                  If you need change your life <br/>
                  </span>

                  <span className="block text-emerald-400 xl:inline uppercase">
                  I’m here 
                  </span>
                </h1>
              </div>
              
            </dl>
            <div className="relative flex justify-end flex-col ">
                <h1 className="lg:text-7xl tracking-tight text-end font-extrabold text-3xl md:text-5xl text-white">
                  <span className="block xl:inline text-white uppercase">
                  Save your {' '}
                  </span>
                  </h1>

                <h1 className="lg:text-7xl tracking-tight text-end font-extrabold text-3xl md:text-5xl text-white">
                  <span className="block text-emerald-400 xl:inline uppercase">
                  web reputation
                  </span>
                </h1>
              </div>
          </div>
    
        </main>
      </div>
    );
};

export default Hero;

//Malicious link removal service for your image
