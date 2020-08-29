package com.ecokeen.backend.model;

import javax.persistence.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
public class Fuel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String type;

    private float carbonValue;

    @OneToMany
    private List<Travel> travels;
}
