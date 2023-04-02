import React from 'react';

const JsImg = require('@site/static/assets/pm-images/nodejs.svg').default
const GraphImg = require('@site/static/assets/pm-images/graphql.svg').default
const TypescriptImg = require('@site/static/assets/pm-images/typescript.svg').default

const JscImg = require('@site/static/assets/pm-images/js.png').default
const ReactImg = require('@site/static/assets/pm-images/react.png').default
const HtmlImg = require('@site/static/assets/pm-images/html.png').default

export default function StackSection() {
    return (
        <section className="py-20 flex bg-gray-200 text-black flex-col lg:flex-row gap-20 lg:gap-0 justify-between mx-auto px-4 sm:px-6 lg:px-8">

            <div className=' w-full px-16 py-4 '>
                <div className='flex flex-col py-6 rounded-lg justify-center '>
                    <div className='text-center'>
                        <h1 className="text-4xl font-bold my-4 text-center "> Tech Stack</h1>
                        <p className='text-lg '>
                            This section covers everything you need to know about the tech stack we are using <br />to build and how to integrate with our SDK
                        </p>

                    </div>

                    <div className='flex flex-wrap justify-center gap-16 my-4'>

                        <div className="flex w-80 text-wrap text-center flex-col justify-between  p-4  ">
                            <div className='w-16 mb-2 h-16 place-self-center flex '>
                                <JsImg className='w-14 h-14  mx-auto block' />
                            </div>

                            <h2 className='text-semibold  text-xl'>
                                <a className='no-underline  decoration-0' href={`/docs/intro`}>

                                    Core SDK
                                </a></h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum veritatis expedita, officiis consectetur
                            </p>

                        </div>
                        <div className="flex w-80 text-wrap text-center flex-col justify-between  p-4  ">
                            <div className='w-16 mb-2 h-16 place-self-center flex'>
                                <GraphImg className='w-14 h-14' />
                            </div>
                            <h2 className='text-semibold text-xl'>
                                <a className='no-underline  decoration-0' href={`/docs/intro`}>
                                    Subgraph
                                </a></h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum veritatis expedita, officiis consectetur
                            </p>

                        </div>
                        <div className="flex w-80 text-wrap text-center flex-col justify-between  p-4  ">
                            <div className='w-16 mb-2 h-16 border place-self-center flex rounded-md'>
                                <TypescriptImg className='w-14 h-14' />
                            </div>
                            <h2 className='text-semibold text-xl '>
                                <a className='no-underline  decoration-0' href={`/docs/intro`}>
                                    Trpc
                                </a></h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum veritatis expedita, officiis consectetur
                            </p>

                        </div>

                    </div>
                    <div className='text-center'>
                        <h1 className="text-3xl font-bold my-4 "> Supported Languages</h1>
                        <div className='flex justify-center gap-8 items-center flex-wrap'>
                            <img src={JscImg} className=" w-14 h-14 rounded-md" />
                            <img src={ReactImg} className="w-10 h-10 " />
                            <img src={HtmlImg} className="w-10 h-10 " />
                            <TypescriptImg className='w-10 h-10' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}