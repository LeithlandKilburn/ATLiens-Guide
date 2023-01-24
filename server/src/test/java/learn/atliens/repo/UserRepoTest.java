package learn.atliens.repo;

import static org.junit.jupiter.api.Assertions.*;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.model.*;
import learn.atliens.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.test.context.ContextConfiguration;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ComponentScan("learn.atliens")
@SpringBootTest
class UserRepoTest {

    private UserRepo repo;

    private DynamoDBMapper dynamoDBMapper;

    public UserRepoTest (UserRepo repo, DynamoDBMapper dynamoDBMapper) {
        this.repo = repo;
        this.dynamoDBMapper = dynamoDBMapper;
    }
    @Test
    public void findAll() {
//        User user1 = new User();
//        user1.setUsername("Cody Banks");
//        dynamoDBMapper.save(user1);
//
//        User user2 = new User();
//        user1.setUsername("Hillary Duff");
//        dynamoDBMapper.save(user2);
//
        List<User> result = repo.findAll();
        System.out.println(result.get(0));
        assertEquals(2, result.size());
    }

    @Test
    public void shouldFindCodyBanks() {
        User result = repo.findByUsername("Cody Banks");
        assertEquals(result.getUsername(), "Cody Banks");
    }

}