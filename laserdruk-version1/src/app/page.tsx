import Image from "next/image";
import logoImage from "../../public/las3.png";

export default function Home() {
	return (
		<div className="max-w-[1200px] m-auto">
			<nav className="mt-8 w-full bg-neutral-900 text-slate-50 flex justify-between items-center rounded-xl drop-shadow-md overflow-hidden">
				<a href="#" className="px-4 ">
					<Image
						src={logoImage}
						width={120}
						height={120}
						alt="logo laserdruk"
					/>
				</a>
				<div></div>
				<ul className="flex justify-center items-center ">
					<li>
						<a href="#" className="mx-4 px-2 ">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="mx-4 px-2 ">
							Sklep
						</a>
					</li>
					<li>
						<a href="#" className="mx-4 px-2 ">
							Blog
						</a>
					</li>
					<li className="bg-orange-600 hover:bg-orange-500 py-3">
						<a href="#" className="px-6 py-2 uppercase ">
							Kontakt
						</a>
					</li>
				</ul>
			</nav>
			<main className="w-full h-full relative">
				<section className="grid grid-cols-6 grid-rows-8 gap-2 h-[600px] mt-4 drop-shadow-md rounded-xl">
					<div className="col-start-1 col-end-4 row-span-full bg-slate-100 rounded-xl">
						
					</div>
					<div className=" col-start-4 col-end-7 row-span-full bg-slate-100 rounded-xl">
						

						<h1 className="font-display uppercase text-7xl text-orange-500 text-right pt-4 pr-3">
							Co drukujemy,
							<br /> mordziaty?
						</h1>
					</div>
					
				</section>
				<section className="grid grid-cols-6 grid-rows-8 h-[400]">
					<div className="row-start-2 row-end-9 col-start-1 col-end-9 bg-slate-400 rounded-xl"></div>
					<div className="col-start-3 col-end-5 bg-red-100 row-start-1 row-end-3">nigga</div>
				</section>
			
			</main>
		</div>
	);
}
