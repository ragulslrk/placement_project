
 function edit(id){

    var requestModal = document.querySelector('.modal');
    console.log(id)

    var msg=document.getElementById('msg')
        
        msg.innerHTML=''
    // open request modal
     requestModal.classList.add('open');

     var btn=document.getElementById('footer-btn')
     var btn_content=`<button type="button" class="btn btn-danger" style="height:40px; text-align :center; font-size: small;"
     data-dismiss="modal" onclick="update_data('${id}')">Submit</button>`
    btn.innerHTML=btn_content
    // close request modal
    requestModal.addEventListener('click', (e) => {

      if (e.target.classList.contains('modal') || e.target.classList.contains('close'))
       {
           
        requestModal.classList.remove('open');
      }
    });
 
}


const  update_data=(id)=>{
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
        var msg=document.getElementById('msg')
        var checkboxes_clear = document.querySelectorAll('input[type=checkbox]:checked')
        console.log(res)
        
       if(res.ok)
       
       {    
        
       msg.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
   
    
         for (var i = 0; i < checkboxes_clear.length; i++) {
             checkboxes_clear[i].checked = false;
         }
       }
       else{
       
        
        msg.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred</div>'

        for (var i = 0; i < checkboxes_clear.length; i++) {
            checkboxes_clear[i].checked = false;
        }
       }
    })
    

}

const view=(id)=>{
    console.log(id)
    var requestModal = document.querySelector('.view-modal');
    requestModal.classList.add('open');
    var tb=document.getElementById('tb')
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




//loading  data  onload 
const search_bar=()=>{
    $(document).ready(function () {
        $('#myTable').DataTable();
      });
}
var  table=document.getElementById('myTable')
var tbody
window.onload = () => {

    fetch("/fetch_user_skill/2020-2024/a")
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
            if(user.skill.is_filled==="Not Filled")
            {
                var is_filled=`<div class="filled-box text-danger">${user.skill.is_filled}</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
            else
            {
                var is_filled=`<div class="filled-box text-success">${user.skill.is_filled}</div>`
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
   
   fetch(`/fetch_user_skill/${year}/${section}`)
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
            if(user.skill.is_filled==="Not Filled")
            {
                var is_filled=`<div class="filled-box text-danger">${user.skill.is_filled}</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
            else
            {
                var is_filled=`<div class="filled-box text-success">${user.skill.is_filled}</div>`
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
    
    fetch(`/fetch_user_skill/${year}/${section}`)
     .then((res)=>{
         
         return res.json()
     })
     .then((data)=>{

        
        tbody=document.createElement('tbody')
       
            if(data.length === 0)
            {
                //document.getElementById('no_data').innerText='No data Available'
                
            }
           
                
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
                    if(user.skill.is_filled==="Not Filled")
                    {
                        var is_filled=`<div class="filled-box text-danger">${user.skill.is_filled}</div>`
                        var td_status=document.createElement('td')
                        td_status.innerHTML=is_filled
                        tr.appendChild(td_status)
                    }
                    else
                    {
                        var is_filled=`<div class="filled-box text-success">${user.skill.is_filled}</div>`
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

 //modal open and  closing  
 
