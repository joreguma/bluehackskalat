package com.bluehacks.model;

import java.util.ArrayList;

public class Beneficiary {
	private String name;
	private String description;
	//directory
	private String pictureDirectory;
	private String videoURL;

	private long goalMoney;
	private long currentMoney;
	
	//private ArrayList<Miscellaneous> miscNeeded;
	public Beneficiary() {
		currentMoney = 0;
	}
	
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPictureDirectory() {
		return pictureDirectory;
	}

	public void setPictureDirectory(String pictureDirectory) {
		this.pictureDirectory = pictureDirectory;
	}

	public String getVideoURL() {
		return videoURL;
	}

	public void setVideoURL(String videoURL) {
		this.videoURL = videoURL;
	}

	public long getGoalMoney() {
		return goalMoney;
	}

	public void setGoalMoney(long goalMoney) {
		this.goalMoney = goalMoney;
	}

	public long getCurrentMoney() {
		return currentMoney;
	}

	public void setCurrentMoney(long goalCurrent) {
		this.currentMoney = goalCurrent;
	}
	
	public void addCurrentMoney(long moneyToAdd) {
		this.currentMoney += moneyToAdd;
	}

	public void deductCurrentMoney(long moneyToRemove) {
		this.currentMoney -= moneyToRemove;
	}
	
	
	
//	public ArrayList<Miscellaneous> getMiscNeeded() {
//		return miscNeeded;
//	}
//
//	public void setMiscNeeded(ArrayList<Miscellaneous> miscNeeded) {
//		this.miscNeeded = miscNeeded;
//	}
	
	
	
}
