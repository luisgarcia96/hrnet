import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
