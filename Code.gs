function sendEmail(e) {
//          
          //response  
          //getRespondentEmail()
          var html = HtmlService.createTemplateFromFile("email.html");
          var htmlText = html.evaluate().getContent();
          
          var emailTo = e.response.getRespondentEmail();
          var subject = "Thanks for joining";
          var textBody = "This email requires HTML support. Please make sure you open with a client that supports it.";
          var options = { htmlBody: htmlText };
          
          if(emailTo !== undefined)
          {
          GmailApp.sendEmail(emailTo, subject, textBody, options);
          }
        }