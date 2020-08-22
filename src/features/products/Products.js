import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import "./products.scss";

export default function Products() {
	return (
		<Grid container className="product_container" spacing={3}>
			<Hidden smDown>
				<Grid item className="product_left_box" md={2}>
					{" "}
					TEST ONE
				</Grid>
			</Hidden>
			<Grid item className="product_right_box" md={10} sm={12}>
				<Grid container spacing={3} wrap="wrap">
					<Grid item xs={12} className="product_grid_item">
						<h1>Box1</h1>
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
