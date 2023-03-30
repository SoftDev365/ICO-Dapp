const Price = () => {
    return (
        <div className='flex md:p-5 flex-wrap'>
            <div className="text-center w-full">
                <div className='col-sm-12 mt-[20px] md:mt-5' >
                    <div className='px-12 md:px-40'>
                        <div className='grid grid-cols-2 mt-[20px] md:mt-20 gap-10'>
                            <div className='col-span-2 lg:col-span-1 text-center '>
                                <div className='text-[28px] font-bold mb-4'>PRESALE</div>
                                <div className='text-2xl  border-4 border-white border-b-0 bg-gray-900 rounded-tl-xl  rounded-tr-xl pt-2 mr-2 ml-2'>
                                    <div className="text-yellow-400 font-bold text-4xl pt-2">0.2 USD</div>
                                    <div className="text-white text-base pt-2  pb-2">Sep 30 - Oct 28</div>
                                </div>
                                <div className='text-center border-4 border-yellow-400 pt-2 mr-2 ml-2 bg-gray-900'>
                                    <div className="text-white text-base pt-2 ">First Round</div>
                                    <div className="text-yellow-400 text-2xl pt-2 font-bold">1,000,000</div>
                                    <div className="text-white text-base pt-2 pb-2 ">Obaki Coins</div>
                                </div>
                                <div className=' pr-6 pl-6  border-4 border-white border-t-0 bg-gray-900 rounded-bl-xl  rounded-br-xl pt-2 pb-2 mr-2 ml-2'>
                                    <div className="text-white text-base pt-2">Maximum</div>
                                    <div className="text-yellow-400 text-4xl font-bold pb-2">10,000 token/user</div>
                                </div>
                            </div>
                            <div className='col-span-2 lg:col-span-1 text-center '>
                                <div className='text-[28px] font-bold mb-4'>PUBLIC SALE</div>
                                <div className='text-2xl  border-4 border-white border-b-0 bg-gray-900 rounded-tl-xl  rounded-tr-xl pt-2 mr-2 ml-2'>
                                    <div className="text-yellow-400 font-bold text-4xl pt-2">0.5 USD</div>
                                    <div className="text-white text-base pt-2  pb-2">Oct 29 - </div>
                                </div>
                                <div className='text-center border-4 border-yellow-400 pt-2 mr-2 ml-2 bg-gray-900'>
                                    <div className="text-white text-base pt-2 ">Token Allocation</div>
                                    <div className="text-yellow-400 text-2xl pt-2 font-bold">4,000,000</div>
                                    <div className="text-white text-base pt-2 pb-2 ">Obaki Coins</div>
                                </div>
                                <div className=' pr-6 pl-6  border-4 border-white border-t-0 bg-gray-900 rounded-bl-xl  rounded-br-xl py-2 mr-2 ml-2'>
                                    <div className="text-yellow-400 text-4xl font-bold py-3 pb-4">No Limit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;