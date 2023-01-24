package learn.atliens.controller;

import learn.atliens.domain.ActionStatus;
import learn.atliens.domain.ForumPostService;
import learn.atliens.domain.Result;
import learn.atliens.model.ForumPost;
import learn.atliens.model.Word;
import learn.atliens.repo.ForumPostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})

@RequestMapping("/atliens/forum")
public class ForumPostController {

    @Autowired
    private ForumPostService service;

    @GetMapping
    public ResponseEntity<List<ForumPost>> findAllPosts() {
        System.out.println("Hit controller");
        return new ResponseEntity<>(service.findAllPosts(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ForumPost> addWord(@RequestBody ForumPost post) {
        Result<ForumPost> result = service.addForumPost(post);
        return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
    }

    /*public List<Word> findWordsByCategory(String category) {
        List<Word> all = findAllPosts();
        return all.stream()
                .filter(word -> word.getCategories().contains(category))
                .collect(Collectors.toList());
    }*/

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWordById(@PathVariable("id") String forumId) {
        Result<ForumPost> result = service.deletePostById(forumId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
