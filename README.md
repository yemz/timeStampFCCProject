 TimeStamp Microservice - (Back End FreeCodeCamp Project)
 =========================================================
 User stories:
         
             1. I can pass a string as a parameter, and it will check to see whether that string contains either 
                a unix timestamp or a natural language date (example: January 1, 2016).
             2. If it does, it returns both the Unix timestamp and the natural language form of that date.
             3. If it does not contain a date or Unix timestamp, it returns null for those properties.
           
           
Note: 
For this project Amazon Web Services (AWS) was used as a server using apache with Linux Ubuntu.

In case you are having a hard time setting up (AWS) apache server to use it as a localhost here are the steps that helped me:
   1. Install apache web server – (terminal)
   
      apt-get install apache2

2. Test apache:
 
      a. Make directory
            sudo mkdir testApache
            
      b. Change directory
            cd testApache
            
      c. Make subdirectory
            sudo mkdir testApachedir
            
      d. Change ownership (Ubuntu was used here, but if you are using another it must be changed to that instance).
            sudo chown Ubuntu testApachedir
            sudo chmod –R o+r testApachedir
            
      e. Change to subdirectory
            cd testApachedir
            
3. Create sample file to test apache server

      a. touch helloApache.html
      
      b. $echo“ html h1 Hello Apache Server! h1 html” helloApache.html //Use respective brackets <></> for html and h1
      
      c. Open browser window
            (type your AWS public DNS)
                http://ec2-00-000-000-000.compute-1.amazonaws.com/testApache/testApachedir/helloApache.html
                
      d. Output: 
            Hello Apache Server!
            
4. Check that in the security groups in AWS the port that you are using is set.  In this case I used port 8080 as a Custom TCP    
   Rule, source: custom 0.0.0.0/0.  Make sure to save any changes.
   
5. Test apache server with node.js:

      a. Make a new file:
           nano nodeTest.js
           
      b. Type:
            const express = require(‘express’);
            
            const app = express();
            
            app.get(‘/’, (req, res) => {
            
               res.send(‘Server is WoRkIng!’); //browser server output
               
            });
            
            app.listen(8080, ( ) => console.log(‘server running on port 8080’)); //terminal output
            
      c. When finished type ctrl + x and Y then enter.
      
      d. Use the terminal and run the file you want to test: node nodeTest.js
      
      e. Open browser and type you public AWS DNS as we did before but this time we will add only the port:
      
            http://ec2-00-000-000-000.compute-1.amazonaws.com:8080
            
      f. Output:
            Server is WoRkIng!

