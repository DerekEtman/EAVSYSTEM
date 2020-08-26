import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import img_holder from "./products_assets/no_image_holder.png";

export default function Product_List_Card() {
	return (
		<Grid container className="product_list_card" spacing={3}>
			<Grid item className="product_list_image_container" xs={12} md={3}>
				<img
					src={img_holder}
					className="product_list_image"
					alt="Product placeholder img"
					loading="lazy"
				/>
			</Grid>
			<Grid className="product_list_info" item md={9} xs={12}>
				<Link to={`/ProductDetail`}>
					<Typography
						variant="h4"
						gutterBottom="true"
						className="product_list_info_element"
					>
						Item Name
					</Typography>
				</Link>
				<Typography
					variant="body1"
					gutterBottom="true"
					className="product_list_info_element"
				>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit
				</Typography>
				<Typography className="product_list_info_element" color="secondary">
					Price of Item
				</Typography>
				<Button
					variant="contained"
					size="large"
					className="product_list_info_element"
				>
					Add To Cart
				</Button>
			</Grid>

		</Grid>
	);
}
