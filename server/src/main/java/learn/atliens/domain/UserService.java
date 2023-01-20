package learn.atliens.domain;

import learn.atliens.model.User;
import learn.atliens.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

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
        user.setPassword(passwordEncoder.encode(user.getPassword())); //Create password hash.
        try {
            user.setAuthorities(List.of(new SimpleGrantedAuthority("ADMIN")));
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
        return new UserResult();
    }

}
