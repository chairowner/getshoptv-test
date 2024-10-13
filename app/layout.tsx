import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "./modules/Header/Header";

export const metadata: Metadata = {
	title: "GetShopTV - тестовое задание",
	description: "Сагайдачный Д.А.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
