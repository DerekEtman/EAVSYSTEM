import React, { useState } from "react";

import {
	Grid,
	IconButton,
	SvgIcon,
	Link,
	Input,
	Drawer,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import "./header.scss";
import logo_img from "./header_assets/font_logo_color.png";
import clsx from "clsx";

import { Link as BrowserLink } from "react-router-dom";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
});

export default function Header() {
	const [isDrawer, setIsDrawer] = useState(false);

	const classes = useStyles();

	const toggleDrawer = () => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setIsDrawer((isDrawer) => !isDrawer);
		console.log({ isDrawer });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role="presentation"
			onClick={toggleDrawer(true)}
			onKeyDown={toggleDrawer(true)}
		>
			<List>
				<ListItem button component={BrowserLink} to="/">
					<ListItemText>Home</ListItemText>
				</ListItem>
				{["Category_1", "Category_2"].map((text) => (
					<ListItem button component={BrowserLink} to="/Products" key={text}>
						<ListItemText primary={text} secondary="test"> </ListItemText>
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<Grid container className="header_container" spacing={1}>
			<Grid item lg={4} className="header_left_container">
				<IconButton className="header_menu_button" edge="start">
					<Button onClick={toggleDrawer(true)}>
						<MenuIcon fontSize="large" />
					</Button>
					<Drawer anchor="left" open={isDrawer} onClose={toggleDrawer(false)}>
						{list()}
					</Drawer>
				</IconButton>
				<Button className="header_logo_button" component={BrowserLink} to="/">
					<img
						className="header_logo"
						src={logo_img}
						alt="Etman AV Systems logo, Click to return to homepage"
					/>
				</Button>
			</Grid>

			<Grid item lg={5} className="header_searchbar_container">
				<Input autoFocus="true" placeholder="Search" fullWidth="true" />
				<SvgIcon>
					<SearchIcon />
				</SvgIcon>
			</Grid>

			<Grid item className="header_right_container" lg={3}>
				<BrowserLink className="header_right_element log_in" to="/SignIn">
					{" "}
					Sign In
				</BrowserLink>

				<BrowserLink className="header_right_element log_in" to="/SignUp">
					{" "}
					Sign Up
				</BrowserLink>
				<SvgIcon className="header_right_element">
					<ShoppingCartIcon />
				</SvgIcon>
			</Grid>
		</Grid>
	);
}
