import request from './utils/request';
const apiKeyV3 = '20dc848f5776b6dbc6aa911c4b96d327';
const apiKeyV4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGRjODQ4ZjU3NzZiNmRiYzZhYTkxMWM0Yjk2ZDMyNyIsInN1YiI6IjY0MWJhNzk2ZjlhYTQ3MDBjZGU2YzQ2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5VZ4VevLeA521mmTvybgfQd-0ukUC_afuzV7AJ3YRks';
class Api {
    static urlAPI() {
        return "https://api.themoviedb.org/3/"
    }
    
    static Discover() {
        let path = `discover/movie?api_key=${apiKeyV3}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    
    static DetailDiscover(movie_id) {
        let path = `movie/${movie_id}?api_key=${apiKeyV3}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }

}
export default Api;