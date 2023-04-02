import React from 'react';

export default function ContactSection() {

    return (
        <section className="flex  py-10 font-sans items-center text-black ">

            <div className=' w-full px-16 py-4 '>
                <div className='flex flex-col bg-gray-100 py-6 rounded-lg justify-center '>
                    <div>
                        <h1 className="text-3xl font-bold my-4 text-center">Get in touch with us</h1>
                    </div>

                    <div className='flex flex-wrap justify-center gap-16 my-4'>

                        <div className="flex w-80 text-wrap bg-slate-200 flex-col justify-between  p-4  rounded-md border">

                            <span className='w-16 mb-2 h-16 border rounded-md text-white p-4 bg-paymasters-purple-400'>
                                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                                </svg>
                            </span>
                            <h2 className='text-semibold  text-lg'>Contact us</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum veritatis expedita, officiis consectetur
                            </p>
                            <a className='no-underline hover:text-blue-500  decoration-0' href={`mailto:"hello@paymasters.io"`}>
                                hello@paymasters.io
                            </a>
                        </div>
                        <div className="flex w-80 text-wrap bg-slate-200 flex-col justify-between  p-4  rounded-md border">
                            <span className='w-16 h-16 mb-2 border rounded-md text-white p-4 bg-paymasters-purple-400'>
                                <svg fill="#ffffff" version="1.1" viewBox="0 0 45.959 45.959" ><g></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g> <g>
                                    <path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489 c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733 C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123 C8.729,6.477,8.416,7.256,
                            7.847,7.811z"></path> <path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z"></path> <path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711 c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67 C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797 
                            c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473 c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"></path> </g> </g> </g></svg>
                            </span>
                            <h2 className='text-semibold text-lg'>Follow our page</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum veritatis expedita, officiis consectetur
                            </p>
                            <a className='no-underline hover:text-blue-500  decoration-0' href={`https://www.linkedin.com/company/paymasters-io/`}>
                                follow us
                            </a>
                        </div>
                        <div className="flex w-80 text-wrap bg-slate-200 flex-col justify-between  p-4  rounded-md border">
                            <span className='w-16 mb-2 h-16 border rounded-md text-white p-4 bg-paymasters-purple-400'>
                                <svg fill="#ffffff" preserveAspectRatio="xMidYMid" viewBox="0 0 31.812 26" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g></g><g>
                                        <path d="M20.877,2.000 C22.519,2.000 24.382,2.652 25.426,3.738 C26.724,3.486 27.949,3.025 29.050,2.386 C28.625,3.687 27.718,4.779 26.540,5.469 C27.693,5.332 28.797,5.035 29.820,4.590 C29.054,5.707 28.087,6.690 26.971,7.477 C26.981,7.715 26.987,7.955 26.987,8.195 C26.987,15.562 21.445,24.000 10.939,24.000 C7.715,24.000 4.507,23.133 1.982,21.551 C2.428,21.605 2.883,21.631 3.343,21.631 C6.019,21.631 8.482,20.740 10.439,19.242 C7.937,19.199 5.827,17.586 5.103,15.373 C5.450,15.437 5.810,15.473 6.178,15.473 C6.696,15.473 7.203,15.406 7.681,15.277 C5.068,14.768 3.100,12.514 3.100,9.813 C3.100,9.787 3.100,9.764 3.100,9.740 C3.871,10.158 4.750,10.410 5.687,10.440 C4.154,9.437 3.147,7.734 3.147,5.799 C3.147,4.777 3.428,3.818 3.919,2.998 C6.735,6.367 10.945,8.588 15.693,8.822 C15.594,8.414 15.543,7.984 15.543,7.553 C15.543,4.473 17.721,2.000 20.877,2.000 M29.820,4.590 L29.825,4.590 M20.877,-0.000 C17.033,-0.000 14.060,2.753 13.614,6.552 C10.425,5.905 7.524,4.204 5.440,1.711 C5.061,1.257 4.503,0.998 3.919,0.998 C3.867,0.998 3.815,1.000 3.763,1.004 C3.123,1.055 2.547,1.413
                                2.216,1.966 C1.525,3.122 1.159,4.447 1.159,5.799 C1.159,6.700 1.321,7.579 1.625,8.400 C1.300,8.762 
                                1.113,9.238 1.113,9.740 L1.113,9.813 C1.113,11.772 1.882,13.589 3.160,14.952 C3.087,15.294 3.103,15.655 
                                3.215,15.998 C3.657,17.348 4.459,18.510 5.499,19.396 C4.800,19.552 4.079,19.631 3.343,19.631 C2.954,19.631
                                 2.577,19.609 2.222,19.565 C2.141,19.556 2.061,19.551 1.981,19.551 C1.148,19.551 0.391,20.078 0.108,20.886 
                                 C-0.202,21.770 0.140,22.753 0.932,23.249 C3.764,25.023 7.318,26.000 10.939,26.000 C17.778,26.000 22.025,22.843 24.383,
                                 20.195 C27.243,16.984 28.907,12.718 28.972,8.455 C29.899,7.682 30.717,6.790 31.410,5.792 C31.661,5.458 31.810,5.041 31.810,
                                 4.590 C31.810,3.909 31.473,3.308 30.958,2.946 C31.181,2.176 30.925,1.342 30.303,0.833 C29.940,0.537 29.496,0.386 29.049,
                                 0.386 C28.708,0.386 28.365,0.474 28.056,0.654 C27.391,1.040 26.680,1.344 25.931,1.562 C24.555,0.592 22.688,-0.000 20.877,
                                 -0.000 L20.877,-0.000 Z"></path> </g></svg>
                            </span>
                            <h2 className='text-semibold text-lg '>Tweet to us</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsum veritatis expedita, officiis consectetur
                            </p>
                            <a className='no-underline hover:text-blue-500 decoration-0' href={`https://twitter.com/paymasters_io"`}>
                                twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}