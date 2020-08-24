import React from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import img_holder from "./products_assets/no_image_holder.png";

export default function Product_List_Card() {
	return (
		<div className="product_list_card">
			<Grid container >
				<Grid item className="product_list_image_container" lg={3}>
					<img src={img_holder} className="product_list_image" style={{maxWidth:"60%"}} alt="Product placeholder img"/>
				</Grid>
				<Grid item>
					<h2> Item Name</h2>
					<h3>Price of Item</h3>
					<Button variant="contained">Add To Cart</Button>
				</Grid>
			</Grid>
		</div>
	);
}
