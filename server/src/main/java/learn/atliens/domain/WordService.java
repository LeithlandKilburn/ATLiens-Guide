package learn.atliens.domain;

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
        Result<Word> result = new Result<>();

        System.out.println("Hits add word service method");

        Word inserted = wordFileRepo.addWord(word);

        if (inserted == null) {
            result.addMessage(ActionStatus.INVALID, "insert failed");
        } else {
            result.setPayload(inserted);
        }

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
        Result<Word> result = new Result<>();

        if (result.getStatus() != ActionStatus.SUCCESS) {
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

}
