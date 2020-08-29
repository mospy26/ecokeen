package com.ecokeen.backend.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String password;

    private String name;

    private String email;

    @OneToMany(targetEntity = Grocery.class, cascade = CascadeType.ALL)
    private List<Grocery> groceries = new ArrayList<>();

    public User() {}
    
    public User(String name, String email, String password) {
        this.setName(name);
        this.setEmail(email);
        this.setPassword(password);
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
  
    @OneToMany(targetEntity = Travel.class, cascade = CascadeType.ALL)
    private List<Travel> travels = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void addTravel(Travel travel) {
        travels.add(travel);
    }

    public void addGroceries(Grocery grocery) {
        groceries.add(grocery);
    }
}
