
    let i = 0;
    setTimeout(() => console.log(i), 100); // ?
  
    // assume that the time to execute this function is >100ms
    for(let j = 0; j < 100000000; j++) {
      i++;
      
    }
 

//100000000 , setTimeout is asyc call thus why it is working after all of the synchronous called done 
//so that the result 'i' is 100000000
    
