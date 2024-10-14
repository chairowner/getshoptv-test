"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Burger } from "@/app/ui/Burger/Burger";
import { NavbarDesktop } from "@/app/components/NavbarDesktop/NavbarDesktop";
import { IMenuButton } from "@/app/ui/MenuButton/MenuButton";
import s from "./Header.module.scss";
import { NavbarMobile } from "@/app/components/NavbarMobile/NavbarMobile";

const navItems: IMenuButton[] = [
	{
		children: "Преимущества",
		href: "#advantages",
	},
	{
		children: "Как работаем",
		href: "#how-to-work",
	},
];

export const Header = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [burgerActive, setBurgerActive] = useState<boolean>(false);

	const [onTop, setOnTop] = useState<boolean>(true);
	const [isHidden, setIsHidden] = useState<boolean>(false);
	const [lastScrollTop, setLastScrollTop] = useState<number>(0);

	const checkIsMobile = () => {
		setIsMobile(window.innerWidth <= 870);
	};

	const onClickBurger = () => {
		setBurgerActive((active) => !active);
	};

	const onCloseBurger = () => {
		setBurgerActive(false);
	};

	const scrollHandler = () => {
		const scrollTop: number = window.scrollY;
		const offset: number = 10;
		if (scrollTop < offset) {
			setOnTop(true);
			setIsHidden(false);
		} else {
			setOnTop(false);
			if (scrollTop > lastScrollTop + offset) {
				setIsHidden(true);
			} else if (scrollTop < lastScrollTop - offset) {
				setIsHidden(false);
			}
		}
		setLastScrollTop(scrollTop);
	};

	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);
		return () => {
			document.removeEventListener("scroll", scrollHandler);
		};
	}, [lastScrollTop]);

	useEffect(() => {
		checkIsMobile();
		window.addEventListener("resize", checkIsMobile);
		return () => {
			window.removeEventListener("resize", checkIsMobile);
		};
	}, []);

	useEffect(() => {
		if (!onTop) {
			setIsHidden(!isHidden);
		}
	}, [burgerActive]);

	useEffect(() => {
		if (!isMobile && burgerActive) {
			setBurgerActive(false);
		}
	}, [isMobile]);

	return (
		<>
			<div
				className={classNames(
					"wrapper",
					s.fixed,
					!onTop && s.bg,
					isHidden && s.hidden
				)}
			>
				<div className={classNames("container", s.container)}>
					<header className={s.header}>
						<img
							className={s.logo}
							src="/icons/logo.svg"
							alt="Logo"
							width={161}
							height={40}
						/>
						{isMobile ? (
							<Burger
								className={s.burger}
								active={burgerActive}
								onClick={onClickBurger}
							/>
						) : (
							<NavbarDesktop items={navItems} />
						)}
					</header>
				</div>
			</div>

			{burgerActive && (
				<NavbarMobile items={navItems} onClose={onCloseBurger} />
			)}
		</>
	);
};
