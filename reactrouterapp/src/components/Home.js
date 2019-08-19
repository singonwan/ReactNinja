import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Gwanlogo from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        //no longer have state. props mapped from state in redux
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src={Gwanlogo} alt="GWAN"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                            <span className="card-title green-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts Yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        posts: state.posts    //state.posts is the state in rootReducer(redux) and we map that to prop which is posts
    }
}

export default connect(mapStateToProps)(Home)