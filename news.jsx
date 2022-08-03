import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import React from 'react';
// import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Bussiness from './component/Bussiness'

// const container = {
//   display: "inline",
//   width: "100px"
// }

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {

    const fetchnews = () => {
      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=30a733ed44764056a29aa1eeed027d69").then((res) => {
        //  console.log(res.data.articles);
        setNews(res.data.articles);
      })
    }
    fetchnews();
  })

  return (
    <>

      <div className='container'>
        <div className='row mt-5' style={{ border: "red" }}>
          <h1 style={{ textAlign: 'center', color: "red" }}>Top Headlines</h1>
          {
            news.map((value) => {
              return (
                <Card style={{ width: '20rem' }} className="m-1">
                  <Card.Img variant="top" src={value.urlToImage} />
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>
                      {value.description}
                    </Card.Text>
                    <Button href={value.url} variant="primary">Read More...</Button>
                  </Card.Body>
                </Card>
              );
            })
          }
        </div>
      </div>

    </>
  );
}
export default App;