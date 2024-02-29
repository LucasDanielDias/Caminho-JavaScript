const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0
const max = 258


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHTLM).join('')
})

function loasdPokemonItens(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
        const newhtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type} ">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `).join('')
        pokemonList.innerHTML += newhtml
    })
}
loasdPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    const qt = offset +limit

    if(qt >= max){
        const newL = max - offset
        loasdPokemonItens(offset,newL)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
    loasdPokemonItens(offset,limit)
}
}
)
