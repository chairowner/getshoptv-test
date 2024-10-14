import { Input } from "@/app/ui/Input/Input";
import { Textarea } from "@/app/ui/Textarea/Textarea";
import { Button } from "@/app/ui/Button/Button";
import { FC } from "react";
import s from "./Form.module.scss";
import { SectionProps } from "@/app/types";

export const Form: FC<SectionProps> = ({ section }) => {
	return (
		<div className="wrapper" data-section={section}>
			<div className="container">
				<div className={s.container}>
					<h2>Заполните форму</h2>
					<form method="POST" action="#" className={s.form}>
						<Textarea
							className={s.textarea}
							name="question"
							placeholder="Напишите свой вопрос"
						/>
						<div className={s.second}>
							<div className={s.inputs}>
								<Input
									className={s.email}
									type="email"
									name="email"
									placeholder="Введите e-mail"
								/>
								<div className={s.rulesBlock}>
									<Input type="checkbox" name="rules" className={s.checkbox} />
									<p className={s.text}>
										Я ознакомлен(а) с{" "}
										<a href="#">политикой конфиденциальности</a> и согласен(на)
										на обработку <a href="#">персональных данных</a>.
									</p>
								</div>
							</div>
							<Button type="button" variant="secondary">
								Отправить
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
