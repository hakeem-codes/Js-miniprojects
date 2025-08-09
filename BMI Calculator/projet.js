const form = document.querySelector('form')
// const height = (parseIntdocument.querySelector('#Height').value)
// we will not value here because an empty value will store in varaibe
form.addEventListener('submit', function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#Height').value)
const weight = parseInt(document.querySelector('#Weight').value)
const result = document.querySelector('.result')
if(height ===' ' || height <0 || isNaN(height)){
    result.innerHTML=` enter a valid height ${height}`
    this.reset()
}
else if(weight ===' ' || weight <0 || isNaN(weight)){
    result.innerHTML=` enter a valid weight ${weight}`
    this.reset()
}
else{
const bmi = weight/(height/100**2);
result.innerHTML = `BMI is ${bmi.toFixed(2)}`
this.reset()}
})