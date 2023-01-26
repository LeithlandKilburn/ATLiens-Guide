package learn.atliens.domain;

import learn.atliens.model.User;
import learn.atliens.repo.UserRepo;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserDetailsService {

    private final PasswordEncoder passwordEncoder;

    private final UserRepo repo;

    public UserService(PasswordEncoder passwordEncoder, UserRepo repo) {
        this.passwordEncoder = passwordEncoder;
        this.repo = repo;
        //makeUsers();
    }

    public UserResult add(User user){
        System.out.println("Hits add service method");

        UserResult result = validate(user);
        if (!result.isSuccess())
        {
            return result;
        }

        user.setPassword(passwordEncoder.encode(user.getPassword())); //Create password hash.
        try {
            user.setAuthorities(List.of(new SimpleGrantedAuthority("USER")));
            User newUser = repo.add(user);
            result.setPayload(newUser);
        } catch (DuplicateKeyException e) {
            result.addMessage("The provided username already exists");
        }
        return result;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repo.findByUsername(username);
        if (user == null || !user.isEnabled()) {
            throw new UsernameNotFoundException(String.format("%s not found", username));
        }
        return user;
    }

    private UserResult validate (User user) {
        UserResult result =  new UserResult();

        if (user.getUsername().isBlank()) {
            result.addMessage("Must enter a username");
        }
        if (user.getPassword().isBlank()){
            result.addMessage("Must enter a username");
        }
        if (user.getAuthorities() == null) {
            result.addMessage("Must enter a username");
        }

        List<User> existingUsers = repo.findAll();

        if (existingUsers != null) {
            for (int i = 0; i < existingUsers.size(); i++)
            {
                if (user.getUsername().equals(existingUsers.get(i).getUsername())){
                    result.addMessage("This username already exists");
                }
            }
        }
        return result;
    }

}
