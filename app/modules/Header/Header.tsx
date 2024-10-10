import s from "./Header.module.scss";
import Image from "next/image";
import { MenuButton } from "@/app/ui/MenuButton/MenuButton";

export const Header = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<header className={s.container}>
					<Image
						className={s.logo}
						src="/icons/logo.svg"
						alt="Logo"
						width={161}
						height={40}
					/>
					<nav className={s.navbar}>
						<MenuButton children="Преимущества" href="#advantages" />
						<MenuButton children="Как работаем" href="#advantages" />
					</nav>
				</header>
			</div>
		</div>
	);
};
