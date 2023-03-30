import { ethers } from 'ethers'
import React, { useState } from 'react';
import busdAbi from '../../contracts/busd.json'
import { AiOutlineClose } from 'react-icons/ai'
import Back from '../../assets/images/new/back-yellow.png'
import BackMobile from '../../assets/images/new/back-yellow-mobile.png'
import { useWindowSize } from '../../hooks/windowSize'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  amount: 0
}
const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
const myAddress = "0xbEdF228d4FaDFcccc45DE9d36E6aABB17182bC0F";

const Register = () => {
  const [values, setValues] = React.useState(initialValue);
  const [publicKey, setPublickey] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [btnName, setBtnName] = useState<string>("Connect");
  const size = useWindowSize();
  React.useEffect(() => {
    if (publicKey === "") setBtnName("Connect");
    else setBtnName("Disconnect")
  }, [publicKey])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const phoneChange = (value:string) => {
    setValues({
      ...values,
      phoneNumber: value,
    });
  };

  const connectButton = async () => {
    const { ethereum } = window as any;
    if (ethereum.isMetaMask) {
      if (publicKey === "") {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const { name } = await provider.getNetwork();
        if (name === "bnb") {
          const accounts = await provider.send("eth_requestAccounts", []);
          setPublickey(accounts[0]);
        } else {
          alert("please select BSC Network!")
        }

      } else {
        setPublickey("")
      }
    } else {
      setMsg("Install MetaMask");
      alert(msg)
    }
  };

  const changeIsChecked = () =>{
    setIsChecked(!isChecked);
  }

  const participateButton = async () => {
    const floorAmount= Math.floor(values.amount);
    if (floorAmount !== 0 && floorAmount>=10 && floorAmount<=2000 && values.email !== "" && values.phoneNumber !== "" && publicKey !== "") {
      const singer = (new ethers.providers.Web3Provider((window as any).ethereum)).getSigner();
      let busdContract = new ethers.Contract(busdAddress, busdAbi, singer);
      const tx = await busdContract.transfer(myAddress, ethers.BigNumber.from(values.amount).mul(ethers.BigNumber.from("0xDE0B6B3A7640000")));
      setIsModalShow(true);
    } else {
      alert("Please fill out the correct amount, email and phone number!")
    }
  }

  const clickAgreeHandler = async () => {
    try{
      if (isChecked) {
        const singer = (new ethers.providers.Web3Provider((window as any).ethereum)).getSigner();
        let busdContract = new ethers.Contract(busdAddress, busdAbi, singer);
        await busdContract.transfer(myAddress, ethers.BigNumber.from(values.amount).mul(ethers.BigNumber.from("0xDE0B6B3A7640000")));
        setError(false);
        setIsChecked(false);
        setIsModalShow(false);
      } else {
        setError(true)
      }
    }catch(e:any){
      alert("Failed! Please check your balance.")
    }
  }
  return (
    <div className='relative w-full'>
      {isModalShow && <div className="w-full bg-[rgba(0,0,0,0.7)] fixed flex justify-center items-center h-full px-2 sm:px-0">
        <div className="text-[#000000] w-full sm:w-1/2 rounded-lg bg-white p-5 relative">
          <AiOutlineClose className="text-[#000000] hover:text-red-500 text-2xl mr-2 font-bold absolute right-3 top-3" onClick={()=>setIsModalShow(false)} />
          <div className='text-lg font-bold'>Thank you for interest in Obaki token (OBC) </div> <br />

          <div>Presale. Term: Presale: 0.2 BUSD per OBC . </div>
          <div>Minimum 10 USD and Maximum 2000 USD (10,000 coin / Free NFT) </div> <br />

          <div>Obaki coin will be Unlocked Linearly for 10 % on every other 3 months. </div>
          <div>Lock 6 month for first 6 months release 10% and thereafter 10% per month </div>
          <br />

          <div className='flex items-center'>
            <input type="checkbox" className="w-[20px] h-[20px] !rounded border border-gray-100 bg-gray-300" checked={isChecked} onChange={()=>changeIsChecked()} />
            <label htmlFor="check" className='ml-2'>I fully understand and accept terms and conditions above. </label>
          </div>
          {error &&<div className='text-red-500'>Please accept terms and condition</div>}
          <br/>
          <div>
            <button className="bg-green-500 hover:bg-green-700 rounded-xl text-white font-medium w-full h-10" onClick={() => clickAgreeHandler()}>Agree</button>
          </div>
        </div>
      </div>}
      <div className="flex justify-around items-center h-screen px-4 sm:px-0 absolute w-full">
        <div className="text-white w-full bg-[rgba(0,0,0,0.8)] rounded-xl lg:w-[30%] p-[15px] lg:px-[30px] lg:py-[40px] z-1 lg:ml-[500px]">
          <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-3">Paticipate to Obaki Coin</div>
          {/* <div className="mb-3">
          <div className="mb-1">First Name:</div>
          <input type="text" name='firstName' className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2" value={values.firstName} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <div className="mb-1">Last Name:</div>
          <input type="text" name='lastName' className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2" value={values.lastName} onChange={handleInputChange} />
        </div> */}
          <div className="mb-3">
            <div className="mb-1">Email</div>
            <input type="text" name='email' className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2" value={values.email} onChange={handleInputChange} />
          </div>
          <div className="mb-3 text-black">
            <div className="mb-1 text-white">Phone Number</div>
            <PhoneInput country={'th'} value={values.phoneNumber} onChange={phoneChange}/>
            {/* <input type="text" name='phoneNumber' className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2" value={values.phoneNumber} onChange={handleInputChange} /> */}
          </div>
          <div className="mb-3">
            <div className="mb-1">Wallet Address</div>
            <div className='flex'>
              <input type="text" disabled value={publicKey} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2" />
              <button className="bg-blue-500 hover:bg-green-700 rounded-lg text-white font-medium ml-5 px-4 h-10" onClick={() => connectButton()}>{btnName}</button>
            </div>
          </div>
          <div className="mb-5">
            <div className="mb-1">BUSD Amount</div>
            <input type="number" name='amount' className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-300 block w-full p-2" value={values.amount} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <button className="bg-green-500 hover:bg-green-700 rounded-xl text-white font-medium w-full h-10" onClick={() => participateButton()}>Participate</button>
          </div>
        </div>
      </div>
      <img src={size.width===undefined||size.width>640?Back:BackMobile} alt="back" className='w-screen h-screen' />
    </div>
  );
}

export default Register;