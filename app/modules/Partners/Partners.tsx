import Image from "next/image";
import s from "./Partners.module.scss";

interface IPartner {
	src: string;
	alt: string;
	width: number;
	height: number;
}

const partners: IPartner[] = [
	{
		width: 177,
		height: 55,
		alt: "clickwave logo",
		src: "clickwave.svg",
	},
	{
		width: 101.92,
		height: 70.78,
		alt: "zyphronix logo",
		src: "zyphronix.svg",
	},
	{
		width: 192.72,
		height: 60.52,
		alt: "novaspherelogo",
		src: "novasphere.svg",
	},
];

export const Partners = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<div className={s.wrapper}>
					<div className={s.container}>
						<h3>Наши партнёры по монетизации</h3>
						<div className={s.partners}>
							{partners.map((item, index) => (
								<Image
									key={index}
									src={`/icons/partners/${item.src}`}
									alt={item.alt}
									width={item.width}
									height={item.height}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
