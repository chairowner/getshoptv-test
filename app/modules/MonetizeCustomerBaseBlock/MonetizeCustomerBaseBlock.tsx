import { Button } from "@/app/ui/Button/Button";
import s from "./MonetizeCustomerBaseBlock.module.scss";

export const MonetizeCustomerBaseBlock = () => {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<div className="container">
					<div className={s.content}>
						<div className={s.text}>
							<h1>Монетизируйте клиентскую базу, не снижая NPS</h1>
							<h2 className={s.addition}>
								Найдите идеальный баланс выручки и удовлетворённости
								пользователей с платформой рекламной монетизации
							</h2>
						</div>
						<div>
							<Button>Заказать звонок</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};