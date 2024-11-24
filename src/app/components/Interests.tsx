import React from "react";

const Interests = () => {
	return (
		<div className="widget widget--interests border border-blue-900 flex flex-col rounded-md">
			<div className="widget__title bg-blue-900 text-white p-2 font-semibold">
				shidee&apos;s Interests
			</div>
			<div className="flex flex-col gap-1 p-1">
				<div className=" gap-1 grid lg:grid-cols-12">
					<h3 className="lg:col-span-4 font-semibold bg-blue-400 text-blue-800 p-1">
						General
					</h3>
					<div className="lg:col-span-8 bg-blue-200 text-black p-1">
						<p>
							Internet, Movies, Karaoke, Finding New Food, Travel, Football,
							Futsal, Film Photography, Groundhopping.
						</p>
					</div>
				</div>
				<div className="gap-1 grid lg:grid-cols-12">
					<h3 className="lg:col-span-4 font-semibold bg-blue-400 text-blue-800 p-1">
						Music
					</h3>
					<div className="lg:col-span-8 bg-blue-200 text-black p-1">
						<p>
							<strong>Bands:</strong> My Chemical Romance, CNBLUE, Bittersweet.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Interests;
