import React, { Component } from 'react';
import Rating from '../../../Rating';
class ReviewAndQuestion extends Component {
    constructor(){
        super();
        this.state={
            show: false,
            review: false
        }
    }
    render() {
        return (
            <div className={'row'}>
                <div className={'col-xl-8'}>
                    <div className={'col-md-12 d-flex justify-content-between' } id={'question'}>
                        <h3>Questions (2)</h3>
                        <button  className={'review-button px-4 p-2'} onClick={()=>{this.setState({show:!this.state.show})}}>Ask Question</button>
                    </div>
                    <div>
                        {
                            this.state.show?
                                <div className={'mt-5'} style={{width: '90%', marginLeft: '8%'}}>
                                    <textarea rows={5} cols={100} style={{width: '92%'}} > What is your Question  </textarea><br/>
                                    <button className={'px-4 p-2 review-button'}>Submit</button>
                                </div>
                                : null
                        }
                    </div>
                    <div className="media mt-5">
                        <div className="media-left">
                            <img src="/static/img/hobbiyst/user-avatar-png-7.png" className="media-object" style={{width:"80px"}} />
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Left-aligned</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                aliqua.</p>
                            <div className="media">
                                <div className="media-left">
                                    <img src="/static/img/hobbiyst/user-avatar-png-7.png" className="media-object" style={{width:"80px" }}/>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Left-aligned</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="media">
                        <div className="media-left">
                            <img src="/static/img/hobbiyst/user-avatar-png-7.png" className="media-object" style={{width:"80px"}} />
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Left-aligned</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                aliqua.</p>
                            <div className="media">
                                <div className="media-left">
                                    <img src="/static/img/hobbiyst/user-avatar-png-7.png" className="media-object" style={{width:"80px" }}/>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Left-aligned</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-xl-4'} >
                    <div>
                        <div className={'col-md-12 d-flex justify-content-between'}>
                            <h3>Top Reviews</h3>
                            <button className={'review-button px-4 p-2'}  onClick={() => {this.setState({review:!this.state.review})}}>Write Review</button>
                        </div>
                        {
                            this.state.review?
                                <div className={'mt-5'} style={{width: '90%', marginLeft: '8%'}}>
                                    <textarea rows={5} cols={100} style={{width: '92%'}}> Description  </textarea>
                                    <button className={'px-4 p-2 review-button'}>Submit</button>
                                </div>
                                : null
                        }
                        <div className={'d-flex align-items-center mt-5'}>
                            <img src="/static/img/hobbiyst/user-avatar-png-7.png" className="media-object" style={{width:"60px" }}/>
                            <h4>Name Surname</h4>
                        </div>
                        <div className={'col-md-12'}>
                            <Rating />
                            <h5>3 January 2020</h5>
                            <p style={{width: '100%'}}>The FM radio is perhaps gone for good, the assumption apparently being that the jury has ruled in favor of streaming over the internet. The IR blaster is another feature due for retirement </p>
                        </div>
                    </div>

                    <div>
                        <div className={'d-flex align-items-center'}>
                            <img src="/static/img/hobbiyst/user-avatar-png-7.png" className="media-object" style={{width:"60px" }}/>
                            <h4>Name Surname</h4>
                        </div>
                        <div className={'col-md-12'}>
                            <Rating />
                            <h5>3 January 2020</h5>
                            <p style={{width: '100%'}}>The FM radio is perhaps gone for good, the assumption apparently being that the jury has ruled in favor of streaming over the internet. The IR blaster is another feature due for retirement </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewAndQuestion;
