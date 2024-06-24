import axios from 'axios';

// Create an instance of axios with default options
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // getPageVisits() {
  //   // Using "/posts" as a placeholder endpoint
  //   return apiClient.get('/posts');
  // },
  // getSocialTraffic() {
  //   // Using "/users" as a placeholder endpoint
  //   return apiClient.get('/users');
  // },
  // getPieChartData() {
  //   // Using "/comments" as a placeholder endpoint
  //   return apiClient.get('/comments');
  // },
  getPhotosData(){
    return apiClient.get('/photos/1'); // Assuming fetching the first Photo as an example

  },
  getUserData() {
    return apiClient.get('/users/1'); // Assuming fetching the first user as an example
  }
};
