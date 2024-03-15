const testData = [
        // { "name": "John Doe", "roll": "2023001", "dob": "2000-01-01", "section": "A" },
        { "name": "Jane Smith", "roll": "2023002", "dob": "2000-02-01", "section": "B","password":"student" },
        { "name": "Alice Johnson", "roll": "2023003", "dob": "2000-03-01", "section": "C","password":"student" },
        { "name": "Michael Brown", "roll": "2023004", "dob": "2000-04-01", "section": "A","password":"student" },
        { "name": "Emma Davis", "roll": "2023005", "dob": "2000-05-01", "section": "B","password":"student" },
        { "name": "James Wilson", "roll": "2023006", "dob": "2000-06-01", "section": "C","password":"student" },
        { "name": "Olivia Martinez", "roll": "2023007", "dob": "2000-07-01", "section": "A","password":"student" },
        { "name": "William Anderson", "roll": "2023008", "dob": "2000-08-01", "section": "B","password":"student" },
        { "name": "Sophia Thomas", "roll": "2023009", "dob": "2000-09-01", "section": "C","password":"student" },
        { "name": "Alexander Garcia", "roll": "2023010", "dob": "2000-10-01", "section": "A","password":"student" },
        { "name": "Ava Martinez", "roll": "2023011", "dob": "2000-11-01", "section": "B","password":"student" },
        { "name": "Ethan Rodriguez", "roll": "2023012", "dob": "2000-12-01", "section": "C","password":"student" },
        { "name": "Mia Hernandez", "roll": "2023013", "dob": "2001-01-01", "section": "A","password":"student" },
        { "name": "Noah Lopez", "roll": "2023014", "dob": "2001-02-01", "section": "B","password":"student" },
        { "name": "Isabella Gonzalez", "roll": "2023015", "dob": "2001-03-01", "section": "C","password":"student" },
        { "name": "Liam Perez", "roll": "2023016", "dob": "2001-04-01", "section": "A","password":"student" },
        { "name": "Charlotte Sanchez", "roll": "2023017", "dob": "2001-05-01", "section": "B","password":"student" },
        { "name": "Amelia Smith", "roll": "2023018", "dob": "2001-06-01", "section": "C","password":"student" },
        { "name": "Benjamin Torres", "roll": "2023019", "dob": "2001-07-01", "section": "A","password":"student" },
        { "name": "Harper Ramirez", "roll": "2023020", "dob": "2001-08-01", "section": "B" ,"password":"student"}
      ]





    async  function executeThis(){
        try {
                // Insert each student document
                for (const data of testData) {
                  const newStudent = new Student(data);
                  await newStudent.save();
                }
                console.log("Test data inserted successfully.");
              } catch (error) {
                console.error("Error inserting test data:", error);
              }
      }