import React from 'react';
import Link from '@docusaurus/Link';

const ChainImg = require('@site/static/assets/pm-images/rebates-middleware.svg').default

export default function HeroSection() {
    return (
        <section className="w-full py-32  px-4 lg:px-12 m-auto max-w-lg lg:max-w-7xl h-full">
        <div className="flex  justify-between ">
          <div className="">
          <h1 className="mb-6 font-mono text-4xl font-bold lg:text-6xl">
                        Build Paymasters
                    </h1>
                    <p className="text-sm font-sans text-text-400 lg:max-w-lg lg:text-base">
                        What we do at paymasters-io is that we leverage on account absraction using zkSync to provide
                        the infrastructure from which users can access and use paymasters.
                        </p>
                        <p className="text-sm font-sans text-text-400 lg:max-w-lg lg:text-base">
                       Easily explore a wide range of paymasters. Find protocols with paymasters
                        support. Get more value when using dapps
                    </p>
            <Link href="/docs/intro">
              <button className="py-4 px-16 outline-0
               bg-paymasters-purple font-semibold text-paymasters-purple-50 rounded-md">Getting Started</button>
            </Link>
          </div>
          <div className="hero-img-cont section-img-cont hover:translate-x-2">
          
          <ChainImg />
          </div>
        </div>
      </section>
       
    );
}
