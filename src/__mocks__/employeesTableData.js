// export const columns = [
// 	{ field: "id", headerName: "ID", width: 70 },
// 	{ field: "firstName", headerName: "First name", width: 130 },
// 	{ field: "lastName", headerName: "Last name", width: 130 },
// 	{
// 		field: "age",
// 		headerName: "Age",
// 		type: "number",
// 		width: 90,
// 	},
// 	{
// 		field: "fullName",
// 		headerName: "Full name",
// 		description: "This column has a value getter and is not sortable.",
// 		sortable: false,
// 		width: 160,
// 		valueGetter: (params) =>
// 			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
// 	},
// ];

export const mockedEmployeesArray = [
	{
		id: 1,
		firstName: "Bruce",
		lastName: "Wayne",
		startDate: "2010-01-01",
		department: "Management",
		dateOfBirth: "1980-02-19",
		street: "1007 Mountain Drive",
		city: "Gotham",
		state: "New Jersey",
		zipCode: "07001",
	},
	{
		id: 2,
		firstName: "Clark",
		lastName: "Kent",
		startDate: "2008-03-01",
		department: "Editorial",
		dateOfBirth: "1980-12-01",
		street: "344 Clinton St.",
		city: "Metropolis",
		state: "New York",
		zipCode: "10001",
	},
	{
		id: 3,
		firstName: "Diana",
		lastName: "Prince",
		startDate: "2011-06-01",
		department: "Diplomatic",
		dateOfBirth: "1980-07-01",
		street: "Themyscira Ave",
		city: "Washington",
		state: "DC",
		zipCode: "20001",
	},
	//Any additional rows would go here
];
