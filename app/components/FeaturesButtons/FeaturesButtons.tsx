"use client";
import {
	SwitchButtons,
	SwitchItem,
} from "@/app/ui/SwitchButtons/SwitchButtons";
import { FC, HTMLAttributes, useState } from "react";
import s from "./FeaturesButtons.module.scss";
import classNames from "classnames";

interface FeaturesButtonsProps extends HTMLAttributes<HTMLDivElement> {}

export const FeaturesButtons: FC<FeaturesButtonsProps> = ({
	className,
	...props
}) => {
	const [items, setItems] = useState<SwitchItem[]>([
		{
			btn: "Операторам",
			text: "Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации",
			active: true,
		},
		{
			btn: "ОТТ сервисам",
			text: "Дополнительные возможности обогащения данных об аудитории и монетизации",
			active: false,
		},
	]);

	const onClickHandler = (btn: string) => {
		setItems((items) => {
			return items.map((item) => ({ ...item, active: item.btn === btn }));
		});
	};

	return (
		<div className={classNames(s.container, className)} {...props}>
			<SwitchButtons items={items} onClickHandler={onClickHandler} />
			<span className="body-text-1">
				{items.find((item) => item.active)?.text}
			</span>
		</div>
	);
};
