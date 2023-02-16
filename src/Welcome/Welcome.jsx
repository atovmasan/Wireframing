import React, { useState } from "react"
import WelcomeStyle from "./WelcomeStyle.css"
import title from "../Photo/SampleLogo.png"
import 'antd/dist/antd.css'
import { Button } from 'antd'
import Content from "./Content/Content"





const Welcome = (props) => {
  return (
    <div className="welcome">
       <NavBar/>
       <Photo/>
       <SnapPhotos text={props.text}/>
       <Content/>
       <Support/>
       <Join/>
       <Footer/>
    </div>
  )
}



const NavBar = () => {
  return (
    <div className="navBar">
        <img src={title}/>
     <div className="list">
         <p>Features</p>
         <p>Pricing</p>
         <p>Community</p>
         <p>Support</p>
     </div>
     <span>
         <Button onClick={ () => alert("Sorry, but you can't")} className="button" type="default">Log in</Button>
         <Button onClick={ () => alert("Sorry, but you can't")} className="button" type="primary">Register</Button>
     </span>
    </div>
  )
}


const Photo = () => {
    return (
      <div className="photo">
        <div>
          <Button className="button" type="primary">Join Today</Button>
        </div>
      </div>
    )
  }


  const SnapPhotos = (props) => {

    const [t0, setT0] = useState(props.text[0].f)
    const [t1, setT1] = useState(props.text[1].f)
    const [t2, setT2] = useState(props.text[2].f)
    const [t3, setT3] = useState(props.text[3].f)

    return (
      <div className="snapPhotos">
        <h1>Snap photos and share like never before</h1>
        <div className="text">
          <div>
             <h2>Sed ut perspiciatis</h2>
             <p>{t0}</p>
            <Button onClick={() => {
              if (t0.length !== (props.text[0].f + props.text[0].s).length) {
                  setT0(t0 + props.text[0].s)}
              }} className="button" type="default">Learn more...</Button>
           </div>
           <div>
              <h2>Lorem ipsum dolor</h2>
              <p>{t1}</p>
               <Button onClick={() => {
              if (t1.length !== (props.text[1].f + props.text[1].s).length) {
                  setT1(t1 + props.text[1].s)}
              }} className="button" type="default">Learn more...</Button>
           </div>
           <div>
              <h2>Nemo enim ipsam</h2>
              <p>{t2}</p>
              <Button onClick={() => {
              if (t2.length !== (props.text[2].f + props.text[2].s).length) {
                  setT2(t2 + props.text[2].s)}
              }} className="button" type="default">Learn more...</Button>
          </div>
          <div>
             <h2>Tempor incididunt</h2>
             <p>{t3}</p>
              <Button onClick={() => {
              if (t3.length !== (props.text[3].f + props.text[3].s).length) {
                  setT3(t3 + props.text[3].s)}
              }} className="button" type="default">Learn more...</Button>
          </div>
          </div>
      </div>
    )
  }


const Support = () => {
    return (
        <div className="support">
            <h1>You’re in good company</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore</h3>
            <div className="img">
                <div>
                   <img width={175} src="https://englishlib.org/dictionary/img/wlibrary/b/5ffd8e02ab1946.93586214.jpg"/>
                </div>
                <div>
                   <img width={175} src="https://media.istockphoto.com/photos/portrait-of-young-businessman-standing-in-his-office-with-arms-picture-id1193290387?k=20&m=1193290387&s=612x612&w=0&h=g_94MYUcCXg_gHy0enwpezhZoIUjfClKTmm_HKeSlLU="/>
                </div>
                <div>
                   <img width={175} src="https://media.istockphoto.com/photos/portrait-smiling-african-american-businessman-in-blue-suit-sit-at-picture-id1341347262?b=1&k=20&m=1341347262&s=170667a&w=0&h=nWVSejAWgPgQi128JMemYKX0YX9xUgf18Nd3o4Ez6ic="/>
                </div>
                <div>
                   <img width={175} src="https://media.istockphoto.com/photos/young-bearded-businessman-sitting-on-desk-and-posing-picture-id1322913815?b=1&k=20&m=1322913815&s=170667a&w=0&h=rvURoK1t_rjAf09De0F5v6L9_wgJrUuZK_cw3vjPgDM="/>
                </div>
                <div>
                   <img width={175} src="https://media.istockphoto.com/photos/success-businessman-smiling-in-office-picture-id1189303518?k=20&m=1189303518&s=612x612&w=0&h=IjiDHtLQEBxdOQF-ukX-w4H53HRum8VAsoSj12ShX_s="/>
                </div>
                <div>
                   <img width={175} src="https://www.thefashionisto.com/wp-content/uploads/2019/01/Handsome-Stylish-Businessman-in-Glasses.jpg"/>
                </div>
                <div>
                   <img width={175} src="https://nairametrics.com/wp-content/uploads/2021/06/bank-manager-e1623745170243.jpg"/>
                </div>
                <div>
                   <img width={175} src="https://st.depositphotos.com/1930953/1769/i/600/depositphotos_17697503-stock-photo-asian-businessman.jpg"/>
                </div>
            </div>
        </div>
    )
}


const Join = () => {
    return (
        <div className="join">
            <div className="p">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="joinButton">
                <Button onClick={ () => alert("Sorry, but you can't")} className="button" type="primary">Join Today</Button>
                <Button onClick={ () => alert("yt988998@gmail.com")} className="button" type="defalt">Contact us</Button>
            </div>
        </div>
    )
}


const Footer = () => {
    return (
        <div className="footer">
            <div className="first">
              <img src={title}/>
            </div>
            <div className="second">
              <img  src="https://www.film.ru/sites/default/files/filefield_paths/shutterstock_9669042a.jpg"/>
              <img  src="https://media-exp1.licdn.com/dms/image/C561BAQExLW4Wf3dVAA/company-background_10000/0/1595001411699?e=2147483647&v=beta&t=Zd5mB11F21jbC1Ux1GSOrFuhSk_lWKSNHeGNiklrWUw"/>
              <img  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?quality=75&width=982&height=726&auto=webp"/>
              <img  src="https://i.insider.com/61f14a0ce996470011907119?width=600&format=jpeg&auto=webp"/>
            </div>
            <h6>© Photo, Inc. 2019. We love our users!</h6>
        </div>
    )
}


export default Welcome;
