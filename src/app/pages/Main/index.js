import React from 'react';

import turquoise from '../../../assets/images/Shape-turquoise.png'
import blue from '../../../assets/images/Shape-blue.png'
import violet from '../../../assets/images/Shape-violet.png'
import blackButton from '../../../assets/images/black-button.png'
import greyButton from '../../../assets/images/grey-button.png'
import whiteButton from '../../../assets/images/white-button.png'
import favicon from '../../../assets/images/favicon.png'

import './main.scss';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="login">
                    <img src={favicon} alt="favicon" className="favicon"/>
                    <div className="background"/>
                    <span>NathanielRateliff</span>
                </div>
                <div className="top">
                    <span className="title">Dashboard</span>
                    <div className="input-group">
                        <div className="title-inputs">
                            <label htmlFor="url">Destination Url</label>
                            <span className="domains">Domains</span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                            placeholder="ENTER YOUR LONG URL HERE"
                            id="url"
                        />
                            <div className="input-group-append">
                                <button className="btn btn-outline-info btn-md m-0 px-3 dropdown-toggle" type="button"
                                        data-toggle="dropdown"
                                        id="domains"
                                        aria-haspopup="true" aria-expanded="false">found.ee
                                </button>
                                <button className="button-round">+</button>
                                <span className="shorten">Shorten</span>
                                <div className="dropdown-menu dropdown-menu-right dropdown-info">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div role="separator" className="dropdown-divider"/>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                    </div>
                    <div className="links">
                        <span className="short-links">
                            Short links
                            <i className="fas fa-check-circle"/>
                        </span>
                        <span className="geo-links">
                            Geo links
                            <i className="fa fa-plus-circle" aria-hidden="true"/>
                        </span>
                        <span className="multistore-links">
                            Multistore
                            <i className="fa fa-plus-circle" aria-hidden="true"/>
                        </span>
                    </div>
                </div>
                <div className="full-info">
                    <div className="content">
                        <span className="title">Audience Growth</span>
                    </div>
                    <div className="three-dots">
                        <div className="spotify">
                            <i className="fa fa-plus-circle" aria-hidden="true"/>
                            <span className="spotify-info">Spotify Listeners</span>
                            <span>357%<i className="fa fa-arrow-up" aria-hidden="true"/></span>
                        </div>
                        <div className="ticket">
                            <i className="fa fa-plus-circle" aria-hidden="true"/>
                            <span className="ticket-info">Ticket Buyers</span>
                            <span>315%<i className="fa fa-arrow-up" aria-hidden="true"/></span>
                        </div>
                        <div className="music">
                            <i className="fa fa-plus-circle" aria-hidden="true"/>
                            <span className="music-info">Music Purchasers</span>
                            <span>432%<i className="fa fa-arrow-up" aria-hidden="true"/></span>
                        </div>
                    </div>
                    <div className="audience">
                        <span>Double your audience</span>
                        <div className="small-info">
                            for as little as $25. Launch ads now.
                            <i className="fa fa-arrow-up" aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="graphics">
                        <div className="intermediate-bands"/>
                        <div className="intermediate-bands-small"/>
                        <img className="turquoise-graph" src={turquoise} alt="turquoise"/>
                        <span className="turquoise-count">23k</span>
                        <img className="blue-graph" src={blue} alt="blue"/>
                        <span className="blue-count">143k</span>
                        <img className="violet-graph" src={violet} alt="violet"/>
                        <span className="violet-count">11k</span>
                    </div>
                </div>
                <div className="background-buttons">
                    <span>Change Background</span>
                    <div className="buttons-block">
                        <img src={blackButton} alt="blackButton"/>
                        <i className="fas fa-plus black-button"/>
                        <img src={greyButton} alt="greyButton"/>
                        <i className="fas fa-plus grey-button"/>
                        <img src={whiteButton} alt="whiteButton"/>
                        <i className="fas fa-plus white-button"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;