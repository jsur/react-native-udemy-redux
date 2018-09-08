import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { description } = this.props.library.item;
    const { expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            { description }
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// mapStateToProps is the INTERFACE to the application level state

// ownProps is equal to this.props!!
const mapStateToProps = (state, ownProps) => {
  /*
    this pattern allows the developer to move logic based on prop values from 
    helper functions in the component to precalculations in mapStateToProps
    by using ownProps! Makes the actual class based component simpler and also
    allows the usage of functional components if all prop values are calculated
    in here instead of inside the component.
  */
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

/* 
  connect all exported actions from actions/index.js into
  redux and make them available as PROPS to this component.
  🆒
  When an action creator is called, it will dispatch the action to all reducers
  available in the application. Reducer switch/if trees will then determine
  what will actually happen when this action is dispatched.
  🆒 🆒
*/
export default connect(mapStateToProps, actions)(ListItem);
