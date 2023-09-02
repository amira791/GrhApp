package com.cnrc.grh.service;

import com.cnrc.grh.model.PosteTravail;
import com.cnrc.grh.repository.PosteTravailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PosteTravailService {
    private PosteTravailRepository posteTravailRepository;

    @Autowired

    public PosteTravailService(PosteTravailRepository posteTravailRepository) {
        this.posteTravailRepository = posteTravailRepository;
    }

    public List<PosteTravail> getPosteList() {
        return posteTravailRepository.findAll();
    }

    public Optional<PosteTravail> getPosteById(String id) {
        return posteTravailRepository.findById(id);
    }

    public PosteTravail CreatePoste(PosteTravail Pos) {
        return posteTravailRepository.save(Pos);
    }

    public PosteTravail updatePoste(String id, PosteTravail updatedPoste) {
        PosteTravail existingPoste = posteTravailRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("PosteTravail not found"));

        existingPoste.setPosteDesignation(updatedPoste.getPosteDesignation());
        existingPoste.setPosteDesignationAr(updatedPoste.getPosteDesignationAr());
        existingPoste.setNbPoste(updatedPoste.getNbPoste());
        existingPoste.setCodeNiveau(updatedPoste.getCodeNiveau());

        return posteTravailRepository.save(existingPoste);
    }

    public void deletePoste(String id) {
        posteTravailRepository.deleteById(id);
    }

}
