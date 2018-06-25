package com.thinkxfactor.zomatoplus.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thinkxfactor.zomatoplus.models.Item;
import com.thinkxfactor.zomatoplus.models.Restaurant;

@RestController
@RequestMapping("/restaurant")
public class RestaurantController {
	
	public Restaurant tempRes;
	
	@PostMapping("/create")
	public Restaurant createRes(@RequestBody Restaurant res) {
		Restaurant newRes = new Restaurant();
		newRes.setResName(res.getResName());
		newRes.setResNumber(res.getResNumber());
		newRes.setLocation(res.getLocation());
		newRes.setRating(res.getRating());
		tempRes = newRes;
		return newRes;
	}
	
	@GetMapping("/getall")
	public Restaurant getAllRes() {
		return tempRes;
	}
	
	@PostMapping("/additem")
	public Item addItem(@RequestBody Item item) {
		Item food = new Item();
		food.setFoodName(item.getFoodName());
		food.setFoodPrice(item.getFoodPrice());
		return food;
	}
}
