"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import StorageIcon from "@mui/icons-material/Storage";

export default function Page() {
	const [imageHash, setImageHash] = useState(null);
	const [isHashMatch, setIsHashMatch] = useState(false);
	const [imageError, setImageError] = useState(false);
	const imgRef = useRef(null);

	const targetHash =
		"bd7ad10b2485303f4f85cc06384becb2dbf69a4318daff16dfba338eb0b3bd11";

	// Function to get image data from canvas and compute its hash
	const calculateImageHash = async (image) => {
		try {
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			canvas.width = image.width;
			canvas.height = image.height;
			ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			const buffer = imageData.data.buffer;
			const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
			const hashArray = Array.from(new Uint8Array(hashBuffer));
			const hashHex = hashArray
				.map((byte) => byte.toString(16).padStart(2, "0"))
				.join("");

			setImageHash(hashHex);

			// Check if the hash matches the target hash
			if (hashHex === targetHash) {
				setIsHashMatch(true);
			} else {
				setIsHashMatch(false);
			}
		} catch (error) {
			console.error("Error calculating image hash:", error);
		}
	};

	// Trigger hash calculation after image loads (success or fail)
	useEffect(() => {
		if (imgRef.current) {
			imgRef.current.addEventListener("error", () => {
				setImageError(true);
				calculateImageHash(imgRef.current); // Calculate hash even if image fails to load
			});
			imgRef.current.addEventListener("load", () => {
				calculateImageHash(imgRef.current); // Calculate hash after image successfully loads
			});
		}
	}, [imgRef]);

	return (
		<div style={{ padding: "20px", textAlign: "center" }}>

			<div style={{ marginTop: "20px" }}>
				<img
					ref={imgRef}
					src="/favicon.png"
					alt="Favicon"
					style={{ width: "50px", height: "100px" }}
				/>
			</div>

			{imageHash && (
				<>
					<p>SHA-256 Hash of the broken image: {imageHash}</p>
					<p style={{ color: isHashMatch ? "green" : "red" }}>
						{isHashMatch ? (
							<>
								{" "}
								<div className="import-banner bg-red-500 p-4 flex justify-between items-center">
									<span className="text-white">
										We noticed that some of the images may be blocked.
									</span>
									<Link
										href="/settings/server"
										className="cursor-pointer mr-5 text-white flex hover:text-gray-500 hover:transition-all hover:duration-200 items-center"
									>
										<StorageIcon className="mr-2" />
										<span>Change Server</span>
									</Link>
								</div>
								<br />
							</>
						) : (
							<>
              	<p>SHA-256 Hash of the broken image: {imageHash}</p>
              </>
						)}
					</p>
				</>
			)}

			{imageError && <p>The image failed to load as expected.</p>}
		</div>
	);
}
