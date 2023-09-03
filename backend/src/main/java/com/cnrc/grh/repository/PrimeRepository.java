package com.cnrc.grh.repository;


import com.cnrc.grh.model.Prime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PrimeRepository extends JpaRepository<Prime, String> {
}
