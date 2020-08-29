package com.ecokeen.backend.dao;

import java.sql.Timestamp;
import java.util.Date;

import com.ecokeen.backend.crudRepositories.FuelRepository;
import com.ecokeen.backend.crudRepositories.SecureUserRepository;
import com.ecokeen.backend.crudRepositories.TravelRepository;
import com.ecokeen.backend.crudRepositories.VehicleBrandRepository;
import com.ecokeen.backend.crudRepositories.VehicleTypeRepository;
import com.ecokeen.backend.model.Fuel;
import com.ecokeen.backend.model.Travel;
import com.ecokeen.backend.model.User;
import com.ecokeen.backend.model.VehicleBrand;
import com.ecokeen.backend.model.VehicleType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TravelDAO {

    @Autowired
    private SecureUserRepository secureUserRepository;

    @Autowired
    private TravelRepository travelRepository;

    @Autowired
    private VehicleTypeRepository vehicleTypeRepository;

    @Autowired
    private VehicleBrandRepository vehicleBrandRepository;

    @Autowired 
    private FuelRepository fuelRepository;

    public boolean addTravelHistory(int id,
    Float distance,
    String brand,
    String fuel,
    String vehicle) {

        User user = secureUserRepository.findById(id).orElse(null);
        if (user == null) {
            return false;
        }

        Travel g = new Travel();
        g.setTimestamp(new Timestamp(new Date().getTime()));
        g.setDistance(distance);
        g.setFootprint(setFootprint(distance));
        g.setUser(user);
        travelRepository.save(g);
        
        VehicleType vt = new VehicleType();
        vt.setName(brand);
        vehicleTypeRepository.save(vt);

        VehicleBrand vb = new VehicleBrand();
        vb.setName(brand);
        vehicleBrandRepository.save(vb);

        Fuel f = new Fuel();
        f.setCarbonValue(420);
        f.setType(fuel);
        fuelRepository.save(f);
        
        g.setFuel(f);
        g.setVehicleBrand(vb);
        g.setVehicleType(vt);
        travelRepository.save(g);
        
        return true;
    }

    public Float setFootprint(Float distance)  {
        return (float) 0.7 * distance;
        // TO CHANGE TO A PROPER FORMULA OF SOME SORT 
	}
	
	public Iterable<Travel> getHistory(Integer id) {
        return travelRepository.findLatest10(id);
    }

    public Float getTravelAverageFootprint(Integer id) {
        return travelRepository.averageFootprint(id);
    }

    public Float getTravelBestFootprint(Integer id) {
        return travelRepository.bestFootprint(id);
    }

    public Float getTravelWorstFootprint(Integer id) {
        return travelRepository.worstFootprint(id);
    }

}
