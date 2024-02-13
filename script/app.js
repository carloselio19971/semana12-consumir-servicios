//Variables
btnUsuario=document.querySelector("#btn-usuario");
btnPost=document.querySelector("#btn-post");
const urlUsuarios="https://jsonplaceholder.typicode.com/users";
const urlPost="https://jsonplaceholder.typicode.com/posts";
let arrayUser=[];
let arrayPost=[];
let listadoUsuario=document.querySelector("#list-usuarios");
let listadoPost=document.querySelector("#list-post");
loadListener();

function loadListener(){

    btnUsuario.addEventListener("click",readUseWithAsync);
    btnPost.addEventListener("click", readPostWithPromise);
}


function readUserWithPromise(){
    fetch(urlUsuarios)
                     .then((response)=>{
                        return response.json();
                     })
                     .then((data)=>{
                        //console.log(data);
                     })
                     .catch((e)=>{
                        console.log('error',e);
                     });
}

async function readUseWithAsync(){
    try {
        const request= await fetch(urlUsuarios);
        const responseUsers= await request.json();
        //console.log(responseUsers);
         arrayUser=[...responseUsers]
         printUsuario(arrayUser);
    }
    catch(error){
        console.log(error);
    }
}

function readPostWithPromise(){
    fetch(urlPost)
    .then((response)=>{
       return response.json();
    })
    .then((data)=>{
         arrayPost=[...data];
         printPost(arrayPost);
    })
    .catch((e)=>{
       console.log('error',e);
    });
}

async function readPostWithAsinc(){
    try {
        const request= await fetch(urlPost);
        const responsePost= await request.json();
       // console.log(responsePost);
    }
    catch(error){
        console.log(error);
    }

    
}


function printUsuario(arrayUser){
    arrayUser.forEach(user => {
        console.log(user);
        const row=document.createElement("div");
        row.innerHTML=
        `<div class="contenedor-usuario">
            <div class="nombre">
                <p>ID</p>
            </div>
            <div class="detalle">
                <p>${user.id}</p>
            </div>
            <div class="nombre">
            <p>Nombre</p>
             </div>
            <div class="detalle">
             <p>${user.name}</p>
            </div>
            <div class="nombre">
                <p>Usuario</p>
            </div>
            <div class="detalle">
                 <p>${user.username}</p>
            </div>
            <div class="nombre">
                <p>Email</p>
            </div>
            <div class="detalle">
                 <p>${user.email}</p>
            </div>
            <div class="nombre">
                <p>Direccion</p>
            </div>
            <div class="detalle">
                 <p>${user.address.street}</p>
            </div>
            <div class="nombre">
                <p>Suite</p>
            </div>
            <div class="detalle">
                 <p>${user.address.suite}</p>
            </div>
              <div class="nombre">
                <p>Ciudad</p>
            </div>
            <div class="detalle">
                 <p>${user.address.city}</p>
            </div>
            <div class="nombre">
            <p>Zipcode</p>
             </div>
            <div class="detalle">
             <p>${user.address.zipcode}</p>
            </div>
            <div class="nombre">
            <p>Latitud</p>
             </div>
            <div class="detalle">
             <p>${user.address.geo.lat}</p>
            </div>
            <div class="nombre">
            <p>Longuitud</p>
             </div>
            <div class="detalle">
             <p>${user.address.geo.lng}</p>
            </div>
            <div class="nombre">
            <p>Telefono</p>
             </div>
            <div class="detalle">
             <p>${user.phone}</p>
            </div>
            <div class="nombre">
            <p>Sitio Web</p>
             </div>
            <div class="detalle">
             <p>${user.website}</p>
            </div>
            <div class="nombre">
            <p>Catch Company</p>
             </div>
            <div class="detalle">
             <p>${user.company.catchPhrase}</p>
            </div>
            <div class="nombre">
            <p>Bs Company</p>
             </div>
            <div class="detalle">
             <p>${user.company.bs}</p>
            </div>
        </div>
         </div>
       
        `
        listadoUsuario.appendChild(row);
        
        console.log(listadoUsuario);
    });
}

function printPost(arrayPost){
    console.log(arrayPost);
    arrayPost.forEach(post=>{
        const row=document.createElement("div");
        row.innerHTML=`<div class="contenedor-usuario">
                            <div class="nombre">
                                <p>User Id</p>
                            </div>
                            <div class="detalle detalle-post">
                              ${post.userId}
                            </div>
                            <div class="nombre">
                                <p>ID</p>
                            </div>
                            <div class="detalle detalle-post">
                                ${post.id}
                            </div>
                            <div class="nombre">
                                <p>Titulo</p>
                            </div>
                            <div class="detalle detalle-post"">
                                ${post.title}
                            </div>   
                    </div>` 
                     listadoPost.appendChild(row); 
    });
   
}