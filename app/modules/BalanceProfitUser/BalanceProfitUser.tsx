import Image from "next/image";
import classNames from "classnames";
import { BalanceInfoBlock } from "@/app/components/BalanceInfoBlock/BalanceInfoBlock";
import s from "./BalanceProfitUser.module.scss";

export const BalanceProfitUser = () => {
	return (
		<div className={classNames("wrapper", "white-background")}>
			<div className="container">
				<div className={s.container}>
					<h2 className={s.title}>
						Баланс между выручкой и удовлетворённостью пользователей
					</h2>
					<div className={s.balanceBlock}>
						<BalanceInfoBlock
							title="Частотность под контролем"
							text="Чтобы не ронять NPS и не увеличивать отток пользователей"
						/>
						<div className={s.logoWrapper}>
							<div className={s.line} />
							<div className={s.logo}>
								<Image
									src="/icons/balance_logo.svg"
									alt="balance"
									width={80}
									height={74.81}
								/>
							</div>
							<div className={s.line} />
						</div>
						<BalanceInfoBlock
							title="Максимальная выручка"
							text="За счёт заполнения всех рекламных мест по высокой цене"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
