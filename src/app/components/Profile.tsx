import React from "react";
import Image from "next/image";

const Profile = () => {
	return (
		<div className="widget widget--profile">
			<div className="flex flex-col gap-3">
				<h1 className="font-bold text-xl">Rashidee J.</h1>
				<div className="flex gap-3">
					<div>
						<Image
							className=""
							src="./profile.webp"
							alt="Profile Picture"
							width={180}
							height={180}
							priority
						/>
					</div>
					<div>
						<p>Male</p>
						<p>32 years old</p>
						<p>Bukit Jalil</p>
						<p>Malaysia</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
