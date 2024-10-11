import { FC, InputHTMLAttributes } from "react";
import s from "./Input.module.scss";
import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...props }) => {
	if (props.type === "checkbox") {
		return (
			<div className={s.checkbox}>
				<input className={classNames(s.checkboxInput, className)} {...props} />
			</div>
		);
	}
	return <input className={classNames(s.input, className)} {...props} />;
};
