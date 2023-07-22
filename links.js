const redirigir = {
  figus:"https://gpfernandezflorio.github.io/milanator/?juego=figus0&toolbox=off"
};

const argumentoURL = function(key) {
  let valor = location.search.match(new RegExp('[?&]' + key + '=([^&]+)'));
  if (valor) {
    return decodeURIComponent(valor[1].replace(/\+/g, '%20'));
  }
}

let destino = argumentoURL('dst');
if (destino && destino in redirigir) {
  window.location.replace(redirigir[destino]);
}
