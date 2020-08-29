package com.ecokeen.backend.startup;

import com.ecokeen.backend.crudRepositories.*;
import com.ecokeen.backend.model.*;
import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

@Component
public class DemoData {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroceryBrandRepository groceryBrandRepository;

    @Autowired
    private GroceryRepository groceryRepository;

    @Autowired
    private GroceryTypeRepository groceryTypeRepository;

    @Autowired
    private TravelRepository travelRepository;

    @Autowired
    private VehicleBrandRepository vehicleBrandRepository;

    @Autowired
    private VehicleTypeRepository vehicleTypeRepository;

    @Autowired
    private FuelRepository fuelRepository;


    @EventListener
    public void appReady(ApplicationReadyEvent event) {
//        deleteAll();
        onlyUsers();
//        withRelationship();
    }

    public void deleteAll() {
        userRepository.deleteAll(userRepository.findAll());
        groceryBrandRepository.deleteAll(groceryBrandRepository.findAll());
        groceryRepository.deleteAll(groceryRepository.findAll());
        groceryTypeRepository.deleteAll(groceryTypeRepository.findAll());
        travelRepository.deleteAll(travelRepository.findAll());
        vehicleBrandRepository.deleteAll(vehicleBrandRepository.findAll());
        vehicleTypeRepository.deleteAll(vehicleTypeRepository.findAll());
        fuelRepository.deleteAll(fuelRepository.findAll());
    }

    public void onlyUsers() {
        for (int i = 0; i < 10; i++) {
            User u = new User();
            u.setName("User " + i);
            u.setEmail(String.format("User%d@gmail.com", i));
            u.setPassword("password");
            userRepository.save(u);
        }
    }

    public void withRelationship() {
        int numUsers = 10;

        /*
        FIELDS:

        USER: id, email, name, password
        GROCERY: id, footprint, quantity, timestamp, grocery_brand_id, grocery_type_id, user_id
        GROCERY_TYPE: id, name
        GROCERY_BRAND: id, name
        TRAVEL: id, distance, footprint, timestamp, fuel_id, user_id, vehicle_brand_id, vehicle_type_id
        VEHICLE_TYPE: id, name
        VEHICLE_BRAND: id, name
        FUEL: id, carbon_value, type
        */
        for (int i = 0; i < 10; i++) {
            User u = new User();
            u.setName("User " + i);
            u.setEmail(String.format("User%d@gmail.com", i));
            u.setPassword("password");
            userRepository.save(u);

            Grocery g = new Grocery();
            g.setQuantity(i);
            double foot = i + 0.5;
            g.setFootprint((float) foot);
            g.setTimestamp(new Timestamp(new Date().getTime()));
            g.setUser(u);
            u.addGroceries(g);
            groceryRepository.save(g);
            userRepository.save(u);

            GroceryType gt = new GroceryType();
            gt.setName(String.format("Grocery Type %d", i));
            groceryTypeRepository.save(gt);
            g.setGroceryType(gt);
            gt.addGrocery(g);
            groceryTypeRepository.save(gt);
            groceryRepository.save(g);

            GroceryBrand gb = new GroceryBrand();
            gb.setName(String.format("Grocery Brand %d", i));
            groceryBrandRepository.save(gb);
            g.setGroceryBrand(gb);
            gb.addGrocery(g);
            groceryBrandRepository.save(gb);
            groceryRepository.save(g);

            Travel t = new Travel();
            t.setTimestamp(new Timestamp(new Date().getTime()));
            t.setDistance((float) foot);
            t.setFootprint((float) foot);
            travelRepository.save(t);
            t.setUser(u);
            travelRepository.save(t);

            VehicleType vt = new VehicleType();
            vt.setName(String.format("Vehicle Type %d", i));
            vehicleTypeRepository.save(vt);
            vt.addTravels(t);
            t.setVehicleType(vt);
            travelRepository.save(t);
            vehicleTypeRepository.save(vt); // Might be redundant not sure

            VehicleBrand vb = new VehicleBrand();
            vb.setName(String.format("Vehicle Brand %d", i));
            vehicleBrandRepository.save(vb);
            vb.addTravels(t);
            t.setVehicleBrand(vb);
            vehicleBrandRepository.save(vb);
            travelRepository.save(t);

            Fuel f = new Fuel();
            f.setType(String.format("Fuel Type %d", i));
            fuelRepository.save(f);
            f.addTravels(t);
            t.setFuel(f);
            fuelRepository.save(f);
            travelRepository.save(t);
        }
    }

    public void noRelationshipInitialization() {
        int numUsers = 10;
        // Intialize Users
            ArrayList<User> users = new ArrayList<User>();
            for (int i = 0; i < numUsers; i++) {
                User u = new User();
                u.setName(String.format("User %d", i));
                u.setPassword("password");
                u.setEmail(String.format("user%d@gmail.com", i));
                users.add(u);
            }
            for (User u : users) {
                userRepository.save(u);
            }

            // Initialize Grocery Types
            int numGroceryType = 5;
            ArrayList<GroceryType> gtList = new ArrayList<>();
            for (int i = 0; i < numGroceryType; i++) {
                gtList.add(new GroceryType());
            }
            gtList.get(0).setName("Chips");
            gtList.get(1).setName("Meat");
            gtList.get(2).setName("Milk");
            gtList.get(3).setName("Toiletries");
            gtList.get(4).setName("Cleaning Supplies");
            for (GroceryType gt : gtList) {
                groceryTypeRepository.save(gt);
            }

            // Initialize Grocery Brand
            int numGroceryBrand = 3;
            ArrayList<GroceryBrand> gbList = new ArrayList<>();
            for (int i = 0; i < numGroceryBrand; i++) {
                gbList.add(new GroceryBrand());
            }
            gbList.get(0).setName("Coles");
            gbList.get(1).setName("Woolworths");
            gbList.get(2).setName("Aldi");
            for (GroceryBrand gb : gbList) {
                groceryBrandRepository.save(gb);
            }

            // Initialize Travel
            int numTravel = 5;
            ArrayList<Travel> travelList = new ArrayList<>();
            for (int i = 0; i < numTravel; i++) {
                Travel t = new Travel();
                t.setTimestamp(new Timestamp(new Date().getTime()));
                double fd = i + 1 + 0.5;
                t.setFootprint((float) fd);
                t.setDistance((float) fd);
                travelList.add(t);
            }
            for (Travel t : travelList) {
                travelRepository.save(t);
            }

            // Initialize Groceries
            int numGroceries = 5;
            ArrayList<Grocery> groceryList = new ArrayList<>();
            for (int i = 0; i < numGroceries; i++) {
                Grocery g = new Grocery();
                double fd = i + 1 + 0.5;
                g.setFootprint((float) fd);
                g.setQuantity(i+1);
                g.setTimestamp(new Timestamp(new Date().getTime()));
                groceryList.add(g);
            }
            for (Grocery g : groceryList) {
                groceryRepository.save(g);
            }

            // Initialize Vehicle Type
            int numVehicleType = 2;
            ArrayList<VehicleType> vehicleTypesList = new ArrayList<>();
            for (int i = 0; i < numVehicleType; i++) {
                VehicleType vt = new VehicleType();
                vehicleTypesList.add(vt);
            }
            vehicleTypesList.get(0).setName("Car");
            vehicleTypesList.get(1).setName("Train");
            for (VehicleType vt : vehicleTypesList) {
                vehicleTypeRepository.save(vt);
            }

            // Initialize Vehicle Brand
            int numVehicleBrand = 2;
            ArrayList<VehicleBrand> vehicleBrandList = new ArrayList<>();
            for (int i = 0; i < numVehicleBrand ; i++) {
                VehicleBrand vb = new VehicleBrand();
                vehicleBrandList.add(vb);
            }
            vehicleBrandList.get(0).setName("Toyota");
            vehicleBrandList.get(1).setName("Mitsubishi");
            for (VehicleBrand vb : vehicleBrandList) {
                vehicleBrandRepository.save(vb);
            }

            // Initialize Fuel
            int numFuel = 3;
            ArrayList<Fuel> fuelList = new ArrayList<>();
            for (int i = 0; i < numFuel; i++) {
                Fuel f = new Fuel();
                double cv = i + 0.5;
                f.setCarbonValue((float) cv);
                fuelList.add(f);
            }
            fuelList.get(0).setType("Unleaded 91");
            fuelList.get(1).setType("Unleaded 98");
            fuelList.get(2).setType("Petrol");
            for (Fuel f : fuelList) {
                fuelRepository.save(f);
            }
        }

    }
