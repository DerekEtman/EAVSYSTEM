import {
	Grid,
	Input,
	Button,
	Container,
	Typography,
	AppBar,
	Tab,
	Tabs,
	Box,
} from "@material-ui/core";
import React from "react";
import DefaultImage from "./products_assets/no_image_holder.png";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function Product_Detail() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container>
			<Grid container className="product_detail_container" spacing={3}>
				{/* <Hidden>
            <Grid item>
                <Link href={History} >`Back to results`</Link>
            </Grid>
            </Hidden> */}
				<Grid item lg={5} className="product_detail_image_container">
					<img
						src={DefaultImage}
						alt="Item - change description"
						style={{ width: "50%" }}
					/>
				</Grid>

				<Grid item lg={7} className="product_detail_info_container">
					<h1> Product name</h1>
					<div  className="product_detail_serial_group" >
						<p className="product_detail_serial_element">EAV ID number</p>
						<p className="product_detail_serial_element">MFR ID number</p>
					</div>
					<h2>$12345.67</h2>
					<p>0 in stock</p>

					<div>
						<Input type="number" name="Qty" />
						<Button variant="contained"> Add To Cart</Button>
					</div>
				</Grid>

				<Grid item lg={12}>
					<AppBar position="static" className="product_detail_menu">
						<Tabs value={value} onChange={handleChange} aria-label="Product sub tabs">
							<Tab label="Overview" {...a11yProps(0)} />
                            <Tab label="Specs" {...a11yProps(1)} />

						</Tabs>
					</AppBar>

					<TabPanel value={value} index={0}>
						<Typography variant="body1">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus
							fermentum tortor vitae porttitor. Donec semper congue diam, sed
							vestibulum tortor mollis vitae. Vestibulum ut risus nec arcu eleifend
							porttitor cursus quis ante. Aliquam sed nisi convallis, elementum nisi
							in, rhoncus risus. Quisque dignissim nec diam in placerat. Mauris
							fermentum dui eget urna venenatis volutpat. Fusce finibus arcu non mauris
							molestie, eget tempus nulla ultrices. Sed blandit eu libero non tempor.
							Etiam consectetur ipsum vel ornare mollis. Maecenas sit amet rhoncus
							justo. Suspendisse potenti. Suspendisse eleifend, lectus in suscipit
							ullamcorper, ex nunc tempor nisl, a sollicitudin nibh metus sed lorem.
							Nullam ac lacinia sem, quis dictum ipsum. Donec rhoncus ligula sit amet
							tincidunt maximus. Quisque in finibus erat, at luctus tellus.
						</Typography>
					</TabPanel>
                    <TabPanel value={value} index={1}>
						<Typography variant="body1">
                                <ul> One </ul>
                                <ul> Two </ul>
						</Typography>
					</TabPanel>
				</Grid>
			</Grid>
		</Container>
	);
}
