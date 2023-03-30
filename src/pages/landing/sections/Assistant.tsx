import funfacts1 from '../../../assets/images/new/Group_7.png';
import funfacts2 from '../../../assets/images/new/Group_8.png';
import funfacts3 from '../../../assets/images/new/Group_9.png';
import funfacts4 from '../../../assets/images/new/Group_10.png';
import funfacts5 from '../../../assets/images/new/Group_11.png';
const Assistant = () => {
    return (
        <div className='p-8  bg-yellow-500 text-center'>
            <div className='flex flex-wrap justify-center md:px-32'>
                <div className='mx-auto mb-5'>
                    <div className='flex justify-center items-center'>
                        <img src={funfacts1} className="w-16 h-16" alt='' />
                    </div>
                    <div className='text-black text-2xl font-bold mt-2'>
                        $100 Mil
                    </div>
                    <div className='text-black text-xl'>
                        Total Supply
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex justify-center'>
                        <img src={funfacts2} className="w-16 h-16" alt='' />
                    </div>
                    <div className='text-black text-2xl font-bold mt-2'>
                        60 Million
                    </div>
                    <div className='text-black text-xl'>
                        ICO Coin
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex justify-center'>
                        <img src={funfacts3} className="w-16 h-16" alt='' />
                    </div>
                    <div className='text-black  text-2xl font-bold mt-2'>
                        100%
                    </div>
                    <div className='text-black text-xl'>
                        Secure
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex justify-center'>
                        <img src={funfacts4} className="w-16 h-16" alt='' />
                    </div>
                    <div className='text-black text-2xl font-bold mt-2'>
                        100%
                    </div>
                    <div className='text-black text-xl'>
                        Uptime
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex justify-center'>
                        <img src={funfacts5} className="w-16 h-16" alt='' />
                    </div>
                    <div className='text-black text-2xl font-bold mt-2'>
                        24/7
                    </div>
                    <div className='text-black text-xl'>
                        Support
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Assistant;