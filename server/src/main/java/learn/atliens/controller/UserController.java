package learn.atliens.controller;
import learn.atliens.domain.UserResult;
import learn.atliens.domain.UserService;
import learn.atliens.model.User;
import learn.atliens.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/atliens")

public class UserController {
    @Autowired
    private UserRepo repo;

    @Autowired
    private UserService service;

    @GetMapping
    public List<User> findAll(){
        return repo.findAll();
    }

    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody User user) {
        UserResult result = service.add(user);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getUser(), HttpStatus.CREATED); // 201
        } else {
            return new ResponseEntity<>(result.getErrors(), HttpStatus.BAD_REQUEST); // 400
        }
    }
}
