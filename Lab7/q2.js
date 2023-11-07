
    let i = 0;
    setTimeout(() => console.log('In the beginning of the loop : ',i), 100); // ?
    console.log('Before: ',i);
    // assume that the time to execute this function is >100ms
    for(let j = 0; j < 100000000; j++) {
      i++;
      
    }
    console.log('After: ',i);

// Before 0
// After:  100000000
// In the beginning of the loop  100000000
    
