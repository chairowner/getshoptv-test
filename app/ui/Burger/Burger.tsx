import { FC } from "react";
import s from "./Burger.module.scss";
import classNames from "classnames";

export interface BurgerProps {
	active: boolean;
	className?: string;
	onClick?: () => void;
}

export const Burger: FC<BurgerProps> = ({ className, active, onClick }) => {
	return (
		<div
			className={classNames(s.burger__wrapper, className, active && s.active)}
			onClick={onClick}
		>
			<div className={s.burger} />
		</div>
	);
};
