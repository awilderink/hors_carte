import type React from "react";
import { useEffect, useState } from "react";

interface LayoutProps {
	children: React.ReactNode;
	className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
	const [params, setParams] = useState({
		size: "a4",
		layout: "classic",
		width: "768",
	});

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		setParams({
			size: searchParams.get("format") || searchParams.get("ratio") || "a4",
			layout: searchParams.get("layout") || "classic",
			width: searchParams.get("width") || "768",
		});
	}, []);

	const formats: Record<string, string> = {
		a4: "1 / 1.4142",
		story: "9 / 16",
		square: "1 / 1",
		post: "4 / 5",
		landscape: "16 / 9",
	};

	const ratio =
		formats[params.size.toLowerCase()] || params.size.replace(":", "/");
	const maxWidth = params.width.includes("px")
		? params.width
		: `${params.width}px`;

	return (
		<div
			className={`ticket-container ${className}`}
			data-layout={params.layout}
			style={
				{
					"--aspect-ratio": ratio,
					"--max-width": maxWidth,
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	);
};

export default Layout;
