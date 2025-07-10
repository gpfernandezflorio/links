// https://gpfernandezflorio.github.io/links/?dst=
const redirigir = {
  // Nota sobre IA y programación
  ia:"https://www.xataka.com/robotica-e-ia/hay-nuevo-lenguaje-programacion-que-esta-rompiendo-moldes-ingles/amp"
  ,
  // Links de Exactas Programa Verano
  ep:"https://docs.google.com/document/d/1QS1_7dpNvNVa0gfmmFsjgWwiTCmWnvwVNtbw_lHS7ws/edit?usp=sharing"
  ,
  // Encuesta Arduino en la Escuela
  eaele:"https://forms.gle/t2NjiYMygjv3uNYX7"
  ,
  // Materiales para el taller de Arduino UBA XXII
  ubaxxii:"https://drive.google.com/drive/folders/1YeO7L1oWRpPEZy55x7OYsE4r1oliX-ct"
  ,
  // Figus bloques
  figus:"https://gpfernandezflorio.github.io/milanator/?juego=figus0&toolbox=off"
  ,
  // Blaite Hole
  blaite_hole:"https://www.youtube.com/watch?v=ox6fTz6-naE"
  ,
  // Prefill de la encuesta inicial
  eic:"https://docs.google.com/forms/d/e/1FAIpQLSd3RvnwVqMyvWoVFrDnPtNZIDYuFHY5ZDQ87ZFCBSF7tUKAKw/viewform?usp=pp_url&entry.1572899491=45&entry.1198600567=45&entry.2023786687=23&entry.52269099=Otro&entry.896680097=No,+no+s%C3%A9+programar&entry.1331918729=Porque+no+conozco+ning%C3%BAn+lenguaje&entry.404586128=Ninguna&entry.141024707=Ninguno&entry.1897527951=No+us%C3%A9+ning%C3%BAn+entorno+de+programaci%C3%B3n+por+bloques&entry.29734553=Fui+a+colegio+t%C3%A9cnico&entry.289672774=No+tuve+ninguna+materia+relacionada+con+computaci%C3%B3n&entry.1638383705=No&entry.407501327=No&entry.832424218=No&entry.2102380495=Lic.+en+Bioinform%C3%A1tica&entry.910364890=No+trabajo&entry.584737561=No+s%C3%A9&entry.1626608323=Secuencia+de+pasos&entry.1082317389=M%C3%A1quina+electr%C3%B3nica&entry.1645476851=No+s%C3%A9&entry.1179230757=No+s%C3%A9&entry.1376619111=E+porque+yo+lo+digo&entry.227062922=En+ning%C3%BAn+caso&entry.1188795280=3&entry.1850574872=3&entry.1669511087=4&entry.387622995=3&entry.1341699203=Dar+muchos+pasos&entry.876383557=Comer+una+manzana&entry.1024406561=Saltar+3+veces&entry.1652300713=Todos+me+parecen+igual+de+claros&entry.532839821=Acci%C3%B3n&entry.2000717890=Acci%C3%B3n&entry.1442706720=Cantidad&entry.107908675=Acci%C3%B3n&entry.484841328=Cantidad&entry.986473314=Acci%C3%B3n&entry.1686823756=3&entry.1648906203=3&entry.880852436=3&entry.979792171=3&entry.887559280=Muchas&entry.2088149650=A&entry.1229710105=A&entry.585402319=B&entry.1272978814=if+(hay+manzana):%0Acomer+manzana&entry.1004151645=F&entry.1148076723=H&entry.323028280=E&entry.72487811=A&entry.129864378=D&entry.851994455=H&entry.763283227=C&entry.202289203=F&entry.986968186=C&entry.553415666=D&entry.1992179295=A"
  ,
  // Encuesta inicial UNQ
  // ei_q:"https://docs.google.com/forms/d/e/1FAIpQLSd3RvnwVqMyvWoVFrDnPtNZIDYuFHY5ZDQ87ZFCBSF7tUKAKw/viewform?usp=pp_url"
  // Encuesta inicial UBA
  ei_q:"https://docs.google.com/forms/d/e/1FAIpQLSeCren0nNFamGgL8EGfnNkw8K2_GjYxAuSSWwmEr0gz5VqYVw/viewform?usp=sf_link"
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
