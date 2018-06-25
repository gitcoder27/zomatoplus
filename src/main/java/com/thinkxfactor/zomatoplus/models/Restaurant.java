package com.thinkxfactor.zomatoplus.models;

import java.io.Serializable;

public class Restaurant implements Serializable {
	private String resName;
	private long resNumber;
	private int rating;
	private String location;
	
	public Restaurant() {
		
	}
	
	public Restaurant(String resName, long resNumber, int rating, String location) {
		this.resName = resName;
		this.resNumber = resNumber;
		this.rating = rating;
		this.location = location;
	}
	
	public String getResName() {
		return resName;
	}
	public void setResName(String resName) {
		this.resName = resName;
	}
	public long getResNumber() {
		return resNumber;
	}
	public void setResNumber(long resNumber) {
		this.resNumber = resNumber;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	
}
