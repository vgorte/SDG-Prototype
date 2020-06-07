# SDG Visualization Prototype

A mobile application _(currently android only)_ for visualizing SDG data with `choriented maps` among other visualization types.

## Getting Started

Download / Clone this repository.

The repository contains SDG data and a geojson file with countries. The files can be replaced / extended with data or files.

You can find the data files in the `/pecularities/` folder.

### Prerequisites

This application is developed with [React-Native](https://reactnative.dev/). Follow the installation guide from the official docs. 

Make sure to use the `React Native CLI Quickstart` guide and not the `Expo` guide.

### Installing

- Install dependencies in root using npm:

  ```
  npm install
  ```

- Run the react-native application

    ```
    react-native run-android
    ```


You should see an output similar to this: 

```javascript
    BUILD SUCCESSFUL in 9s
    209 actionable tasks: 2 executed, 207 up-to-date
    info Connecting to the development server...
    8081
    info Starting the app on "699dbac6"...
    Starting: Intent { cmp=com.gorte.sdgviz/.MainActivity }
```

When activating the debuggin mode, you can find the debugger-ui here: 

`http://localhost:8081/debugger-ui/
`

## Built With

* [React-Native](https://reactnative.dev/)
* [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/)

## Authors

* **Viktor Gorte** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
