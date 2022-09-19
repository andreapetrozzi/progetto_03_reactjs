import React, { useEffect } from "react";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";


export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);
  return <div>{token ? <Spotify /> : <Login />}</div>;
}




// Sul Terminale:
// $ yarn add styled-components react-icons axios
// npm i styled - components
// npm i react-icons axios

//https://developer.spotify.com/

// TRACCIA: Spotify in Redux
// Comincia partendo dall’applicazione Spotify che trovi in fondo a questa pagina.
// Oggi i tuoi compiti saranno quelli di creare un’applicazione React da quel progetto e gestirne lo stato in Redux.

// Features:
// 01) Riscrivi l’applicazione utilizzando React, mantenendo le funzionalità attuali invariate(non dimenticare le rotte per gestire le tre schermate principali e la funzione di ricerca nella sidebar)

// 02) Una volta completata, installa i pacchetti necessari per implementare Redux

// 03) Cliccando una canzone, il nome e i dettagli dovranno apparire nel “player musicale”, la sezione in fondo alla pagina che mostra i controlli di ascolto(usa Redux)

// 04) Accanto ad ogni canzone dovrai aggiungere la funzionalità per mettere “Mi piace” alla canzone.Da quel momento in avanti, qualunque volta la canzone apparirà, lo stato del “mi piace” dovrà riflettere quello salvato in Redux

// 05) [EXTRA] Salva nello store Redux anche i risultati di ricerca che ottieni dalle API

// 06) [EXTRA] La possibilità di aggiungere canzoni ad altre playlist rispetto alla coda di riproduzione normale

// 🔍 Search
// Parametro: query
// Endpoint: https://striveschool-api.herokuapp.com/api/deezer/search?q={query}
// Esempio: https://striveschool-api.herokuapp.com/api/deezer/search?q=queen

// 💡 Hints:
// - Usa lo store per tenere traccia delle canzoni di cui l’utente ha messo “mi piace” e controllalo di conseguenza ogni volta che visualizzi una canzone.

// - Usa lo store per tenere traccia della canzone che sta attualmente suonando.
