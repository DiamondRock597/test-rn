import React from 'react';

import { Colors } from '@constants/colors';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated';

import { styles } from './styles';

export const PaginationDot = ({
  index,
  activeIndex
}: {
  index: number;
  activeIndex: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const progress = interpolate(
      activeIndex.value,
      [index - 0.5, index, index + 0.5],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    return {
      width: interpolate(progress, [0, 1], [10, 24]),
      backgroundColor: interpolateColor(progress, [0, 1], [Colors.LightGray, Colors.DarkBlue])
    };
  });

  return <Animated.View style={[styles.paginationDot, animatedStyle]} />;
};
