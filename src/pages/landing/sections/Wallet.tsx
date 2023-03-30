import Com from '../../../assets/images/new/com.png';
import Phone from '../../../assets/images/new/phone.png';
import background from '../../../assets/images/new/Rectangle_29.png';
const AdSection = () => {
    return (
        <div className='relative flex items-center bg-dark'>
            <div className='absolute text-white col-sm-12'>
                <div className='md:flex'>
                    <div className='text-left text-lg font-medium col-md-5 px-10 md:px-0 md:pl-20'>
                        <div className='text-3xl md:text-4xl md:mt-20 text-yellow-400'>
                            Obaki Coin Wallet
                        </div>
                        <div className='text-base   mt-2'>
                            Our IT is working on launching obaki coin wallet on IOS and Google Platform
                        </div>
                        <div className='text-3xl md:text-4xl   mt-8 text-yellow-400'>
                            Obaki Coin Innovation
                        </div>
                        <div className='text-base  font-bold mt-2'>
                            INSTANT TRANSFERS
                        </div>
                        <div className='text-base   mt-2'>
                            Members can easily transfer Obaki coin  between user wallets without needing to list on the exchange
                        </div>
                        <div className='text-base  font-bold mt-2'>
                            EXCHANGE PLATFORM
                        </div>
                        <div className='text-base   mt-2'>
                            Launching in November  20th 2023  Members can trade and exchange obaki coin  to ETH, BTC,
                            and other Crypto Currencies from directly inside their wallets.
                        </div>
                    </div>
                    <div className='flex items-center col-md-7'>
                        <div className='text-center font-medium'>
                            <div className='flex justify-center'>
                                <img src={Com} className='w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex'>
                    <div className='flex items-center col-md-4'>
                        <div className='text-center font-medium md:pl-20'>
                            <div className='flex justify-center'>
                                <img src={Phone} className='w-full' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='text-left text-3xl font-medium col-md-8 px-10 md:px-0 md:pr-40'>
                        <div className='text-base  font-bold mt-15'>
                            FUEL FOR THE FUTURE
                        </div>
                        <div className='text-base   mt-2'>
                            Obaki Coin and its blockchain will be the underlying foundation of many enterprise level products and services.
                            Allowing the active spending of Obaki coin on services,
                            which will continue to drive up the value of Obaki coin  being held by users.
                        </div>
                        <div className='text-base  font-bold mt-2'>
                            INSTANT TRANSFERS TO FIAT
                        </div>
                        <div className='text-base   mt-2'>
                            Obaki coin  patented reserve fund and IOTA technology makes it easy to transfer your Obaki coin into Fiat currency,
                            and do instant transfers to your connected bank account or debit card.
                        </div>
                        <div className='text-base  font-bold mt-2'>
                            EARN FREE OBAKI COIN
                        </div>
                        <div className='text-base   mt-2'>
                            Members can easily earn free Obaki coin  durring the ICO just by inviting people to buy Obaki coin.
                            Bonus Rate up to 10%
                        </div>
                    </div>
                </div>
            </div>
            <img src={background} className='w-full bg-black h-[1600px] md:h-full' alt="" />
        </div>
        // <div className='flex flex-wrap p-8  bg-building'>
        //     {/* // <div className='relative flex justify-center items-center bg-red'> */}
        //     <div className=' text-white  text-center'>
        //         <div className='flex '>
        //             <div className="w-1/2 flex justify-end">
        //                 <div className="w-4/5">
        //                     <div className='text-center text-4xl font-medium mb-3'>OBAKICOIN WALLET </div>
        //                     <div className='text-left text-xl font-medium mr-20  mb-3'>Our IT team is working to launch EbbiCoin Wallet on IOS and Android. Release Date: September 2021</div>
        //                     <div className='text-left text-xl font-medium mb-3'>Were working with partners and banks to integrate with all major tap to pay providers
        //                         Deployment Date: December 2021</div>
        //                 </div>
        //             </div>
        //             <div className='w-1/2'>
        //                 <div className='text-center font-medium '>
        //                     <div className='flex justify-center'>
        //                         <img src={Phone} className='w-auto' alt="" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='flex'>
        //             <div className='w-1/2'>
        //                 <div className='text-center font-medium '>
        //                     <div className='flex justify-center'>
        //                         <img src={Com} className='w-auto' alt="" />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-1/2 flex justify-start">
        //                 <div className="w-4/5">
        //                     <div className='text-center text-4xl font-medium mt-5 mb-3'>OBAKICOIN INNOVATIONS</div>
        //                     <div className='text-left text-xl font-medium mr-20  mb-3'>INSTANT TRANSFERS
        //                         Members can easily transfer Obaki coin  between user wallets without needing to list on the exchange</div>
        //                     <div className='text-left text-xl font-medium mb-3'>EXCHANGE PLATFORM
        //                         Launching in November  20th 2023  Members can trade and exchange obaki coin  to ETH, BTC, and other Crypto Currencies from directly inside their wallets.</div>
        //                     <div className='text-left text-xl font-medium mb-3'>FUEL FOR THE FUTURE
        //                         Obaki Coin and its blockchain will be the underlying foundation of many enterprise level products and services.
        //                         Allowing the active spending of Obaki coin on services, which will continue to drive up the value of Obaki coin  being held by users.</div>
        //                     <div className='text-left text-xl font-medium mb-3'>INSTANT TRANSFERS TO FIAT
        //                         Obaki coin  patented reserve fund and IOTA technology makes it easy to transfer your Obaki coin into Fiat currency,
        //                         and do instant transfers to your connected bank account or debit card.</div>
        //                     <div className='text-left text-xl font-medium mb-3'>EARN FREE Obaki coin
        //                         Members can easily earn free Obaki coin  durring the ICO just by inviting people to buy Obaki coin. Bonus Rate up to 10%</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div >
    );
}

export default AdSection;