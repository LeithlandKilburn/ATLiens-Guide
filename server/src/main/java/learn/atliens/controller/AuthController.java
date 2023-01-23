package learn.atliens.controller;

import learn.atliens.domain.UserService;
import learn.atliens.model.User;
import learn.atliens.security.JwtConverter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/atliens")
public class AuthController {


    private final AuthenticationManager authenticationManager;
    private final JwtConverter converter;
    private final UserService userService;

    public AuthController(AuthenticationManager authenticationManager,
                          JwtConverter converter,
                          UserService userService) {
        this.authenticationManager = authenticationManager;
        this.converter = converter;
        this.userService = userService;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(@RequestBody Map<String, String> credentials) {

//        Client submits an auth request containing credentials to a service.
//        The service uses the credentials to authenticate and authorize.
//                On success, the service generates a JWT and adds it to the HTTP response.
//                For each subsequent service call, the client includes the JWT.
//        The service uses the token to identify the user and what they're allowed to do per request.

        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(credentials.get("username"), credentials.get("password"));

        //Ensure user exists and get auth roles.
        try {
            Authentication authentication = authenticationManager.authenticate(authToken);
            if (authentication.isAuthenticated()) {
                HashMap<String, String> map = new HashMap<>();
                String jwtToken = converter.getTokenFromUser((User)authentication.getPrincipal());
                System.out.println((User)authentication.getPrincipal());
                User user = (User)authentication.getPrincipal();

                map.put("jwt_token", jwtToken);
                map.put("user", String.valueOf(user));

                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (AuthenticationException ex) {
            ex.printStackTrace();
        }
        return new ResponseEntity<>( HttpStatus.FORBIDDEN);
    }

    @PostMapping("/refresh_token")
    public ResponseEntity<Map<String, String>> refreshToken(@AuthenticationPrincipal User user) {
        String jwtToken = converter.getTokenFromUser(user);

        HashMap<String, String> map = new HashMap<>();
        map.put("jwt_token", jwtToken);

        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}
