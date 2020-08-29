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
}
