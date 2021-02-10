
function chack(){
    var score = 0
    var right_awnser_1 = document.getElementById('q1-a1');
    var q1_awnser_2 = document.getElementById("q1-a2");
    var q1_awnser_3 = document.getElementById("q1-a3");
    var q1_awnser_4 = document.getElementById("q1-a4");
    if (right_awnser_1.checked == true) {
        score++
        alert( 'Question No.1 Right Answer')
    }
    else{
        alert('Question No.1 Wrong Answer')
    }



 var right_awnser_2 = document.getElementById("q2-a3");
 var q1_awnser_2 =  document.getElementById("q2-a1");
 var q2_awnser_2 =  document.getElementById("q2-a2");
 var q3_awnser_2 =  document.getElementById("q2-a4");
    if (right_awnser_2.checked == true) {
        score++
        alert("Question No.2 Right Answer")
     }
     else{
         alert("Question No.2 Wrong Answer")
     }

    
    
    var right_awnser_3 = document.getElementById("q3-a4");
    var q3_awnser_1 =  document.getElementById("q3-a2");
    var q4_awnser_4 =  document.getElementById("q3-a3");
    var q4_awnser_2 =  document.getElementById("q3-a1");
    if (right_awnser_3.checked == true) {
        score++
        alert('Question No.3 Right Answer')
     }
     else{
         alert('Question No.3 Wrong Answer')
     }
  

     var right_awnser_4 = document.getElementById("q4-a1");
     var q2_awnser_4 =  document.getElementById("q4-a2");
     var q3_awnser_4 =  document.getElementById("q4-a3");
     var q4_awnser_4 =  document.getElementById("q4-a4");
     if (right_awnser_4.checked == true) {
         score++
         alert("Question No.4 Right Answer")
      }
      else{
          alert("Question No.4 Wrong Answer")
      }




      var right_awnser_5 = document.getElementById("q5-a2");
      var q1_awnser_5 =  document.getElementById("q5-a1");
      var q3_awnser_5 =  document.getElementById("q5-a3");
      var q4_awnser_5 =  document.getElementById("q5-a4");
      if (right_awnser_5.checked == true) {
          score++
          alert("Question No.5 Right Answer")
       }
       else{
           alert("Question No.5 Wrong Answer")
       }



}