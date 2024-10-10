import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";
import s from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "menu";
	href?: string;
}

export const Button: FC<ButtonProps> = ({
	className,
	href,
	variant = "primary",
	type = "button",
	...props
}) => {
	return (
		<button
			className={classNames(s.button, s[variant], className)}
			data-href={href}
			{...props}
		/>
	);
};
