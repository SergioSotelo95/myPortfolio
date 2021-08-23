import PropTypes from 'prop-types'
import React from 'react'
import sergio from '../images/Sergio.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import weather from '../images/Weather.jpeg'
import food from '../images/Food.jpeg'
import healthier from '../images/Healthier.jpeg'
import español from '../images/CVEsp.jpeg'
import english from '../images/CVEng.jpeg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About me</h2>
          <span className="image mitad">
            <img src={sergio} alt="" />
          </span>
          <p><b>My social media!</b></p>
          <ul className="icons" display="flex" justifyContent="center">
            <li>
              <a
                href="https://github.com/SergioSotelo95" className="icon fa-github" target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SergioSotelo95" className="icon fa-linkedin" target="_blank"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.link/p6bup4" className="icon fa-whatsapp" target="_blank"
              >
                <span className="label">WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:sotelosergion@gmail.com" className="icon fa-envelope" target="_blank"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/sergionicolass6" className="icon fa-twitter" target="_blank"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/soniclds" className="icon fa-facebook" target="_blank">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sergiosotelo95/" className="icon fa-instagram" target="_blank">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          <p>
          Who am I? ✋<br/>
          📌Sergio here! I'm a <b>Full Stack Web Developer</b> 👨‍💻. I know JavaScript and can build apps with technologies such as <b>React, Redux, Node, Express and Sequelize</b>. And hey! <b>I am also an English - Spanish translator</b> and I love learning about languages and the IT world!
          </p>
          <p>
          Why should you <b>hire me</b>? 🤷🏽‍♂️<br/>
          📌What is different about me is that I always strive to create a comfortable work environment to <b>get along with my teammates</b>. I also try to always <b>learn</b> from the team and to <b>help</b> whenever I'm needed!<br/>
          📌Also, after finishing my degree on translation and having coded for +800 hours, I am ready to face any challenge that will help me develop proffessionally by finding oportunities to apply all of my knowledge. 
          </p>
          {/* <p>
          My experience? 💻 you can check it out <a href="#work"><b>here!</b>✋</a>
          </p>
          <p>
          You can also download my resume 📄 in <a href="#about"><b>this page</b>✋</a>.
          </p> */} 
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <br />
          <p>
            These are the projects I've been working on, Please take a look and stay tuned!
            I will keep on posting my progress here. 
          </p>
          <br />
          <h2 className="major">Weather App</h2>
          <span className="image main">
            <img src={weather} alt="" />
          </span>
          <p>
            <a href="https://weatherappsotelo.vercel.app">Link to app</a> <br />
            <a href="https://github.com/SergioSotelo95/Weather-App">Link to repo</a><br />
            Mi first front end app in which I make use of React to  build the page
            and make calls to an external API to show the weather of different locations 
            around the world. You will see basic info in cards and you can click on the names of the cities in order to access another card with more info.
          </p>
          <h2 className="major">Movies App</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            <a>Link to app</a> <br />
            <a>Link to repo</a><br />
            I make use of information about movies from an API to show information about all 
            movies and series of the world. I wanted to step up a little and used librearies 
            such as Material UI and other libraries of icons to make the styles.
          </p>
          <h2 className="major">Food App</h2>
          <span className="image main">
            <img src={food} alt="" />
          </span>
          <p>
            <a href="https://foodappsotelo.vercel.app">Link to app</a><br />
            <a>Link to repo</a><br />
            Full stack project in which, by making use of an external API, I built an app 
            to render, order, filter, and search for recipes. I also built a database to create
            and add recipes to the already exixting ones. <br /> Tech used: React, Redux, Node, Express, 
            Postgres, Sequelize. The styles were made with pure CSS.
          </p>
          <h2 className="major">Healthier Club</h2>
          <span className="image main">
            <img src={healthier} alt="" />
          </span>
          <p>
            <a href="https://healthier.vercel.app">Link to app</a><br />
            <a href="https://github.com/Healthier-Group/Healthier">Link to repo</a><br />
            My biggest proyect yet. This is an e-commerce built from scratch along with six more people in which people can publish and buy healty products. They can also search, filter, and order the products as well as add them to a shopping cart or a wishlist. It also has functions for administrators and makes use of other different technologies to buy products and create records in a database. <br />
            Tech used: React, Redux, Node, Express, Postgres, Sequelize, Material UI, and libraries such as NodeMailer, MercadoPago Checkout pro, among others. 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <p>
            Take a look and download my resume clicking the links below each image.
          </p>
          <br />
          <p>In English...</p>
          <span className="image main">
            <img src={english} alt="" />
          </span>
          <a href="https://drive.google.com/file/d/1Wcsy_USXNnpnzIYRgxseFdGz7U8LbiLP/view?usp=sharing" >Download here</a> <br />
          <br />
          <p>... y en español.</p>
          <span className="image main">
            <img src={español} alt="" />
          </span>
          <a href="https://drive.google.com/file/d/11tEapGmZAZztRqk4AFh50eH1NaXVxgHy/view?usp=sharing">Descargalo acá</a>
          <br />
          <br />
          <p>Also, stay tuned for future updates!</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact me</h2>
          <p><b>My social media!</b></p>
          <ul className="icons" display="flex" justifyContent="center">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          <p><b>Or send me an email!</b></p>
          <form method="post" action="./mail.php">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
