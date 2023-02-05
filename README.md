### Spotify Clone with Redux

Create a React application from that project and manage its state in Redux.

Features:
     1. Rewrite the application using React, keeping the current functionality unchanged
        (don't forget the routes to manage the three main screens and the search function in the sidebar)

     2. Once complete, install the packages needed to implement Redux
        By clicking on a song, the name and details should appear in the "music player",
        the section at the bottom of the page showing the listening controls (uses Redux)

     3. Next to each song you will need to add the functionality to "Like" the song.
        From then on, whenever the song appears, the "like" status should reflect the one saved in Redux
    
     [EXTRA] Save the search results you get from the APIs to the Redux store as well
     [EXTRA] The ability to add songs to other playlists than the regular play queue


### Sceen Homepage
![Cattura_2](https://user-images.githubusercontent.com/98649610/216810822-a2d823e9-db38-46a0-abd9-b26a615c14cb.JPG)



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
Parameter: query
Endpoint: https://striveschool-api.herokuapp.com/api/deezer/search?q={query}

Example: https://striveschool-api.herokuapp.com/api/deezer/search?q=queen

Hints:
     Use the store to track which songs the user has liked and check accordingly every time you view a song.
     Use the store to keep track of what song is currently playing.
     
     
     
     
     


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
