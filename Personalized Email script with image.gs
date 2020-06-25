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
    +"<br><img src='cid:Photo'><br>", 
    inlineImages:{ Photo : pic }
  });

  }
}