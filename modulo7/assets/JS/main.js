const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPoquemonToHtml(pokemon){
    console.log(pokemon)
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons) => {
    const listItens =[]
    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemons [i];
        listItens.push(convertPoquemonToHtml(pokemon))
    } 
})


