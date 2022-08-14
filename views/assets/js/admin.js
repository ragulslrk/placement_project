

 //modal open and  closing  
 function edit(id){

    var requestModal = document.querySelector('.modal');
    console.log(id)

    var msg1=document.getElementById('msg1')
    var msg2=document.getElementById('msg2')
    var msg3=document.getElementById('msg3')
    var msg4=document.getElementById('msg4')
    var msg5=document.getElementById('msg5')
    var msg6=document.getElementById('msg6')
    msg1.innerHTML=''
    msg2.innerHTML=''
    msg3.innerHTML=''
    msg4.innerHTML=''
    msg5.innerHTML=''
    msg6.innerHTML=''
    
    // open request modal
     requestModal.classList.add('open');

     var btn_academic=document.getElementById('footer-btn-academic')
     var btn_resume=document.getElementById('footer-btn-resume')
     var btn_communication=document.getElementById('footer-btn-communication')
     var btn_project=document.getElementById('footer-btn-project')
     var btn_skill=document.getElementById('footer-btn-skill')
     var btn_framework=document.getElementById('footer-btn-framework')
     

    function btn_genration(collection_name){
        var btn_content1=`<button type="button" class="btn btn-danger" style="height:40px; text-align :center; font-size: small;"
        data-dismiss="modal" onclick="update_data_${collection_name}('${id}')">Submit</button>`
       return  btn_content1
    }

     
     btn_academic.innerHTML=btn_genration('academic')
     btn_resume.innerHTML=btn_genration('resume')
     btn_communication.innerHTML=btn_genration('communication')
     btn_project.innerHTML=btn_genration('project')
     btn_skill.innerHTML=btn_genration('skill')
     btn_framework.innerHTML=btn_genration('framework')

     
    // close request modal
    requestModal.addEventListener('click', (e) => {

      if (e.target.classList.contains('modal') || e.target.classList.contains('close'))
       {
           
        requestModal.classList.remove('open');
      }
    });
 
}

const  update_data_academic=(id)=>{
    console.log('hi there')
    var th10_remarks=document.getElementById('10th_remarks').value
    var th10_eligible=document.getElementById('10th_eligible').value
    var th12_remarks=document.getElementById('12th_remarks').value
    var th12_eligible=document.getElementById('12th_eligible').value
    var  btech_remarks=document.getElementById('btech_remarks').value
    var btech_eligible=document.getElementById('btech_eligible').value
    console.log(btech_remarks)
    fetch("/update_data_academics",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    // Adding body or contents to send
    body: JSON.stringify({
        id:id,
        th10_remarks:th10_remarks,
        th10_eligible:th10_eligible,
        th12_remarks:th12_remarks,
        th12_eligible:th12_eligible,
        btech_remarks:btech_remarks,
        btech_eligible:btech_eligible

    }),
    mode: 'cors'
    // Adding headers to the request
  
    })
    .then((res)=>{
        console.log(res)
        var msg1=document.getElementById('msg1')
       if(res.ok)
       
       {    
        
       msg1.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
    document.getElementById('10th_remarks').value=""
    document.getElementById('10th_eligible').value=""
    document.getElementById('12th_remarks').value=""
    document.getElementById('12th_eligible').value=""
    document.getElementById('btech_remarks').value=""
    document.getElementById('btech_eligible').value=""

     

    }
       else{
        
        
        msg1.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred</div>'
       }
    })
    

}

const  update_data_resume=(id)=>{
    console.log('hi there')
   var appearance_remarks=document.getElementById('appearance_remarks').value
   var appearance_eligible=document.getElementById('appearance_eligible').value
   var resume_content_remarks=document.getElementById('resume_content_remarks').value
   var resume_content_eligible=document.getElementById('resume_content_eligible').value
    console.log(resume_content_eligible)
    fetch("/update_data_cv",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    // Adding body or contents to send
    body: JSON.stringify({
        id:id,
        appearance_remarks:appearance_remarks,
        appearance_eligible:appearance_eligible,
        resume_content_remarks:resume_content_remarks,
        resume_content_eligible:resume_content_eligible
    }),
    mode: 'cors'
    // Adding headers to the request
  
    })
    .then((res)=>{
        console.log(res)
       if(res.ok)
       
       {    var msg4=document.getElementById('msg4')
        
       msg4.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
        document.getElementById('appearance_remarks').value=""
         document.getElementById('appearance_eligible').value=""
        document.getElementById('resume_content_remarks').value=""
        document.getElementById('resume_content_eligible').value=""

     

    }
       else{
        var msg4=document.getElementById('msg4')
        
        msg4.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred</div>'
       }
    })
    

}

const  update_data_project=(id)=>{
    console.log('hi there')
   var group_remarks=document.getElementById('group_remarks').value
   var group_eligible=document.getElementById('group_eligible').value
   var individual_remarks=document.getElementById('individual_remarks').value
   var individual_eligible=document.getElementById('individual_eligible').value
    console.log(individual_eligible)
    fetch("/update_data_project",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    // Adding body or contents to send
    body: JSON.stringify({
        id:id,
        group_remarks:group_remarks,
        group_eligible:group_eligible,
        individual_remarks:individual_remarks,
        individual_eligible:individual_eligible
    }),
    mode: 'cors'
    // Adding headers to the request
  
    })
    .then((res)=>{
        console.log(res)
       if(res.ok)
       
       {    var msg3=document.getElementById('msg3')
        
       msg3.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
        document.getElementById('group_remarks').value=""
         document.getElementById('group_eligible').value=""
        document.getElementById('individual_remarks').value=""
        document.getElementById('individual_eligible').value=""

     

    }
       else{
        var msg3=document.getElementById('msg3')
        
        msg3.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred</div>'
       }
    })
    

}

const  update_data_communication=(id)=>{
    console.log('hi there')
    var write_remarks=document.getElementById('write_remarks').value
    var write_eligible=document.getElementById('write_eligible').value
    var read_remarks=document.getElementById('read_remarks').value
    var read_eligible=document.getElementById('read_eligible').value
    var  speak_remarks=document.getElementById('speak_remarks').value
    var speak_eligible=document.getElementById('speak_eligible').value
    console.log(write_remarks)
    fetch("/update_data_communication",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    // Adding body or contents to send
    body: JSON.stringify({
        id:id,
        speak_remarks:speak_remarks,
        speak_eligible:speak_eligible,
        read_remarks:read_remarks,
        read_eligible:read_eligible,
        write_remarks:write_remarks,
        write_eligible:write_eligible

    }),
    mode: 'cors'
    // Adding headers to the request
  
    })
    .then((res)=>{
        console.log(res)
        var msg2=document.getElementById('msg2')
       if(res.ok)
       
       {   
        
       msg2.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
       document.getElementById('write_remarks').value=''
       document.getElementById('write_eligible').value=''
       document.getElementById('read_remarks').value=''
       document.getElementById('read_eligible').value=''
       document.getElementById('speak_remarks').value=''
       document.getElementById('speak_eligible').value=''

     

    }
       else{
      
        
        msg2.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred</div>'
       }
    })
    

}

const  update_data_skill=(id)=>{
    console.log('hi there')
    var skills = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        skills.push(checkboxes[i].value)
    }
   
    other_skills=document.getElementById('other_skill').value
    if(other_skills != "")
    {
       skills.push(other_skills)
    }

    console.log(skills)
   

    fetch("/update_data_skill",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    // Adding body or contents to send
    body: JSON.stringify({
        id:id,
       skill_list:skills

    }),
    mode: 'cors'
    // Adding headers to the request
  
    })
    .then((res)=>{
        var msg5=document.getElementById('msg5')
        var checkboxes_clear = document.querySelectorAll('input[type=checkbox]:checked')
        console.log(res)
        
       if(res.ok)
       
       {    
        
       msg5.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
   
    
         for (var i = 0; i < checkboxes_clear.length; i++) {
             checkboxes_clear[i].checked = false;
         }
       }
       else{
       
        
        msg5.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred</div>'

        for (var i = 0; i < checkboxes_clear.length; i++) {
            checkboxes_clear[i].checked = false;
        }
       }
    })
    

}

const  update_data_framework=(id)=>{
    console.log('hi there')
    var framework= []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < checkboxes.length; i++) {
        framework.push(checkboxes[i].value)
    }
   
    other_framework=document.getElementById('other_framework').value
    if(other_framework != "")
    {
        framework.push(other_framework)
    }

    console.log(framework)
   

        fetch("/update_data_framework",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        // Adding body or contents to send
        body: JSON.stringify({
            id:id,
           framework_list:framework

        }),
        mode: 'cors'
        // Adding headers to the request
    
        })
        .then((res)=>{
            var msg6=document.getElementById('msg6')
            var checkboxes_clear = document.querySelectorAll('input[type=checkbox]:checked')
            console.log(res)
            
           if(res.ok)
        
           {    
            
           msg6.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
    
        
             for (var i = 0; i < checkboxes_clear.length; i++) {
                 checkboxes_clear[i].checked = false;
             }
             document.getElementById('other_framework').value=""
           }
           else{
        
            
            msg6.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred</div>'

            for (var i = 0; i < checkboxes_clear.length; i++) {
                checkboxes_clear[i].checked = false;
            }
            document.getElementById('other_framework').value=""
           }
        })
        

}

const  view=(id)=>{
    console.log(id)
        var requestModal = document.querySelector('.view-modal');
        requestModal.classList.add('open');

    const view_acdemics=(id)=>{
       
        var tb=document.getElementById('tb1')
        //var tbody=document.createElement('tbody')
        fetch(`/view_data_academics/${id}`)
        .then((res)=>{
            
            return res.json()
        })
        .then((data)=>{
            console.log(data.academic)
    var tb_content=`<tr>
    <th scope="row">1</th>
    <td>10th</td>
    <td>${data.academic.ten_std_remarks}</td>
    <td>${data.academic.ten_std_eligible}</td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>12th</td>
    <td>${data.academic.twelve_std_remarks}</td>
    <td>${data.academic.twelve_std_eligible}</td>
    </tr>
    <tr>
    <th scope="row">3</th>
    <td>Btech</td>
    <td>${data.academic.btech_remarks}</td>
    <td>${data.academic.btech_eligible}</td>
    </tr>`
    tb.innerHTML=tb_content
           
        })
    
    
        requestModal.addEventListener('click', (e) => {
                if (e.target.classList.contains('view-modal') || e.target.classList.contains('close'))
             {
                 
              requestModal.classList.remove('open');
            }
          });
    }
    const view_communication=(id)=>{
        
        var tb=document.getElementById('tb2')
        //var tbody=document.createElement('tbody')
        fetch(`/view_data_communication/${id}`)
        .then((res)=>{
            
            return res.json()
        })
        .then((data)=>{
            console.log(data.communication)
    var tb_content=`<tr>
    <th scope="row">1</th>
    <td>Speak</td>
    <td>${data.communication.speak_remarks}</td>
    <td>${data.communication.speak_eligible}</td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>Read</td>
    <td>${data.communication.read_remarks}</td>
    <td>${data.communication.read_eligible}</td>
    </tr>
    <tr>
    <th scope="row">3</th>
    <td>Write</td>
    <td>${data.communication.write_remarks}</td>
    <td>${data.communication.write_eligible}</td>
    </tr>`
    tb2.innerHTML=tb_content
           
        })
    
    
        requestModal.addEventListener('click', (e) => {
                if (e.target.classList.contains('view-modal') || e.target.classList.contains('close'))
             {
                 
              requestModal.classList.remove('open');
            }
          });
    }
    const view_project=(id)=>{
        
        var tb=document.getElementById('tb3')
    
        fetch(`/view_data_project/${id}`)
        .then((res)=>{
            
            return res.json()
        })
        .then((data)=>{
            console.log(data.resume)
    var tb_content=`<tr>
    <th scope="row">1</th>
    <td>Group</td>
    <td>${data.project.group_remarks}</td>
    <td>${data.project.group_eligible}</td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>Individual</td>
    <td>${data.project.individual_remarks}</td>
    <td>${data.project.individual_eligible}</td>
    </tr>`
    tb.innerHTML=tb_content
           
        })
    
    
        
    }
    const view_cv=(id)=>{
       
      
        var tb=document.getElementById('tb4')
        //var tbody=document.createElement('tbody')
        fetch(`/view_data_cv/${id}`)
        .then((res)=>{
            
            return res.json()
        })
        .then((data)=>{
            console.log(data.resume)
    var tb_content=`<tr>
    <th scope="row">1</th>
    <td>Appearance</td>
    <td>${data.resume.appearance_remarks}</td>
    <td>${data.resume.appearance_eligible}</td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>Resume Content</td>
    <td>${data.resume.resume_content_remarks}</td>
    <td>${data.resume.resume_content_eligible}</td>
    </tr>`
    tb.innerHTML=tb_content
           
        })
    
    
        
    }
    const view_skill=(id)=>{
        console.log(id)
        var requestModal = document.querySelector('.view-modal');
        requestModal.classList.add('open');
        var tb=document.getElementById('tb5')
        //var tbody=document.createElement('tbody')
        fetch(`/view_data_skill/${id}`)
        .then((res)=>{
            
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            var tb_content
            if(data.skill.skill_list.length == 0)   
            {
                tb_content=`<tr>
                <td scope="row">1</td>
                <td>Not Filled</td>
                
                </tr>`
                tb.innerHTML=tb_content
            }
            else{ var i=1
                var tb_array=[]
                var tr
                data.skill.skill_list.forEach(skill=>{
                    tr=`
                    <tr>
                    <td scope="row">${i}</td>
                    <td>${skill}</td>
                    </tr>
                    `
                    tb_array.push(tr)
                    i++
                   
    
                })
                tb_content=tb_array.join('')
                tb.innerHTML= tb_content
            }
           
    
           
    
        })
    
    
        requestModal.addEventListener('click', (e) => {
                if (e.target.classList.contains('view-modal') || e.target.classList.contains('close'))
             {
                 
              requestModal.classList.remove('open');
            }
          });
    }
    const view_framework=(id)=>{
        console.log(id)
        var requestModal = document.querySelector('.view-modal');
        requestModal.classList.add('open');
        var tb=document.getElementById('tb6')
        //var tbody=document.createElement('tbody')
        fetch(`/view_data_framework/${id}`)
        .then((res)=>{
            
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            var tb_content
            if(data.framework.framework_list.length == 0)   
            {
                tb_content=`<tr>
                <td scope="row">1</td>
                <td>Not Filled</td>
                
                </tr>`
                tb.innerHTML=tb_content
            }
            else{ var i=1
                var tb_array=[]
                var tr
                data.framework.framework_list.forEach(framework=>{
                    tr=`
                    <tr>
                    <td scope="row">${i}</td>
                    <td>${framework}</td>
                    </tr>
                    `
                    tb_array.push(tr)
                    i++
                   
    
                })
                tb_content=tb_array.join('')
                tb.innerHTML= tb_content
            }
           
    
           
    
        })
    
    
        requestModal.addEventListener('click', (e) => {
                if (e.target.classList.contains('view-modal') || e.target.classList.contains('close'))
             {
                 
              requestModal.classList.remove('open');
            }
          });
    }



    view_acdemics(id)
    view_communication(id)
    view_project(id)
    view_cv(id)
    view_skill(id)
    view_framework(id)
    requestModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-modal') || e.target.classList.contains('close'))
     {
         
      requestModal.classList.remove('open');
    }
  });

}
//loading  data  onload 
const search_bar=()=>{
    $(document).ready(function () {
        $('#myTable').DataTable();
      });
}
var  table=document.getElementById('myTable')
var tbody
window.onload = () =>{

    fetch("/all_data/2020-2024/a")
    .then((res)=>{
        
        return res.json()
    })
    .then((data)=>{
        console.log(data)
     
        tbody=document.createElement('tbody')
        var i=1
        data.forEach(user => {
            console.log(user)
            var tr=document.createElement('tr')
            var td_sno=document.createElement('td')
            td_sno.innerText=i++
            tr.appendChild(td_sno)

            var td_name=document.createElement('td')
            td_name.innerText=user.name
            tr.appendChild(td_name)

            var td_regno=document.createElement('td')
            td_regno.innerText=user.regno
            tr.appendChild(td_regno)
            
            if(user.resume.is_filled ==="Filled" && user.academic.is_filled ==="Filled" && user.communication.is_filled==="Filled" && user.project.is_filled==="Filled" && user.skill.is_filled==="Filled" &&user.framework.is_filled ==="Filled")
           
            {
                var is_filled=`<div class="filled-box text-success">Filled</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
            else
            {
                var is_filled=`<div class="filled-box text-danger">Not Filled</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
       

            var edit= `<img class="eyeicon" src="./assets/icons/view.png" style="height: 25px;"><a class="new-request" onclick="view('${user._id}')">View</a><img
            class="penicon" src="./assets/icons/pen (1).png" style="height: 20px;"  alt="Italian Trulli">
            <a  class="new-request" onclick="edit('${user._id}')" >Edit</a> `

            
        var  td_edit=document.createElement('td')
        td_edit.innerHTML=edit
        tr.appendChild(td_edit)

        tbody.appendChild(tr)
            
        });
        table.appendChild(tbody)
        search_bar()
      
    })
     
};

//fetching  data the  on  changing  the  year dropdown 
var year_select=document.querySelector('.year')
year_select.addEventListener('change',(event)=>{
    console.log('this is year')
   var year=document.getElementById('year').value
   var section=  document.getElementById('section').value
   table.removeChild(tbody)

//fetching  the  data  of user  
   
   fetch(`/all_data/${year}/${section}`)
    .then((res)=>{
        
        return res.json()
    })
    .then((data)=>{
        console.log(data)
     
        tbody=document.createElement('tbody')
        var i=1
        data.forEach(user => {
            console.log(user.name)
            var tr=document.createElement('tr')
            var td_sno=document.createElement('td')
            td_sno.innerText=i++
            tr.appendChild(td_sno)

            var td_name=document.createElement('td')
            td_name.innerText=user.name
            tr.appendChild(td_name)

            var td_regno=document.createElement('td')
            td_regno.innerText=user.regno
            tr.appendChild(td_regno)

            if(user.resume.is_filled ==="Filled" && user.academic.is_filled ==="Filled" && user.communication.is_filled==="Filled" && user.project.is_filled==="Filled" && user.skill.is_filled==="Filled" &&user.framework.is_filled ==="Filled")
           
            {
                var is_filled=`<div class="filled-box text-success">Filled</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
            else
            {
                var is_filled=`<div class="filled-box text-danger">Not Filled</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
       

            var edit=`<img class="eyeicon" src="./assets/icons/view.png" style="height: 25px;"><a class="new-request" onclick="view('${user._id}')">View</a><img
            class="penicon" src="./assets/icons/pen (1).png" style="height: 20px;"  alt="Italian Trulli">
            <a   class="new-request" onclick="edit('${user._id}')">Edit</a> `
            
        var  td_edit=document.createElement('td')
        td_edit.innerHTML=edit
        tr.appendChild(td_edit)

        tbody.appendChild(tr)
            
        });
        table.appendChild(tbody)
        search_bar()
      
    })

})

//fetching the  data on changing the  section  drop down  
var section_select=document.querySelector('.section')
section_select.addEventListener('change',(event)=>{
    console.log('this is section')
    var year=document.getElementById('year').value
    var section=  document.getElementById('section').value
    table.removeChild(tbody)
    //fetching  the  data  of user  
    
    fetch(`/all_data/${year}/${section}`)
     .then((res)=>{
         
         return res.json()
     })
     .then((data)=>{

        
       
       
            if(data.length === 0)
            {
                //document.getElementById('no_data').innerText='No data Available'
            }
           
                tbody=document.createElement('tbody')
                var i=1
                data.forEach(user => {
                    console.log(user.name)
                    var tr=document.createElement('tr')
                    var td_sno=document.createElement('td')
                    td_sno.innerText=i++
                    tr.appendChild(td_sno)
        
                    var td_name=document.createElement('td')
                    td_name.innerText=user.name
                    tr.appendChild(td_name)
        
                    var td_regno=document.createElement('td')
                    td_regno.innerText=user.regno
                    tr.appendChild(td_regno)

            if(user.resume.is_filled ==="Filled" && user.academic.is_filled ==="Filled" && user.communication.is_filled==="Filled" && user.project.is_filled==="Filled" && user.skill.is_filled==="Filled" &&user.framework.is_filled ==="Filled"){
                var is_filled=`<div class="filled-box text-success">Filled</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
            else
            {
                var is_filled=`<div class="filled-box text-danger">Not Filled</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
               
        
                    var edit= `<img class="eyeicon" src="./assets/icons/view.png" style="height: 25px;"><a class="new-request" onclick="view('${user._id}')">View</a>
                    <img
                    class="penicon" src="./assets/icons/pen (1).png" style="height: 20px;" 
                  alt="Italian Trulli">
                    <a   class="new-request" onclick="edit('${user._id}')" >Edit</a> `
        
                    
                var  td_edit=document.createElement('td')
                td_edit.innerHTML=edit
                tr.appendChild(td_edit)
        
                tbody.appendChild(tr)
                    
                });
                table.appendChild(tbody)
                search_bar()
            
           
          
        
         
     })
 
 })