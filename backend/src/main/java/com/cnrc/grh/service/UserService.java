package com.cnrc.grh.service;

import com.cnrc.grh.Request.AlreadyExistsException;
import com.cnrc.grh.model.User;
import com.cnrc.grh.model.dossierEmploye.Motifabs;
import com.cnrc.grh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    // todo remove all the service cuz we already have the UserDEtailsService user
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    public User getUser(String id) {
        return this.userRepository.findById(id).orElseThrow(() -> new RuntimeException("Contrat non trouvé"));
    }

    public void createUser(User user) {
        if(userRepository.existsById(user.getUsername())){
            throw new AlreadyExistsException("L'utilisateur avec l'id :" + user.getUsername() +"existe deja");
        }
        else {
            // todo hash the password before saving it , maybe we cannot restore it if we hash it
            userRepository.save(user);
        }
    }

    // todo maybe i should create a dedicated method forgetPassword
    public void updateUser(String id, User updatedUtil) {
        if (userRepository.existsById(id)){
            User util = getUser(id);
            util.setActif(updatedUtil.getActif());
            util.setType(updatedUtil.getType());
            util.setFonction(updatedUtil.getFonction());
            userRepository.save(util);
        }else{
            throw new RuntimeException("user non trouve");
        }

    }
}

