import { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Blog from '../components/blog.png'

class Home extends Component {
    render() {
        console.log(this.props);
        const { post } =this.props
        const postList = post.length (
            post.map(post => {
                return(
                    <div className='post card' key={post.id}>
                        <img src={Blog} alt="A Blog"/>
                        <div className='card-content'>
                            <Link to={'/' + post.id}>
                                <span className='card-title red-text'>{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) 
        (
        <div className='center'>No posts to show</div>
        )
        return (
           <div>
            <div className='container home'>
                <h4 className='center'>Home</h4>
                {postList}
            </div>
           </div>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.post
    }
}

export default connect(mapStateToProps)(Home)

