package finalproject.onlinetech.backend.services;

import finalproject.onlinetech.backend.domain.User;
import finalproject.onlinetech.backend.exceptions.UsernameAlreadyExistException;
import finalproject.onlinetech.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser) {

        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));

            newUser.setUsername(newUser.getUsername());
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        }
        catch (Exception e) {
            throw new UsernameAlreadyExistException("Username " +newUser.getUsername()+ " already exist.");
        }


    }

}
