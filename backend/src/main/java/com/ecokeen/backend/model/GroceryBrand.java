package com.ecokeen.backend.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
public class GroceryBrand {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    @Transient
    @OneToMany(targetEntity = Grocery.class, cascade = CascadeType.ALL)
    private List<Grocery> groceries = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Grocery> getGrocery() {
        return groceries;
    }

    public void setGrocery(List<Grocery> grocery) {
        this.groceries = grocery;
    }

    public void addGrocery(Grocery grocery) {
        groceries.add(grocery);
    }
}
