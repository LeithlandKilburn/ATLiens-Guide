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
import org.springframework.test.context.ContextConfiguration;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ComponentScan("learn.atliens")
@SpringBootTest
class UserRepoTest {

    @Autowired
    private UserRepo repo;

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    //@Test
//    public void sampleTestCase() {
//        User gosling = new User("gosling", "pass", true, List.of("ADMIN"));
//        //gosling.setUserId("1");
//        dynamoDBMapper.save(gosling);
//
//        User hoeller = new User("hoeller", "pass", true, List.of("ADMIN"));
//        //hoeller.setUserId("2");
//        dynamoDBMapper.save(hoeller);
//
//        List<User> result = repo.findAll();
//        assertEquals(result.size(), 2);
//        assertEquals(result.get(0), gosling);
//    }

}