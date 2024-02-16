import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./styles/main.scss";
import AppRouter from "./router";

function App() {
	return (
		<div id="App">
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<BrowserRouter>
					<main>
						<AppRouter />
					</main>
				</BrowserRouter>
			</LocalizationProvider>
		</div>
	);
}

export default App;
