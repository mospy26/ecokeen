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

    @OneToMany
    private List<Grocery> grocery;

    @OneToMany
    private List<Travel> travel;

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
}
