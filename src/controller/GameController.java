package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import data.GameDAO;
import entities.Score;

@Controller

public class GameController {

	@Autowired
	private GameDAO dao;

	@ResponseBody
	@RequestMapping(value = "scores/allScores/{name}/{scoreValue}", method = RequestMethod.POST)
	public void addScore(@PathVariable("name") String name, @PathVariable("scoreValue") String scoreValue) {
		int scoreInt = Integer.parseInt(scoreValue);
		dao.addScore(name, scoreInt);

	}
	
	@ResponseBody
	@RequestMapping(value = "scores", method = RequestMethod.GET)
	public List<Score> scoreList() {
		return dao.getAllScores();
	}

}
