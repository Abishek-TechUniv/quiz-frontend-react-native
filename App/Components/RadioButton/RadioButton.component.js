import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

function RadioButton(props) {
  return (
    <View style={{
        height: 12,
        width: 12,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.selected ?
        <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#000',
            }}
        />
      : null
        }
    </View>
  );
}

RadioButton.propTypes = {
  selected: PropTypes.bool.isRequired,
};

module.exports = RadioButton;
