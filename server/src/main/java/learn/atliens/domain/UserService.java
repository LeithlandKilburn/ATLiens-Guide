package learn.atliens.domain;

import learn.atliens.model.User;
import learn.atliens.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    public Result<User> add(User user){
        Result<User> result = new Result<>();

        System.out.println("Hits add service method");
        User inserted = repo.save(user);

        if (inserted == null) {
            result.addMessage(ActionStatus.INVALID, "insert failed");
        } else {
            result.setPayload(inserted);
        }
        return result;
    }
}
