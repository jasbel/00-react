
/* PROMESAS */
const promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
      resolve();
    }, 2000)
  
  } );
  
  promesa.then( () => {
    console.log('Then de la promesa');
  } )


/* fectH API */

const api_key = 'XyiNnwGMpqYVMgHjojGHlfn51EuC5Wqn';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`)

peticion
.then( (resp) => resp.json() )
.then( ({ data }) => {
   const { url } = data.images.original;
   console.log(url);

   const img = document.createElement('img');
   img.src = url;

   document.body.append( img );

} )
.catch( console.warn)


/* ASYNC AWAIT */

// const getImagenPromesa = () => { new Promise( resolve => resolve('https://loeuns.com') ) }

const getImagen = async() => {

    try {

    const api_key = 'XyiNnwGMpqYVMgHjojGHlfn51EuC5Wqn'; 
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
    const { data } = await resp.json(); //{ data } = resultado.data
    const { url } = data.images.original;
    console.log(url);

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );

} catch (error) {

    console.error(error);
}

}

getImagen();




/* OPERACION CONDICIONAL TERNARIO */
const activo = true;

let mensaje = ( !activo ) ? 'activo' : "inactivo";
mensaje = !activo && 'se imprime'

console.log(mensaje);