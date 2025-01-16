"use client";

import React, { useEffect, useState } from "react";

const AdBanner = ({ dataAdSlot, dataAdFormat, dataFullWidthResponsive }) => {
	const [shouldLoadAd, setShouldLoadAd] = useState(false);

	useEffect(() => {
		if (
			window.location.hostname !== "localhost" &&
			window.location.port !== "3000"
		) {
			setShouldLoadAd(true);
			try {
				// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
				(window.adsbygoogle = window.adsbygoogle || []).push({});
			} catch (error) {}
		}
	}, []);

	return (
		<>
			{shouldLoadAd && (
				<ins
					className="adsbygoogle"
					style={{ display: "block" }}
					data-ad-client="ca-pub-123456789"
					data-ad-slot={dataAdSlot}
					data-ad-format={dataAdFormat}
					data-full-width-responsive={dataFullWidthResponsive.toString()}
				/>
			)}
		</>
	);
};

export default AdBanner;
