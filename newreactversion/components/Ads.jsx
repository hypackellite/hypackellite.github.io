"use client";

import { useDetectAdBlock } from "adblock-detect-react";
import { useRouter } from "next/navigation";
import "./ads.css";

export function Ads() {
	const router = useRouter();

	// const router = useRouter();
	const adBlockDetected = useDetectAdBlock();

	// Return null if the user does not have adblock
	if (!adBlockDetected) {
		return null;
	}

	return (
		<>
			<div className="bg-black/50 fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full">
				<div className="relative p-5 w-full max-w-2xl max-h-full">
					<div
						id="adblock-detected"
						className="p-2 bg-black rounded-lg border shadow-sm w-full"
					>
						<div className="px-6 py-4">
							<h4 className="text-3xl font-semibold leading-none tracking-normal text-white">
								Adblock Detected
							</h4>
						</div>

						<div className="px-6">
							<p className="text-lg text-white">
								It appears that you are using an ad-blocking extension in your
								browser. Our website relies on ad revenue to provide free
								content to our visitors. Please consider supporting us by
								disabling your ad blocker.
							</p>
						</div>

						<button
							type="button"
							className="bg-white text-black hover:text-white hover:bg-neutral-900 hover:transition-all hover:duration-200 !important inline-flex items-center justify-center rounded-md text-sm font-medium h-10 p-6 m-4"
							onClick={() => window.location.reload()}
						>
							Refresh Page
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
