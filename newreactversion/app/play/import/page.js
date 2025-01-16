"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow, parse } from "date-fns";

const formatTimestamp = (timestamp) => {
	try {
		// Remove 'localstorage-' prefix
		const cleanTimestamp = timestamp.replace("localstorage-", "");

		// Split the timestamp into date and time
		const [date, time] = cleanTimestamp.split("--");

		if (!date || !time) throw new Error("Invalid timestamp format");

		// Split date and time into components
		const [month, day, year] = date.split("-");
		const [hour, minute, second, period] = time.split("-");

		if (!month || !day || !year || !hour || !minute || !second || !period) {
			throw new Error("Invalid timestamp components");
		}

		// Create a readable date string
		const formattedDate = `${month}/${day}/${year} ${hour}:${minute}:${second} ${period}`;

		// Parse the date string to create a Date object
		const dateObject = parse(
			formattedDate,
			"MM/dd/yyyy hh:mm:ss a",
			new Date(),
		);

		// Calculate relative time
		const relativeTime = formatDistanceToNow(dateObject, { addSuffix: true });

		// Return both formatted date and relative time
		return { formattedDate, relativeTime };
	} catch (error) {
		console.error("Error parsing timestamp:", error);
		return { formattedDate: "Invalid Date", relativeTime: "" };
	}
};

export default function SelectVersionPage() {
	const [versions, setVersions] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/querySaveData");
				const data = response.data.data;

				if (data && Array.isArray(data)) {
					const formattedVersions = data.map((item) => {
						const [timestamp] = Object.keys(item);
						const { formattedDate, relativeTime } = formatTimestamp(timestamp);
						return {
							key: timestamp,
							formattedDate,
							relativeTime,
							data: item[timestamp],
						};
					});
					setVersions(formattedVersions);
				} else {
					setError("No data found or data is in incorrect format");
				}
			} catch (err) {
				setError(err.message);
			}
		};

		fetchData();
	}, []);

	const handleVersionSelect = (versionData) => {
		// Clear existing localStorage
		localStorage.clear();

		// Iterate through the selected version's data and set each item in localStorage
		for (const [key, value] of Object.entries(versionData)) {
			const stringValue = JSON.stringify(value);
			const unquotedValue = stringValue.replace(/^"|"$/g, ""); // Remove double quotes from start and end
			const cleanedValue = unquotedValue.replace(/\\/g, ""); // Remove backslashes
			localStorage.setItem(key, cleanedValue);
		}

		alert("Selected version has been added to localStorage!");
	};

	if (error) {
		return <p>Error: {error}</p>;
	}

	if (!versions.length) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h1>
				Select a Version (warning: this will overwrite your current local data,
				so save it before clicking)
			</h1>
			{versions.length > 1 ? (
				<div>
					{versions.map(({ key, formattedDate, relativeTime, data }) => (
						<button
							className="border-2 border-green-600 p-4 rounded-md m-4"
							key={key}
							onClick={() => handleVersionSelect(data)}
						>
							{formattedDate} ({relativeTime})
						</button>
					))}
				</div>
			) : (
				<p>Only one version available, automatically selecting it.</p>
			)}
		</div>
	);
}
