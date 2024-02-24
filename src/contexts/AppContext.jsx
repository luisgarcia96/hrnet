import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [employeesArray, setEmployeesArray] = useState([]);

	//Object that contains the state and the function to update the state
	const value = {
		employeesArray,
		setEmployeesArray,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

AppContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
