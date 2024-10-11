import Image from "next/image";
import s from "./DetailedReports.module.scss";
import classNames from "classnames";
import { Button } from "@/app/ui/Button/Button";

const list: string[] = [
	"Выручка, CTR, показы и другие показатели в реальном времени.",
	"Инструменты контроля качества трафика.",
	"Ежемесячные автоматические отчёты для каждого правообладателя.",
];

export const DetailedReports = () => {
	return (
		<div className={classNames("wrapper", "white-background", s.wrapper)}>
			<div className="container">
				<div className={s.container}>
					<div className={s.left}>
						<div className={s.listContainer}>
							<h2>Подробные отчёты для вас и правообладателей</h2>
							<div className={s.list}>
								{list.map((item, index) => (
									<div key={index} className={s.item}>
										<Image
											src="/icons/bullet.svg"
											alt="marker"
											width={24}
											height={24}
										/>
										<span className="body-text-1">{item}</span>
									</div>
								))}
							</div>
						</div>
						<div>
							<Button variant="secondary">Заказать звонок</Button>
						</div>
					</div>
					<div className={s.right}>
						<Image
							width={721}
							height={482}
							src="/images/laptop.png"
							alt="laptop"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
