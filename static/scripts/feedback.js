function readBox() 
{
    var fname = document.getElementById('fname').value;
    var feedback = document.getElementById('feedback').value;
    var eadd = document.getElementById('eadd').value;
    var cname = document.getElementById('cname').value;
     var pnumber = document.getElementById('pnumber').value;
    alert("Full name: " + fname + 
          "\nEmail Address: " + eadd +
          "\nCompany Name: " + cname + 
          "\nPhone Number: " + pnumber + 
          "\nFeedback/Comment: " + feedback
        );
}