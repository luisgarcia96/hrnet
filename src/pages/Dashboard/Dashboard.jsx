import { Link } from "react-router-dom";
import styles from "./Dashboard.module.scss";
import { Button, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

const Dashboard = () => {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		startDate: "",
		street: "",
		city: "",
		state: "AL",
		zip: "",
		department: 'Sales',
	});

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
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</Select>
					</FormControl>
					<TextField
						label="Zip Code"
						value={form.zip}
						onChange={(e) => setForm({ ...form, zip: e.target.value })}
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
			<Button variant="contained">Contained</Button>
		</div>
	);
};

export default Dashboard;
