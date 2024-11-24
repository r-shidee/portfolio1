import React from "react";
import Image from "next/image";

const Blurbs = () => {
	return (
		<div className="widget widget--blurbs">
			<div className="widget__title bg-orange-200 p-1 text-red-500 font-semibold">
				shidee's Blurbs
			</div>
			<div className="p-1 pt-2 flex flex-col gap-1">
				<h4 className="font-semibold">Aspiring Frontend Developer</h4>
				<p className="max-w-prose">
					9 years of experience in frontend development, specializing in modern
					design systems, scalable codebases, and modernizing legacy systems.
					I'm proactive in adopting emerging technologies to enhance user
					experiences.
				</p>
			</div>
		</div>
	);
};

export default Blurbs;
