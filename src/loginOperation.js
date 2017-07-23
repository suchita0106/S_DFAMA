var mentor = require("./mentorServices/mentor");
var student = require("./studentServices/student");

module.exports = 
{
    "validateLoginCredential": function(callback,inputData) 
    {    
        if(inputData.UserType==1)
            {
                // Call For Admin Service
            }
            else if(inputData.UserType==2) 
            {
                // Call For Student Service
                 student.validateStudent(callback, inputData);
            }
            else if(inputData.UserType==3)
            {
                // Call For Mentor Service
                mentor.validateMentor(callback, inputData);
                         
            }
        
    }
}