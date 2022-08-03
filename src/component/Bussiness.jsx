import React from 'react'
import { NavLink } from 'react-router-dom'
import '../component/Navbar.css'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bussiness = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {

        const fetchnews = () => {
            axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=30a733ed44764056a29aa1eeed027d69").then((res) => {
                //  console.log(res.data.articles);
                setNews(res.data.articles);
            })
        }
        fetchnews();
    })
    return (
        <>
            <div class="nav">
                <ul class="ul1">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bussiness">Bussiness News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/entertainment">Entertainment News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/health">Health News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sceience">Sceience News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sports">Sports News</NavLink>
                    </li>
                   
                </ul>
            </div>

            <div className='container'>
                <div className='row mt-2' style={{ border: "red" }}>
                    <h1 style={{ textAlign: 'center', color: "red" }}>Top Headlines related to bussiness</h1>
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
    )
}

export default Bussiness
