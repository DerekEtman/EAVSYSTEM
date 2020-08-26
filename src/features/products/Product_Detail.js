import { Grid, Input, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import DefaultImage from "./products_assets/no_image_holder.png";

export default function Product_Detail() {
	return (
		<Container>
			<Grid container>
				{/* <Hidden>
            <Grid item>
                <Link href={History} >`Back to results`</Link>
            </Grid>
            </Hidden> */}
				<Grid item lg={5}>
					<img
						src={DefaultImage}
						alt="Item - change description"
						style={{ width: "50%" }}
					/>
				</Grid>

				<Grid item lg={7}>
					<h1> Product name</h1>
					<div>
						<p>EAV ID number</p>
						<p>MFR ID number</p>
					</div>
					<h2>$12345.67</h2>
					<p>0 in stock</p>

					<div>
						<Input type="number" name="Qty." />
						<Button variant="contained"> Add To Cart</Button>
					</div>
				</Grid>

				<Grid item lg={12}>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus
						fermentum tortor vitae porttitor. Donec semper congue diam, sed vestibulum
						tortor mollis vitae. Vestibulum ut risus nec arcu eleifend porttitor
						cursus quis ante. Aliquam sed nisi convallis, elementum nisi in, rhoncus
						risus. Quisque dignissim nec diam in placerat. Mauris fermentum dui eget
						urna venenatis volutpat. Fusce finibus arcu non mauris molestie, eget
						tempus nulla ultrices. Sed blandit eu libero non tempor. Etiam consectetur
						ipsum vel ornare mollis. Maecenas sit amet rhoncus justo. Suspendisse
						potenti. Suspendisse eleifend, lectus in suscipit ullamcorper, ex nunc
						tempor nisl, a sollicitudin nibh metus sed lorem. Nullam ac lacinia sem,
						quis dictum ipsum. Donec rhoncus ligula sit amet tincidunt maximus.
						Quisque in finibus erat, at luctus tellus.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}
