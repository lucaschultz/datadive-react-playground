import { useState } from "react";

import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-8 bg-sky-50 text-sky-800">
			<div className="flex gap-8">
				<a href="https://vitejs.dev" target="_blank">
					<img alt="Vite logo" className="h-32" src={viteLogo} />
				</a>
				<a href="https://react.dev" target="_blank">
					<img alt="React logo" className="h-32 animate-spin" src={reactLogo} />
				</a>
			</div>
			<h1 className="text-6xl font-bold text-sky-950">Vite + React</h1>
			<div className="flex flex-col items-center gap-4">
				<button
					className="rounded-lg bg-sky-100 px-4 py-2 font-medium text-sky-900 transition-colors hover:bg-sky-200"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="opacity-60">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
