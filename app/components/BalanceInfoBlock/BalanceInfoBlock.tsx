import { FC } from "react";
import Image from "next/image";
import s from "./BalanceInfoBlock.module.scss";

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
				<Image src="/icons/bullet.svg" alt="balance" width={24} height={24} />
			</div>
			<h3>{title}</h3>
			<span className="body-text-2">{text}</span>
		</div>
	);
};
