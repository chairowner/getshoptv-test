import { FeaturesButtons } from "@/app/components/FeaturesButtons/FeaturesButtons";
import s from "./AdditionalRevenueSources.module.scss";

export const AdditionalRevenueSources = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<div className={s.container}>
					<div>
						<h2>Дополнительные источники выручки для разных компаний</h2>
					</div>
					<FeaturesButtons />
				</div>
			</div>
		</div>
	);
};
