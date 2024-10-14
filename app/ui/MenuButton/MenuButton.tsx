import classNames from "classnames";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import { HeaderType } from "@/app/types";
import s from "./MenuButton.module.scss";

export interface IMenuButton {
	children?: ReactNode;
	href?: string | undefined;
	isActive?: boolean;
}

export interface MenuButtonProps
	extends AnchorHTMLAttributes<HTMLAnchorElement> {
	currentSection?: HeaderType | null;
}

export const MenuButton: FC<MenuButtonProps> = ({
	className,
	currentSection,
	...props
}) => {
	const href = props?.href?.slice(1, props?.href?.length) as HeaderType;

	return (
		<a
			className={classNames(
				s.button,
				currentSection === href && s.active,
				className
			)}
			{...props}
		/>
	);
};
