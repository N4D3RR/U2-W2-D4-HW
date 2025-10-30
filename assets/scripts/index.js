document.getElementById("countTripsBtn").addEventListener("click", () => {
  // Conta tutte le card (Saldi + Welcome Summer)
  const cards = document.querySelectorAll(".card")

  // Conta le immagini nella sezione Last Minute
  const lastMinuteImages = document.querySelectorAll("#lm img")

  // Calcola il totale
  const totalTrips = cards.length + lastMinuteImages.length

  // Mostra il risultato in un alert
  alert(`Ci sono ${totalTrips} viaggi disponibili sulla pagina!`)
})
