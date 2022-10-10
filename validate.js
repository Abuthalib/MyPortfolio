var flag = 0

function containsSpecialChars(str) {
   const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
   return specialChars.test(str);
}

function containNumbers(str) {
   const numbers = /[1234567890]/;
   return numbers.test(str);
}

function ValidateEmail(mail) {
   const characters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (characters.test(mail)) {
      return true;
   } else {
      return false;
   }
}

function ValidateEmailSignature(mail) {
   const characters = /@/;
   if (characters.test(mail)) {
      return true;
   } else {
   }
}

function nameCheck() {
   var name = document.getElementById("name").value;
   name=name.trim()  ;
   if (name === "" || name === null || name === " ") {
      document.getElementById("error-name").innerHTML = "Provide a name";
      return false;
   } else {
      if (containsSpecialChars(name)) {
         document.getElementById("error-name").innerHTML = "Characters are not allowed";
         flag = 1;
         if (containNumbers(name)) {
            document.getElementById("error-number").innerHTML = "numbers are not allowed";
            return false;
         } else {
            document.getElementById("error-number").innerHTML = "";
            return true;
         }
      } else {
         document.getElementById("error-name").innerHTML = "";
         flag = 0;
         if (containNumbers(name)) {
            document.getElementById("error-number").innerHTML = "numbers are not allowed";
            return false;
         } else {
            document.getElementById("error-number").innerHTML = "";
            return true;
         }
      }
   }
}




// function emptyCheckSubject() {
//    var sub = document.getElementById("sub").value;
//    sub=sub.trim();
//    if (sub == "" || sub == null) {
//       document.getElementById("error-sub").innerHTML = "area should not be blank";
//       return false;
//    } else {
//       document.getElementById("error-sub").innerHTML = "";
      
//    }
//    var phnum=/^\d{10}$/;
//    if(sub.match(phnum))
// {
//    return true;
   
// }
//    else{
//       return false;
//    }
// }


function emailCheck() {
   var mail = document.getElementById("mail").value;
   mail=mail.trim();

   if (mail == "" || mail == null) {
      document.getElementById("error-mail").innerHTML = "provide proper mail id";
      return false;
   } else {
      if (ValidateEmail(mail)) {
         document.getElementById("error-mail").innerHTML = "";
         return true;
      } else {
         if (ValidateEmailSignature(mail)) {
            document.getElementById("error-mail").innerHTML = "Enter the remaining part after '@'";
            return false;
         } else {
            document.getElementById("error-mail").innerHTML = "Email should contain '@'";
            return false;
         }
      }
   }
}
function emptyCheckMessage() {
   var msg = document.getElementById("messages").value;
   msg=msg.trim();
   if (msg === "" || msg === null) {
      document.getElementById("errormessage").innerHTML = "This area should not be blank";
      return false;
   } else {
      document.getElementById("errormessage").innerHTML = "";
      return true;
   }
}



document.getElementById("submit-form").addEventListener(
   "submit",
   function (e) {
      e.preventDefault();
   },
   false
);

function validateForm() {
   if (!nameCheck()  || !emptyCheckMessage() || !emailCheck() || flag === 1) {
      document.getElementById("btn").innerHTML = "please complete all Required Fields";
      return false;
   } else {
      document.getElementById("btn").innerHTML = "submit";
      return true;
   }
}

function check() {
   console.log("nameCheck = " + nameCheck());
   console.log("emptyCheckSubject = " + emptyCheckSubject());
   console.log("emptyCheckMessage = " + emptyCheckMessage());
   console.log("emailCheck = " + emailCheck());
   console.log("validateForm =" + validateForm());
   console.log("emptyCheckSubj = " + emptyCheckSubj());
   return false;
}
