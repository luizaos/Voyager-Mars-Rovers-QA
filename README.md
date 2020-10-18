# Voyager-Mars-Rovers-QA-Challenge


### 1 - Start docker

`run docker-compose up` in ./voyager-mars-rover/ folder to startup the application

### 2 - Application will be available at http://localhost:8080

### 3 - The Cypress test project is isolated on ./voyager-mars-e2e-test/

Run `npm install` on ./voyager-mars-e2e-test/ folder

Run `npm run cypress:open` on ./voyager-mars-e2e-test/ folder

ps.: The resetdb.bat file was created to delete the records from the Plateaus and Rovers tables at the beginning of each complete test battery.





