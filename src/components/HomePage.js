import React from 'react';
import gtaImage from '../assets/gta.jpg';
import newsImage from '../assets/news.webp';
import talkMitraImage from '../assets/social.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function HomePage() {
  const imageStyle = {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0.5rem',
        }}
      >
        <Link to="/mainsignup">
          <button className="btn btn-primary">Sign Up</button>
        </Link>
      </div>
      <header className="text-center mb-5">
        <h1 className="display-4 text-primary">
          Discover the Multi-App Login Hub
        </h1>
        <p className="lead">
          Explore a world of possibilities with our diverse collection of apps.
          Entertainment, information, and social interaction await you.
        </p>
      </header>

      {/* Experiences */}
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card">
            <img
              src={gtaImage}
              alt="GTA V Gameplay"
              style={imageStyle}
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">1. GTA V Gameplay Adventure</h2>
              <p className="card-text">
                Embark on thrilling adventures in the virtual streets of Los
                Santos. Join the chaos, experience the adrenaline, and immerse
                yourself in the world of Grand Theft Auto V.
              </p>
              <a href="#link-to-gta-v-gameplay" className="btn btn-primary">
                Enter the city
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card">
            <img
              src={newsImage}
              alt="News App"
              style={imageStyle}
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">2. Stay Informed with Our News App</h2>
              <p className="card-text">
                Stay up-to-date with the latest headlines, breaking news, and
                in-depth stories from around the globe. Our news app keeps you
                informed and connected.
              </p>
              <a href="#link-to-news-app" className="btn btn-primary">
                Read the latest news
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card">
            <img
              src={talkMitraImage}
              alt="Talk Mitra"
              style={imageStyle}
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">
                3. Connect with Friends on Talk Mitra
              </h2>
              <p className="card-text">
                Share moments, thoughts, and experiences with your friends and
                the world. Talk Mitra is your gateway to social interaction,
                where connections thrive.
              </p>
              <a href="#link-to-talk-mitra" className="btn btn-primary">
                Join the conversation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 bg-dark text-white p-3">
        <p>&copy; 2023 Multi-App Login Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
