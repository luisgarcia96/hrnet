import { useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { TextField } from "@mui/material";

import PropTypes from "prop-types";
import { employeesTableHeaders } from "../../constants/employeesTableHeaders";

import styles from "./CurrentEmployees.module.scss";

const CurrentEmployees = () => {
	const [search, setSearch] = useState("");
	const { employeesArray } = useContext(AppContext);
	const [filteredEmployees, setFilteredEmployees] = useState(employeesArray);

	const handleSearch = (e) => {
		setSearch(e.target.value);
		setFilteredEmployees(
			employeesArray.filter((employee) => {
				return (
					//Iterate over all the keys in the employee object
					Object.keys(employee).some((key) =>
						employee[key]
							.toString()
							.toLowerCase()
							.includes(e.target.value.toLowerCase())
					)
				);
			})
		);
	};

	return (
		<div className={styles.currentEmployees}>
			<h1>Current Employees</h1>
			<Link to="/">Back to Dashboard</Link>

			<div className={styles.dataTableContainer}>
				<div className={styles.searchBar}>
					<TextField
						label="Search"
						value={search}
						onChange={handleSearch}
						variant="outlined"
					/>
				</div>
				<DataGrid
					rows={filteredEmployees}
					columns={employeesTableHeaders}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</div>
	);
};

export default CurrentEmployees;

CurrentEmployees.propTypes = {
	employeesArray: PropTypes.array,
};
