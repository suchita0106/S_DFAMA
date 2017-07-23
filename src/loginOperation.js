var mentor = require("./mentorServices/mentor");
var admin = require("./adminServices/adminService");
var student = require("./studentServices/student");

module.exports = 
{
    "validateLoginCredential": function(callback,inputData) 
    {    
        if(inputData.UserType==1)
            {
                // Call For Admin Service
                 admin.validateAdmin(callback, inputData);
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