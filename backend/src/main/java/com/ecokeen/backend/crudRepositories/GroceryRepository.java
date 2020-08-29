package com.ecokeen.backend.crudRepositories;

import com.ecokeen.backend.model.Grocery;
import com.ecokeen.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;
import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface GroceryRepository extends JpaRepository<Grocery, Integer> {

    @Query(value = "SELECT * FROM Grocery WHERE user_id = :id " +
            "ORDER BY timestamp DESC LIMIT 10;",
    nativeQuery = true)
    List<Grocery> findLatest10(Integer id);

    @Query(value = "SELECT AVG(footprint) FROM Grocery WHERE user_id = :id",
        nativeQuery = true)
    Float averageFootprint(Integer id);

    @Query(value = "SELECT MAX(footprint) FROM Grocery WHERE user_id = :id",
            nativeQuery = true)
    Float worstFootprint(Integer id);

    @Query(value = "SELECT MIN(footprint) FROM Grocery WHERE user_id = :id",
            nativeQuery = true)
    Float bestFootprint(Integer id);

}