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

    @ManyToOne
    private User user;

    private Timestamp timestamp;

    private Integer quantity;

    public GroceryType getGroceryType() {
        return groceryType;
    }

    public void setGroceryType(GroceryType groceryType) {
        this.groceryType = groceryType;
    }

    public GroceryBrand getGroceryBrand() {
        return groceryBrand;
    }

    public void setGroceryBrand(GroceryBrand groceryBrand) {
        this.groceryBrand = groceryBrand;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
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

    public void setFootprint(Float footprint) {
        this.footprint = footprint;
    }


    private Float footprint;
}
