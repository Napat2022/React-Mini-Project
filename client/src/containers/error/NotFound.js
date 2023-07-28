import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NotFound =() => {
    return (
        <div className="bg">
            
            <Navbar />            
            <div className="container col-md text-center">
                <h1 className="title mb-3 text-danger" style={{fontSize: 100}}>404</h1>
                <h2 className="title mb-5 text-danger">Not Found</h2>
                <p className="title mb-5 text-danger">ขออภัย ไม่พบหน้าที่คุณค้นหา</p>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;