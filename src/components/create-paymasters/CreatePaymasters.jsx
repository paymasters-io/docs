import React from 'react';

const CreateImg = require('@site/static/assets/pm-images/createpaymasters.png').default
const paymasterslistImg = require('@site/static/assets/pm-images/paymasterslist.png').default

export default function CreatePaymastersSection() {
    return (
        <section className="flex  py-10 font-sans items-center text-black ">

            <div className=' w-full lg:px-16 xl:px-16  py-4 '>
                <div className='flex justify-center items-center bg-gray-100 py-6 rounded-lg  '>

                    <div className='flex overflow-hidden  md:flex-col lg:flex-wrap xl:flex-wrap justify-center p-4 gap-16 my-4'>
                        <div className="flex flex-col border w-3/4 md:2/4 lg:w-2/4 xl:2/4">
                            <h1 className="text-4xl font-bold my-4 text-center">
                                <a className='no-underline  decoration-0' target="_blanc" href={`https://dep-ui.vercel.app/create-paymaster`}>Create paymasters </a></h1>
                            <img src={CreateImg} className="w-full border rounded-xl" alt="plugin dashboard" />

                        </div>

                        <div className="flex flex-col border w-3/4 md:2/4 lg:w-2/4 xl:2/4">
                            <h1 className="text-4xl font-bold my-4 text-center">
                                <a className='no-underline  decoration-0' target="_blanc" href={`https://dep-ui.vercel.app`}>Use a Paymaster </a> </h1>
                            <img src={paymasterslistImg} className="w-full border rounded-xl" alt="plugin dashboard" />

                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
