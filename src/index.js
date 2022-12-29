import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { Modal } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
	const [useDarkTheme, setUseDarkTheme] = useState(false);
	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<button
				style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
				onClick={() => setUseDarkTheme(true)}
			>
				Dark Theme
			</button>
			<button
				style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
				onClick={() => setUseDarkTheme(false)}
			>
				Dark Theme
			</button>

			<div
				style={{
					background: useDarkTheme
						? defaultTheme.primaryColor
						: darkTheme.primaryColor,
					width: "100vw",
					height: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<Modal />
			</div>

			<GlobalStyle />
		</ThemeProvider>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
