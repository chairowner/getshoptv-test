import { FC } from "react";
import { IMenuButton, MenuButton } from "@/app/ui/MenuButton/MenuButton";
import s from "./NavbarDesktop.module.scss";
import { HeaderType } from "@/app/types";

export interface NavbarDesktopProps {
	items: IMenuButton[];
	currentSection?: HeaderType | null;
}

export const NavbarDesktop: FC<NavbarDesktopProps> = ({
	items,
	currentSection,
}) => {
	console.log({ currentSection });
	return (
		<nav className={s.navbar}>
			{items.map(({ children, href }, index) => (
				<MenuButton
					key={index}
					children={children}
					currentSection={currentSection}
					href={href}
				/>
			))}
		</nav>
	);
};
