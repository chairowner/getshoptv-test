import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import s from "./Flex.module.scss";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
	vertical?: boolean;
	gap?: number;
}

export const Flex: FC<FlexProps> = ({ gap, vertical, ...props }) => {
	return (
		<div
			className={classNames(s.flex, vertical && s.flexColumn)}
			style={{ gap: gap ? `${gap}px` : 0 }}
			{...props}
		/>
	);
};
