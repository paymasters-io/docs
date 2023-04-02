import React from 'react';
import Link from '@docusaurus/Link';
const AccessImg = require('@site/static/assets/pm-images/access_control2.png').default

export default function PluginSection() {
    return (
        <section className="flex  py-10 font-sans items-center text-black ">

            <div className=' w-full px-16 py-4 '>
                <div className='flex flex-col bg-gray-100 py-6 rounded-lg  '>

                    <div className='flex overflow-hidden justify-center flex-wrap p-8 gap-16 my-4'>
                        <div className="flex  border w-3/4 md:2/4 lg:w-2/4 xl:2/4">
                            <img src={AccessImg} className="w-full border rounded-xl" alt="plugin dashboard" />
                            {/* <img className="w-full md:w-2/3 lg:w-1/2" src={Dashboard} alt=" Dashboard Image" /> */}
                        </div>
                        <div className="flex flex-col w-80 text-wrap">
                            <h1 className='text-3xl'>Plugins</h1>
                            <p className='text-lg my-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore maxime accusamus unde vero
                                accusantium totam vitae ipsum ullam! Sapiente labore dicta consequuntur delectus eligendi architecto
                                perspiciatis aliquam possimus quidem.
                            </p>

                            <ul>
                                <li className=' my-2'>Set criteria  for your transactions.</li>
                                <li className=' my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                                <li className=' my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                                <li className=' my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
                                <li className=' my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>

                            </ul>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
