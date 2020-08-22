import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "./splash.scss";

export default function Splash() {
	return (
		<Grid container className="splash_container">
			<Grid item className="splash_welcome_card" >
				<Paper className="splash_paper">
					Welcome, at ETMAN A/V SYSTEMS we sell home automation systems and parts.
					Crestron equipment include controllers, touchpanels, lighting keypads,
					PRODIGY controllers, switches, dimmers, amplifiers, audio, video
					switcher...
				</Paper>
			</Grid>
		</Grid>
	);
}
