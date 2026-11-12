import React from "react";
import { LunaSettings, LunaButtonSetting, LunaTextSetting } from "@luna/ui";
import { copyCurrentLink, PLATFORMS, storage, type Platform } from ".";

export const Settings = () => {
	const [backendUrl, setBackendUrl] = React.useState(storage.backendUrl);
	return (
		<LunaSettings>
			<LunaTextSetting
				title="Backend URL"
				desc="URL of the linkhop backend (default: https://linkhop.paul.wtf)"
				value={backendUrl}
				onChange={(e) => setBackendUrl((storage.backendUrl = e.target.value))}
			/>
			{(Object.keys(PLATFORMS) as Platform[]).map((platform) => (
				<LunaButtonSetting
					key={platform}
					title={`Copy ${PLATFORMS[platform]} Link`}
					desc={`Copy the ${PLATFORMS[platform]} link for the currently playing track`}
					onClick={() => copyCurrentLink(platform)}
				/>
			))}
		</LunaSettings>
	);
};
