const imageHandle = (endpoint) => {
    const apiKeyV3 = '20dc848f5776b6dbc6aa911c4b96d327';
    const apiKeyV4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGRjODQ4ZjU3NzZiNmRiYzZhYTkxMWM0Yjk2ZDMyNyIsInN1YiI6IjY0MWJhNzk2ZjlhYTQ3MDBjZGU2YzQ2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5VZ4VevLeA521mmTvybgfQd-0ukUC_afuzV7AJ3YRks';
    return `https://image.tmdb.org/t/p/w500${endpoint}`;
}

export default imageHandle;