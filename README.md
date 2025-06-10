# DATA-PIPELINE-DEVELOPMENT

*COMPANY: CODTECH IT SOLUTIONS

NAME: Stallan M Philos

INTERN ID: CT08DL10

DOMAIN: DATA SCIENCE

*DURATION: 8 WEEEKS

*MENTOR: NEELA SANTOSH
PROJECT NAME: Weather Data ETL Pipeline (Frontend-Only Project)
            This project is a simple yet effective **frontend-based ETL (Extract, Transform, Load) pipeline** that fetches real-time weather data using a city list from a CSV file. The goal is to demonstrate how ETL workflows can be automated using Python and visually controlled via a web interface using HTML, CSS, and JavaScript — all without a backend server.

Project Overview: 
                * Users upload a `.csv` file containing a list of cities.
* The frontend reads the file and stores it temporarily in the browser.
* A Python ETL script (`weather_etl.py`) is triggered manually to:

  * Read city names
  * Fetch real-time weather info from the **OpenWeatherMap API**
  * Transform and organize the data
  * Save it to `weather_output.csv` and `weather_output.json`

  Technologies Used:
  * **HTML/CSS** – Used to build the UI
* **JavaScript** – File handling and user interaction
* **Python** – Main ETL logic (read, fetch, transform, export)
* **Pandas** – Data reading and transformation
* **Requests** – Fetching data from the API
* **OpenWeatherMap API** – Provides temperature, humidity, wind speed, and weather description

Features:
* Upload CSV directly from the browser
* Clean UI with file upload and ETL initiation button
* “Copy to Clipboard” feature for running the ETL script easily
* Local storage for previewing uploaded data
* Weather data exported in both `.csv` and `.json` formats

Real-Time Applications:
* Can be used by data analysts to fetch and process weather data quickly for multiple cities
* Useful for learning ETL pipeline structure using real-world APIs
* Acts as a base for building dashboards or data visualizations using the output data
* Suitable for students building projects without a backend or database

Conclusion:
This project showcases how data-centric workflows like ETL can be simplified and executed through a combination of client-side logic and Python scripting. With a clear separation between the frontend UI and data processing logic, it offers a scalable foundation for extending into more complex data automation or analytics solutions. 


