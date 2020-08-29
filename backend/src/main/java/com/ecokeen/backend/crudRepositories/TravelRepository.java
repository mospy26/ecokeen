package com.ecokeen.backend.crudRepositories;

import java.util.List;

import com.ecokeen.backend.model.Travel;
import com.ecokeen.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TravelRepository extends JpaRepository<Travel, Integer> {
    @Query(value="SELECT * from travel WHERE user_id = :id ORDER BY timestamp DESC LIMIT 10", nativeQuery=true)
    List<Travel> findLatest10(Integer id);

    @Query(value="SELECT AVG(footprint) from travel WHERE user_id = :id", nativeQuery=true)
    Float averageFootprint(Integer id);

    @Query(value="SELECT SUM(footprint) from travel WHERE user_id = :id", nativeQuery=true)
    Float totalFootprint(Integer id);

    @Query(value="SELECT MIN(footprint) from travel WHERE user_id = :id", nativeQuery=true)
    Float worstFootprint(Integer id);

    @Query(value="SELECT MIN(footprint) from travel WHERE user_id = :id", nativeQuery=true)
    Float bestFootprint(Integer id);
}