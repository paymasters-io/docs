import React from 'react';
import Link from '@docusaurus/Link';

const CodeImg = require('@site/static/assets/pm-images/codeblock.png').default

export default function PluginSection() {
    return (
        <section className="w-full py-12 bg-black my-20 text-white rounded-xl h-[500px] px-4 lg:px-12 m-auto max-w-lg lg:max-w-7xl ">
            <div className="flex  justify-evenly gap-14 ">
                <div className="hero-img-cont section-img-cont box-sh  hover:translate-x-2">

                    <img src={CodeImg} alt="paymasters-io code block image" />
                </div>
                <div className="">
                    <h1 className="mb-6 font-mono text-5xl font-bold ">
                        Plugin SDK
                    </h1>
                    <p className="font-sans text-lg font-semibold lg:max-w-lg lg:text-base">
                        <i> Plug and play. </i> If you want to build your Dapp using any framework or tool,
                        Our plugins and http api is available for integration. You can easily make use of it to add
                        new features or capabilities to your existing programs or applications.
                        Explore our sdk to perform zero knowledge transactions in your dapps.

                    </p>
                    <p className="text-sm font-sans text-text-400 lg:max-w-lg lg:text-base">
                        Go through our resources to know more <br />

                    </p>


                    <Link href="/docs/intro">
                        <button className="py-4 px-12 outline-0
               bg-paymasters-dark-700 font-semibold text-paymasters-purple-50 rounded-md">Learn more</button>
                    </Link>
                </div>

            </div>
        </section>

    );
}
