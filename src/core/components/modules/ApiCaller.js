export const apiCall = (endPoint, method = 'GET', data = {}) =>
  new Promise(async (resolve, reject) => {
    const config = {
      method,
    };
    if (method !== 'GET') {
      config.body = JSON.stringify(data);
    }
    try {
      const response = await fetch(endPoint, config);
      if (response.ok) {
        const responseJson = await response.json();
        console.log('responseJson: ' + responseJson);
        resolve(responseJson);
      } else {
        throw Error('network request failed!!');
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
