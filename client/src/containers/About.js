import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import '../index.css';


const About =() => {
    return(
        <div className="bg">
        <dir> 
        <Navbar />
       
            <div className="container" >
                <p className="text-light">
                    <h1>About Genshin Impact</h1>
                </p>
            
                    <div className="content">
                        <div className="container-xl">
                            <p className="text-light">
                            <h5>
                            &nbsp;&nbsp;&nbsp;Genshin Impact เป็นเกมแนวแอ๊คชั่น RPG ผจญภัยในโลกกว้างที่พัฒนาโดย miHoYo
                            เปิดให้บริการเต็มรูปแบบบนแพลตฟอร์ม PC, IOS, Android, PS4 และ PS5 
                            
                            </h5>
                            </p>

                            <p className="text-light"> 
                            &nbsp;&nbsp;&nbsp;ภายในเกม Genshin คุณจะได้รับบทเป็นนักเดินทางที่สามารถออกสำรวจโลกแห่ง Teyvat ได้อย่างอิสระ
                            ด้วยระบบการเล่นที่หลากหลาย ตัวละครมากมาย แผนที่อันกว้างขวางเต็มไปด้วยรายละเอียดลุ่มลึกและปริศนามากมายรอการค้นพบ
                            มีมอนสเตอร์และดันเจี้ยนหลากประเภท พร้อมมอบให้ประสบการณ์การต่อสู้ที่สนุก ท้าทายและเข้าถึงผู้เล่นได้ทุกช่วงวัย
                            ประกอบกับเนื้อเรื่องสุดเข้มข้นหลากหลายอารมณ์ ท่านสามารถมาเปิดตำนานการผจญภัยฉบับของคุณได้ในวันนี้~
                           
                            </p>
                            <p className="text-light">
                            Genshin Impact เปิดเล่นฟรี โดยมีระบบกาชาในรูปแบบของการอธิษฐานภายในเกม
                            </p>
                            <div className="text-center">                       
                                <img src ="/images/logo/GI_logo.png" aly=""></img>
                            </div>

                            
                        </div>

                    </div>
                
                    <hr />
                    </div>
                <Footer />                
                
                </dir>
            </div>
      
    )
}
export default About;