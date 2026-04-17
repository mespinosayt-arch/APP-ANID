self.addEventListener("install", event => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", event => {
  // listo para cache en el futuro
});
