import type React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				fontFamily: "sans-serif",
			}}
		>
			<h1>404 - Page Not Found</h1>
			<p>The page you are looking for does not exist.</p>
			<Link
				to="/"
				style={{
					color: "#111",
					textDecoration: "underline",
					marginTop: "1rem",
				}}
			>
				Go back to home
			</Link>
		</div>
	);
};

export default NotFound;
