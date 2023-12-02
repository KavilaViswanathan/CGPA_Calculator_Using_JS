var cal = 0;
var count = 6;
  function reappear()
  {
    document.getElementById('cgpadisplay').innerText = 'GPA not found';
    cal = 1;
  }
  
  function Newcourse()
  {
      let addNew = document.createElement("div");
      const course_name = `
      <div id="course${count}">
                <label>Course Name:</label> 
                <input type="text" placeholder="Course Name" >&nbsp;&nbsp;

                <label>Credit:</label>
                <select id="credit${count}">
                <option value="select">Select</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                </select>&nbsp;&nbsp;
      
          

                <label>Grade: </label>
                <select id="grade${count}">
                    <option value="select">Select</option>
                    <option value="10">O</option>
                    <option value="9">A+</option>
                    <option value="8">A</option>
                    <option value="7">B+</option>
                    <option value="6">B</option>
                    <option value="5">C</option>
                    <option value="0">RA</option>
                 </select>&nbsp;&nbsp;
            </div>
      `;
      addNew.innerHTML = course_name;
      document.getElementById("courses").appendChild(addNew);
      count++;
  }

  function Delcourse() {
    if(count>6)
    {
      let a = count-1;
      let mainForm = document.querySelector(`#course${a}`);
      mainForm.remove();
      count--;
    }
  }

  function calcCgpa() 
  {
    var credits=[];
    var grades = [];
  for(var i=1;i<count;i++)
  {
    cred = "credit"+i;
    grad = "grade"+i;
    c1 = parseInt(document.getElementById(cred).value);
    g1 = parseInt(document.getElementById(grad).value);
    if(g1 == 0)
    {
      reappear();
      break;
    }
    credits.push(c1);
    grades.push(g1);
  }

  if(cal == 0)
  {
  var totalcrd = 0;
  var score=0;
  
  for(var i=0;i<count-1;i++)
  {
      score = score + (credits[i]*grades[i]);
      totalcrd = totalcrd + credits[i]; 
  }
  var cgpa = score/totalcrd;
  console.log(cgpa)
  document.getElementById('cgpadisplay').innerText = ` ${cgpa.toFixed(2)}`;
}

}