// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }) => {
	return (
		<>
			{children}
			<ProgressBar
				height="4px"
				color="#FE191E"
				options={{ showSpinner: false }}
				shallowRouting
			/>
		</>
	);
};

export default Providers;
