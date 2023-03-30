import Community from '../../assets/images/Community.png'
import Platform from '../../assets/images/Platform.svg'
import OBC from '../../assets/images/OBC.svg'
import Obaki from '../../assets/images/Obaki.svg'
import Business from '../../assets/images/Business.svg'
import Market from '../../assets/images/Market.svg'
import Privilege from '../../assets/images/Privilege.svg'
import Dot from '../../assets/images/Dot.svg'
import Price from './Price'

const Presales = () => {
  return (
    <div className='relative w-full bg-black pt-24 text-white px-[20px] lg:px-20 text-center'>
      <Price />
      <div className="text-[45px] font-bold text-center mt-20">
        The Benefits of Token Holders
      </div>
      <div className="text-md text-center">
        How It works
      </div>
      <div className='flex justify-center'>
        <div className="rounded-full border-2 border-yellow-500 px-3 py-2 mt-10 flex justify-center w-full lg:w-2/5">
          JOIN US ON TELEGRAM AND DISCORD
        </div>
      </div>
      <div className="grid grid-cols-3 mt-10 text-left gap-4">
        <div className="col-span-3 lg:col-span-1">
          <div className='flex items-start'>
            <img src={Platform} alt="Platform" className='mt-2' />
            <div className='ml-4 mb-4'>
              <div className='text-[24px] font-bold'>Platform to help create Millions of jobs worldwide </div>
              <div className='text-md mt-2'>
                Obaki platform application helps people to be their own boss and cook food from their own home.  It will helps create millions of job in cooking, entertainment and accommodation.
              </div>
            </div>
          </div>
          <div className='flex items-start'>
            <img src={OBC} alt="Platform" className='mt-2' />
            <div className='ml-4 mb-4'>
              <div className='text-[24px] font-bold'>OBC will be stable currency  </div>
              <div className='text-md mt-2'>
              OBC will be use in various app payment through Oracle 
              </div>
            </div>
          </div>
          <div className='flex items-start'>
            <img src={Obaki} alt="Platform" className='mt-2' />
            <div className='ml-4 mb-4'>
              <div className='text-[24px] font-bold'>Obaki help the poor is our goal</div>
              <div className='text-md mt-2'>
              OBC will be use to help lift people from poverty. 
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className='flex items-start'>
            <img src={Business} alt="Platform" className='mt-2' />
            <div className='ml-4 mb-4'>
              <div className='text-[24px] font-bold'>OBC is back by real business asset  </div>
              <div className='text-md mt-2'>
              Obaki coin is going IPO and now in current Nasdaq underwriting process. 
              </div>
            </div>
          </div>
          <div className='flex items-start'>
            <img src={Market} alt="Platform" className='mt-2' />
            <div className='ml-4 mb-4'>
              <div className='text-[24px] font-bold'>OBC will be top rank in market place  </div>
              <div className='text-md mt-2'>
              OBC will be use by retailer and supplier that will increase in value
              </div>
            </div>
          </div>
          <div className='flex items-start'>
            <img src={Privilege} alt="Platform" className='mt-2' />
            <div className='ml-4 mb-4'>
              <div className='text-[24px] font-bold'>Hold Obaki coin will create a larger opportunity and privilege </div>
              <div className='text-md mt-2'>
              People that hold obaki coin will give them access to better privilege and sta
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className='bg-[#2B2015] rounded-lg text-center p-4'>
            <div className='text-[30px] font-bold'>Decentralized<br /> application with<br /> largest cook<br /> database</div>
            <div className='text-md text-center mt-2'>
              We bring huge community of cook from all over the world to join obaki in one platform. Now you can
              Join obaki coin as part of our family.
            </div>
            <div className='mt-3'>
              <button className="bg-yellow-500 hover:bg-yellow-700 rounded-xl text-[#131313] font-medium w-full h-14" >SHOW ME</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-10 text-left gap-4">
        <div className="col-span-3 lg:col-span-1">
          <div className='flex mb-3'>
            <img src={Dot} alt="Platform" />
            <div className='ml-4'>
              <div className='text-[24px] font-bold'>Presale date </div>
              <div className='text-md mt-2'>
                Sept 20,2022 to Oct 20, 2022
              </div>
            </div>
          </div>
          <div className='flex mb-3'>
            <img src={Dot} alt="Platform" />
            <div className='ml-4'>
              <div className='text-[24px] font-bold'>Number of token for sale   </div>
              <div className='text-md mt-2'>
              10,000,000 OBC (10%) 

              </div>
            </div>
          </div>
          <div className='flex mb-3'>
            <img src={Dot} alt="Platform" />
            <div className='ml-4'>
              <div className='text-[24px] font-bold'>Accepted currencies  </div>
              <div className='text-md mt-2'>
              BUSD
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className='flex mb-3'>
            <img src={Dot} alt="Platform" />
            <div className='ml-4'>
              <div className='text-[24px] font-bold'>Token Exchange rate </div>
              <div className='text-md mt-2'>
              1 BUSD = 5 OBC (0.2@) 
              </div>
            </div>
          </div>
          <div className='flex mb-3'>
            <img src={Dot} alt="Platform" />
            <div className='ml-4'>
              <div className='text-[24px] font-bold'>Minimal transaction amount  </div>
              <div className='text-md mt-2'>
              100 USD 
              </div>
            </div>
          </div>
          <div className='flex mb-3'>
            <img src={Dot} alt="Platform" />
            <div className='ml-4'>
              <div className='text-[24px] font-bold'>Contract address  </div>
              <div className='text-md mt-2'>
              0xbf31a069cc414f402c7b18c18d0f2aa6<br/>37398c01ea6b45bcab21e3f0cdbe7453
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className='w-full h-full flex justify-center items-center'>
            <button className="bg-gradient-to-b from-[#FFA722] to-[#FF6B00] hover:from-[#FF6B00] hover:to-[#FFA722] rounded-xl text-white font-bold text-[18px] w-full h-24" >ICO Participants is<br />
              0.2 usd</button>
          </div>
        </div>
      </div>
      <div className="text-md text-center my-10">
        Unsold tokens from previous rounds will be moved into the next<br />
        round. The token sale will automatically go to the next round when <br />
        tokens are sold out in the prior round.
      </div>
      <div className="text-[45px] font-bold">
        Soft-cap Budget Allocation
      </div>
      <div className="text-md">
        Community
      </div>
      <div className="flex justify-center w-full">
        <img src={Community} alt="Community" />
      </div>
    </div>
  );
}

export default Presales;