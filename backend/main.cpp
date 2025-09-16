#include "crow.h"
#include <iostream>

int main() {
    crow::SimpleApp app;

    // the api route
    CROW_ROUTE(app, "/api/info")([](){
        crow::json::wvalue response;
        response["status"] = "success";
        response["data"] = "Welcome to the Mock C++ API!";
        return response;
    });

    // GET, <int> will be for the integer id from the URL 
    CROW_ROUTE(app, "/api/user/<int>")([](int userID){
        // send a 404 error
        if (userID > 100){
            return crow::response(404, "User not found");
        }

        crow::json::wvalue user;
        user["id"] = userID;
        user["name"] = "John Doe";
        user["email"] = "John.doe@example.com";
        return crow::response(user);
    });

    CROW_ROUTE(app, "/api/add").methods("POST"_method)
    ([](const crow::request& req){
        // Parse the JSON body from the request
        crow::json::rvalue request_body = crow::json::load(req.body);
        
        // Check if the JSON is valid and contains the required keys
        if (!request_body || !request_body.has("a") || !request_body.has("b")) {
            return crow::response(400, "Invalid JSON format"); // 400 Bad Request
        }

        // Extract integer values from the JSON
        int a = request_body["a"].i();
        int b = request_body["b"].i();
        int sum = a + b;

        // Create a JSON response
        crow::json::wvalue response_body;
        response_body["status"] = "success";
        response_body["result"] = sum;

        return crow::response(200, response_body); // 200 OK
    });


    // Run the server
    app.port(4444).multithreaded().run();

    return 0;
}