const accordion_item = document.querySelectorAll('.accordion_item')

accordion_item.forEach((item)=>{ 
    const accordion_header_item = item.querySelector('.accordion_header')
    
    accordion_header_item.addEventListener('click',()=>{
        const accordion_content_item = item.querySelector('.accordion_content')
        
        const item_ativo = document.querySelector('.ativo')

        VerificarAtivo(item,accordion_content_item,item_ativo)
    })
    
function VerificarAtivo(item, content, content_ativo){
    const icone = item.querySelector('.icon')
    const icone_ativo = document.querySelectorAll('.icon')
    icone_ativo.forEach((i)=>{
        i.src = './assets/images/icon-plus.svg'
        i.alt = 'icone de ver mais'
    })
    if (content_ativo) {
        content_ativo.style.height = 0;
        content_ativo.classList.remove("ativo");
      }
    
      if (content !== content_ativo) {
        icone.src = './assets/images/icon-minus.svg'
        content.classList.add("ativo");
        content.style.height = content.scrollHeight + 10 + "px";
      }

}   
    
    
    
    // console.log(dt);
    // dt.addEventListener('click', ()=>{
        
    //     const dd = dt.nextElementSibling.nextElementSibling
    //     if(dd && dd.tagName.toLowerCase() === 'dd'){
    //         // <img src="./assets/images/icon-plus.svg" alt="icone de ver mais">
    //         dd.classList.toggle('ativo')
    //     }
    //     const img = dt.querySelector('span img')
    //     if(img){
    //         if(dd.classList.contains('ativo')){
    //             img.src = './assets/images/icon-minus.svg'
    //             img.alt = 'icone de ver menos'
    //         }else {
    //             img.src = './assets/images/icon-plus.svg'
    //             img.alt = 'icone de ver mais'
    //         }
    //     }
    //     // img.innerHTML = '<img src="./assets/images/icon-minus.svg" alt="icone de ver menos">'
    // })
})

