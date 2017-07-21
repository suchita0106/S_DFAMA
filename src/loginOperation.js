var mentor = require("./mentorServices/mentor");

module.exports = 
{
    "validateLoginCredential": function(callback,inputData) 
    {    
        if(inputData.UserType==1)
            {
                $location.path("/adminHome");
            }
            else if(inputData.UserType==2)
            {
                $location.path("/studentHome");
            }
            else if(inputData.UserType==3)
            {
                mentor.validateMentor(callback, inputData);
                         
            }
        
    }
}