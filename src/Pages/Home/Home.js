import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';


const Home = () => {
    return (
        <div className='home col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;