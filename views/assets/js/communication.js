

//loading  data  onload 
const search_bar=()=>{
    $(document).ready(function () {
        $('#myTable').DataTable();
      });
}
var  table=document.getElementById('myTable')
var tbody
window.onload = () => {

    fetch("/fetch_user_communication/2020-2024/a")
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
            if(user.communication.is_filled==="Not Filled")
            {
                var is_filled=`<div class="filled-box text-danger">${user.communication.is_filled}</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
            else
            {
                var is_filled=`<div class="filled-box text-success">${user.communication.is_filled}</div>`
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
   
   fetch(`/fetch_user_communication/${year}/${section}`)
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
            if(user.communication.is_filled==="Not Filled")
            {
                var is_filled=`<div class="filled-box text-danger">${user.communication.is_filled}</div>`
                var td_status=document.createElement('td')
                td_status.innerHTML=is_filled
                tr.appendChild(td_status)
            }
            else
            {
                var is_filled=`<div class="filled-box text-success">${user.communication.is_filled}</div>`
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
    
    fetch(`/fetch_user_communication/${year}/${section}`)
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
                    if(user.communication.is_filled==="Not Filled")
                    {
                        var is_filled=`<div class="filled-box text-danger">${user.communication.is_filled}</div>`
                        var td_status=document.createElement('td')
                        td_status.innerHTML=is_filled
                        tr.appendChild(td_status)
                    }
                    else
                    {
                        var is_filled=`<div class="filled-box text-success">${user.communication.is_filled}</div>`
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
 
