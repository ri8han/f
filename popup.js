






document.addEventListener('DOMContentLoaded',()=>{
    const imagecontainer= document.getElementById('images');
    



    
  
  
  
  
 

 

      

    chrome.storage.local.get({selectedimages:[]},(result)=>{
        const selectedimages=result.selectedimages || [];
            selectedimages.forEach((src) => {
               
                console.log(src);
                if(src!=null){


                let img=document.createElement('img');
                img.src=src;
                img.alt="heyy";
                img.title="rsv4-bike";
                imagecontainer.appendChild(img);
            }
               
                    
                
            });

    })
})

