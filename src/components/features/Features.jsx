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


export default function Features() {

    return (
        <div>
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">There's More</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                        <div className="flex">
                            <div className="flex-shrink-0 h-10 w-10">
                                <GoodCircleImg />

                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Plug and Play Integration</h3>
                                <p className="mt-2 text-base text-gray-500"> You can easily integrate payments into your application without much coding required. Our plugin can be installed in just a few clicks and configured with ease, allowing you to start accepting payments on your Dapp right away.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0 h-10 w-10">
                                <GoodCircleImg />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Secure Transactions</h3>
                                <p className="mt-2 text-base text-gray-500">We take security very seriously. Our plugin uses the latest blockchain technologies and follows industry best practices to ensure that all transactions are secure and protected.</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0 h-10 w-10">
                                <GoodCircleImg />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Oracles</h3>
                                <p className="mt-2 text-base text-gray-500">With Paymasters Plugin, you can customize your payments and set max Nonce. You can also set dynamic fee quotes. This enables gas offset
                                    with accurate conversion of gas prices to erc20 token equivalent using oracles</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0 h-10 w-10">
                                <GoodCircleImg />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Payments Gateways</h3>
                                <p className="mt-2 text-base text-gray-500">Configure your NFT gate or ERC20 gate settings. This enables gas offsets when transactions meet a certain criteria. Easily set it up using our intuitive interface. Paymasters Plugin makes it easy to manage and automate payments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}