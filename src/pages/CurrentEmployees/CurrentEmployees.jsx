import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CurrentEmployees.module.scss";
import PropTypes from "prop-types";
import { mockedEmployeesArray } from "../../__mocks__/employeesTableData";
import { DataGrid } from "@mui/x-data-grid";
import { TextField } from "@mui/material";

const columns = [
	{ field: "firstName", headerName: "First name", width: 130 },
	{ field: "lastName", headerName: "Last name", width: 130 },
	{ field: "startDate", headerName: "Start Date", width: 130 },
	{ field: "department", headerName: "Department", width: 130 },
	{ field: "dateOfBirth", headerName: "Date of Birth", width: 130 },
	{ field: "street", headerName: "Street", width: 130 },
	{ field: "city", headerName: "City", width: 130 },
	{ field: "state", headerName: "State", width: 130 },
	{ field: "zipCode", headerName: "Zip Code", width: 130 },
];

const CurrentEmployees = () => {
	const [search, setSearch] = useState("");
	const [employeesArray, setEmployeesArray] = useState(mockedEmployeesArray);
	const [filteredEmployees, setFilteredEmployees] =
		useState(mockedEmployeesArray);

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

	console.log(search);
	console.log(filteredEmployees);

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
					columns={columns}
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
	employeesArray: PropTypes.array.isRequired,
};
