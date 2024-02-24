import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import CurrentEmployees from "../pages/CurrentEmployees/CurrentEmployees";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/employees" element={<CurrentEmployees />} />
		</Routes>
	);
};

export default AppRouter;
