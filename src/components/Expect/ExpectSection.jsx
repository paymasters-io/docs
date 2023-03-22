import React from 'react';
import Link from '@docusaurus/Link';

const CodeImg = require('@site/static/assets/pm-images/codeblock.png').default

const GoodCircleImg = () => {
    return (
        <svg className='h-8 w-12  text-paymasters-dark-400' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
    )
}

export default function ExpectSection() {
    return (
        <section className="w-full py-12 bg-black my-40 text-white rounded-xl h-[500px]  px-4 lg:px-12 m-auto max-w-lg lg:max-w-7xl ">
            <div className="flex  justify-center   items-center ">

                <div className="">
                    <h1 className="mb-6 font-mono text-5xl font-bold ">
                        What To Expect
                    </h1>
                    <ul className='list-none font-sans p-0'>
                        <li className='text-2xl flex my-4'><GoodCircleImg /> Next level of web3 user experience</li>
                        <li className='text-2xl flex my-4'><GoodCircleImg /> Offset your user's gas fees with paymasters</li>
                        <li className='text-2xl flex my-4'><GoodCircleImg />Pay for half or the full quantity of gas</li>
                        <li className='text-2xl flex my-4'><GoodCircleImg />Charge for transactions in alternate crypto</li>
                        <li className='text-2xl flex my-4'><GoodCircleImg />You can pay for those that hold your NFT or ERC20 tokens</li>

                    </ul>

                </div>
            </div>
        </section>

    );
}
