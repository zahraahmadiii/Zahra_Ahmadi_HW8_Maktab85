
function counterMaker(){
    let count = 0;

  function counterNum(num) {
     
      if(isNaN(num)){

      console.log(count);
     
      }    
      else{

        count+=num

      console.log(count);
      }

     
    };

    return counterNum;
}

let counter = counterMaker()
counter(); 
counter(); 
counter(1); 
counter(); 
counter(3); 
counter(7); 
counter(-5);