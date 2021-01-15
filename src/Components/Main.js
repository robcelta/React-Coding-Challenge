import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';

import Pulp from '../img/pulp.jpg'

const useStyles = makeStyles((theme) => ({
    title: {
      textAlign: 'center',
      marginBottom: '7vh'
    },
    input: {
        backgroundColor: 'white'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    active: {
        fill: 'black',
    },
    notActive: {
        fill: 'yellow',
        backgroundSize: 'cover'
    },
    img: {
        width: '300px'
    },
    searchContainer: {
        display: 'flex',
        height: '55vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '10vh',
        backgroundImage: `url(${Pulp})`,
        backgroundSize: 'cover',
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    starContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginRight: '10px'
    },
    pictures: {
        backgroundColor: 'white',
    }, 
    searchInput: {
        background: 'white',
        borderRadius: '4px',
        marginRight: '30px',
        width: '300px'
    }
  }));

export default function Main({popular}) {

    const classes = useStyles();

    const [displayedFirst, setDisplayedFirst] = useState([])
    const [isFilterActive, setIsFilterActive] = useState(false)
    const [filter, setActiveFilter] = useState(0)
    const [value, setValue] = useState(0)
    const [searchValue, setSearchValue] = useState([])

    const handleInputChange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }

    const setFilter = (id) => {
        if(id !== filter) {
            setActiveFilter(id)
            setIsFilterActive(true)
        } else {
            setIsFilterActive(false)
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=67349d4aecf040b639d88fa295115406&language=en-US&page=1&include_adult=false&query=${searchValue}`)
            .then(response => response.json())
            .then(data => setDisplayedFirst(data.results))
        //searchValue.map(each => alert(`${each.title}`))
    }

    useEffect(() => {
        setDisplayedFirst(popular)
        console.log(popular)
    }, [popular])

    return (
        <React.Fragment>

            <CssBaseline />

            <Container className={classes.searchContainer}>
                <Typography variant="h3" className={classes.title}>Your next favorite movie, <b>here!</b></Typography>
                <form className={classes.form} onSubmit={handleSearch}>
                <TextField placeholder="Searching for a movie?" variant="outlined" className={classes.searchInput} onChange={handleInputChange} />
                <div className={classes.starContainer}>
                <Typography variant="h6" className={classes.text}>Filter by votes:</Typography>

                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setFilter(newValue*2)
                        setValue(newValue);
                    }}
                />

                </div>
                </form>
            </Container>

            <Container className={classes.pictures}>

                <Grid container spacing={3} justify="center" alignItems="center">

                    {isFilterActive ? 
                        displayedFirst.map(each => {
                            if(each.vote_average >= filter){
                                return (
                                    <Grid item xs={4} key={each.id}>
                                        <img className={classes.img} src={`https://image.tmdb.org/t/p/w500${each.poster_path}?api_key=67349d4aecf040b639d88fa295115406`} alt={each.title}/>
                                    </Grid>
                                )
                            }
                            return console.log('')
                        })
                    :
                        displayedFirst.map(each => {
                            if(each.popularity >= 1448.531 || searchValue !== '') {
                                return(
                                    <Grid item xs={4} key={each.id}>
                                        <img className={classes.img} src={`https://image.tmdb.org/t/p/w500${each.poster_path}?api_key=67349d4aecf040b639d88fa295115406`} alt={each.title}/>
                                    </Grid>
                                )
                            }
                            return console.log('')
                        })
                }

                    
                </Grid>

            </Container>
        </React.Fragment>
    )
}
