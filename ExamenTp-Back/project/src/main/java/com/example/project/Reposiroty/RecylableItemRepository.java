package com.example.project.Reposiroty;

import com.example.project.Entity.RecyclableItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface RecylableItemRepository extends JpaRepository<RecyclableItem, Long> {

   public List<RecyclableItem> findByRecycledDateIsNull();
}
