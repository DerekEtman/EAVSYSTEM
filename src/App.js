import React from "react";
import "./App.scss";
import Header from "./features/header/Header";
import Splash from "./features/splash/Splash.js";
import Footer from "./features/footer/Footer.js";
import { Switch, Route } from "react-router-dom";
import Products from "./features/products/Products";
import SignIn from "./features/sign_in_sign_up/SignIn";
import SignUp from "./features/sign_in_sign_up/SignUp";
import Product_Detail from "./features/products/Product_Detail";

function App() {
	return (
		<div>
			<Header />

			<Switch>
				<Route exact path="/" component={Splash} />
				<Route path="/Products" component={Products} />
				<Route path="/ProductDetail" component={Product_Detail} />
				<Route path="/SignIn" component={SignIn} />
				<Route path="/SignUp" component={SignUp} />
				<Route path="/Checkout" />
				<Route render={() => <h1>404, Page not found</h1>}/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
