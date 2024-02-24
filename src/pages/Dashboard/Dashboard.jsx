import { useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Link } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers";
import { Button, Select, TextField } from "@mui/material";

import { nanoid } from "nanoid";
import { statesList } from "../../constants/statesList";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	const { setEmployeesArray } = useContext(AppContext);
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		startDate: "",
		street: "",
		city: "",
		state: "AL",
		zipCode: "",
		department: "Sales",
	});

	const handleSubmit = () => {
		setEmployeesArray((prevArray) => [...prevArray, { id: nanoid(), ...form }]);
		alert("Employee created"); //Replace by the modal
	};

	return (
		<div className={styles.dashboard}>
			<h1>HRnet</h1>
			<Link to="/employees">View Current Employees</Link>
			<div className={styles.content}>
				<h2>Create Employee</h2>
				<TextField
					label="First Name"
					value={form.firstName}
					onChange={(e) => setForm({ ...form, firstName: e.target.value })}
				/>
				<TextField
					label="Last Name"
					value={form.lastName}
					onChange={(e) => setForm({ ...form, lastName: e.target.value })}
				/>
				<DatePicker
					label="Date of Birth"
					onChange={(date) => setForm({ ...form, dateOfBirth: date })}
				/>
				<DatePicker
					label="Start Date"
					onChange={(date) => setForm({ ...form, startDate: date })}
				/>
				<div className={styles.addressForm}>
					<h3>Address</h3>
					<TextField
						label="Street"
						value={form.street}
						onChange={(e) => setForm({ ...form, street: e.target.value })}
					/>
					<TextField
						label="City"
						value={form.city}
						onChange={(e) => setForm({ ...form, city: e.target.value })}
					/>
					<FormControl>
						<Select
							native
							value={form.state}
							onChange={(event) => {
								setForm({
									...form,
									state: event.target.value,
								});
							}}
						>
							{statesList.map((state) => (
								<option key={state.label} value={state.value}>
									{state.label}
								</option>
							))}
						</Select>
					</FormControl>
					<TextField
						label="Zip Code"
						value={form.zipCode}
						onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
					/>
				</div>
				<FormControl>
					<Select
						native
						label="Department"
						value={form.department}
						onChange={(e) => setForm({ ...form, department: e.target.value })}
					>
						<option value="Engineering">Engineering</option>
						<option value="Human Resources">Human Resources</option>
						<option value="Marketing">Marketing</option>
						<option value="Sales">Sales</option>
					</Select>
				</FormControl>
			</div>
			<Button variant="contained" onClick={handleSubmit}>
				Contained
			</Button>
		</div>
	);
};

export default Dashboard;
