package com.ecokeen.backend.dao;

import com.ecokeen.backend.crudRepositories.GroceryBrandRepository;
import com.ecokeen.backend.crudRepositories.GroceryRepository;
import com.ecokeen.backend.crudRepositories.GroceryTypeRepository;
import com.ecokeen.backend.crudRepositories.UserRepository;
import com.ecokeen.backend.model.Grocery;
import com.ecokeen.backend.model.GroceryBrand;
import com.ecokeen.backend.model.GroceryType;
import com.ecokeen.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.sql.Timestamp;

@Service
public class GroceryDAO {
    @Autowired
    private GroceryRepository groceryRepository;

    @Autowired
    private GroceryTypeRepository groceryTypeRepository;
    
    @Autowired
    private GroceryBrandRepository groceryBrandRepository;

    @Autowired
    private UserRepository userRepository;

    public boolean addGroceryHistory(String name,
                                     Integer quantity,
                                     String product,
                                     Integer id) {

        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return false;
        }

        Grocery g = new Grocery();
        g.setTimestamp(new Timestamp(new Date().getTime()));
        g.setQuantity(quantity);
        g.setFootprint(calculateGroceryFootprint(quantity));
        g.setUser(user);
        groceryRepository.save(g);

        GroceryType gt = new GroceryType();
        gt.setName(product);
        g.setGroceryType(gt);
        groceryTypeRepository.save(gt);
        groceryRepository.save(g);

        GroceryBrand gb = new GroceryBrand();
        gb.setName(name);
        gb.addGrocery(g);
        g.setGroceryBrand(gb);
        groceryBrandRepository.save(gb);
        groceryRepository.save(g);

        return true;
    }

    public float calculateGroceryFootprint(Integer quantity) {
        // Find out
        return 10 * quantity;
    }


    public Iterable<Grocery> getHistory(Integer id) {
        return groceryRepository.findLatest10(id);
    }

    public Float getGroceryAverageFootprint(Integer id) {
        return groceryRepository.averageFootprint(id);
    }

    public Float getGroceryBestFootprint(Integer id) {
        return groceryRepository.bestFootprint(id);
    }

    public Float getGroceryWorstFootprint(Integer id) {
        return groceryRepository.worstFootprint(id);
    }
}