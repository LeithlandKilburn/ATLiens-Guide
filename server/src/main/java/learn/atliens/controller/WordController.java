package learn.atliens.controller;

import learn.atliens.domain.Result;
import learn.atliens.domain.WordService;
import learn.atliens.model.Word;
import learn.atliens.repo.WordFileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/atliens")
public class WordController {

    @Autowired
    private WordFileRepo wordFileRepo;

    @Autowired
    private WordService wordService;

    @PostMapping
    public ResponseEntity<Word> addWord(@RequestBody Word word) {
        Result<Word> result = wordService.addWord(word);
        return new ResponseEntity<>(result.getPayload(), getStatus(result, HttpStatus.CREATED));
    }

    @GetMapping
    public List<Word> findAllWords() {
        return wordService.findAllWords();
    }

    @GetMapping("/word/{name}")
    public ResponseEntity<Word> findWordByName(@PathVariable String name) {
        Word expectedWord = wordService.findWordByName(name);
        if (expectedWord == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(expectedWord);
    }

    private HttpStatus getStatus(Result<Word> result, HttpStatus statusDefault) {
        switch (result.getStatus()) {
            case INVALID:
                return HttpStatus.PRECONDITION_FAILED;
            case DUPLICATE:
                return HttpStatus.FORBIDDEN;
            case NOT_FOUND:
                return HttpStatus.NOT_FOUND;
        }
        return statusDefault;
    }
}
