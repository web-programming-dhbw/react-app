import React, { Component } from 'react'
import HomeJumbotron from '../components/HomeJumbotron';

export class Home extends Component {
    render() {
        return (
            <div>
                <HomeJumbotron />
                <h1>Welcome to Pitch App</h1>
                <p>Description here</p>
            </div>
        )
    }
}

export default Home
