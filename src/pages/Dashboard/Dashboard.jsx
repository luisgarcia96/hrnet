import { useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Link } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers";
import { Button, Select, TextField } from "@mui/material";

import { nanoid } from "nanoid";
import { statesList } from "../../constants/statesList";
import Modal from "@luisgarcia96/hrnet_design_system";
import "@luisgarcia96/hrnet_design_system/dist/style.css";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	const { setEmployeesArray } = useContext(AppContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		dateOfBirth: null,
		startDate: null,
		street: "",
		city: "",
		state: "AL",
		zipCode: "",
		department: "Sales",
	});

	const handleSubmit = () => {
		setEmployeesArray((prevArray) => [...prevArray, { id: nanoid(), ...form }]);
		setIsModalOpen(true);
		setForm({
			firstName: "",
			lastName: "",
			dateOfBirth: null,
			startDate: null,
			street: "",
			city: "",
			state: "AL",
			zipCode: "",
			department: "Sales",
		});
	};

	return (
		<div className={styles.dashboard}>
			<h1>HRnet</h1>
			<Link to="/employees">View Current Employees</Link>
			<div className={styles.content}>
				<h2>Create Employee</h2>
				<Modal
					isOpen={isModalOpen}
					message={"Employee created"}
					onClose={() => setIsModalOpen(false)}
				/>
				<div className={styles.personalForm}>
					<TextField
						label="First Name"
						value={form.firstName}
						onChange={(e) => setForm({ ...form, firstName: e.target.value })}
						className={styles.inputField}
					/>
					<TextField
						label="Last Name"
						value={form.lastName}
						onChange={(e) => setForm({ ...form, lastName: e.target.value })}
						className={styles.inputField}
					/>
					<DatePicker
						label="Date of Birth"
						value={form.dateOfBirth}
						onChange={(date) => setForm({ ...form, dateOfBirth: date })}
						className={styles.inputField}
					/>
					<DatePicker
						label="Start Date"
						value={form.startDate}
						onChange={(date) => setForm({ ...form, startDate: date })}
						className={styles.inputField}
					/>
				</div>
				<div className={styles.addressForm}>
					<h3>Address</h3>
					<div className={styles.addressFields}>
						<TextField
							label="Street"
							value={form.street}
							onChange={(e) => setForm({ ...form, street: e.target.value })}
							className={styles.inputField}
						/>
						<TextField
							label="City"
							value={form.city}
							onChange={(e) => setForm({ ...form, city: e.target.value })}
							className={styles.inputField}
						/>
						<FormControl className={styles.inputField}>
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
							className={styles.inputField}
						/>

						<FormControl className={styles.inputField}>
							<Select
								native
								label="Department"
								value={form.department}
								onChange={(e) =>
									setForm({ ...form, department: e.target.value })
								}
							>
								<option value="Engineering">Engineering</option>
								<option value="Human Resources">Human Resources</option>
								<option value="Marketing">Marketing</option>
								<option value="Sales">Sales</option>
								<option value="Legal">Legal</option>
							</Select>
						</FormControl>
					</div>
				</div>
			</div>
			<Button variant="contained" onClick={handleSubmit}>
				Add Employee
			</Button>
		</div>
	);
};

export default Dashboard;
