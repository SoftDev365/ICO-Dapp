import Group23 from '../../../assets/images/new/Group_23.png';
import background from '../../../assets/images/new/Rectangle_18.png';
import Loadmap1 from '../../../assets/images/new/Roadmap1.png';
import Loadmap2 from '../../../assets/images/new/Roadmap2.png';
import Loadmap3 from '../../../assets/images/new/Roadmap3.png';
import Loadmap4 from '../../../assets/images/new/Roadmap4.png';
import Loadmap5 from '../../../assets/images/new/Roadmap5.png';
import Loadmap6 from '../../../assets/images/new/Roadmap6.png';
const LoadMap = () => {
    return (
        <div className='relative flex items-center bg-black'>
            <div className='absolute text-center  col-sm-12'>
                <div className='text-3xl md:text-5xl font-bold text-center text-yellow-400 pt-20'>
                     ROADMAP
                </div>
                <div className='container pb-20'>
                    <div className='flex justify-center mt-48 pb-48 mr-12 ml-12'>
                        <div className='w-1/6 text-center roadmap-item'>
                            <div className='flex justify-center'>
                                <img src={Loadmap1} className='w-full' alt="text-center" />
                                <div className="roadmap-horizontal-line-down"></div>
                            </div>
                            <div className='item-name'>
                                <div className='text-white text-xl'>
                                    September
                                </div>
                                <div className='text-yellow-400 text-4xl font-bold'>
                                    2022
                                </div>
                                <div className='text-white text-xl'>
                                    Presale
                                </div>
                            </div>
                        </div>
                        <div className='w-1/6 text-center roadmap-item mt-20'>
                            <div className='flex justify-center'>
                                <img src={Loadmap1} className='w-full' alt="text-center" />
                                <div className="roadmap-horizontal-line-up"></div>
                            </div>
                            <div className='item-name-reverse'>
                                <div className='text-white text-xl'>
                                    January
                                </div>
                                <div className='text-yellow-400 text-4xl font-bold'>
                                    2023
                                </div>
                                <div className='text-white text-xl'>
                                    Accept Credit Card
                                </div>
                            </div>
                        </div>
                        <div className='w-1/6 text-center roadmap-item'>
                            <div className='flex justify-center'>
                                <img src={Loadmap1} className='w-full' alt="text-center" />
                                <div className="roadmap-horizontal-line-down"></div>
                            </div>
                            <div className='item-name'>
                                <div className='text-white text-xl'>
                                October
                                </div>
                                <div className='text-yellow-400 text-4xl font-bold'>
                                    2022
                                </div>
                                <div className='text-white text-xl'>
                                Sale On Launchpad
                                </div>

                            </div>
                        </div>
                        <div className='w-1/6 text-center roadmap-item  mt-20'>
                            <div className='flex justify-center'>
                                <img src={Loadmap1} className='w-full' alt="text-center" />
                                <div className="roadmap-horizontal-line-up"></div>
                            </div>
                            <div className='item-name-reverse'>
                                <div className='text-white text-xl'>
                                March 
                                </div>
                                <div className='text-yellow-400 text-4xl font-bold'>
                                2023
                                </div>
                                <div className='text-white text-sm'>
                                Partner With other Company to Get Obaki Coin to be in Their Coin Acceptance
                                </div>
                            </div>
                        </div>
                        <div className='w-1/6 text-center roadmap-item'>
                            <div className='flex justify-center'>
                                <img src={Loadmap1} className='w-full' alt="text-center" />
                                <div className="roadmap-horizontal-line-down"></div>
                            </div>
                            <div className='item-name'>
                                <div className='text-white text-xl'>
                                December
                                </div>
                                <div className='text-yellow-400 text-4xl font-bold'>
                                2022
                                </div>
                                <div className='text-white text-xl'>
                                Put Obaki Coin On Marketplace
                                </div>

                            </div>
                        </div>
                        <div className='w-1/6 text-center roadmap-item  mt-20'>
                            <div className='flex justify-center'>
                                <img src={Loadmap1} className='w-full' alt="text-center" />
                            </div>
                            <div className='item-name-reverse'>
                                <div className='text-white text-xl'>
                                July
                                </div>
                                <div className='text-yellow-400 text-4xl font-bold'>
                                2023
                                </div>
                                <div className='text-white text-xl'>
                                Obaki will be in SPAC and IPO
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={background} className='w-full bg-black' alt="" />
        </div>
        // <div className='relative flex items-center bg-dark'>
        //     <div className="absolute text-center  col-sm-12">
        //         <div className='text-yellow-400 font-bold text-3xl col-sm-12 pb-4'>
        //             Roadmap
        //         </div>
        //         <div className='text-yellow-400 flex text-center col-sm-12 pl-20 pr-64'>
        //             <div className='col-sm-4 '>
        //                 <div className='text-white text-base pt-1'>
        //                     January
        //                 </div>
        //                 <div className='text-yellow-400 font-bold text-3xl pt-1'>
        //                     2023
        //                 </div>
        //                 <div className='text-white text-base pt-1'>
        //                     Accept Credit Card
        //                 </div>
        //             </div>
        //             <div className='col-sm-4'>
        //                 <div className='text-white text-base pt-1'>
        //                     March
        //                 </div>
        //                 <div className='text-yellow-400 font-bold text-3xl pt-1'>
        //                     2023
        //                 </div>
        //                 <div className='text-white text-base pt-1'>
        //                     Partner With other Company to Get Obaki Coin to be
        //                     in Their Coin Acceptance
        //                 </div>
        //             </div>
        //             <div className='col-sm-4'>
        //                 <div className='text-white text-base pt-1'>
        //                     July
        //                 </div>
        //                 <div className='text-yellow-400 font-bold text-3xl pt-1'>
        //                     2023
        //                 </div>
        //                 <div className='text-white text-base pt-1'>
        //                     Obaki Will  be
        //                     in SPAC & IPO
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='text-yellow-400 mr-20 ml-20'>
        //             <div className='flex justify-center'>
        //                 <img src={Group23} className='' alt="text-center" />
        //             </div>
        //         </div>
        //         <div className='text-yellow-400 flex text-center col-sm-12 pl-64 pr-20'>
        //             <div className='col-sm-4 '>
        //                 <div className='text-white text-base pt-1'>
        //                     September
        //                 </div>
        //                 <div className='text-yellow-400 font-bold text-3xl pt-1'>
        //                     2022
        //                 </div>
        //                 <div className='text-white text-base pt-1'>
        //                     Presale
        //                 </div>
        //             </div>
        //             <div className='col-sm-4'>
        //                 <div className='text-white text-base pt-1'>
        //                     October
        //                 </div>
        //                 <div className='text-yellow-400 font-bold text-3xl pt-1'>
        //                     2022
        //                 </div>
        //                 <div className='text-white text-base pt-1'>
        //                     Sale On Launchpad
        //                 </div>
        //             </div>
        //             <div className='col-sm-4'>
        //                 <div className='text-white text-base pt-1'>
        //                 December
        //                 </div>
        //                 <div className='text-yellow-400 font-bold text-3xl pt-1'>
        //                     2022
        //                 </div>
        //                 <div className='text-white text-base pt-1'>
        //                 Put Obaki Coin On Marketplace
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <img src={background} className='w-full bg-black' alt="" />
        // </div>
    );
}

export default LoadMap;