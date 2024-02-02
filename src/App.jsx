import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import AppRouter from "./router";

function App() {
	return (
		<div id="App">
			<BrowserRouter>
				<main>
					<AppRouter />
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
