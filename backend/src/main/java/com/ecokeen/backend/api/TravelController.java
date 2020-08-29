package com.ecokeen.backend.api;

import com.ecokeen.backend.crudRepositories.TravelRepository;
import com.ecokeen.backend.dao.TravelDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/travels")
@RestController
public class TravelController {

    @Autowired
    TravelDAO travelDao;


    @PostMapping(path="add/{id}") // Map ONLY POST Requests
    public @ResponseBody Boolean addTravelHistory (@RequestParam String name,
                                        @RequestParam String carBrand,
                                        @PathVariable("id") Integer id,
                                        @RequestParam String email,
                                        @RequestParam String carType,
                                        @RequestParam String petrolType,
                                        @RequestParam float distance) {
        return travelDao.addTravelHistory(id, distance, carBrand, petrolType, carType);
    }

    @GetMapping(path="/history/{id}")
    public @ResponseBody String getTravelHistory(
            @PathVariable("id") Integer id) {
        // SELECT * FROM Travel WHERE User.id = id
        return "/all/id";
    }

    @GetMapping(path="/footprint/{id}")
    public @ResponseBody Integer getTravelFootprint(
            @PathVariable("id") Integer id) {
        // SELECT footprint FROM travel WHERE user.id = id
        return -1;
    }

}