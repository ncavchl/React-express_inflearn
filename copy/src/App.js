import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
// import PropTypes from 'prop-types'; 
//
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };//
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    }
      = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false })
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="contianer">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map( (movie, index) => {
              console.log(movie);
              return <Movie key={index}
              // id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
              genres={movie.genres}
            />
            }
            )}
          </div>
        )}
      </section>
    )
  }
}

export default App;
