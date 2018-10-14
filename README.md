# weatherapp

## Project setup


### Install Global dependancy

Yes, I know the instructions said NO global dependancies so I left it out of the package.json. However, in order to build or test this solution locally, you will have to install it using the install command below. This is because webpack runs these commands through the 'vue-cli-service'.

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

I wanted to have a solution that provided search by city, that populates a 5 day weather forecast as well as a current weather overview. I wanted the solution to be mobile first, with a UX designed for a solid mobile experience. A sidedrawer would serve as access to the search options and the daily overview. For larger viewports, I did not want the drawer to be collapsale since I would have the space to display all information on screen. Being unsure of how long queries would take to resolve, there needed to be a loader or some other indication that a process was occuring. 

After reviewing the API documentation I discovered that queries would have to be done by either a city code provided in a lengthy .json document or by providing a lat/lng. Having used the Google Geocoding API before, I knew the results would reliably provide a lat/lng by city search so I decided to first query the Geocoding API to retreive the lat/lng and feed that into the OWM API as I didnt want to have to parse a 3000 line .json document every query. 

### Tradeoffs
1. Using vue-resource vs Axios for API calls: vue-resource has better documentation than vue-axios at this time.
2. Using Google Geocoding API vs Open Weather Maps List of city ID (city.list.json.gz) for city/state queries: Google Geocoding API requires less tranformation to work with and does not require an exact match on query strings to produce reliable results. 

### Posible future implementations
1. Storing favorite locations
2. Autopopulation option for city/state via Geolocation API.

