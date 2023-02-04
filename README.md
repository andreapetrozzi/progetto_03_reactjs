Spotify in Redux

Comincia partendo dall’applicazione Spotify che trovi in fondo a questa pagina. 
Oggi i tuoi compiti saranno quelli di creare un’applicazione React da quel progetto e gestirne lo stato in Redux.

Features:
    1. Riscrivi l’applicazione utilizzando React, mantenendo le funzionalità attuali invariate 
       (non dimenticare le rotte per gestire le tre schermate principali e la funzione di ricerca nella sidebar)

    2. Una volta completata, installa i pacchetti necessari per implementare Redux
       Cliccando una canzone, il nome e i dettagli dovranno apparire nel “player musicale”, 
       la sezione in fondo alla pagina che mostra i controlli di ascolto (usa Redux)

    3. Accanto ad ogni canzone dovrai aggiungere la funzionalità per mettere “Mi piace” alla canzone. 
       Da quel momento in avanti, qualunque volta la canzone apparirà, lo stato del “mi piace” dovrà riflettere quello salvato in Redux
    
    [EXTRA] Salva nello store Redux anche i risultati di ricerca che ottieni dalle API
    [EXTRA] La possibilità di aggiungere canzoni ad altre playlist rispetto alla coda di riproduzione normale

Search
Parametro: query
Endpoint: https://striveschool-api.herokuapp.com/api/deezer/search?q={query}

Esempio: https://striveschool-api.herokuapp.com/api/deezer/search?q=queen

Hints:
    Usa lo store per tenere traccia delle canzoni di cui l’utente ha messo “mi piace” e controllalo di conseguenza ogni volta che visualizzi una canzone.
    Usa lo store per tenere traccia della canzone che sta attualmente suonando.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
