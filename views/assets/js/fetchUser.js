
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
       if(res.ok)
       
       {    var msg=document.getElementById('msg')
        
       msg.innerHTML='<div class="alert alert-success" id="succ_msg" role="alert">Updated Successfully</div>'
       document.getElementById('write_remarks').value=''
       document.getElementById('write_eligible').value=''
       document.getElementById('read_remarks').value=''
       document.getElementById('read_eligible').value=''
       document.getElementById('speak_remarks').value=''
       document.getElementById('speak_eligible').value=''

     

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
tb.innerHTML=tb_content
       
    })


    requestModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-modal') || e.target.classList.contains('close'))
         {
             
          requestModal.classList.remove('open');
        }
      });
}

