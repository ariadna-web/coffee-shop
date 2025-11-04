const opinionForm= document.getElementById("opinionForm");
const opinionesSection= document.getElementById("opiniones-lista");

if(opinionForm){
async function cargarOpiniones() {
    const res= await fetch("/api/opiniones");
    const opiniones= await res.json();

    opinionesSection.innerHTML= opiniones
    .map(
        op => 
            `
      <div class="opinion">
                <h4>${op.nombre}</h4> 
                <p>${op.comentario}</p>
                <small>${new Date(op.fecha).toLocaleDateString()}</small>
                </div>
                `
    )
    .join("")
}
opinionForm.addEventListener("submit", async(e) =>{
    e.preventDefault();
    const nuevaOpinion={
        nombre: document.getElementById("nombre").value, 
        comentario: document.getElementById("comentario").value,
    }
    await fetch("/api/opiniones", {
        method: "POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(nuevaOpinion),
    })
    opinionForm.reset();
    cargarOpiniones();
})
cargarOpiniones();
};


