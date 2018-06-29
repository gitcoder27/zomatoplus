package com.thinkxfactor.zomatoplus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thinkxfactor.zomatoplus.models.Item;

public interface ItemRepository extends JpaRepository<Item, Long>{
	List<Item> findByRestaurantName(String restaurant_name);
}
