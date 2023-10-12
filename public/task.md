# TECHNICAL EVALUATION FRONTEND DEVELOPER / JUNIOR BACKEND

**Time Allocation: 2 days**

This technical evaluation is composed of four parts explained as follows:

## I. Rest API Consumption and Element Displays/Distribution

Given a public testing REST API/GraphQL Endpoint, consume the methods to display the list of subscribed users, show user details, display the five most recent posts by one selected user, and view the details of comments for a selected post. Please refer to the design provided in the Mockup image.

**API Resource:** [https://gorest.co.in/](https://gorest.co.in/)

**What should be done:**

1. Design a User Interface by implementing a frontend framework/library of your choosing (Angular, React, or Vue). You are free to organize the components in a way that improves the user experience.

2. Consume the API/GraphQL endpoint in real-time (you are free to choose any implementation).

3. Use a styling framework (Bootstrap or Material UI).

4. If any special instructions are required to run the demo, please provide a .md file with the explanation.

## II. Chart Visualizations

1. Using the attached static JSON data about fuel CO2 emissions by nation (`fossil-fuel-co2-emissions-by-nation_json.json`), consume and use it in an Angular/React/Vue project to render a set of charts. These charts will be triggered by a set of filters, such as:
   - Start year
   - End year
   - Country name (get the list from the JSON file `countries.json`)

**Hint:** You should filter the JSON file by the key names "Year" and "Country."

**Dataset Reference:** [https://datahub.io/core/co2-fossil-by-nation#data](https://datahub.io/core/co2-fossil-by-nation#data)

The visualization should include at least the following patterns shown in the provided mockup.

## III. Creation of Base Rest API Service

Using your preferred programming language, create a Rest API service that performs the following actions:

1. Use the following GeoJson file as a static dataset, [link](https://datalakecountyil.opendata.arcgis.com/datasets/lakecountyil::national-obesity-bystate.geojson?where=1=1&outSR=%7B%22latestWkid%22%3A3435%2C%22wkid%2%3A102671%7D), which contains information about Obesity in the USA.

2. Create the following GET methods:
   - Retrieve all the state names and IDs (in an array).
   - Retrieve the Obesity index and the area (set of coordinates) for a specific state (passing the name or ID of the state as a parameter).
   - Retrieve summary data such as:
     - State with the highest obesity index (name and value)
     - State with the lowest obesity index (name and value)
     - Average country obesity index (just the value).

3. Create a .md file with instructions on how to run the service.

## IV. Displaying Previous Results on a Map

Using the REST API methods created in the previous step, prepare a user interface (using React, Angular, or Vue.js) where you consume that data and display the following:

1. Summary KPI (the summary data).

2. Display the USA map with each state painted in one color scale according to the obesity index. For example, a value between 1 and 10 could be green, 11-20 yellow, and >21 red. You can use any open-source map rendering library.

3. Create a .md file with instructions on how to run the mini application.

## SHARING THE RESULTS

Create a repository on GitHub, GitLab, or BitBucket where you can publish your source code and share the repository URL with [orlin.corea@fh-steyr.at](mailto:orlin.corea@fh-steyr.at).
