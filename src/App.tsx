import type React from "react";
import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import Layout from "./components/Layout";

const App: React.FC = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<BrowserRouter>
				<Layout>
					<Routes />
				</Layout>
			</BrowserRouter>
		</Suspense>
	);
};

const Routes = () => {
	return useRoutes(routes);
};

export default App;
