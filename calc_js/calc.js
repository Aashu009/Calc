let input = document.getElementById('inputTag');
let buttons = document.querySelectorAll('button');
let result="";
let arr = Array.from(buttons);

arr.forEach(button =>
{
    button.addEventListener('click', (e)=> 
    {
        const value= e.target.innerHTML;

        if(value =='=')
        {
            try
            {
                result = eval(result);
                input.value = result;

            }
            catch (error)
            {
                input.value="Error"
                result= "";

            }
           

        }
        else if(value == 'AC')
        {
            result = "";
            input.value = result;

        }
        else if(value == 'DEL')
        {
            result = result.substring(0, result.length-1);
            input.value = result;  
        }
        else{
             result += value;
             input.value = result
        }
    });
});
