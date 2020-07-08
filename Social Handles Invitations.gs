/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // First row of data to process
  var numRows = 1; // Number of rows to process
  var sub = "Our Social Handles are active !!! Visit Now";
  var url = "https://devanshmathur.github.io/Caerus-Infotech/Social%20Handles%20Active.jpg";
  var pic = UrlFetchApp.fetch(url).getBlob().setName("Caerus Infotech");
  var dataRange = sheet.getRange(startRow, 1, numRows, 9);  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i in data) {
    var row = data[i];
    var name;
    if(row[3]=="Male")
    { name = "Mr. "+row[2]; }
    else if(row[3]=="Female")
    { name = "Miss " + row[2]; }
    else 
    { name = "Dear " + row[2]; }
    MailApp.sendEmail({
    to: row[1],
    subject: sub,
    htmlBody: "Hello " + name + "<br>" + ""
   
	+"<br><b>Quintessential Community</b> is glad to introduce our social handles that are currently activated so you can follow us and get in touch with latest updates."
    +"<b><br><br>Social Handles</b>-<br>"
    +"<b>Facebook </b> :- https://www.facebook.com/caerusinfotech/<br>"
    +"<b>Instagram </b>:- https://www.instagram.com/caerusinfotech<br>"
    +"<b>Twitter   </b>:- https://twitter.com/CaerusInfotech<br>"
    +"<b>Medium    </b>:- https://medium.com/@caerusinfotech<br>"
    +"<b>Linkedin  </b>:- https://www.linkedin.com/company/caerusinfotech/<br>"
    +"<b>Youtube   </b>:- https://www.youtube.com/channel/UCaWmYob43P1S463-fWAQZHw?view_as=subscriber<br>"
    +"<br> <img src='cid:Photo'> <br> " + "<br>Wishing for a brighter future <br>" 
	+"<strong>Caerus Infotech</strong><br>"
	+"For Queries :<br>"
	+"<h4><strong>Mail us:</strong></h4>"
	+"<h5><a href='mailto:caerusinfotech@gmail.com'>caerusinfotech@gmail.com</a></h5>"
	+"<h4><strong>Call us:</strong></h4>"
	+"<h5><a href='https://wa.me/+919456622845'>(+91)-945-662-2845</a></h5>"
	+"<h5><a href='tel:(+91)-820-970-5181'>(+91)-820-970-5181</a></h5>",
    inlineImages:{ Photo : pic }
  });

  }
}