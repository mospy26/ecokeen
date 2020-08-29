package com.ecokeen.backend.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Grocery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    private GroceryType groceryType;

    @ManyToOne
    private GroceryBrand groceryBrand;

    private Timestamp timestamp;

    private Integer quantity;

    @ManyToOne
    private User user;

    private Float footprint;
}
