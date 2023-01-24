package learn.atliens.controller;

import learn.atliens.domain.UserResult;
import learn.atliens.domain.UserService;
import learn.atliens.model.User;
import learn.atliens.repo.UserRepo;
import learn.atliens.security.JwtConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/atliens/user")
public class UserController {
    private UserService service;

    private AuthenticationManager authenticationManager;

    private JwtConverter converter;

    public UserController(UserService service, AuthenticationManager authenticationManager, JwtConverter converter){
        this.converter = converter;
        this.authenticationManager = authenticationManager;
        this.service = service;
    }



    @GetMapping("/{username}")
    public ResponseEntity<User> findAll(@PathVariable String username){
        User user = (User) service.loadUserByUsername(username);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/create_account")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        UserResult result = service.add(user);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED); // 201
        } else {
            return new ResponseEntity<>(result.getErrors(), HttpStatus.BAD_REQUEST); // 400
        }
    }
}
