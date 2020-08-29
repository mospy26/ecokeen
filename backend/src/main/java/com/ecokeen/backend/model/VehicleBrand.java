package com.ecokeen.backend.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class VehicleBrand {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    @OneToMany(targetEntity = Travel.class, cascade = CascadeType.ALL)
    private List<Travel> travels = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
