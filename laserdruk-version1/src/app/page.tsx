import Image from "next/image";
import logoImage from '../../public/las3.png'

export default function Home() {
	return (
		<div className="max-w-[1200px] m-auto">
			<nav className="mt-8 w-full bg-neutral-900 text-slate-50 flex justify-between items-center rounded-xl drop-shadow-md overflow-hidden">
				<a href="#" className="px-4 ">
					<Image src={logoImage} width={120} height={120} alt="logo laserdruk"/>
				</a>
				<div></div>
				<ul className="flex justify-center items-center ">
					<li>
						<a href="#" className="mx-4 px-2 uppercase">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="mx-4 px-2 uppercase">
							Sklep
						</a>
					</li>
					<li>
						<a href="#" className="mx-4 px-2 uppercase">
							Blog
						</a>
					</li>
					<li className="bg-orange-600 hover:bg-orange-500 py-3">
						<a href="#" className="px-6 py-2 uppercase">
							Kontakt
						</a>
					</li>
				</ul>
			</nav>
			<main className="w-full h-full">
				<section className="grid grid-cols-4 grid-rows-8 gap-2 h-[600px] mt-4 drop-shadow-md">
					<div className="bg-hero-img bg-cover col-start-1 col-end-4 row-span-full rounded-xl">
						<h1 className="font-display uppercase text-7xl text-slate-50 text-right pt-4 pr-3">
							Co drukujemy,
							<br /> mordziaty?
						</h1>
					</div>

					<div className="col-start-4 col-end-5 row-start-1 row-end-3 bg-neutral-300 rounded-xl flex justify-center items-center drop-shadow-md hover:cursor-pointer bg-car-wrap bg-cover text-white before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:rounded-xl before:content-['']">
						<p className="font-medium uppercase z-10">Reklama na pojazdach</p>
					</div>
					<div className="col-start-4 col-end-5 row-start-3 row-end-5 bg-neutral-300 rounded-xl flex justify-center items-center drop-shadow-md hover:cursor-pointer bg-shirt-print bg-cover before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:content-[''] text-white before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:rounded-xl before:content-['']">
						<p className="font-medium uppercase z-10">Nadruki na odzieży</p>
					</div>
					<div className="col-start-4 col-end-5 row-start-5 row-end-7 bg-neutral-300 rounded-xl flex justify-center items-center drop-shadow-md hover:cursor-pointer bg-stamp-img bg-cover before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:content-[''] text-white before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:rounded-xl before:content-['']">
						<p className="font-medium uppercase z-10">Pieczątki</p>
					</div>
					<div className="col-start-4 col-end-5 row-start-7 row-end-9 bg-orange-600 hover:bg-orange-500 rounded-xl flex justify-center items-center drop-shadow-md hover:cursor-pointer">
						<p className="font-medium text-white uppercase">
							Skontaktuj się z nami
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}
