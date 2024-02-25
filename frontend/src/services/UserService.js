import http from "./http-common";

class UserService {
    async InitLLM(messages) {
        try {
            const response = await http.post("api/v1/users/recommend", messages)
        
            return response; 
        } catch (error) {
            console.log(error.response); 
        }
    }

    async SignUp(user) {
        console.log(user)

        http.post("api/v1/users", user)
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

    async GetUsers() {
        try {
            const response = await http.get("api/v1/users"); 
            console.log(response); 

            return response; 
        } catch (error) {
            console.log(error.response); 
        }
    }

    async GetUserById(id) {
        try {
            const response = await http.get("api/v1/users/id/"+id); 
            console.log(response); 
    
            return response; 
        } catch (error) {
            console.log(error.response); 
        }
    }

    async GetUserByEmail(email) {
        try {
            const response = await http.get("api/v1/users/email/"+encodeURIComponent(email)); 
            console.log(response); 

            return response;
        } catch (error) {
            console.log(error.response);
        }
    }

    async AcceptRental(data) {
        try {
            const response = await http.put("api/v1/users/accept", data); 
            console.log(response); 

            return response; 
        } catch (error) {
            console.log(error.response); 
        }
    }

    async RejectRental(data) {
        try {
            const response = await http.put("api/v1/users/reject", data); 
            console.log(response); 

            return response; 
        } catch (error) {
            console.log(error.response); 
        }
    }
}

const userService = new UserService()
export default userService