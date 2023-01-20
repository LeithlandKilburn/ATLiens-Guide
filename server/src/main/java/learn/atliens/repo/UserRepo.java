package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import learn.atliens.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class UserRepo {
    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public User save(User user){
        System.out.println("Hits save method");
        dynamoDBMapper.save(user);
        return user;
    }

    public List<User> findAll(){
       return dynamoDBMapper.scan(User.class, new DynamoDBScanExpression());
    }

}
