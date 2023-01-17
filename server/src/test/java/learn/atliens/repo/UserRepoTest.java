package learn.atliens.repo;

import static org.junit.jupiter.api.Assertions.*;
import learn.atliens.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ComponentScan("learn.atliens")
@SpringBootTest
class UserRepoTest {

    @Autowired
    UserRepo repo;

    @Test
    public void sampleTestCase() {
        User gosling = new User();
        gosling.setUsername("gosling");
        repo.save(gosling);

        User hoeller = new User();
        hoeller.setUsername("hoeller");
        repo.save(hoeller);

        List<User> result = repo.findAll();
        assertEquals(result.size(), 2);
        assertEquals(result.get(0), gosling);
    }

}