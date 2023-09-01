package com.cnrc.grh.repository;


import com.cnrc.grh.model.Collectif;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectifRepository extends JpaRepository<Collectif, String> {
}
