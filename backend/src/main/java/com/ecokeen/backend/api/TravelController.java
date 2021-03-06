package com.ecokeen.backend.api;

import com.ecokeen.backend.crudRepositories.TravelRepository;
import com.ecokeen.backend.dao.TravelDAO;
import com.ecokeen.backend.dao.UserDAO;
import com.ecokeen.backend.model.Travel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/travels")
@RestController
public class TravelController {

    @Autowired
    TravelDAO travelDao;

    @Autowired
    TravelRepository travelRepository;

    @Autowired
    UserDAO userDAO;


    @PostMapping(path="add/{id}") // Map ONLY POST Requests
    public @ResponseBody Boolean addTravelHistory (@RequestParam String name,
                                        @RequestParam String carBrand,
                                        @RequestParam("id") Integer id,
                                        @RequestParam String email,
                                        @RequestParam String carType,
                                        @RequestParam String petrolType,
                                        @RequestParam float distance, @RequestHeader String token) {
        if (!verifyUser(token)) return null;
        return travelDao.addTravelHistory(id, distance, carBrand, petrolType, carType);
    }

    @GetMapping(path="/history/{id}")
    public @ResponseBody Iterable<Travel> getTravelHistory(
            @PathVariable("id") Integer id, @RequestHeader String token) {
        // SELECT * FROM Travel WHERE User.id = id
        if (!verifyUser(token)) return null;
        return travelRepository.findLatest10(id);
    }

    @GetMapping(path="/average/{id}")
    public @ResponseBody Float getAverageFootprint(
            @PathVariable("id") Integer id, @RequestHeader String token) {
        if (!verifyUser(token)) return null;
        return travelRepository.averageFootprint(id);
    }

    @GetMapping(path="/total/{id}")
    public @ResponseBody Float getTotalFootprint(
            @PathVariable("id") Integer id, @RequestHeader String token) {
        if (!verifyUser(token)) return null;
        return travelRepository.totalFootprint(id);
    }
    @GetMapping(path="/worst/{id}")
    public @ResponseBody Float getWorstFootprint(
            @PathVariable("id") Integer id, @RequestHeader String token) {
        if (!verifyUser(token)) return null;
        return travelRepository.worstFootprint(id);
    }

    @GetMapping(path="/best/{id}")
    public @ResponseBody Float getBestFootprint(
            @PathVariable("id") Integer id, @RequestHeader String token) {
                if (!verifyUser(token)) return null;
        return travelRepository.bestFootprint(id);
    }

    public boolean verifyUser(String token) {
        return userDAO.verifyUser(token) != null;
    }
}