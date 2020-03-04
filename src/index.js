module.exports = function check(str, bracketsConfig) {

    str = str.split('');
		
    let open = ['{', '(', '[', '|', '1', '3', '5', '7', '8'],
        close = ['}', ')', ']', '|', '2', '4', '6', '7', '8'],
        stack = [];

    if (str.length%2 != 0 || !open.includes(str[0])) return false;

    else {

        for(let i = 0; i<str.length; i++){
			
            if(open.includes(str[i]) && !close.includes(str[i])){ //открывающие пушатся    
                stack.push(str[i]);   
            }
            
            else if( !open.includes(str[i]) && close.includes(str[i]) ){ //закрывающие проверка
            
                if(close.indexOf(str[i]) == open.indexOf(stack[stack.length-1])){
                    stack.pop();
                }
                else return false;
            }
            
            else { //открывающие и закрывающие одновременно
                
                if(stack.indexOf(str[i]) == -1){
                    stack.push(str[i]); // если символа еще нет в стаке - он открывающий, пушим
                }
                else{
                    if(close.indexOf(str[i]) == open.indexOf(stack[stack.length-1])){
                        stack.pop();
                    }
                    else return false; 
                }
            }
        }
        return (stack.length == 0) ? true : false;
    }
}
