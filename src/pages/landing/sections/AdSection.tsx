import first from '../../../assets/images/new/Rectangle_1.png';
import logo from '../../../assets/images/new/home-big-logo1.png';
const AdSection = () => {
    return (
        <div className='relative flex items-center w-full pt-16'>
            <div className='absolute text-white w-full text-center w-full'>
                <div className='w-100'>
                    <div className='text-center font-medium mb-[10px] sm:mb-5'>
                        <div className='flex justify-center mb-[10px] sm:mb-5'>
                            <img src={logo} className='w-24 sm:w-48' alt="logo" />
                        </div>
                        <div className='text-center text-xl sm:text-5xl font-bold font-medium mb-[10px] sm:mb-3'>What is Obaki Coin</div>
                        <div className='text-center text-sm font-normal sm:text-md  mr-5 sm:mr-20 ml-5 sm:ml-20 mb-[5px] sm:mb-1'>Obaki coin is the most solid and stable cypto currency that have real business backup </div>
                        <div className='text-center text-sm font-normal sm:text-md  mb-[5px] mb-[15px] sm:mb-5'>to harness the power of the blockchain</div>
                        {/* <button className='text-base font-bold text-black h-8 sm:h-10 bg-yellow-400 pr-8 pl-8 mr-5 rounded-full'>Stake</button>
                        <button className='text-base font-bold text-black h-8 sm:h-10 bg-yellow-400 pr-8 pl-8 mr-5 rounded-full'>Claim</button> */}
                        <button className='text-base font-bold text-black h-8 sm:h-10 bg-yellow-400 pr-8 pl-8 mr-5 rounded-full'>
                            <a href='https://poocoin.app/' target="_blank"  rel="noreferrer" className='no-underline text-black'>BSC PRICE CHART</a></button>

                    </div>
                </div>
            </div>
            <div className='w-full'>
            <div className='w-100 block h-8 bg-black block sm:hidden'>
                    
                    </div>
                <img src={first} className='w-full h-full bg-black' alt="" />
                <div className='w-100 block h-20 bg-black block sm:hidden'>
                    
                </div>
            </div>
        </div>
    );
}

export default AdSection;