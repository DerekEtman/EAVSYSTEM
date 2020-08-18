import { Grid, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import "./header.scss";
import logo_img from "./header_assets/font_logo_color.png";

export default function Header() {
	return (
		<Grid container className="header_container">
			<Grid item lg={5}>
				<IconButton className="header_menu_button">
					<MenuIcon fontSize="large" />
				</IconButton>
				<img
					className="header_logo"
					src={logo_img}
					alt="Etman AV Systems logo, Click to return to homepage"
				/>
			</Grid>

			<Grid item className="header_nav_container" lg={4}></Grid>
		</Grid>
	);
}
