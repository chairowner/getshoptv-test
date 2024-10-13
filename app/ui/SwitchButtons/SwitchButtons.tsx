import { FC } from "react";
import classNames from "classnames";
import s from "./SwitchButtons.module.scss";

export interface SwitchItem {
	active: boolean;
	btn: string;
	text: string;
}

interface SwitchButtonsProps {
	items: SwitchItem[];
	onClickHandler: (btn: string) => void;
}

export const SwitchButtons: FC<SwitchButtonsProps> = ({
	items,
	onClickHandler,
}) => {
	return (
		<div className={s.buttons}>
			{items.map((item, index) => (
				<button
					key={index}
					onClick={() => {
						if (!item.active) {
							onClickHandler(item.btn);
						}
					}}
					className={classNames("h3", s.item, item.active && s.active)}
				>
					{item.btn}
				</button>
			))}
		</div>
	);
};
