/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // First row of data to process
  var numRows = 1; // Number of rows to process
  var attachments = ["https://drive.google.com/file/d/1-iE-4HU_G4IFrooxebzO2C7VTyrTSAjj/view?usp=sharing"];
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, 6);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  var url = "https://govindvarshny.github.io/form-script/trrailblazer%20together.jpeg"
  var pic = UrlFetchApp
            .fetch(url)
            .getBlob()
            .setName("Trailblazer Together");
  for (var i in data) {
    var row = data[i];
    MailApp.sendEmail({
    to: row[1],
    subject: "Test",
    htmlBody: "inline Google Logo<img src='cid:googleLogo'> images! <br>",
    inlineImages:
      {
        googleLogo: pic,
      }
  });
    /*var emailAddress = row[1]; // First column
    var message = "Hello "+row[2]+"\nHow are you\t I am fine" ; // Second column
    var subject = 'Mail using script';
    MailApp.sendEmail(emailAddress, subject, message);
    */
  }
}