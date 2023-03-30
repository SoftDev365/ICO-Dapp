import Mining from '../../../assets/images/new/referal.png';
import logo from '../../../assets/images/new/home-big-logo1.png';
import Purchases from '../../../assets/images/new/purchases.png';
import Trading from '../../../assets/images/new/trading.png';
import Staking from '../../../assets/images/new/staking.png';
import Transfer from '../../../assets/images/new/transfers.png';
import background from '../../../assets/images/new/Rectangle_28.png';
const AdSection = () => {
    return (
        <div className='text-center'>
            <div className='absolute w-full text-center pt-[20px] md:pt-20'>
                <div className='text-yellow-400 font-bold text-3xl'> Obaki Coin
                </div>
                <div className='flex justify-center mt-[15px] md:mt-14'>
                    <img src={logo} className="w-auto" alt='' />
                </div>
                <div className='flex flex-wrap justify-center mt-5 mx-[10px] md:mx-36'>
                    <div className='mx-auto mb-5 md:mb-0'>
                        <div className='flex justify-center'>
                            <img src={Purchases} className="w-14 h-16" alt='' />
                        </div>
                        <div className='text-yellow-400 text-2xl mt-2'>
                            Purchases
                        </div>
                        <div className='text-white text-sm'>
                            Digital Shopping
                        </div>
                    </div>
                    <div className='mx-auto mb-5 md:mb-0'>
                        <div className='flex justify-center'>
                            <img src={Trading} className="w-18 h-16" alt='' />
                        </div>
                        <div className='text-yellow-400 text-2xl mt-2'>
                            Trading
                        </div>
                        <div className='text-white text-sm'>
                            Lowest fee 1%
                        </div>
                    </div>
                    <div className='mx-auto mb-5 md:mb-0'>
                        <div className='flex justify-center'>
                            <img src={Transfer} className="w-18 h-16" alt='' />
                        </div>
                        <div className='text-yellow-400 text-2xl mt-2'>
                            Transfers
                        </div>
                        <div className='text-white text-sm'>
                            ObakiCoins & Fiat
                        </div>
                    </div>
                    <div className='mx-auto mb-5 md:mb-0'>
                        <div className='flex justify-center'>
                            <img src={Mining} className="w-18 h-16" alt='' />
                        </div>
                        <div className='text-yellow-400 text-2xl mt-2'>
                            Referral
                        </div>
                        <div className='text-white text-sm'>
                            Large commission
                        </div>
                    </div>
                    <div className='mx-auto mb-5 md:mb-0'>
                        <div className='flex justify-center'>
                            <img src={Staking} className="w-18 h-16" alt='' />
                        </div>
                        <div className='text-yellow-400 text-2xl mt-2'>
                            Staking
                        </div>
                        <div className='text-white text-sm'>
                            Earn Free ObakiCoin
                        </div>
                    </div>
                </div>
            </div>
            <img src={background} className='w-full bg-black h-[700px] md:h-full' alt="" />
        </div >
    );
}

export default AdSection;