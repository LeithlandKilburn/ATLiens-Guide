package learn.atliens.repo;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import learn.atliens.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class UserRepo {
    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    @Transactional
    public User add(User user){
        System.out.println("Hits save method");
        dynamoDBMapper.save(user);
        return user;
    }

    @Transactional
    public List<User> findAll(){
       return dynamoDBMapper.scan(User.class, new DynamoDBScanExpression());
    }

    @Transactional
    public User findByUsername(String username) {
        User foundUser = findAll().stream().filter(u -> u.getUsername().equals(username))
                .findFirst().orElse(null);
        return foundUser;
    }

    //TODO: Create update method to change user authorizations.

}
