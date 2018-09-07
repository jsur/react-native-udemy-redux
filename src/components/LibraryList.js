import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {

  render() {
    console.log('MORO!');
    console.log(this.props);
    return (
      <View>
        <Text>LibraryList</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  // connect() maps this piece of state to the props of LibraryList!
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
