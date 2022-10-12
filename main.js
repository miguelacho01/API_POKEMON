
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

const input = document.querySelector('.buscar')
const boton = document.querySelector('.boton')
const informacion = document.querySelector('.informacion')

boton.addEventListener('click',(e)=>{
    e.preventDefault
    cargarpokemon(input.value)
})

const cargarpokemon = async (pokemon)=>{
            const  respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
            console.log(respuesta)
            datos = await respuesta.json()
           console.log(datos)
           crearPokemon(datos)
           
        }
        

        function crearPokemon(pokemon){
            const img = document.createElement('img')
            img.src = pokemon.sprites.front_default

            const h2 = document.createElement('h2')
            h2.textContent = pokemon.name

            const div = document.createElement('div')
            div.appendChild(img)
            div.appendChild(h2)

            informacion.appendChild(div)

        }
        