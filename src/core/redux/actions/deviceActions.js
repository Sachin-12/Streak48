export const deviceActions = {
  setDeviceType: (type) => {
    return (dispatch) => {
      dispatch({
        type: deviceActionTypes.setDeviceType,
        deviceType: type,
      });
    };
  },
  setDeviceSize: (size) => {
    return (dispatch) => {
      dispatch({
        type: deviceActionTypes.setDeviceSize,
        size: size,
      });
    };
  },

  setDeviceOrientation: (orientation) => {
    if (orientation && orientation !== 'UNKNOWN') {
      return (dispatch) => {
        dispatch({
          type: deviceActionTypes.setDeviceOrientation,
          orientation: orientation,
        });
      };
    }
  },

  setDimensions: (width, height) => {
    return (dispatch) => {
      dispatch({
        type: deviceActionTypes.setDimensions,
        dimensions: {width, height},
      });
    };
  },
};

export const deviceActionTypes = {
  setDeviceSize: 'SET_DEVICE_SIZE',
  setDeviceOrientation: 'SET_DEVICE_ORIENTATION',
  setDeviceType: 'SET_DEVICE_TYPE',
  setDimensions: 'SET_DIMENSIONS',
};
