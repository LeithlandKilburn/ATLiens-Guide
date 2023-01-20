package learn.atliens.controller;
import learn.atliens.domain.Result;
import learn.atliens.domain.UserResult;
import learn.atliens.domain.UserService;
import learn.atliens.model.User;
import learn.atliens.repo.UserRepo;
import learn.atliens.security.JwtConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/atliens/user")
public class UserController {
    @Autowired
    private UserRepo repo;
    @Autowired
    private UserService service;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtConverter converter;


    @GetMapping
    public List<User> findAll(){
        return repo.findAll();
    }


    @GetMapping("/{username}")
    public ResponseEntity<User> findAll(@PathVariable String username){
        User user = repo.findByUsername(username);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody User user) {
        UserResult result = service.add(user);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED); // 201
        } else {
            return new ResponseEntity<>(result.getErrors(), HttpStatus.BAD_REQUEST); // 400
        }
    }
}
