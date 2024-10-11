import { FC, TextareaHTMLAttributes } from "react";
import classNames from "classnames";
import s from "./Textarea.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
	return (
		<textarea
			className={classNames(s.textarea, "body-text-2", className)}
			{...props}
		/>
	);
};
