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

    public String updateWord(String wordId, Word word) {
//        Result<Word> result = new Result<>();
        System.out.println("Hits update word service method");

        return wordFileRepo.updateWord(wordId, word);

    }

    public String deleteWordById(String wordId) {
        return wordFileRepo.deleteWordById(wordId);
    }

}
