<h1 align="center"><img height="100" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Bosch_logo.png" />
<br>
<br>
Covid-19 Tracker
</h1>

<br />

## Description

This is a test project developed for frontend task. I have used Angular to complete the task because of its out of box typescript support and also to save time.
<br />
Also I have used India stats instead of Germany stats as I didn't able to get all the required APIs for Germany location. But concept is exactly same i.e. Country, States and date range.
<br />
As the history data (day wise data) was not there in state details APIs, I have put the date range filtering on the Nation wise history data. So, similarly I can apply filtering to states data also if it is there.
<br />
Also I am storing history data in localstorage as it takes approx 15-20 seconds to load, so that user will see old data till that time and once the data is recievd from HTTP call the refreshed in the chart.

## Installation

```javascript
npm install
```

## Start the project

```javascript
ng serve -o
```

### Author

Ashish Sharma

### Developed For

Bosch Frontend Task
