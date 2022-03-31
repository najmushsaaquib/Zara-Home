 const getData=async(url)=>
 {
    try{
       let res= await fetch(url)
       let data= res.json()
       return data;
    }
    catch(err)
    {
        console.log(err)
    }
 }


