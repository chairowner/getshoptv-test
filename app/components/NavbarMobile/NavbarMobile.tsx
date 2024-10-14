import { FC } from "react";
import { IMenuButton, MenuButton } from "@/app/ui/MenuButton/MenuButton";
import { Burger } from "@/app/ui/Burger/Burger";
import s from "./NavbarMobile.module.scss";

export interface NavbarMobileProps {
	items: IMenuButton[];
	onClose: () => void;
}

export const NavbarMobile: FC<NavbarMobileProps> = ({ items, onClose }) => {
	return (
		<div className={s.navbar}>
			<div className={s.header}>
				<img
					className={s.logo}
					src="/icons/logo.svg"
					alt="Logo"
					width={113}
					height={28}
				/>
				<div className={s.buttons}>
					<Burger active={true} onClick={onClose} />
				</div>
			</div>
			<nav>
				{items.map(({ children, href }, index) => (
					<MenuButton key={index} children={children} href={href} />
				))}
			</nav>
		</div>
	);
};
