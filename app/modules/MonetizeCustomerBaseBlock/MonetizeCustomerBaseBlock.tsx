import { Button } from "@/app/ui/Button/Button";
import { SectionProps } from "@/app/types";
import { FC } from "react";
import s from "./MonetizeCustomerBaseBlock.module.scss";

export const MonetizeCustomerBaseBlock: FC<SectionProps> = ({ section }) => {
	return (
		<div className={s.container} data-section={section}>
			<div className="wrapper">
				<div className="container">
					<div className={s.content}>
						<div className={s.text}>
							<h1>Монетизируйте клиентскую базу, не снижая NPS</h1>
							<h3 className={s.addition}>
								Найдите идеальный баланс выручки и удовлетворённости
								пользователей с платформой рекламной монетизации
							</h3>
						</div>
						<Button className={s.button}>Заказать звонок</Button>
					</div>
				</div>
			</div>
			<div className={s.blur}></div>
		</div>
	);
};
