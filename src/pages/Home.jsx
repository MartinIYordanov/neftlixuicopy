import React from 'react'
import Main from '../comps/Main'
import Row from '../comps/Row'
import requests from '../Requests'

export default function Home(props) {


    return (
        <div>
            <Main />
            <Row title='Upcoming' rowID='1' fetchURL={requests.requestUpcoming} />
            <Row title='Horror' rowID='2' fetchURL={requests.requestHorror} />
            <Row title='Popular' rowID='3' fetchURL={requests.requestPopular} />
            <Row title='TopRated' rowID='4' fetchURL={requests.requestTopRated} />
            <Row title='Trending' rowID='5' fetchURL={requests.requestTrending} />
        </div>
    )
}
