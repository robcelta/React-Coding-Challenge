import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Favorite } from '@material-ui/icons';

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
    sss: {
        background: 'white',
        borderRadius: '4px'
    }
  }));

export default function Main({popular, search}) {

    const classes = useStyles();

    const [displayedSearch, setDisplayedSearch] = useState([])
    const [displayedFirst, setDisplayedFirst] = useState([])
    const [isFilterActive, setIsFilterActive] = useState(false)
    const [filter, setActiveFilter] = useState(0)
    const [filterAmount, setFilterAmount] = useState([2,4,6,8,10])

    const handleInputChange = (event, value) => {
        const movie = value
        if(movie) {
            alert(`${movie.title}: ${movie.overview}`)
        }
    }

    const setFilter = (id) => {
        if(id !== filter) {
            setActiveFilter(id)
            setIsFilterActive(true)
        } else {
            setIsFilterActive(false)
        }
    }

    useEffect(() => {
        setDisplayedFirst(popular)
        setDisplayedSearch(search)
    })

    return (
        <React.Fragment>

            <CssBaseline />

            <Container className={classes.searchContainer}>
                <Typography variant="h3" className={classes.title}>Your next favorite movie, <b>here!</b></Typography>
                <form className={classes.form}>
                <Autocomplete
                    id="combo-box-demo"
                    options={displayedSearch}
                    getOptionLabel={(option) => option.title}
                    onChange={handleInputChange}
                    style={{ width: 300, marginRight: 50 }}
                    renderInput={(params) => <TextField {...params} placeholder="Searching for a movie?" variant="outlined" className={classes.sss}/>}
                />
                <div className={classes.starContainer}>
                <Typography variant="h6" className={classes.text}>Filter by votes:</Typography>
                {filterAmount.map((each) => {
                    return (
                        <Favorite className={classes.notActive} key={each} onClick={() => setFilter(each)}/>
                    )
                })}
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
                        })
                    :
                        displayedFirst.map(each => {
                            if(each.popularity >= 1448.531) {
                                return(
                                    <Grid item xs={4} key={each.id}>
                                        <img className={classes.img} src={`https://image.tmdb.org/t/p/w500${each.poster_path}?api_key=67349d4aecf040b639d88fa295115406`} alt={each.title}/>
                                    </Grid>
                                )
                            }
                        })
                }

                    
                </Grid>

            </Container>
        </React.Fragment>
    )
}
