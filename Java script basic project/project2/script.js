const form = document.querySelector('form')

form.addEventListener('submit',function(e){

    e.preventDefault()

    /*By default, when you submit a form:
    The browser refreshes the page.
    It sends the form data to the server.
    preventDefault() stops this default behavior.
    ❌ No page refresh, ❌ no data sent to the server yet.

    Why Use It?
    You use preventDefault() when you want to handle the form data yourself using JavaScript, instead of letting the browser 
    automatically reload the page. */

    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML=`this is an invalid input ${height}`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML=`this is an invalid input ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
        result.innerHTML = `<span>${bmi}</span> Under Weight`;
        } 
        else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `<span>${bmi}</span> Normal Range`;
        } 
        else if (bmi > 24.9) {
        result.innerHTML = `<span>${bmi}</span> Overweight`;
    }
    }

})