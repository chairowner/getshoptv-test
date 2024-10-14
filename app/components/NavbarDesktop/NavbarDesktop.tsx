import { FC } from "react";
import { IMenuButton, MenuButton } from "@/app/ui/MenuButton/MenuButton";
import s from "./NavbarDesktop.module.scss";

export interface NavbarDesktopProps {
	items: IMenuButton[];
}

export const NavbarDesktop: FC<NavbarDesktopProps> = ({ items }) => {
	return (
		<nav className={s.navbar}>
			{items.map(({ children, href }, index) => (
				<MenuButton key={index} children={children} href={href} />
			))}
		</nav>
	);
};
