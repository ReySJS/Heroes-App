import React, { useState, useEffect } from 'react'
import HeroList from '../../componentes/HeroList'

function Home() {
    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/srsantosdev/heroesfakeapi/avengers`)
            .then(response => response.json())
            .then(data => setHeroes(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <span>Carregando...</span>
    }

    return (
        <>
            <div>
                <h1>Heroes</h1>
                <HeroList heroes={heroes} />
            </div>
        </>
    );
}
export default Home