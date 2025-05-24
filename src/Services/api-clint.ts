import axios from 'axios';

axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5376965b42d749098aa5ed72971cebc9',
  },
});
