const mapsApi = 'https://google.com/maps?q=';

const generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

const generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `${mapsApi}${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage, generateLocationMessage}
