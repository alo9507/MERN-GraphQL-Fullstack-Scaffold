import React, { Component } from "react";

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { connect } from 'react-redux';
import { increment } from '../redux/actions';

class Home extends Component {

    render() {
        return (
          <div className="ui grid">
          
            <div>
                <p>Redux</p>
                <div>{this.props.count}</div>
            </div>
            
            <div>
                <p>ApolloClient</p>
                <div>{this.props.data.version}</div>
            </div>

            <div>
                <button onClick={this.props.increment}>Increment</button>
            </div>
            
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { count: state.count.count }
};

const reduxified = connect(mapStateToProps, { increment })(Home);

const query = gql`
{
    version
}
`

export default graphql(query)(reduxified);