import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./styles/main.scss";
import AppRouter from "./router";
import AppContextProvider from "./contexts/AppContext";

function App() {
	return (
		<AppContextProvider>
			<div id="App">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<BrowserRouter>
						<main>
							<AppRouter />
						</main>
					</BrowserRouter>
				</LocalizationProvider>
			</div>
		</AppContextProvider>
	);
}

export default App;