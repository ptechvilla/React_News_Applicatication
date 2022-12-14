import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import './App.css';

const container = {
  display: "inline",
  width: "100px"
}

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {

    const fetchnews = () => {
      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9f15837d0bf94e028496e6c920ecbe82").then((res) => {
        //  console.log(res.data.articles);
        setNews(res.data.articles);
      })
    }
    fetchnews();
  })

  return (
    <>
      <div className='container'>
        <div className='row mt-5' style={{border:"red"}}>
          <h1 style={{textAlign:'center',color:"red"}}>Top Headlines</h1>
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