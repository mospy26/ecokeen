package com.ecokeen.backend.api;

import java.util.List;
import java.util.UUID;

import com.ecokeen.backend.crudRepositories.SecureUserRepository;
import com.ecokeen.backend.dao.UserDAO;
import com.ecokeen.backend.model.User;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ecokeen.backend.crudRepositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/v1/users")
@RestController
public class UserController {

    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private SecureUserRepository secureUserRepository;

    @Autowired
    private UserDAO userDAO;

    ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping(path = "/register")
    public @ResponseBody String addNewUser(@RequestBody User user) {

        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        if (userDAO.register(user.getName(), user.getEmail(), user.getPassword())) {
            return "Saved";
        }
        return "Error";
    }

    @PostMapping(path = "/authenticate") // Map ONLY POST Requests
    public String authenticateUser(@RequestBody User user) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        try {
            String token;
            token = userDAO.authenticate(user.getEmail(), user.getPassword());
            return token;
        } catch (Exception e) {
            e.printStackTrace();
            return e.getMessage();
        }
   }


    @GetMapping(path="/footprint/average/{id}")
    public @ResponseBody Integer getAverageFootprint (@PathVariable("id") Integer id) {
        // x = SELECT footprint FROM groceries WHERE User.id = id
        // y = SELECT footprint FROM travel WHERE User.id = id
        // return x+y
        return id;
    }

    @GetMapping(path="/footprint/best/{id}/")
    public @ResponseBody Integer getBestFootprint (@PathVariable("id") Integer id) {
        // x = SELECT MIN(footprint) FROM groceries WHERE User.id = id
        // y = SELECT MIN(footprint) FROM travel WHERE User.id = id
        // return min(x,y)
        return id;
    }

    @GetMapping(path="/footprint/worst/{id}/")
    public @ResponseBody Integer getWorseFootprint (@PathVariable("id") Integer id) {
        // x = SELECT max(footprint) FROM groceries WHERE User.id = id
        // y = SELECT max(footprint) FROM travel WHERE User.id = id
        // return max(x,y)
        return id;
    }

    @GetMapping(path="/footprint/all/{id}")
    public @ResponseBody String getLastTenDaysFootprint (@PathVariable("id") Integer id) {
        // SELECT values FROM users BETWEEN CURDATE() - 10 AND CURDATE()
        return "hello";
    }

    // --------- TEST PURPOSES -----------------
    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }

}