/*
    My custom JS code here
*/

console.log("Ready to rock!");

/* 
    JSON - JavaScrip Object Notation
    A way to define data, especially for storing a No-SQL style database
        (such as PouchdB, MongoDB, Mariadb, CouchDB)
    
    Every JSON object starts/ends with {}
    Every entry is a key/value pair - using double quotes, sperated by a colon
    Every entry seperated by a comma until the last one
        spacing does not matter
        capitalization does not matter
    
    {"firstName" : "Victor", "lastName" : "Campos", "age" : 43, "City" : "San Diego"}
    {"firstName" : "Jose "lastName" : "Pereda", "age" : 46, "City" : "Los Angeles"}

    // From 2nd variable
    // to be stored ASCII
    {
        "firstName" : "Ahmed",  
        "lastName" : "Jones",   
        "age" : 21,
        "city" : "Chula Vista",
        "newUser" : true
        "favoriteColors" : ["red", "pink", "yellow", "white"],
        "address" : {
            "streetNumber" : 4714,
            "streenName" : "Sea Water Ln",
            "city" : "San Diego",
            "Zip" : "92154"
        }
        "url" : "http:\/\/wwww.microsoft.com"
        "comicPic" : "\/img\/app\/img2020121.jpg"
     }
    
    localstorage - A built-in database we have access to 
    * cookies:          basic data. limited storage space. Limited to device.
    * loccalstorage:    more complex data. More storage space. Limited to device.
    * PouchDB:          Most complex data. Most storage space. can be on device or cloud.
    * 
    Using Javascript we can access a memory location on the device to store or retrive data
    When you save data, you define the 'memory location'
    When you retrieve data, you call its 'memory location'
    Save Data:
        localStorage.setItem("useer1", "vcampos");
    Get Data:
        localStorage.getItem("user1");

*/

/*
localStorage.setItem("data001", "Hello, World!")
localStorage.setItem("newData002", "Goodbye")

window.alert(localStorage.getItem("data001"));
*/


