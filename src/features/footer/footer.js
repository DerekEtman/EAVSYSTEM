import { Container, Grid, Link } from "@material-ui/core";
import React from "react";

export default function Footer() {
	return (
		<Container>
			<Grid container className="footer_container">
				<Grid item className="footer_link_container" lg={4}>
					<Link className="footer_link">Products</Link>
					<Link className="footer_link">About</Link>
					<Link className="footer_link">Contact</Link>
				</Grid>
				<Grid item lg={12} className="footer_copyright">
					Copyright Etman AV Systems 2020
				</Grid>
			</Grid>
		</Container>
	);
}
