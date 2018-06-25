package com.thinkxfactor.zomatoplus.models;

import java.io.Serializable;

public class Item implements Serializable {
	private String foodName;
	private int foodPrice;
	public String getFoodName() {
		return foodName;
	}
	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}
	public int getFoodPrice() {
		return foodPrice;
	}
	public void setFoodPrice(int foodPrice) {
		this.foodPrice = foodPrice;
	}
	
}
