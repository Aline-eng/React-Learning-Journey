// display different kind of movies
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import {searchMovies, getPopularMovies} from "../services/api";
import "../css/Home.css"
function Home() {
    //searchQuery(defines the state) holds the current value of the field, setSearchQuery(function to update the state) is the function to update those values
    // and everytime we updated the state the component will re-render itself and update based on this.
    const [searchQuery, setSearchQuery] = useState("");
    // When any useState occures, the useEffect will not run bcz nothing is changed in dependancy array
    // useEffect: allows you to add side effects to your functions or to your components and define when they should run.
    // you write useEffect as a function, then put a function you want to call when the array(dependancy array) changes
    //If nothing is in depencancy array then we'll run this one-time, initially when the component is rendered on the screen
    // whatever put in dependancy array, we gonna check it after every single re-render. and if it's changed since the last time that we re-rendered, we'll run the useEffect
    const [movies, setMovies] = useState([]); 
    // we store movies in state so that when the state changes or updates the movie list, it will automatically re-render the component for us. 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); 
    // set to true bcz right when we load this component, we're going to be running this useEffect
    // so we're going to be loading data, and then inside useEffect, we are going to setLoading to false
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch(err) {
                console.log(err)
                setError("Failed to Load Movies ...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, []);
    const handleSearch = async (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies..." 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => ( 
            <MovieCard movie ={movie} key={movie.id} />
            ))}
        </div>
    </div>
}
export default Home
// When you want to dynamically render things you need to add key property to a component
// we handle dynamic parts of our components by use of state
// state is something where once it's updated, the component will
// change and re-render itself to show the new state.