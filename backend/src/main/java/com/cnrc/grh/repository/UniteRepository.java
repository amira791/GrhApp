package com.cnrc.grh.repository;

import com.cnrc.grh.model.Unite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniteRepository extends JpaRepository<Unite, String> {
}
