
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/images/logo.png';
import appRoutes from '../pages/routes'

import { BsList } from 'react-icons/bs'
const Header = () => {

	return (
		<header className="flex justify-center w-full h-20 bg-black fixed z-10 ">
			<nav className="navbar navbar-expand-lg navbar-light  no-underline items-center w-full">
				<div className='container'>
					<div className='navbar-brand'>
						<Link to={'/'} className="no-underline">
							<img src={logo} className='w-[150px]' alt="" />
						</Link>
					</div>
					<button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#navbarNav' aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<BsList className="text-white text-2xl mr-2 font-bold" />
					</button>
					<div className='collapse navbar-collapse' id="navbarNav">
						<ul className='navbar-nav'>
							{appRoutes.map(
								(item, index) => <div key={index}>
									{item.nav && <li className="flex bg-[rgba(0,0,0,0.9)] px-[20px] sm:px-2 xl:bg-transparent lg:bg-transparent justify-start border-b border-slate-700 xl:border-0 lg:border-0" >
										{item.title ==="HOME" && 
										<Link to={item.path} key={item.title} className="text-yellow-400 nav-link no-underline text-white text-2xl  hover:underline">
											<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
												{item.title}
											</div>
										</Link>}
										{item.title ==="ABOUT US" && 
										<Link to={item.path} key={item.title} className="text-yellow-400 nav-link no-underline text-white text-2xl  hover:underline">
											<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
												{item.title}
											</div>
										</Link>}
										{item.title === "PRESALES" && 
										<HashLink  to={item.path} key={item.title} className="text-yellow-400 nav-link no-underline text-white text-2xl  hover:underline">
											<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
												{item.title}
											</div>
										</HashLink>}
										{item.title === "ROADMAP" && 
										<HashLink  to={item.path} key={item.title} className="text-yellow-400 nav-link no-underline text-white text-2xl  hover:underline">
											<a href='https://drive.google.com/file/d/1KNCs6gpOfvwRWOHA_CZopV5YqVT2PNag/view?usp=sharing' target="_blank" rel="noreferrer" className='no-underline text-white'>
											<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
												{item.title}
											</div>
											</a>
										</HashLink>}
										{item.title === "WHITEPAPER" && <div className='text-yellow-400 nav-link no-underline text-white text-2xl hover:underline'>
											<a href='https://drive.google.com/file/d/104SaX4aWhPLmTx0NARlAJQWXUcf5NtEF/view?usp=sharing' target="_blank" rel="noreferrer" className='no-underline text-white'>
												<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
													{item.title}
												</div>
											</a>
										</div>}
										{item.title === "EXCHANGE" && <div className='text-yellow-400 nav-link no-underline text-white text-2xl  hover:underline'>
											<a href='https://pancakeswap.finance/' target="_blank" rel="noreferrer" className='no-underline text-white'>
												<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
													{item.title}
												</div>
											</a>
										</div>}
										{item.title === "TOKENOMIC" && <div className='text-yellow-400 nav-link no-underline text-white text-2xl  hover:underline'>
											<a href='https://drive.google.com/file/d/1YccfsLKXibKUcJ7Q8qt_Lo-_Ve1XX1vq/view?usp=sharing' target="_blank" rel="noreferrer" className='no-underline text-white'>
												<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
													{item.title}
												</div>
											</a>
										</div>}
									</li>}
								</div>
							)}
							<li className="flex bg-[rgba(0,0,0,0.9)] px-3 sm:px-0 xl:bg-transparent lg:bg-transparent justify-start border-b border-slate-700 xl:border-0 lg:border-0 block lg:hidden" >
								<Link to={"/register"} key={"register"} className="text-yellow-400 nav-link no-underline text-white text-2xl mr-5 hover:underline" >
									<div className='text-yellow-400' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Participate</div>
								</Link>
							</li>
						</ul>
						<button className='text-xl font-bold rounded-1xl text-black h-10 bg-yellow-400 pr-4 pl-4 mr-5 rounded-full hidden lg:block'><Link to={'/register'} className="no-underline text-black">
							Participate

						</Link></button>
					</div>
				</div>
			</nav>
		</header>
	)
}
export default Header;