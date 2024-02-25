import http from "./http-common";

class RentalService {
    async PostRental(rental) {
        console.log(rental); 

        http.post("api/v1/rentals", rental)
        .then(function (response) {
            console.log(response); 
            return response.data; 
        })
        .catch(function (error) {
            console.log(error.response);
        })
        .finally(function () {
            
        })
    }

    async GetRentals() {
        try {
            const response = http.get("api/v1/rentals"); 
            console.log(response); 

            return response; 
        } catch (error) {
            console.log(error.response); 
        }
    }

    async GetRentalById(id) {
        try {
            const response = http.get("api/v1/rentals/id/"+id); 
            console.log(response); 
    
            return response; 
        } catch (error) {
            console.log(error.response); 
        }
    }
}