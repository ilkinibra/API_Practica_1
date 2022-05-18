$(document).ready(function(){


    $("#btn").click(function(){

       axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
          })
          .then(function(response){
            const users=response.data;
            users.forEach(element => {
               TBD.innerHTML+=
                    `
                    <th>${element.userId}</th>
                    <th>${element.id}</th>
                    <th>${element.title}</th>`
            
            });
          })
       
    })
})