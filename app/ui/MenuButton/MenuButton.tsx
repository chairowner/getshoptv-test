import classNames from "classnames";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import s from "./MenuButton.module.scss";

export interface IMenuButton {
	children?: ReactNode;
	href?: string | undefined;
}

export interface MenuButtonProps
	extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const MenuButton: FC<MenuButtonProps> = ({ className, ...props }) => {
	return <a className={classNames(s.button, className)} {...props} />;
};
