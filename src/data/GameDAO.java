package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import entities.Score;

@Component
@Transactional
public class GameDAO {
	
	//private Map<Integer, Score> scoreMap = new HashMap<Integer, Score>();
	
	@PersistenceContext
	private EntityManager em;
	
	public int getScore(int id) {
		Score score = em.find(Score.class, id);
		int returnedScore = score.getScoreValue();
		return returnedScore;
	}
	
	public List<Score> getAllScores() {
		String search = "select s from Score s";
		List<Score> allScores = em.createQuery(search, Score.class).getResultList();
		System.out.print("These are all my scores: " + allScores);
		return allScores;
	}
	
	public void addScore(String name, int score) {
		System.out.println("in addscore dao ");
		//List<Score> scores = getAllScores();
		Score newScore = new Score();
		newScore.setName(name);
		newScore.setScoreValue(score);
		em.persist(newScore);
		
	}
	
	

}
