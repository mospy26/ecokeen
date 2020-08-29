package com.ecokeen.backend.crudRepositories;

import com.ecokeen.backend.model.GroceryBrand;
import com.ecokeen.backend.model.VehicleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface VehicleTypeRepository extends JpaRepository<VehicleType, Integer> {
}