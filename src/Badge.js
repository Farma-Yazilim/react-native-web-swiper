import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { renderNode } from './renderNode';

const Badge = ({
  containerStyle,
  textStyle,
  badgeStyle,
  onPress,
  Component = onPress ? TouchableOpacity : View,
  value,
  theme,
  status = "primary",
  ...attributes
}) => {
  const element = renderNode(Text, value, {
    style: StyleSheet.flatten([styles.text, textStyle]),
  });

  return (
    <View style={StyleSheet.flatten([containerStyle])}>
      <Component
        {...attributes}
        style={StyleSheet.flatten([
          styles.badge(theme, status),
          !element && styles.miniBadge,
          badgeStyle,
        ])}
        onPress={onPress}
      >
        {element}
      </Component>
    </View>
  );
};

Badge.propTypes = {
  containerStyle: PropTypes.object,
  badgeStyle: PropTypes.object,
  textStyle: PropTypes.object,
  value: PropTypes.node,
  onPress: PropTypes.func,
  Component: PropTypes.elementType,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
  }).isRequired,
  status: PropTypes.oneOf(['primary', 'success', 'warning', 'error']),
};

const size = 18;
const miniSize = 8;

const styles = StyleSheet.create({
  badge: (theme, status) => ({
    alignSelf: 'center',
    minWidth: size,
    height: size,
    borderRadius: size / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme?.colors[status],
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
  }),
  miniBadge: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: miniSize,
    height: miniSize,
    borderRadius: miniSize / 2,
  },
  text: {
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 4,
  },
});

export { Badge };