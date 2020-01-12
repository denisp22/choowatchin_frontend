import React from 'react'
import { Card, Image, Icon, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

const cardStyle = {
    border: 'thin dotted black',
    marginLeft: '0.5em'
    // paddingLeft: '2em', 
    // paddingRight: '2em'
}

class PopularReviewers extends React.Component {
    componentDidMount() {
    }

    renderUserCard = (user, index) => {
        return (
            <Grid style={cardStyle} columns={2}>
                <Grid.Column>
                    <h4>{user.full_name}</h4>
                    {/* make username clickable */}
                    <h5>@{user.username}</h5>
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped  size="tiny"/>
                    <div><Icon name='user' />{this.props.followerCountArray[index]} Followers</div>
                </Grid.Column>
            </Grid>
        )
    }

    renderTopFiveCards = () => {
        return this.props.topFive.map((user, index)  => this.renderUserCard(user, index))
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Popular Reviewers</h1>
                {this.props.topFive ? this.renderTopFiveCards() : null }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topFive: state.topFive,
        followerCountArray: state.followerCountArray
    }
}

export default connect(mapStateToProps, null)(PopularReviewers)






































 // {/* <Card style={{maxWidth: '10em', marginLeft: '8em'}}>
            //     <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            //     <Card.Content>
            //         <Card.Header>{user.full_name}</Card.Header>
            //         {/* Make username clickable */}
            //         <Card.Description>@{user.username}</Card.Description>
            //     </Card.Content>
            //     <Card.Content extra>
            //         <Card.Description>
            //             <Icon name='user' />
            //             {this.props.followerCountArray[index]} Followers
            //         </Card.Description>
            //     </Card.Content>
            // </Card> */}