 //modal open and  closing  
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
       
       {    var msg=document.getElementById('msg')
        
       msg.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
        document.getElementById('group_remarks').value=""
         document.getElementById('group_eligible').value=""
        document.getElementById('individual_remarks').value=""
        document.getElementById('individual_eligible').value=""

     

    }
       else{
        var msg=document.getElementById('msg')
        
        msg.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred</div>'
       }
    })
    

}


const view=(id)=>{
    console.log(id)
    var requestModal = document.querySelector('.view-modal');
    requestModal.classList.add('open');
    var tb=document.getElementById('tb')
    //var tbody=document.createElement('tbody')
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


    requestModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-modal') || e.target.classList.contains('close'))
         {
             
          requestModal.classList.remove('open');
        }
      });
}


const search_bar=()=>{
    $(document).ready(function () {
        $('#myTable').DataTable();
      });
}
var  table=document.getElementById('myTable')
var tbody
window.onload = () =>{

    fetch("/fetch_user_project/2020-2024/a")
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
            if(user.project.is_filled==="Not Filled")
            {
                var is_filled=`<div class="filled-box text-danger">${user.project.is_filled}</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
            else
            {
                var is_filled=`<div class="filled-box text-success">${user.project.is_filled}</div>`
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
   
   fetch(`/fetch_user_project/${year}/${section}`)
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
            if(user.project.is_filled==="Not Filled")
            {
                var is_filled=`<div class="filled-box text-danger">${user.project.is_filled}</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
            else
            {
                var is_filled=`<div class="filled-box text-success">${user.project.is_filled}</div>`
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
    
    fetch(`/fetch_user_project/${year}/${section}`)
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
                    if(user.project.is_filled==="Not Filled")
                    {
                        var is_filled=`<div class="filled-box text-danger">${user.project.is_filled}</div>`
                        var td_status=document.createElement('td')
                        td_status.innerHTML=is_filled
                        tr.appendChild(td_status)
                    }
                    else
                    {
                        var is_filled=`<div class="filled-box text-success">${user.project.is_filled}</div>`
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