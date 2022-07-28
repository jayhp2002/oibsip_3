const convertFahrenheit=()=>
{
    var celsius=parseFloat(document.querySelector("#celsius").value);

    var fresult =(1.8 * celsius)+ 32;
    var a = fresult.toFixed(2);

    document.querySelector("#celsius").value = celsius;
    document.querySelector("#fahrenheit").value = a;

}
const convertCelsius=()=>
{
    var fahreheit=parseFloat(document.querySelector("#fahrenheit").value);

    var cresult = (fahreheit-32 )/1.8;
    var b = cresult.toFixed(2);

    document.querySelector("#celsius").value = b;
    document.querySelector("#fahrenheit").value =fahreheit;

}
const reset=()=>{
    document.querySelector("#celsius").value=" ";
    document.querySelector("#fahrenheit").value=" ";
}