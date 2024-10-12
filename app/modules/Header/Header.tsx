"use client";
import { useEffect, useState } from "react";
import { MenuButton } from "@/app/ui/MenuButton/MenuButton";
import Image from "next/image";
import classNames from "classnames";
import s from "./Header.module.scss";

export const Header = () => {
	const [onTop, setOnTop] = useState<boolean>(true);
	const [hidden, setHidden] = useState<boolean>(false);
	const [lastScrollTop, setLastScrollTop] = useState<number>(0);

	const scrollHandler = () => {
		const scrollTop = window.scrollY;

		// Появление Header при прокрутке наверх или при scrollTop < 10
		if (scrollTop < 10) {
			setOnTop(true);
			setHidden(false);
		} else {
			setOnTop(false);

			// Скрытие Header при прокрутке вниз и показ при прокрутке вверх
			if (scrollTop > lastScrollTop + 10) {
				// Скролл вниз (порог в 10px)
				setHidden(true);
			} else if (scrollTop < lastScrollTop - 10) {
				// Скролл вверх (порог в 10px)
				setHidden(false);
			}
		}

		// Обновляем последнюю позицию скролла
		setLastScrollTop(scrollTop);
	};

	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);
		return () => {
			document.removeEventListener("scroll", scrollHandler);
		};
	}, [lastScrollTop]);

	return (
		<div
			className={classNames(
				"wrapper",
				s.fixed,
				!onTop && s.bg,
				hidden && s.hidden
			)}
		>
			<div className={classNames("container", s.container)}>
				<header className={s.header}>
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
