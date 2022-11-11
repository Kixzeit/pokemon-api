//components
import { useState } from "react";
import { useEffect } from "react";
import { Boton } from "./components/Boton";
import { Card } from "./components/Card";
import './sass/App.scss'
import { TiArrowBackOutline } from "react-icons/ti";
import { TiArrowForwardOutline } from "react-icons/ti";



const App = ()=>{

    const[pokemonId, setPokemonId]= useState(1)
    const[pokemonEvolutions, setPokemonEvolutions]= useState([])

    useEffect(()=>{
        getEvolutions(pokemonId);
    }, [pokemonId])

    async function getEvolutions(id){
    const response =  await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`) 
    const data = await response.json()

    let pokemonEvArray=[];

    let evolution1 = data.chain.species.name
    let PokemonEv1Img= await getPokemonImg(evolution1)
    pokemonEvArray.push([evolution1,PokemonEv1Img])

    if(data.chain.evolves_to.length !== 0){
        let evolution2 = data.chain.evolves_to[0].species.name;
        let PokemonEv2Img = await getPokemonImg(evolution2)
        pokemonEvArray.push([evolution2,PokemonEv2Img])

        if(data.chain.evolves_to[0].evolves_to.length!==0){
            let evolution3 = data.chain.evolves_to[0].evolves_to[0].species.name;
            let PokemonEv3Img = await getPokemonImg(evolution3)
            pokemonEvArray.push([evolution3,PokemonEv3Img])
            
        }
    }
    setPokemonEvolutions(pokemonEvArray)
    }

    async function getPokemonImg(name){
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        const data= await response.json()
        return data.sprites.other['official-artwork'].front_default

    }



    const previousClick=()=>{
        (pokemonId===1)?
        setPokemonId(1):
        setPokemonId(pokemonId - 1)
        
    }

    const nextClick=()=>{
        setPokemonId(pokemonId + 1)
    }
        

    

return(
<div className="app">
        <img id="kix" src="https://see.fontimg.com/api/renderfont4/15ze/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTAwMCwiZnMiOjgxLCJmZ2MiOiIjRkNFNTE5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/S2l4emVpdA/pocket-monk.png" alt="" />
<div className={`Card__container evo${pokemonEvolutions.length}`}>
    {pokemonEvolutions.map(pokemon =>
        <Card
        key={pokemon[0]}
        name={pokemon[0]}
        img={pokemon[1]}
        />
        )}
    
</div>
<div className="contenedor__botones">
    <Boton icon={<TiArrowBackOutline/>} handleClick={()=>{previousClick()}}/>
    <Boton icon={<TiArrowForwardOutline/>} handleClick={()=>{nextClick()}}/>
    
</div>
</div>

);

}

export{App}

