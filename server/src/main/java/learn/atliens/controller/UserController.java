package learn.atliens.controller;
import learn.atliens.model.User;
import learn.atliens.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/atliens")

public class UserController {
    @Autowired
    private UserRepo repo;

    @GetMapping
    public List<User> findAll(){
        return repo.findAll();
    }
}
