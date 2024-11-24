import React from "react";
import Link from "next/link";

const Weblinks = () => {
	return (
		<div className="widget widget--links border border-blue-900 flex flex-col  rounded-md">
			<div className="widget__title bg-blue-900 text-white p-2 font-semibold">
				shidee's Links
			</div>
			<div className="flex flex-col">
				<div className="p-2 flex items-center">
					<h3 className="w-1/3">Github</h3>
					<div className="w-2/3">
						<p className="font-mono text-sm">
							<Link href="https://github.com/r-shidee">
								github.com/r-shidee
							</Link>
						</p>
					</div>
				</div>
				<div className="p-2 flex items-center">
					<h3 className="w-1/3">Linkedin</h3>
					<div className="w-2/3">
						<p className="font-mono text-sm">
							<Link href="https://www.linkedin.com/in/r-shidee/">
								linkedin.com/in/r-shidee/
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weblinks;
