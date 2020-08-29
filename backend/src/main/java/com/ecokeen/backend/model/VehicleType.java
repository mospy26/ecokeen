package com.ecokeen.backend.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class VehicleType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    @OneToMany
    private List<Travel> travels;

}
