import { useState } from 'react';
import img from '../../../assets/images/new/img.png';
import Group from '../../../assets/images/new/Group_3.png';
import { MdFacebook } from 'react-icons/md';
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
const Shepherd = () => {
    const [isModalShow, setIsModalShow] = useState<boolean>(false);
    const clickJoin = () => {
        setIsModalShow(!isModalShow)
        console.log(isModalShow)
    }
    const clickModalHandler = () => {
        setIsModalShow(false)
    }
    return (
        <div className='relative flex items-center'>
            <div className='text-white col-sm-12  bg-black'>
                <div className='sm:flex'>
                    <div className='flex items-center w-100 sm:w-50'>
                        <div className='text-center font-medium'>
                            <div className='flex justify-center'>
                                <img src={img} className='w-full' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='text-left sm:text-left text-3xl font-medium w-100 sm:w-50'>
                        <div className='text-3xl sm:text-6xl px-10 sm:px-0 sm:pr-40  sm:mt-32 text-yellow-400'>
                            About Obaki
                        </div>
                        <div className='text-base px-10 sm:px-0 sm:pr-40 mt-[10px] sm:mt-5 mr-5'>
                            Obaki Coin was created with the desire to make a cryptocurrency that have a real business backup,
                            which can actually be used with real business, and not just held for speculation purposes.
                            We see far more uses for blockchain technology than merely keeping track of the trading back and fourth of useless tokens.
                            So we are creating an entire eco system of innovative,
                            enterprise level products and services that any holder of Obaki coin can actually spend their coins on purchase our service and products. .
                            We will be using the Obaki Coin blockchain as the fundamental link between all of our products and services.
                            And as such as more products and services are released and used, the more Obaki Coin will increase in value.
                            This partnered along with technical innovations to our blockchain technology and methodology, the ability to spend Obaki Coin, which later will get a large discount on buying a stock in Obaki IPO on Nasnaq, as well as a cryptocurrency exchange built directly into all Obaki wallets. Obaki Coin is poised to become the only coin with measurable value that back by a billion dollar evaluation of real business, and the number one cryptocurrency for the foreseeable future
                        </div>
                        <div className='sm:pr-40 px-10 sm:px-0 mt-[20px] sm:mt-10 mb-[40px] sm:mb-28 flex items-center'>
                            <button className='text-base font-bold text-black h-10 bg-yellow-400 pr-6 pl-6 mr-5 rounded-full' onClick={() => clickJoin()}>Join Us</button>
                            {isModalShow && <div className="flex col-md-4 text-center justify-center text-3xl ml-3" onClick={() => clickModalHandler()}>
                                <div className=' mr-3'>
                                    <a href='https://t.me/obakiglobal' target="_blank" rel="noreferrer" className='no-underline text-black'>
                                        <FaTwitter className='text-yellow-400' />
                                    </a>
                                </div>
                                <div className='mr-3'>
                                    <a href='https://t.me/obakithailand' target="_blank" rel="noreferrer" className='no-underline text-black'>
                                        <MdFacebook className='text-yellow-400' />
                                    </a>
                                </div>
                                <div className='mr-3'>
                                    <a href='https://t.me/obakiglobal' target="_blank" rel="noreferrer" className='no-underline text-black'>
                                        <FaTelegram className='text-yellow-400' />
                                    </a>
                                </div>
                                <div className='mr-3'>
                                    <a href='https://discord.gg/v4J84YnVNk' target="_blank" rel="noreferrer" className='no-underline text-black'>
                                        <FaDiscord className='text-yellow-400' />
                                    </a>
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>
                <div className='sm:flex sm:pb-40'>
                    <div className='text-left text-3xl font-medium w-100 sm:w-50'>
                        <div className='text-3xl sm:text-6xl px-10 sm:px-0 sm:pl-40  text-yellow-400'>
                            How to Buy
                        </div>
                        <div className='text-base px-10 sm:px-0 sm:pl-40 mt-[10px] sm:mt-5 mr-5 sm:pr-20 w-100'>
                            Obaki coin base on real business backup.
                            Obaki coin will be back with real business model that will help bring the best chef to home food app to the world.
                            Obaki is currently being interview on Nasdaq to prepare for the next largest IPO. Obaki coin will be the next stable coin that increase in value.
                            Now you can learn how to buy Obaki coin and use our innovation blockchain technology.
                        </div>
                        <div className='sm:pl-40 px-10 sm:px-0 mt-[20px] sm:mt-10 mb-[40px] sm:mb-28'>
                            <button className='text-base font-bold text-black h-10 bg-yellow-400 pr-6 pl-6 mr-5 rounded-full'>
                                <a href='https://docs.google.com/document/d/13lF2ZL2hxze_iv16W5WFH-7j6JdM22SNQBNncgqHUzw/edit' target="_blank" rel="noreferrer" className='no-underline text-black'>Learn More</a>

                            </button>
                        </div>
                    </div>
                    <div className='flex items-center w-full sm:w-50 mb-10 sm:mb-0'>
                        <div className='text-center font-medium px-10 sm:px-0 sm:px-20'>
                            <div className='flex justify-center'>
                                <img src={Group} className='w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Shepherd;