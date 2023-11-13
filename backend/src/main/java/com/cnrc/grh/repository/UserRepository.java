package com.cnrc.grh.repository;

import com.cnrc.grh.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
}
