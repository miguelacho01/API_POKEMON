
// const  cargarpokemon = async ()=>{

//     try{
//         const  respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         console.log(respuesta)
//         if (respuesta.status === 200){
//             datos = await respuesta.json()
//             console.log(datos.abilities)

//         }else if (respuesta.status===404){
//             console.log('el pokemon no existe')

//         }else{
//             console.log('error no identificado')
//         }
//     }catch(error){
//         console.log(error)
//     }

// }
// cargarpokemon()

// const input = document.querySelector('.buscar')
// const boton = document.querySelector('.boton')
// const informacion = document.querySelector('.informacion')

// boton.addEventListener('click',(e)=>{
//     e.preventDefault
//     cargarpokemon(input.value)
// })

// const cargarpokemon = async (pokemon)=>{
//             const  respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
//             console.log(respuesta)
//             datos = await respuesta.json()
//            console.log(datos)
//            crearPokemon(datos)

//         }


//         function crearPokemon(pokemon){
//             const img = document.createElement('img')
//             img.src = pokemon.sprites.front_default

//             const h2 = document.createElement('h2')
//             h2.textContent = pokemon.name

//             const stats = document.createElement('p')
//             p.textContent = pokemon.stats[0].stat.name
//             p.appendChild(p)

//             const div = document.createElement('div')
//             div.appendChild(h2)
//             div.appendChild(img)
//             informacion.appendChild(div)


const api = 'https://pokeapi.co/api/v2/pokemon/'
const img = document.querySelector('#img')
const abilities = document.querySelector('#abilities')



async function buscarPokemon() {
    const nombre = document.querySelector('.buscar').value
    const respuesta = await fetch(api + nombre)
   
    
    
    if(nombre === ''  || respuesta.status === 404){
        alert('Ingresa un pokemon')

    }else{
        const datos = await respuesta.json()
        for(i=0;i<datos.abilities.length;i++){
            habilidades=`${datos.abilities[i].ability.name}`
        }
        
        img.innerHTML = `<img src="${datos.sprites.front_default}" ><p><b>Nombre: </b>${datos.name}</p>
        <p><b>Habilidades:</b>${habilidades}</p>
        <p> <b>Experiencia base:</b> ${datos.base_experience}</p>
        <p><b>Movimiento:</b> ${datos.moves[0].move.name}</p>`
    }

}
const boton = document.querySelector('.boton')
boton.addEventListener('click', (e) => {
    e.preventDefault()
    buscarPokemon()
})



