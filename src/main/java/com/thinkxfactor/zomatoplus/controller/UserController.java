package com.thinkxfactor.zomatoplus.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.thinkxfactor.zomatoplus.models.User;


@RestController
@RequestMapping("/user")
public class UserController {

	

//	@GetMapping("/login")
//	public User userLogin(@RequestParam("username") String username, @RequestParam("password") String password) {
//		User newUser = new User();
//		newUser.setUsername(username);
//		newUser.setPassword(password);
//		return newUser;
//	}
	
	@PostMapping("/login")
	public User userLogin(@RequestBody User user) {
		User usr = new User();
		usr.setUsername(user.getUsername());
		usr.setPassword(user.getPassword());
		return user;
	}

	@GetMapping("/all")
	public List<User> userList() {
		List<User> user = new ArrayList<>();
		User usr1, usr2, usr3;
		usr1 = new User("hello","world");
		usr2 = new User("jon","snow");
		usr3 = new User("ned","stark");
		user.add(usr1);
		user.add(usr2);
		user.add(usr3);
		return user;
	}
	
	@PostMapping("/create")
	public User getUser(@RequestBody User user) {
		System.out.println(user.toString());
		return user;
	}
	
	

}
