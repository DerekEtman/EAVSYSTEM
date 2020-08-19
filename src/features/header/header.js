import React from "react";

import { Grid, IconButton, SvgIcon, Link, Input } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import "./header.scss";
import logo_img from "./header_assets/font_logo_color.png";

export default function Header() {
	return (
		<Grid container className="header_container" spacing={0}>
			<Grid item lg={4} className="header_left_container">
				<IconButton className="header_menu_button" edge="start">
					<MenuIcon fontSize="large" />
				</IconButton>
				<img
					className="header_logo"
					src={logo_img}
					alt="Etman AV Systems logo, Click to return to homepage"
				/>
			</Grid>

			<Grid item lg={5} className="header_searchbar_container">
					<Input autoFocus="true" placeholder="Search" fullWidth="true" />
					<SvgIcon>
						<SearchIcon />
					</SvgIcon>
			</Grid>

			<Grid item className="header_right_container" lg={3}>
				<Link className="header_right_element"> Log In</Link>
				<SvgIcon className="header_right_element">
					<ShoppingCartIcon />
				</SvgIcon>
			</Grid>
		</Grid>
	);
}
