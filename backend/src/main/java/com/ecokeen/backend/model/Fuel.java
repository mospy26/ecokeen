package com.ecokeen.backend.model;

import javax.persistence.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Fuel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String type;

    private float carbonValue;

    @OneToMany(targetEntity = Travel.class, cascade = CascadeType.ALL)
    private List<Travel> travels = new ArrayList<>();

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public float getCarbonValue() {
        return carbonValue;
    }

    public void setCarbonValue(float carbonValue) {
        this.carbonValue = carbonValue;
    }

    public List<Travel> getTravels() {
        return travels;
    }

    public void setTravels(List<Travel> travels) {
        this.travels = travels;
    }

    public void addTravels(Travel travel) {
        travels.add(travel);
    }
}
