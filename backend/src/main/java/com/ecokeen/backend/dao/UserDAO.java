package com.ecokeen.backend.dao;

import com.ecokeen.backend.crudRepositories.SecureUserRepository;
import com.ecokeen.backend.dao.SecurityUtils.JwtUtil;
import com.ecokeen.backend.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserDAO {
    
    @Autowired
    private SecureUserRepository secureUserRepository;

    public String authenticate(String email, String password) {
        System.out.println("jajhajha");
        User user = secureUserRepository.findByEmail(email);
        if (user == null) return "Incorrect password details";
        if (BCrypt.checkpw(password, user.getPassword())) return new JwtUtil().generateToken(email);
        else return "Incorrect login details!";
    }

    public boolean register(String name, String email, String password) {
        User user = secureUserRepository.save(new User(name, email, password));
        return user != null;
    }

    public User verifyUser(String token) {
        JwtUtil util = new JwtUtil();
        User user = secureUserRepository.findByEmail(util.getUsernameFromToken(token));
        if (user == null) return null;
        return util.validateToken(token, user.getEmail()) ? user : null;
    }
}