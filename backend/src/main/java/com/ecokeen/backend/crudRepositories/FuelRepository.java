package com.ecokeen.backend.crudRepositories;

import com.ecokeen.backend.model.Fuel;
import com.ecokeen.backend.model.Grocery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete


// Integer represents the primary key 
public interface FuelRepository extends JpaRepository<Fuel, Integer> {
}