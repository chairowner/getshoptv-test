import { FC } from "react";
import s from "./BalanceInfoBlock.module.scss";
import Image from "next/image";

interface BalanceInfoBlockProps {
	title: string;
	text: string;
}

export const BalanceInfoBlock: FC<BalanceInfoBlockProps> = ({
	title,
	text,
}) => {
	return (
		<div className={s.container}>
			<div className={s.icon}>
				<Image src="/icons/bulit.svg" alt="balance" width={24} height={24} />
			</div>
			<h3>{title}</h3>
			<div>
				<span>{text}</span>
			</div>
		</div>
	);
};
