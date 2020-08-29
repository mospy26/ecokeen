package com.ecokeen.backend.crudRepositories;

import com.ecokeen.backend.model.Travel;
import com.ecokeen.backend.model.User;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TravelRepository extends CrudRepository<Travel, Integer> {
}