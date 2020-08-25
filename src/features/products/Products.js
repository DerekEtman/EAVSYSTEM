import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import "./products.scss";
import ProductListCard from "./Product_List_Card";

export default function Products() {
	return (
		<Grid container className="product_container" spacing={3}>
			<Hidden smDown>
				<Grid item className="product_left_box" md={2}>
					<h2> SubMenu</h2>
					<h2> FilteringMenu</h2>
				</Grid>
			</Hidden>
			<Grid item className="product_right_box" md={10} xs={12}>
				<Grid container spacing={3} wrap="wrap">
					<Grid item xs={12} className="product_grid_item">
						<ProductListCard />
					</Grid>
					<Grid item xs={12} className="product_grid_item">
						<h1>Box2</h1>
					</Grid>
					<Grid item xs={12} className="product_grid_item">
						<h1>Box3</h1>
					</Grid>
					<Grid item xs={12} className="product_grid_item" s>
						<h1>Box4</h1>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
