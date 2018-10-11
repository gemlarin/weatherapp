# builditapp

## Project setup

### Global Dependancies


### Install Global dependancy
There is a Vue Cli 3 global dependancy in order to run npm commands for serve, build, and test. This is because webpack runs these commands through the 'vue-cli-service'.

```
npm install -g @vue/cli
```

### Install local dependancies
_On install you make get a notification that the dependancy @babel/core@^7.0.0 is not installed. Ignore it. @babel/core@7.0.0-beta.47 will indeed be installed. Bug reported._

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
_Important note: There is a bug in Vue CLI that throws an error (Cant find package 'electron') when trying to mock vue-resource. The current workaround does not work in CLI v3 as you cannot directly access the webpack config to force an ignore on the electron import requirement. As a result, tests will pass, but the CLI will throw an TypeError when test tries to access $http.get();_

```
npm run test:unit
```

---

### Thought process when creating the solution.


### Tradeoffs
1. Using vue-resource vs Axios for API calls: vue-resource has better documentation than vue-axios at this time.
2. Using Google Geocoding API vs Open Weather Maps List of city ID (city.list.json.gz) for city/state queries: Google Geocoding API requires less tranformation to work with and does not require an exact match on query strings to produce reliable results. 

### Posible future implementations
1. Storing favorite locations
2. Autopopulation option for city/state via Geolocation API.

