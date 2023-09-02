package com.cnrc.grh.repository;

import com.cnrc.grh.model.PosteTravail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PosteTravailRepository extends JpaRepository<PosteTravail, String> {
}
