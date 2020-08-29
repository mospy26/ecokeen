package com.ecokeen.backend.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Travel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    private VehicleType vehicleType;

    @ManyToOne
    private VehicleBrand vehicleBrand;

    @ManyToOne
    private Fuel fuel;

    private Timestamp timestamp;

    private Float distance;

    @ManyToOne
    private User user;

    private Float footprint;

    public VehicleType getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(VehicleType vehicleType) {
        this.vehicleType = vehicleType;
    }

    public VehicleBrand getVehicleBrand() {
        return vehicleBrand;
    }

    public void setVehicleBrand(VehicleBrand vehicleBrand) {
        this.vehicleBrand = vehicleBrand;
    }

    public Fuel getFuel() {
        return fuel;
    }

    public void setFuel(Fuel fuel) {
        this.fuel = fuel;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp2) {
        this.timestamp = timestamp2;
    }

    public Float getDistance() {
        return distance;
    }

    public void setDistance(Float distance2) {
        this.distance = distance2;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Float getFootprint() {
        return footprint;
    }

    public void setFootprint(float d) {
        this.footprint = d;
    }
}
