import React from 'react';
import Link from '@docusaurus/Link';

const CodeImg = require('@site/static/assets/pm-images/codeblock.png').default

export default function HeroSection() {
    return (
        <section className="py-20 max-w-7xl flex flex-col lg:flex-row gap-20 lg:gap-0 justify-between mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:max-w-xl">
          <h1 className="mb-6 font-mono text-4xl font-bold lg:text-6xl">
                        Build Paymasters
                    </h1>
                    <p className=" font-sans text-textColor  ">
                    Say goodbye to the headaches of payment integration. What we do at paymasters-io is that we leverage on account absraction using zkSync to provide
                        the infrastructure from which users can access and use paymasters.
                        </p>
                        <p className=" text-textColor font-sans text-text-400 ">
                       Easily explore a wide range of paymasters. Find protocols with paymasters
                        support. Get more value when using dapps
                    </p>
            <Link href="/docs/intro">
              <button className="py-4 px-16 cursor-pointer border-0 outline-0
               bg-paymasters-purple font-semibold text-paymasters-purple-50 rounded-md">Getting Started</button>
            </Link>
          </div>
          <div className="">
          <img src={CodeImg} alt="code block image" />
          {/* <img src={ChainImg} alt="hero image" className='' /> */}
          </div>
                  
      </section>       
    );
}
