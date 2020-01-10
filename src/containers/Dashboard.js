import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import WithAuth from '../components/WithAuth'
import FeedContainer from './FeedContainer'
class Dashboard extends React.Component {
    
    componentDidMount() {

    }
    
    render() {
        return (
            <Grid columns={3} divided>
                <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>

                <Grid.Column width={9}>
                    {/*  fetch user's friends and their reviews */}
                    <FeedContainer followedReviews={this.props.followedReviews}/>
                    {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
                </Grid.Column>

                <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        followedReviews: state.followedReviews
    }
}

export default connect(mapStateToProps, null)(WithAuth(Dashboard))