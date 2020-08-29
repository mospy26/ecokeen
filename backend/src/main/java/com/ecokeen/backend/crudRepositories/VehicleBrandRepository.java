package com.ecokeen.backend.crudRepositories;

import com.ecokeen.backend.model.Grocery;
import com.ecokeen.backend.model.VehicleBrand;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface VehicleBrandRepository extends CrudRepository<VehicleBrand, Integer> {
}