import { FeaturesButtons } from "@/app/components/FeaturesButtons/FeaturesButtons";
import { FC } from "react";
import { SectionProps } from "@/app/types";
import s from "./AdditionalRevenueSources.module.scss";

export const AdditionalRevenueSources: FC<SectionProps> = ({ section }) => {
	return (
		<div className="wrapper">
			<div className="container">
				<div className={s.container}>
					<div className={s.text}>
						<h2>Дополнительные источники выручки для разных компаний</h2>
					</div>
					<FeaturesButtons />
				</div>
			</div>
		</div>
	);
};
