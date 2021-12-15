// Coder: Kameron Nelson
// Code Reviewer: Chandler Bursey-Reece
 var findAllSolutions = function(block, dict) {
   /* base cases are repeated */
   if (dict.length == 0){
     return []
   }
   
  /* syntax is inconsistent */
   for(let i = 0; i < dict.length; i++){
       dict[i] = dict[i].toLowerCase();
     }
   for(let i = 0; i < block.length; i++){
     for(let j = 0; j < block[i].length; j++){
       block[i][j] = block[i][j].toLowerCase();
     }
   }
     /* base cases are repeated */
       /* syntax is inconsistent */
   if (block.length == 0 || dict.length == 0) {
      return false;
    }
    var condition = false;

      /* name of function */
    function helper2(block, word) {
        let index = 0;
        for(let i = 0; i < block.length; i++){
          if (block[i].includes(word[0])) {
            for(let j = 0; j < block[i].length; j++){             
               if (block[i][j] == word[0]){
                 
                 if (helper(block,word,index,i,j) == true) {                  
                  return true;
                 }
                index = 0;
                continue;
               }
            }
          }
    
      /* function name could be more specific */
    function helper(block, word, index, x, y) {
        if (index == (word.length - 1)) {
            condition = true
        }
        if (index == 0) {
            condition = false
        }
        letter = word[index+1]
        
        /* Conditionals are repetitive, could be translated into a function  */
        if (y < block.length - 1 && index < word.length-1) {
          if (block[x][y+1] == "qu"){
            letter = word.slice(index+1,  index+3) 
            index = index +1}
          if (block[x][y+1] == "st"){
            letter = word.slice(index+1,  index+3)
            index = index +1
            }
          if (block[x][y+1] == letter) {
             helper(block, word, index+1, x, y+1)
           }
        }
        /* same problem as above w conditionals */
        if (x < block.length - 1 && index < word.length-1) {
          if (block[x+1][y] == "qu"){
            letter = word.slice(index+1,  index+3) 
            index = index +1}
          if (block[x+1][y] == "st"){
            letter = word.slice(index+1,  index+3)
            index = index +1
            }
           if (block[x+1][y] == letter) {
            
             helper(block, word, index+1, x+1, y)
           }
        }
        /* same problem as above w conditionals */
        /* unorganized syntaxing */
             if (x > 0 && index < word.length-1) {
          if (block[x-1][y] == "qu"){
            letter = word.slice(index+1,  index+3) 
            index = index +1}
          if (block[x-1][y] == "st"){
            letter = word.slice(index+1,  index+3)
            index = index +1
            }
           if (block[x-1][y] == letter) {
             
             helper(block, word, index+1, x-1, y)
           }
        }
       /* same problem as above w conditionals */
        if (y > 0 && index < word.length-1) {
          if (block[x][y-1] == "qu"){
            letter = word.slice(index+1,  index+3) 
            index = index +1}
          if (block[x][y-1] == "st"){
            letter = word.slice(index+1,  index+3)
            index = index +1
            }
           if (block[x][y-1] == letter) {
             
             helper(block, word, index+1, x, y-1)
           }
        }
   
     
        if (x > 0 && y > 0 &&  index < word.length-1) {
          if (block[x-1][y-1] == "qu"){
            letter = word.slice(index+1,  index+3) 
            index = index +1}
          if (block[x-1][y-1] == "st"){
            letter = word.slice(index+1,  index+3)
            index = index +1
            }
           if (block[x-1][y-1] == letter) {
             helper(block, word, index+1, x-1, y-1)
           }
        }
        if (x < block.length - 1 && y < block.length - 1 &&  index < word.length-1) {
          if (block[x+1][y+1] == "qu"){
            letter = word.slice(index+1,  index+3) 
            index = index +1}
          if (block[x+1][y+1] == "st"){
            letter = word.slice(index+1,  index+3)
            index = index +1
            }
           if (block[x+1][y+1] == letter) {
             helper(block, word, index+1, x+1, y+1)
           }
        }
        /* oddly positioned spaces, lack of consistency within syntax */
        if (x > 0 && y < block.length - 1 &&  index < word.length-1) {
          
          if (block[x-1][y+1] == "qu"){
            letter = word.slice(index+1,  index+3) 
            index = index +1}
          if (block[x-1][y+1] == "st"){
            letter = word.slice(index+1,  index+3)
            index = index +1
            }
           if (block[x-1][y+1] == letter) {
             
             
             helper(block, word, index+1, x-1, y+1)
           }
        }
        if (x < block.length - 1 && y > 0 &&  index < word.length-1) {
          if (block[x+1][y-1] == "qu"){
            letter = word.slice(index+1,  index+3) 
            index = index +1}
          if (block[x+1][y-1] == "st"){
            letter = word.slice(index+1,  index+3)
            index = index +1
            }
           if (block[x+1][y-1] == letter) {
             helper(block, word, index+1, x+1, y-1)
           }
        }
        
          /* syntax not consistent */
        if (condition === true) {return true}
        else{return false}
    }

          /* This syntax is very far to the right and could be adjusted for consistency */
      /* comment should be including to explain this conditional */
              /* very oddly placed */
          if (word.includes("qu") || word.includes("st")){
              if (block[i].includes(word.slice(0,2))) {
                for(let j = 0; j < block[i].length; j++){             
                  if (block[i][j] == word.slice(0,2)){
                    if (helper(block,word,index+1,i,j) == true) {          
                      return true;
                 }
                index = 0;
                continue;
               }
            }
          }
                    /* unorganized syntax w brackets */
          }
        }
      return false;
    }
   
    var result = [];
    for(let word in dict){
      if(helper2(block, dict[word]) == true){
        if(dict[word].length > 2){
          result.push(dict[word]);
        }
        
      }
    }    
    return result;
}


let dict = ["AB", "ABD", "DCA", "XY"];
let block = [["A", "B"], ["C", "D"]];
  

console.log(findAllSolutions(block, dict));
