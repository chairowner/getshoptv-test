import Image from "next/image";
import s from "./Partners.module.scss";

export const Partners = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<div className={s.container}>
					<div>
						<h3>Наши партнёры по монетизации</h3>
					</div>
					<div className={s.partners}>
						<img src="/icons/partners/clickwave.svg" />
						<img src="/icons/partners/zyphronix.svg" />
						<img src="/icons/partners/novasphere.svg" />
					</div>
				</div>
			</div>
		</div>
	);
};
