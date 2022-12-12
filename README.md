#### Project Requirements

- JDK 8
- NodeJS
- MySQL Server
- Apache Maven
- Liquibase

#### Project set up

- This project use [liquibase](https://www.liquibase.org/) as a version control for database. When you will start backend, all tables and structures will be generated automatically.
- To try the project on localhost, check that nothing runs on ports 9090 (Spring Boot) and 3000 (React app)
- You can edit ````spring.datasource```` in ```backend/src/main/resources/application.properties```  and ```username``` and ```password``` in ```backend/src/main/resources/liquibase.properties``` with your own SQL login / password
- Create a database named "websocket" or you can also modify the name in the properties files mentioned just above.

##### Start server
- Go inside backend folder then type  ```mvn spring-boot:run``` to launch backend.
- Or you can type ```mvn clean package``` to generate a JAR file and then start server with ```java -jar path/to/jar/file``` (Normally in inside backend/target/)
##### Start frontend
- Go inside frontend-web folder and then type ```npm react-scripts start```
