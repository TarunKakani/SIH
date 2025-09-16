#include "crow.h"
#include <iostream>

// This is a simple, explicit middleware for handling CORS.
// It will attach the required headers to every response.
struct CorsMiddleware {
    struct context {};

    void before_handle(crow::request& /*req*/, crow::response& res, context& /*ctx*/) {
        // This header allows any origin to access your API.
        res.add_header("Access-Control-Allow-Origin", "*");
        
        // This specifies which headers are allowed in the actual request.
        res.add_header("Access-Control-Allow-Headers", "Content-Type");
        
        // This specifies which methods are allowed.
        res.add_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    }

    void after_handle(crow::request& /*req*/, crow::response& /*res*/, context& /*ctx*/) {
        // Nothing needed here.
    }
};

int main() {
    // By putting CorsMiddleware here, every route in the app will use it.
    crow::App<CorsMiddleware> app;

    // This route is ESSENTIAL. The browser sends an OPTIONS request
    // to /api/add before it sends the real POST request. We must
    // respond with a 200 OK to this pre-flight check.
    CROW_ROUTE(app, "/api/add").methods("OPTIONS"_method)
    ([](const crow::request& /*req*/, crow::response& res){
        // The CorsMiddleware will have already added the headers.
        // We just need to end the response.
        res.end();
    });

    // Your actual API routes
    CROW_ROUTE(app, "/api/info")
    ([](){
        crow::json::wvalue response;
        response["status"] = "success";
        response["data"] = "Welcome to the Mock C++ API!";
        return response;
    });

    CROW_ROUTE(app, "/api/user/<int>")
    ([](int userID){
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
        auto request_body = crow::json::load(req.body);
        if (!request_body || !request_body.has("a") || !request_body.has("b")) {
            return crow::response(400, "Invalid JSON format");
        }
        int a = request_body["a"].i();
        int b = request_body["b"].i();
        int sum = a + b;

        crow::json::wvalue response_body;
        response_body["status"] = "success";
        response_body["result"] = sum;
        return crow::response(200, response_body);
    });

    // It's slightly more robust to bind to a specific IP for local dev.
    app.bindaddr("127.0.0.1").port(4444).multithreaded().run();

    return 0;
}