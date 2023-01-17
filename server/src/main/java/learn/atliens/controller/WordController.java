package learn.atliens.controller;

import learn.atliens.model.Word;
import learn.atliens.repo.WordFileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/words")
public class WordController {

    @Autowired
    private WordFileRepo wordFileRepo;

    @PostMapping
    public Word addWord(@RequestBody Word word){
        return wordFileRepo.addWord(word);
    }

    @GetMapping
    public List<Word> findAllWords(){
        return wordFileRepo.findAllWords();
    }

}
