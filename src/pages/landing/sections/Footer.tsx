import { MdFacebook } from 'react-icons/md';
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import logo from '../../../assets/images/logo.png';
import background from '../../../assets/images/new/footer.png';
const Footer = () => {
  return (
    <div className="footer bg-Footer">
      <div className="absolute text-center w-full">
        <div className='pt-8 md:pt-12 flex flex-wrap w-full text-center'>

          <div className='text-white  mx-auto relative'>

            <div className='text-center mb-[40px] md:mb-20'>
              <div className='flex justify-center font-bold text-yellow-400 text-2xl md:text-3xl'>
                Subscribe to Our Newsletter
              </div>
              <div className='pt-2'>Be the first to receive our updates</div>
              <div className='flex' >
                <div className='mt-[15px] md:mt-5 pl-1 w-full'>
                  <div className='md:p-3 text-black w-full'>
                    <input className='bg-black rounded-bl-xl rounded-tl-xl border-2  border-yellow-400 text-black w-3/5' />
                    <button className="bg-yellow-400 rounded-br-xl rounded-tr-xl border-2 border-yellow-400 font-bold pr-2">submit</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='sm:absolute mx-auto sm:mx-0 sm:text-left sm:right-[5%] top-14 text-white'>
            <a href='https://drive.google.com/file/d/1RKzjvEbrTg-5FMvPxLmDGxVqMkMk3Oj8/view?usp=sharing' target="_blank" rel="noreferrer" className='no-underline text-white'>
              <div className='mb-3 cursor-pointer hover:text-yellow-500'>Terms and Conditions</div>
            </a>
            <a href='https://docs.google.com/document/d/1p3CWu1mk3lC5A4eCcPNDxyTtX2kipp36/edit?usp=sharing&ouid=109988263483047312887&rtpof=true&sd=true' target="_blank" rel="noreferrer" className='no-underline text-white'>
              <div className='mb-3 cursor-pointer hover:text-yellow-500'>Privacy</div>
            </a>
            <a href='https://drive.google.com/file/d/1Y0LpJeLm7meWgKCMHyWeOwKYYVpt8DlA/view?usp=sharing' target="_blank" rel="noreferrer" className='no-underline text-white'>
              <div className='mb-3 cursor-pointer hover:text-yellow-500'>Disclaimer</div>
            </a>
            <a href='https://drive.google.com/file/d/1KNCs6gpOfvwRWOHA_CZopV5YqVT2PNag/view?usp=sharing' target="_blank" rel="noreferrer" className='no-underline text-white'>
              <div className='mb-3 cursor-pointer hover:text-yellow-500'>Blog</div>
            </a>
            <a href='hhttps://drive.google.com/file/d/1KNCs6gpOfvwRWOHA_CZopV5YqVT2PNag/view?usp=sharing' target="_blank" rel="noreferrer" className='no-underline text-white'>
              <div className='mb-3 cursor-pointer hover:text-yellow-500'>Sitemap</div>
            </a>
            <div className='no-underline text-white'>
              <div className='mb-3 cursor-pointer hover:text-yellow-500'>Contact Us</div>
            </div>
          </div>
        </div>
        <div className='md:flex justify-around pb-[20px] mt-10 md:pb-20 md:pl-20'>
          <div className='col-md-4 text-center text-2xl text-yellow-400 text-bold flex justify-center mb-[10px] md:mb-0'>
            <img src={logo} className='w-40' alt="" />
          </div>
          <div className=' col-md-4 text-center text-1xl text-white text-bold mb-[10px] md:mb-0'>
            Copyright @ 2022 All rights reserved.
          </div>
          <div className="flex col-md-4 text-center justify-center text-3xl ">
            <div className='md:pl-36 mr-5'>
              <FaTwitter className='text-yellow-400' />
            </div>
            <div className='mr-5'>
              <MdFacebook className='text-yellow-400' />
            </div>
            <div className='mr-5'>
              <FaTelegram className='text-yellow-400' />
            </div>
            <div className='mr-5'>
              <FaDiscord className='text-yellow-400' />
            </div>
          </div>
        </div>
      </div>
      <img src={background} className='w-full bg-black h-[580px] lg:h-[420px] md:h-full' alt="" />
    </div>
  )
}

export default Footer
