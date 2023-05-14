let baseFee = .44
let cities = ["Andheri", "Malad", "Vasai"]
let uberRates = [5, 10, 15]
let customerName = "David" 
let customerCity = "Malad" 


console.log("Hello", customerName+ ", welcome to the Uber Rate Program")

function getRate(customerCity) {
  

  function uberRate(customerCity, index) {
    
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
   
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)