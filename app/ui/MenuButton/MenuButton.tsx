import classNames from "classnames";
import { AnchorHTMLAttributes, FC } from "react";
import s from "./MenuButton.module.scss";

interface MenuButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const MenuButton: FC<MenuButtonProps> = ({ className, ...props }) => {
	return <a className={classNames(s.button, className)} {...props} />;
};
