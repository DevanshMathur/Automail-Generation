/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // First row of data to process
  var numRows = 1; // Number of rows to process
  var sub = "Testing";
  var url = "https://govindvarshny.github.io/form-script/trrailblazer%20together.jpeg";
  var pic = UrlFetchApp.fetch(url).getBlob().setName("Trailblazer Together");
  var dataRange = sheet.getRange(startRow, 1, numRows, 6);  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i in data) {
    var row = data[i];
    MailApp.sendEmail({
    to: row[1],
    subject: sub,
    htmlBody: "Hello " + row[2] +"how are you\n i hope all is good"
    +"<br> <img src='cid:Photo'> <br> " + "Wishing for a brighter future <br>" 
	+"<strong>Trailblazer Together Team</strong><br>"
	+"For Queries :<br>"
	+"<h4><strong>Mail us:</strong></h4>"
	+"<h5><a href='mailto:trailblazertogether@gmail.com'>trailblazertogether@gmail.com</a></h5>"
	+"<h4><strong>Call us:</strong></h4>"
	+"<h5><a href='https://wa.me/+919456622845'>(+91)-945-662-2845</a></h5>"
	+"<h5><a href='tel:(+91)-820-970-5181'>(+91)-820-970-5181</a></h5>",
    inlineImages:{ Photo : pic }
  });

  }
}