

const getLocalstorgedata =()=>{
    const gotdata = localStorage.getItem('Cart')
    if(gotdata){
        return JSON.parse(gotdata)
    }
    return []
}


const saveLocalstorage =(id)=>{
    const saveddata =getLocalstorgedata()

    const exist = saveddata.find(ida=>ida ==id)

    if(!exist){
        saveddata.push(id);
         
        localStorage.setItem("Cart",JSON.stringify(saveddata))
    }
}


export {getLocalstorgedata,saveLocalstorage}