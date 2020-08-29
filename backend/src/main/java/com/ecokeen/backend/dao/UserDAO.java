package com.ecokeen.backend.dao;

import com.ecokeen.backend.crudRepositories.SecureUserRepository;
import com.ecokeen.backend.dao.SecurityUtils.JwtUtil;
import com.ecokeen.backend.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class UserDAO {
    
    @Autowired
    private SecureUserRepository secureUserRepository;

    public String authenticate(String email, String password) throws Exception {
        String encryptedPassword = new BCryptPasswordEncoder().encode(password);
        if (secureUserRepository.findByEmailAndPassword(email, encryptedPassword) != null) {
            return new JwtUtil().generateToken(email);
        }
        else throw new Exception("Incorrect login details!");
    }

    public boolean register(String name, String email, String password) {
        User user = secureUserRepository.save(new User(name, email, password));
        return user != null;
    }
}