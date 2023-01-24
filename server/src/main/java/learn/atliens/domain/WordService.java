package learn.atliens.domain;

import learn.atliens.model.User;
import learn.atliens.model.Word;
import learn.atliens.repo.WordFileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WordService {

    @Autowired
    private WordFileRepo wordFileRepo;

    public Result<Word> addWord(Word word){
        Result<Word> result = validate(word);

        if (!result.isSuccess()) {
            return result;
        }

        Word inserted = wordFileRepo.addWord(word);
        result.setPayload(inserted);
        System.out.println("Hits addWord service method!");
        return result;
    }

    public List<Word> findAllWords() {
        return wordFileRepo.findAllWords();
    }

    public Word findWordByName(String name) {
        return wordFileRepo.findWordByName(name);
    }

    public List<Word> findWordsByCategory(String category) {
        return wordFileRepo.findWordsByCategory(category);
    }

    public Result<Word> updateWord(String wordId, Word word) {
        Result<Word> result = validate(word);

        if (!result.isSuccess()) {
            return result;
        }

        String updateWord = wordFileRepo.updateWord(wordId, word);
        if (!updateWord.equalsIgnoreCase("Word Updated!")) {
            result.addMessage(ActionStatus.NOT_FOUND, "Word Id & word not found.");
        }
        return result;
    }

    public Result<Word> deleteWordById(String wordId) {
        Result<Word> result = new Result<>();
        String deletedWord = wordFileRepo.deleteWordById(wordId);
        if (!deletedWord.equalsIgnoreCase("Word Deleted!")) {
            result.addMessage(ActionStatus.NOT_FOUND, "Word Id not found.");
        }
        return result;
    }

    private Result<Word> validate (Word word) {
        Result<Word> result = new Result<>();

        System.out.println("validate word time.");

        if (word == null) {
            result.addMessage(ActionStatus.INVALID, "Word cannot be null.");
            return result;
        }

        if (isNullOrBlank(word.getName())) {
            result.addMessage(ActionStatus.INVALID, "Word name cannot be empty.");
        }

        if (isNullOrBlank(word.getDefinition())) {
            result.addMessage(ActionStatus.INVALID, "Word definition cannot be empty.");
        }

        if (isNullOrBlank(word.getExample())) {
            result.addMessage(ActionStatus.INVALID, "Word example cannot be empty.");
        }

        if (isNullOrBlank(word.getCategories())) {
            result.addMessage(ActionStatus.INVALID, "Word categories cannot be empty.");
        }

        if (word.getUseRating() < 0 || word.getUseRating() > 5) {
            result.addMessage(ActionStatus.INVALID, "Word useRatings is between 0 - 5.");
        }

        System.out.println("validate word ending.");

        return result;
    }

    private static boolean isNullOrBlank(String value) {
        return value == null || value.isBlank();
    }

}
