import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            <div className="home__row">
            <Product id="04040606" title="How to be a wizard Javascript Developer" price={50.79} rating={5} image="https://cdn.shopify.com/s/files/1/0533/2089/files/app-development-books-modern-fullscript-development.jpg?v=1610640536" />
            <Product id="04040606" title="How to be a wizard Javascript Developer" price={50.79} rating={5} image="https://cdn.shopify.com/s/files/1/0533/2089/files/app-development-books-modern-fullscript-development.jpg?v=1610640536" />
            </div>

            <div className="home__row">
            <Product id="04040606" title="How to be a wizard Javascript Developer" price={50.79} rating={5} image="https://cdn.shopify.com/s/files/1/0533/2089/files/app-development-books-modern-fullscript-development.jpg?v=1610640536" />
            <Product id="04040606" title="How to be a wizard Javascript Developer" price={50.79} rating={5} image="https://cdn.shopify.com/s/files/1/0533/2089/files/app-development-books-modern-fullscript-development.jpg?v=1610640536" />
            <Product id="04040606" title="How to be a wizard Javascript Developer" price={50.79} rating={5} image="https://cdn.shopify.com/s/files/1/0533/2089/files/app-development-books-modern-fullscript-development.jpg?v=1610640536" />
            </div>

            <div className="home__row">
            <Product id="04040606" title="How to be a wizard Javascript Developer" price={50.79} rating={5} image="https://cdn.shopify.com/s/files/1/0533/2089/files/app-development-books-modern-fullscript-development.jpg?v=1610640536" />
            </div>
        </div>
    );
}

export default Home
