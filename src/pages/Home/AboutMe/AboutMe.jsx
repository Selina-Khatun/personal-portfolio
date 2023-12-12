import React from 'react';
import img5 from '../../../assets/back1.jpg'
import icon1 from '../../../assets/html-5_919827.png'
import icon2 from '../../../assets/css-3_5968242.png'
import icon3 from '../../../assets/js_5968292.png'
import icon4 from '../../../assets/mongo 1.jpg'
import icon5 from '../../../assets/icons8-firebase-48.png'

const AboutMe = () => {
    return (
        <div class="bg-gray-100 my-10">
            <h1 className='text-5xl py-10 text-center font-bold'>About Me</h1>
            <div class="container mx-auto py-8">
                <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div class="col-span-4 sm:col-span-3">
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="flex flex-col items-center">
                                <img src={img5} class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" alt='' />


                                <h1 class="text-xl text-[#0a5ba5] font-bold">Selina Khatun</h1>
                                <p class="text-gray-700">Frontend Developer</p>
                                <div class="mt-6 flex flex-wrap gap-4 justify-center">
                                    <button href="#_" class="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#0a5ba5] opacity-[3%]"></span>
                                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#0a5ba5] opacity-100 group-hover:-translate-x-8"></span>
                                        <span class="relative w-full text-left text-[#0a5ba5] transition-colors duration-200 ease-in-out group-hover:text-white">Resume</span>
                                        <span class="absolute inset-0 border-2 border-[#0a5ba5] rounded-full"></span>
                                    </button>
                                </div>
                            </div>
                            <hr class="my-6 border-t border-gray-300" />
                            <div class="flex flex-wrap my-3">
                                <span class="text-[#0a5ba5] uppercase font-bold tracking-wider mb-2">Skills</span>
                                <p>HTML , CSS , Tailwind Css , JavaScript , React</p>

                            </div>

                            <hr class="my-2 border-t border-gray-300" />

                            <div class="flex flex-col">
                                <span class="text-[#0a5ba5] uppercase font-bold tracking-wider mb-2">Language</span>
                                <p>Bangla  ,  English ,  Hindi</p>

                            </div>
                            <hr class="my-2 border-t border-gray-300" />
                            <div class="flex flex-col ">
                                <span class="text-[#0a5ba5] uppercase font-bold tracking-wider mb-2">Email</span>
                                <p>selinakhatun982520@gmail.com</p>

                            </div>
                            <hr class="my-2 border-t border-gray-300" />
                            <div class="flex flex-col ">
                                <span class="text-[#0a5ba5] uppercase font-bold tracking-wider mb-2">Address</span>
                                <p>Jamalpur,Dhaka,Bangladesh</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 sm:col-span-9">
                        <div class="bg-white shadow rounded-lg p-6">
                            <h2 class="text-xl font-bold mb-4">About Me</h2>
                            <p class="text-gray-700">I am Selina Khatun. I live in Bangladesh. I'm a frontend developer on a mission to craft captivating web experiences. My toolbox includes HTML, CSS, JavaScript and React which I use to turn design concepts into seamless, user-friendly interfaces. I'm all about clean, efficient code and staying on the cutting edge of web development trends. Whether it's experimenting with new frameworks or ensuring responsiveness, I'm committed to delivering top-notch solutions. Join me on this coding adventure, where innovation and creativity collide to shape the digital world. Let's build something beautiful together!
                            </p>

                            <h3 class="font-bold text-center text-[#0a5ba5]  my-4 ">
                                Languages and Tools:
                            </h3>

                            <div class="flex justify-center items-center gap-6 my-6">
                            <img className='w-[7%]' src={icon1} alt="" />
                            <img className='w-[7%]' src={icon2} alt="" />

                               <svg className='w-[7%]' preserveAspectRatio="xMidYMid" viewBox="0 0 256 154" width="256" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" x1="-2.777778%" x2="100%" y1="32%" y2="67.555556%"><stop offset="0" stop-color="#2298bd" /><stop offset="1" stop-color="#0ed7b5" /></linearGradient><path d="m128 0c-34.1333333 0-55.4666667 17.0666667-64 51.2 12.8-17.0666667 27.7333333-23.4666667 44.8-19.2 9.737481 2.4343704 16.697363 9.4985481 24.401067 17.3184 12.549689 12.7383704 27.07437 27.4816 58.798933 27.4816 34.133333 0 55.466667-17.0666667 64-51.2-12.8 17.0666667-27.733333 23.4666667-44.8 19.2-9.737481-2.4343704-16.697363-9.4985481-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816zm-64 76.8c-34.1333333 0-55.46666667 17.0666667-64 51.2 12.8-17.066667 27.7333333-23.466667 44.8-19.2 9.7374815 2.43437 16.697363 9.498548 24.4010667 17.3184 12.5496889 12.73837 27.0743703 27.4816 58.7989333 27.4816 34.133333 0 55.466667-17.066667 64-51.2-12.8 17.066667-27.733333 23.466667-44.8 19.2-9.737481-2.43437-16.697363-9.498548-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816z" fill="url(#a)" /></svg>
                                <svg className='w-[7%]' viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="m75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zm-2.419-10.516c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zm52.718-36.462c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z" fill="#5b4282" /></svg>
                             
                              
                               <img className='w-[7%]' src={icon3} alt="" />
                               <img className='w-[7%]' src={icon4} alt="" />
                               <img className='w-[7%]' src={icon5} alt="" />
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
                               
                               
                            </div>
                            <h3 class="font-semibold text-center mt-3 -mb-2">
                                Find me on
                            </h3>
                            <div class="flex justify-center items-center gap-6 my-6">
                                <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds LinkedIn" href="https://www.linkedin.com/in/selina-khatun-7550501a1/"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                                        <path fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="https://www.youtube.com/c/learn%20with%20seli"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6">
                                        <path fill="currentColor"
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href="https://www.facebook.com/sada.megh.94402"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-6">
                                        <path fill="currentColor"
                                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Instagram" href=""
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                                        <path fill="currentColor"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Twitter" href="https://github.com/Selina-Khatun"
                                    target="_blank">
                                    <svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                        </path>
                                    </svg>
                                </a>
                            </div>


                            <h2 class="text-2xl font-bold mt-6 mb-4">Education</h2>
                            <div class="mb-6">
                                <div class="flex justify-between flex-wrap gap-2 w-full">
                                    <span class="text-gray-700 font-bold"> Higher Secondary(HSC) </span>
                                    
                                </div>
                                <div class="flex justify-between flex-wrap gap-2 w-full">
                                    <span class="text-gray-700 font-bold"> Secondary School(SSC) </span>
                                   
                                </div>
                               
                            </div>
                            <h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>
                            <div class="mb-6">
                                <div class="flex justify-between flex-wrap gap-2 w-full">
                                    <span class="text-gray-700 font-bold">Web Developer</span>
                                 
                                </div>
                                <p class="mt-2">
                                     No experience 
                                </p>
                            </div>
                          
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;