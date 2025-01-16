import Script from "next/script";
import React, { useEffect, useState } from "react";

const AdSense = ({ pId }) => {
	const [shouldLoadAd, setShouldLoadAd] = useState(false);

	useEffect(() => {
		if (
			window.location.hostname !== "localhost" &&
			window.location.port !== "3000"
		) {
			setShouldLoadAd(true);
		}
	}, []);

	return (
		<>
			{shouldLoadAd && (
				<Script
					async
					src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
			)}
		</>
	);
};

export default AdSense;
