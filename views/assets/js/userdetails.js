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
   var username=document.getElementById('username').value
   var password= document.getElementById('password').value
   var role=document.getElementById('role').value
console.log(username,password,role)
    
    fetch("/update_user",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    // Adding body or contents to send
    body: JSON.stringify({
        id:id,
        username: username,
        password: password,
        role:role
    }),
    mode: 'cors'
    // Adding headers to the request
  
    })
    .then((res)=>{
        console.log(res)
       if(res.ok)
       
       {    var msg=document.getElementById('msg')
        
       msg.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
       document.getElementById('username').value=""
       document.getElementById('password').value=""
       document.getElementById('role').value=""
    
     

    }
       else{
        var msg=document.getElementById('msg')
        
        msg.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred</div>'
       }
    })
    

}
const add_user_modal=()=>{
    var requestModal = document.querySelector('.add-modal');
    requestModal.classList.add('open');


    requestModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-modal') || e.target.classList.contains('close'))
     {
         
      requestModal.classList.remove('open');
    }
  });
}
const add_user_post=()=>{
    var username=document.getElementById('user').value
    var password= document.getElementById('pass').value
    var role=document.getElementById('role_add').value
 console.log(username,password,role)
    fetch("/signup_user",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    // Adding body or contents to send
    body: JSON.stringify({
        username: username,
        password: password,
        role:role
    }),
    mode: 'cors'
    // Adding headers to the request
  
    })
    .then((res)=>{
        console.log(res)
        var msg=document.getElementById('msg1')
       if(res.ok)
       
       {    
        
       msg.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
       document.getElementById('username').value=""
       document.getElementById('password').value=""
       document.getElementById('role').value=""
    
     

    }
       else{
       
        
        msg.innerHTML='<div class="alert alert-danger" id="succ_msg" role="alert">Error Occurred Or Username Already Exist</div>'
       }
    })
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

    fetch("/user_credentials")
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
            

            var td_name=document.createElement('td')
            td_name.innerText=user.username
            tr.appendChild(td_name)

            var td_pass=document.createElement('td')
            td_pass.innerText=user.password
            tr.appendChild(td_pass)

            var td_role=document.createElement('td')
            td_role.innerText=user.role
            tr.appendChild(td_role)
            
            var td_dept=document.createElement('td')
            
                td_dept.innerText=user.dept
                tr.appendChild(td_dept)
            
            
       

            var edit= `<img
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

