package learn.atliens.domain;

import learn.atliens.model.User;
import learn.atliens.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    public UserResult add(User user){
        System.out.println("Hits add service method");
        repo.save(user);
        UserResult result = new UserResult(user);
        return result;
    }
}
