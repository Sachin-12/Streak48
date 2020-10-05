import produce from 'immer';
import {deviceActionTypes} from '../actions/deviceActions';

export const initialState = {
  deviceType: undefined,
  size: '',
  dimensions: {
    width: undefined,
    height: undefined,
  },
  orientation: '',
};

const deviceReducer = (previousState = initialState, action) => {
  // eslint-disable-next-line prettier/prettier
  return produce(previousState, newState => {
    switch (action.type) {
      case deviceActionTypes.setDeviceType:
        newState.deviceType = action.deviceType;
        break;
      // sets device size to tablet, largePhone or smallPhone
      case deviceActionTypes.setDeviceSize:
        newState.size = action.size;
        break;
      // sets device orientation to landscape or portrait
      case deviceActionTypes.setDeviceOrientation:
        newState.orientation = action.orientation;
        break;
      // sets device dimensions
      case deviceActionTypes.setDimensions:
        newState.dimensions.height = action.dimensions.height;
        newState.dimensions.width = action.dimensions.width;
        break;
    }
  });
};

// Exports
export default deviceReducer;